import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { FormlyAutocompleteValidation } from './autocomplete-validation.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FormlyModule.forRoot()
  ],
  declarations: [FormlyAutocompleteValidation],
  exports: [FormlyAutocompleteValidation],
  bootstrap: [FormlyAutocompleteValidation]
})
export class FormlyAutocompleteValidationModule {}
