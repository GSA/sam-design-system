import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { FormlyAutocompleteTag } from './autocomplete-tag.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SdsFiltersModule } from '@gsa-sam/sam-formly';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SdsFiltersModule,
    FormsModule,
    FormlyModule.forRoot()
  ],
  declarations: [FormlyAutocompleteTag],
  exports: [FormlyAutocompleteTag],
  bootstrap: [FormlyAutocompleteTag]
})
export class FormlyAutocompleteTagModule {}
