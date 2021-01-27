import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { FormlyDatepickerValidation } from './datepicker-validation.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FormlyModule.forRoot(),
    SdsFormlyModule,
  ],
  declarations: [FormlyDatepickerValidation],
  exports: [FormlyDatepickerValidation],
  bootstrap: [FormlyDatepickerValidation]
})
export class FormlyDatepickerValidationModule {}
