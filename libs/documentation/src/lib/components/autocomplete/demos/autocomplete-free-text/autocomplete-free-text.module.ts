import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsAutocompleteModule } from '@gsa-sam/components';
import { FormsModule } from '@angular/forms';
import { AutocompleteFreeText } from './autocomplete-free-text.component';

@NgModule({
  declarations: [AutocompleteFreeText],
  imports: [CommonModule, FormsModule, SdsAutocompleteModule],
  exports: [AutocompleteFreeText],
  bootstrap: [AutocompleteFreeText],
})
export class AutocompleteFreeTextModule {}
