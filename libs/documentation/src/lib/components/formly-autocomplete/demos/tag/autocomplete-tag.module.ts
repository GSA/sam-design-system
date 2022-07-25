import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { FormlyAutocompleteTag } from './autocomplete-tag.component';
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
  declarations: [FormlyAutocompleteTag],
  exports: [FormlyAutocompleteTag],
  bootstrap: [FormlyAutocompleteTag],
})
export class FormlyAutocompleteTagModule {}
