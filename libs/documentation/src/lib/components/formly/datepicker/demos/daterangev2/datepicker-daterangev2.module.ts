import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { FormlyDatepickerDateRangeV2 } from './datepicker-daterangev2.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FormlyModule.forRoot()
  ],
  declarations: [FormlyDatepickerDateRangeV2],
  exports: [FormlyDatepickerDateRangeV2],
  bootstrap: [FormlyDatepickerDateRangeV2]
})
export class FormlyDatepickerDateRangeV2Module {}
