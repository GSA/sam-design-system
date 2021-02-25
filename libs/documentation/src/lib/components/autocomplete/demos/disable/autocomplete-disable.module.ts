import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteDisable } from './autocomplete-disable.component';
import { SdsAutocompleteModule } from '@gsa-sam/components';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AutocompleteDisable],
  imports: [CommonModule, FormsModule, SdsAutocompleteModule],
  exports: [AutocompleteDisable],
  bootstrap: [AutocompleteDisable],
})
export class AutocompleteDisableModule {}
