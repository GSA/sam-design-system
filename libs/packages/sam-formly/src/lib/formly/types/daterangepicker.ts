import { AfterViewInit, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sds-formly-field-daterangepicker',
  template: `
    <div class="display-flex">
      <mat-date-range-input [formGroup]="dateRangeControl" [rangePicker]="picker" [min]="to.minDate" [max]="to.maxDate" [id]="id"
        class="usa-input display-inline-block margin-top-3"
        [formlyAttributes]="field"
        [class.usa-input--error]="showError">
        <input matStartDate
          [attr.aria-label]="'Start Date'"
          [placeholder]="'mmm-dd-yyyy'"
          formControlName="fromDate"
          />
          <input matEndDate
          [attr.aria-label]="'End Date'"
          [placeholder]="'mmm-dd-yyyy'"
          formControlName="toDate"
        />  
      </mat-date-range-input>
      <mat-datepicker-toggle class="padding-top-3" matSuffix [for]="picker"></mat-datepicker-toggle>
      <mat-date-range-picker [startAt]="to.startDate" #picker></mat-date-range-picker>
    </div>
  `,
  styles: ['.mat-date-range-input-start-wrapper {overflow: unset !important; }', 
            '.mat-date-range-input-end-wrapper {flex-grow: unset !important; }',
            'table.mat-calendar-table td, table.mat-calendar-table th {border-style: none; background-color: unset; }',
          ],
  encapsulation: ViewEncapsulation.None,
})
export class FormlyFieldDateRangePickerComponent extends FieldType implements OnInit, OnDestroy {
  dateRangeControl = new FormGroup({
    fromDate: new FormControl(),
    toDate: new FormControl()
  });

  subscription = new Subscription();

  ngOnInit() {
    if (this.model[this.key as string]) {
      this.dateRangeControl.setValue(this.model[this.key as string]);
    }
    
    const dateRangeSubscription = this.dateRangeControl.valueChanges.subscribe(changes => {
      if (this.formControl.value != changes) {
        this.formControl.setValue(changes);
      }
    });

    const formControlSubscription = this.formControl.valueChanges.subscribe(changes => {
      if (this.dateRangeControl.value != changes) {
        if (!changes) {
          this.dateRangeControl.setValue({fromDate: null, toDate: null});
        } else {
          this.dateRangeControl.setValue(changes);
        }
      }
    });

    this.subscription.add(dateRangeSubscription);
    this.subscription.add(formControlSubscription);
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
