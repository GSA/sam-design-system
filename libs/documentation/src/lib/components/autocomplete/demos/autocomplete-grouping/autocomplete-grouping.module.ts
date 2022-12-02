import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsAutocompleteModule } from '@gsa-sam/components';
import { FormsModule } from '@angular/forms';
import { AutocompleteGrouping } from './autocomplete-grouping.component';

@NgModule({
  declarations: [AutocompleteGrouping],
  imports: [CommonModule, FormsModule, SdsAutocompleteModule],
  exports: [AutocompleteGrouping],
  bootstrap: [AutocompleteGrouping],
})
export class AutocompleteGroupingModule {}
