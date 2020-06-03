import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { FormlyDatepickerDateRange } from './datepicker-daterange.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FormlyModule.forRoot()
  ],
  declarations: [FormlyDatepickerDateRange],
  exports: [FormlyDatepickerDateRange],
  bootstrap: [FormlyDatepickerDateRange]
})
export class FormlyDatepickerDateRangeModule {}
