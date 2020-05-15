import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteOptional } from './autocomplete-optional.component';
import { SdsAutocompleteModule } from '@gsa-sam/components';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AutocompleteOptional],
  imports: [
    CommonModule,
    FormsModule,
    SdsAutocompleteModule
  ],
  exports: [AutocompleteOptional],
  bootstrap: [AutocompleteOptional]
})
export class AutocompleteOptionalModule {}
