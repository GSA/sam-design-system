import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { FormlyAutocompleteBasic } from './autocomplete-basic.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FormlyModule.forRoot()
  ],
  declarations: [FormlyAutocompleteBasic],
  exports: [FormlyAutocompleteBasic],
  bootstrap: [FormlyAutocompleteBasic]
})
export class FormlyAutocompleteBasicModule {}
