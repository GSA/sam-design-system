import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsAutocompleteModule } from '@gsa-sam/components';
import { FormsModule } from '@angular/forms';
import { AutocompleteMultiSelect } from './autocomplete-multi-select.component';

@NgModule({
  declarations: [AutocompleteMultiSelect],
  imports: [CommonModule, FormsModule, SdsAutocompleteModule],
  exports: [AutocompleteMultiSelect],
  bootstrap: [AutocompleteMultiSelect],
})
export class AutocompleteMultiSelectModule {}
