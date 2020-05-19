import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { FormlyAutocompleteFreetext } from './autocomplete-freetext.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FormlyModule.forRoot()
  ],
  declarations: [FormlyAutocompleteFreetext],
  exports: [FormlyAutocompleteFreetext],
  bootstrap: [FormlyAutocompleteFreetext]
})
export class FormlyAutocompleteFreetextModule {}
