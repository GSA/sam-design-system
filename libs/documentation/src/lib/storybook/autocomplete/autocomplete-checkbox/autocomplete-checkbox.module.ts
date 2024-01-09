import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsAutocompleteModule } from '@gsa-sam/components';
import { FormsModule } from '@angular/forms';
import { AutocompleteCheckbox } from './autocomplete-checkbox.component';

@NgModule({
  declarations: [AutocompleteCheckbox],
  imports: [CommonModule, FormsModule, SdsAutocompleteModule],
  exports: [AutocompleteCheckbox],
  bootstrap: [AutocompleteCheckbox],
})
export class AutocompleteCheckboxModule {}
