import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsAutocompleteModule } from '@gsa-sam/components';
import { FormsModule } from '@angular/forms';
import { AutocompleteSelectionMode } from './autocomplete-selection-mode.component';

@NgModule({
  declarations: [AutocompleteSelectionMode],
  imports: [CommonModule, FormsModule, SdsAutocompleteModule],
  exports: [AutocompleteSelectionMode],
  bootstrap: [AutocompleteSelectionMode],
})
export class AutocompleteSelectionModeModule {}
