import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyAutocompleteBasicComponent } from './formly-autocomplete-basic.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyAutocompleteBasicComponent],
  exports: [FormlyAutocompleteBasicComponent],
  bootstrap: [FormlyAutocompleteBasicComponent],
})
export class FormlyAutocompleteBasicModule {}
