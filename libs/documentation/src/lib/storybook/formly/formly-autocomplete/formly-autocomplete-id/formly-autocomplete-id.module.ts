import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyAutocompleteIdComponent } from './formly-autocomplete-id.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyAutocompleteIdComponent],
  exports: [FormlyAutocompleteIdComponent],
  bootstrap: [FormlyAutocompleteIdComponent],
})
export class FormlyAutocompleteIdModule {}
