import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteMinCharacter } from './autocomplete-mincharacter.component';
import { SdsAutocompleteModule } from '@gsa-sam/components';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AutocompleteMinCharacter],
  imports: [CommonModule, FormsModule, SdsAutocompleteModule],
  exports: [AutocompleteMinCharacter],
  bootstrap: [AutocompleteMinCharacter],
})
export class AutocompleteMinCharacterModule {}
