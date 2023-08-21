import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyAutocompleteCountComponent } from './formly-autocomplete-count.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyAutocompleteCountComponent],
  exports: [FormlyAutocompleteCountComponent],
  bootstrap: [FormlyAutocompleteCountComponent],
})
export class FormlyAutocompleteCountModule {}
