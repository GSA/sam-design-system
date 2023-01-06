import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteGrouping } from './autocomplete-grouping.component';
import { SdsAutocompleteModule } from '@gsa-sam/components';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, SdsAutocompleteModule],
  exports: [AutocompleteGrouping],
  declarations: [AutocompleteGrouping],
  bootstrap: [AutocompleteGrouping],
})
export class AutocompleteGroupingModule {}
