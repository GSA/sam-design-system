import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteTagmode } from './autocomplete-tagmode.component';
import { SdsAutocompleteModule } from '@gsa-sam/components';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AutocompleteTagmode],
  imports: [CommonModule, FormsModule, SdsAutocompleteModule],
  exports: [AutocompleteTagmode],
  bootstrap: [AutocompleteTagmode],
})
export class AutocompleteTagmodeModule {}
