import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsAutocompleteModule } from '@gsa-sam/components';
import { FormsModule } from '@angular/forms';
import { AutocompleteGroup } from './autocomplete-group.component';

@NgModule({
  declarations: [AutocompleteGroup],
  imports: [CommonModule, FormsModule, SdsAutocompleteModule],
  exports: [AutocompleteGroup],
  bootstrap: [AutocompleteGroup],
})
export class AutocompleteGroupModule {}
