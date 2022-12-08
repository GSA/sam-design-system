import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsAutocompleteModule } from '@gsa-sam/components';
import { FormsModule } from '@angular/forms';
import { AutocompleteRedirect } from './autocomplete-redirect.component';

@NgModule({
  declarations: [AutocompleteRedirect],
  imports: [CommonModule, FormsModule, SdsAutocompleteModule],
  exports: [AutocompleteRedirect],
  bootstrap: [AutocompleteRedirect],
})
export class AutocompleteRedirectModule {}
