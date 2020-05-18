import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { FormlyAutocompleteFreetext } from './autocomplete-freetext.component';
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
  declarations: [FormlyAutocompleteFreetext],
  exports: [FormlyAutocompleteFreetext],
  bootstrap: [FormlyAutocompleteFreetext]
})
export class FormlyAutocompleteFreetextModule {}
