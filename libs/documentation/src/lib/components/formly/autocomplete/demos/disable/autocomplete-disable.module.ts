import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { FormlyAutocompleteDisable } from './autocomplete-disable.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FormlyModule.forRoot()
  ],
  declarations: [FormlyAutocompleteDisable],
  exports: [FormlyAutocompleteDisable],
  bootstrap: [FormlyAutocompleteDisable]
})
export class FormlyAutocompleteDisableModule {}
