import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteInputReadOnly } from './autocomplete-inputreadonly.component';
import { SdsAutocompleteModule } from '@gsa-sam/components';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AutocompleteInputReadOnly],
  imports: [CommonModule, FormsModule, SdsAutocompleteModule],
  exports: [AutocompleteInputReadOnly],
  bootstrap: [AutocompleteInputReadOnly],
})
export class AutocompleteInputReadOnlyModule {}
