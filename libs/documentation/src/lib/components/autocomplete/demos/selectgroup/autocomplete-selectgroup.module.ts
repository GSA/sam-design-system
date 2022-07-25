import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsAutocompleteModule } from '@gsa-sam/components';
import { FormsModule } from '@angular/forms';
import { AutocompleteSelectGroup } from './autocomplete-selectgroup.component';

@NgModule({
  declarations: [AutocompleteSelectGroup],
  imports: [CommonModule, FormsModule, SdsAutocompleteModule],
  exports: [AutocompleteSelectGroup],
  bootstrap: [AutocompleteSelectGroup],
})
export class AutocompleteSelectGroupModule {}
