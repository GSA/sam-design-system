import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { FormlyAutocompleteTag } from './autocomplete-tag.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FormlyModule.forRoot()
  ],
  declarations: [FormlyAutocompleteTag],
  exports: [FormlyAutocompleteTag],
  bootstrap: [FormlyAutocompleteTag]
})
export class FormlyAutocompleteTagModule {}
