import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteFreeText } from './autocomplete-freetext.component';
import { SdsAutocompleteModule } from '@gsa-sam/components';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AutocompleteFreeText],
  imports: [CommonModule, FormsModule, SdsAutocompleteModule],
  exports: [AutocompleteFreeText],
  bootstrap: [AutocompleteFreeText],
})
export class AutocompleteFreeTextModule {}
