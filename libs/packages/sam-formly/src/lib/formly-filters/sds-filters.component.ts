import {
  Component, Input, Output, Inject,
  ChangeDetectionStrategy, ChangeDetectorRef,
  EventEmitter, Optional, OnInit
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { Subject } from 'rxjs';
import { SDSFormlyUpdateComunicationService } from './service/sds-filters-comunication.service';
import { pairwise } from 'rxjs/operators';
import { Router, ActivatedRoute, } from '@angular/router';
import * as qs from 'qs';
import {
  SdsDialogService,
  SdsDialogRef,
  SDS_DIALOG_DATA
} from '@gsa-sam/components';
import { analyzeAndValidateNgModules } from '@angular/compiler';


@Component({
  selector: 'sds-dialog-sample-data',
  templateUrl: 'sds-more-filters.html'
})
export class SdsAdvancedFilterDialog {
  
  constructor(
    public dialogRef: SdsDialogRef<SdsAdvancedFilterDialog>,
    @Inject(SDS_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  changeSelection(event) {
            let checkboxElement: HTMLInputElement;
            checkboxElement = document.getElementById(event.target.id) as HTMLInputElement;

            document.querySelectorAll("input[type='checkbox'][value="+event.target.id+"]").forEach(element => {
              let childCheckboxElement: HTMLInputElement;
              childCheckboxElement = document.getElementById(element.id) as HTMLInputElement;
              childCheckboxElement.checked = checkboxElement.checked;
              let evt = document.createEvent("HTMLEvents");
              evt.initEvent("change", false, true);
              childCheckboxElement.dispatchEvent(evt);
            });
  }
}

@Component({
  selector: 'sds-filters',
  template: `
      <formly-form [form]="form" (modelChange)="modelChange.next($event)" [fields]="fields"  [options]="options" [model]="model"></formly-form>
      <div class="grid-row">
        <div class="grid-col">
          <button type="button" *ngIf="showMoreFilters" (click)="openDialog()" class="usa-button--unstyled  float-left">More Filters <fa-icon [icon]="['sds', 'filter']" [classes]="['icon-filter']" size="1x"></fa-icon> </button>
        </div>
        <div class="grid-col float-right">
          <button type="button" *ngIf="showResetAll" (click)="resetAll()" class="usa-button--unstyled float-right ">Reset All  <fa-icon [icon]="['sds', 'reset-filter']" [classes]="['icon-filter']" size="1x"></fa-icon></button>
        </div>
      </div>
    `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SdsFiltersComponent implements OnInit {
/**
   * Timer id for the timer awaiting the service call for more typeing
   */
  private timeoutNumber: number;

  dialogData: any = [];
  

  /**
   * debounce time for current page input
   */
  @Input() debounceTime = 0;


  ngOnInit(): void {
    
    this.form.valueChanges
    .pipe(pairwise())
    .subscribe(([prev, next]: [any, any]) => {
      this.filterChange.emit(next);
      if (this.formlyUpdateComunicationService) {
        this.formlyUpdateComunicationService.updateFilter(next);
      }
    });

    const _isObj = (obj: any): boolean => typeof obj === 'object' && obj !== null;
    const _isEmpty = (obj: any): boolean => Object.keys(obj).length === 0;
    const overwrite = (baseObj: any, newObj: any) => {
      const result = {};
      for (const key in baseObj) {
        if (_isObj(baseObj[key])) {
          result[key] = overwrite(baseObj[key], newObj[key] || {});
        } else {
          result[key] = newObj[key] || null;
        }
      }
      return result;
    };
    this.route.queryParams.subscribe(params => {
      if (_isEmpty(this.form.getRawValue())) {
        const paramModel = this.convertToModel(params);
        this.form.patchValue({
          ...this.model , ...paramModel
        });
      
      } else {
        const updatedFormValue = overwrite(
          this.form.getRawValue(),
          this.convertToModel(params)
        );
        this.form.setValue(updatedFormValue);
      }
    });

    this.form.valueChanges
      .pipe(pairwise())
      .subscribe(([prev, next]: [any, any]) => {
        const params = this.convertToParam(next);
        this.router.navigate([], {
          relativeTo: this.route,
          queryParams: params,
          queryParamsHandling: 'merge'
        });
        this.filterChange.emit(next);
        if (this.formlyUpdateComunicationService) {
          this.formlyUpdateComunicationService.updateFilter(next);
        }
      });
  }
 
  constructor(
    @Optional()
    private formlyUpdateComunicationService: SDSFormlyUpdateComunicationService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    public dialog: SdsDialogService,
    private route: ActivatedRoute,
  ) {}

  /**
   * Modeal update
   */
  modelChange = new Subject<any>();
  dialogRef: any;

  /**
   * Pass in a Form Group for ReactiveForms Support
   */
  @Input() public form: FormGroup;

  /**
   *  Fields are used to configure the UI components
   */
  @Input() public fields: FormlyFieldConfig[];

  /**
   *  Model used to display the filter values.
   */
  @Input() public model: any;

  /**
   *  
   *  Accordion Label used to display the Accordion header text.
   */
  @Input() accordionLabel: string = 'Filters';

  @Input() public options: FormlyFormOptions = {};

  @Input() showMoreFilters: boolean = false;

  @Input() showResetAll: boolean = false;

  /**
   *  Emit results when model updated
   */
  @Output() filterChange = new EventEmitter<object[]>();

 
  openDialog(): void {
    this.dialogData=[];
    this.fields.forEach(element => {
      if(element.fieldGroup && element.fieldGroup.length > 1)
      {
        let chlidElements: any = [];
          element.fieldGroup.forEach(childElement => {
                chlidElements.push({"elementKey": childElement.key, "value": childElement.hideExpression === undefined ? false : childElement.hideExpression});
            });
            this.dialogData.push({"elementKey": element.key, "value": element.hideExpression === undefined ? false : element.hideExpression, "childFieldCollection": chlidElements});
      }
      else{
        this.dialogData.push({"elementKey": element.key, "value": element.hideExpression === undefined ? false : element.hideExpression, "childFieldCollection": null});
      }
    });
    this.dialogRef = this.dialog.open(SdsAdvancedFilterDialog, {
      width: 'medium',
      maxHeight:'400px',
      data: {fieldsToRender:this.fields, fieldToBind: this.dialogData }
    });

    this.dialogRef.afterClosed().subscribe(result => {
      this.dialogData=[];
      if(result)
      {
      this.fields.forEach(function(element,index) {
        if(element.key === result.fieldToBind[index].elementKey)
        {
          if((element.hideExpression === undefined ? false : element.hideExpression) !== result.fieldToBind[index].value)
          {
            element.model[element.key]=null;
          }
          element.hideExpression = result.fieldToBind[index].value;
          
          if(element.fieldGroup && element.fieldGroup.length > 1)
          {
            if(result.fieldToBind[index].value === true){
              element.fieldGroup.forEach(function(childElement,childIndex) {
                    childElement.hideExpression=true;
              });
            } 
            else
            { 
            element.fieldGroup.forEach(function(childElement,childIndex) {
                if(childElement.key === result.fieldToBind[index].childFieldCollection[childIndex].elementKey){

                  if((childElement.hideExpression === undefined ? false : childElement.hideExpression) !== result.fieldToBind[index].childFieldCollection[childIndex].value)
                  {
                    childElement.model[childElement.key]=null;
                  }
                    childElement.hideExpression=result.fieldToBind[index].childFieldCollection[childIndex].value;
                }
              });
            }
              
            }
            else if(element.fieldGroup)
            {
              element.fieldGroup.forEach(function(childElement,childIndex) {
                if((element.hideExpression === undefined ? false : element.hideExpression) !== result.fieldToBind[index].value)
                {
                  childElement.model[childElement.key]=null;
                }
              });
            }

        }
      });
      result.fieldsToRender[0].focus=true;
    }
    
    });
  }

  resetAll(): void {
    this.model = null;
  }

  convertToParam(filters) {
    const encodedValues = qs.stringify(filters, {
      skipNulls: true,
      encode: false
    });
    const target = {};
    encodedValues.split('&').forEach(pair => {
      if (pair !== '') {
        const splitpair = pair.split('=');
        target[ splitpair[0]] = splitpair[1];
      }
    });
    return target;
  }

  convertToModel(filters) {
    let obj = {};
    const encodedValues = qs.stringify(filters, {
      skipNulls: true,
      encode: false
    });
    obj = qs.parse(encodedValues);
    return obj;
  }
}
