import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyAutocompleteDisableComponent } from './formly-autocomplete-disable.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyAutocompleteDisableComponent],
  exports: [FormlyAutocompleteDisableComponent],
  bootstrap: [FormlyAutocompleteDisableComponent],
})
export class FormlyAutocompleteDisableModule {}
