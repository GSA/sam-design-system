import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { FormlyAutocompleteReadOnly } from './autocomplete-readonly.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule, FormlyModule.forRoot(), SdsFormlyModule],
  declarations: [FormlyAutocompleteReadOnly],
  exports: [FormlyAutocompleteReadOnly],
  bootstrap: [FormlyAutocompleteReadOnly],
})
export class FormlyAutocompleteReadOnlyModule {}
