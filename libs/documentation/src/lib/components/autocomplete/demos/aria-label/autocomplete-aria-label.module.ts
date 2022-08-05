import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SdsAutocompleteModule } from '@gsa-sam/components';
import { AutocompleteAriaLabelComponent } from './autocomplete-aria-label.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, SdsAutocompleteModule],
  declarations: [AutocompleteAriaLabelComponent],
  exports: [AutocompleteAriaLabelComponent],
  bootstrap: [AutocompleteAriaLabelComponent],
})
export class AutocompleteAriaLabelModule {}
