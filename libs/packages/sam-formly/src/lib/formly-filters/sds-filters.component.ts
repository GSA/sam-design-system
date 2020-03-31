import {
  Component, Input, Output, Inject,
  ChangeDetectionStrategy,
  EventEmitter, Optional, OnInit
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Subject } from 'rxjs';
import { SDSFormlyUpdateComunicationService } from './service/sds-filters-comunication.service';
import { pairwise } from 'rxjs/operators';
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
      <formly-form [form]="form" (modelChange)="modelChange.next($event)" [fields]="fields" [model]="model"></formly-form>
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
  }

  constructor(@Optional() private formlyUpdateComunicationService: SDSFormlyUpdateComunicationService,
  public dialog: SdsDialogService) { }

  /**
   * Modeal update
   */
  modelChange = new Subject<any>();

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
    let dialogRef = this.dialog.open(SdsAdvancedFilterDialog, {
      width: 'medium',
      maxHeight:'400px',
      data: {fieldsToRender:this.fields, fieldToBind: this.dialogData }
    });

    dialogRef.afterClosed().subscribe(result => {
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
    this.fields= JSON.parse(localStorage.getItem("initialFields"));
    this.model = null;
   
  }

  
}
