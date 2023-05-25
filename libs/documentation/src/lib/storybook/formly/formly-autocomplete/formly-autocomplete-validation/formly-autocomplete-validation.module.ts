import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyAutocompleteValidationComponent } from './formly-autocomplete-validation.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyAutocompleteValidationComponent],
  exports: [FormlyAutocompleteValidationComponent],
  bootstrap: [FormlyAutocompleteValidationComponent],
})
export class FormlyAutocompleteValidationModule {}
