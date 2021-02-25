import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteCustomTemplate } from './autocomplete-customtemplate.component';
import { SdsAutocompleteModule } from '@gsa-sam/components';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AutocompleteCustomTemplate],
  imports: [CommonModule, FormsModule, SdsAutocompleteModule],
  exports: [AutocompleteCustomTemplate],
  bootstrap: [AutocompleteCustomTemplate],
})
export class AutocompleteCustomTemplateModule {}
