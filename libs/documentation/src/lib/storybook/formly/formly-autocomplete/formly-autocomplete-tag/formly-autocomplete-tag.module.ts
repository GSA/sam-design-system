import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyAutocompleteTagComponent } from './formly-autocomplete-tag.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyAutocompleteTagComponent],
  exports: [FormlyAutocompleteTagComponent],
  bootstrap: [FormlyAutocompleteTagComponent],
})
export class FormlyAutocompleteTagModule {}
