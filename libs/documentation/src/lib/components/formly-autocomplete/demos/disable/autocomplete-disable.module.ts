import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { FormlyAutocompleteDisable } from './autocomplete-disable.component';
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
  declarations: [FormlyAutocompleteDisable],
  exports: [FormlyAutocompleteDisable],
  bootstrap: [FormlyAutocompleteDisable]
})
export class FormlyAutocompleteDisableModule {}
