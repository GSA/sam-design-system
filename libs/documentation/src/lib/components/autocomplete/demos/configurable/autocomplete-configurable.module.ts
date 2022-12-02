import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteConfigurable } from './autocomplete-configurable.component';
import { SdsAutocompleteModule } from '@gsa-sam/components';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AutocompleteConfigurable],
  imports: [CommonModule, FormsModule, SdsAutocompleteModule],
  exports: [AutocompleteConfigurable],
  bootstrap: [AutocompleteConfigurable],
})
export class AutocompleteConfigurableModule {}
