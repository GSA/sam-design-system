import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { FormlyDatepickerValidation } from './datepicker-validation.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FormlyModule.forRoot()
  ],
  declarations: [FormlyDatepickerValidation],
  exports: [FormlyDatepickerValidation],
  bootstrap: [FormlyDatepickerValidation]
})
export class FormlyDatepickerValidationModule {}
