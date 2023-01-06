import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteFreeText } from './autocomplete-free-text.component';
import { FormsModule } from '@angular/forms';
import { SdsAutocompleteModule } from '@gsa-sam/components';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SdsAutocompleteModule
  ],
  exports: [AutocompleteFreeText],
  declarations: [AutocompleteFreeText],
  bootstrap: [AutocompleteFreeText]
})
export class AutocompleteFreeTextModule { }
