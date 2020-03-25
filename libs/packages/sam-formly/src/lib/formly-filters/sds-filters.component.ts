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
export interface DialogData {
  keyword: boolean;
  title: boolean;
  currentDate: boolean;
  publishDate: boolean;
  lastModifiedDate: boolean;
  FederalFilter: boolean;
  noticeFilter: boolean;
  ExpirationDateFilter: boolean;
}
@Component({
  selector: 'sds-dialog-sample-data',
  templateUrl: 'sds-more-filters.html'
})
export class DialogAdvancedFilterDialog {
  constructor(
    public dialogRef: SdsDialogRef<DialogAdvancedFilterDialog>,
    @Inject(SDS_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'sds-filters',
  template: `
      <formly-form [form]="form" (modelChange)="modelChange.next($event)" [fields]="fields" [model]="model"></formly-form><br/>
      <button type="button" *ngIf="showMoreFilters" (click)="openDialog()" class="usa-button--unstyled float-left">More Filters <fa-icon [icon]="['sds', 'filter']" [classes]="['icon-filter']" size="1x"></fa-icon> </button>
      <button type="button" *ngIf="showResetAll" class="usa-button--unstyled float-right">Reset All  <svg class="svg-inline--fa fa-reset-filter fa-w-16 fa-1x" aria-hidden="true" focusable="false" data-prefix="sds" data-icon="reset-filter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M511.92,177.87c-.32-4.68-9-115.19-130.7-158.71C300.42-10.66,122.15-25.7,25.84,130.8l-.47.76c-1.83,3.16-44.64,78-14.88,156C31,341.34,79,381.4,153.29,406.67a358.63,358.63,0,0,0,47.76,15.26q19.88,3.19,19.87,4.81V512L379.83,399.05,220.92,254.87V344.6c-16.63-4.72-37.69-9.09-37.88-9.17l-3.16-1.21c-51.61-17.37-83.95-42-96.11-73.28C67.38,218.8,91.13,173.55,93,170.21c86.65-139.93,254-81.41,261.29-78.75,69.47,24.85,78.75,83.1,79.67,90.68V476.75H512V180.39Z"></path></svg></button>

    `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SdsFiltersComponent implements OnInit {
/**
   * Timer id for the timer awaiting the service call for more typeing
   */
  private timeoutNumber: number;

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
    const dialogRef = this.dialog.open(DialogAdvancedFilterDialog, {
      width: 'medium',
      maxHeight:'400px',
      data: {fieldsToRender:this.fields }
    });

    dialogRef.afterClosed().subscribe(result => {
      result.fieldsToRender[0].focus=true;
    });
  }
}
