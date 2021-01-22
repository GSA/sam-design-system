import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteBasic } from './autocomplete-basic.component';
import { SdsAutocompleteModule } from '@gsa-sam/components';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AutocompleteBasic],
  imports: [
    CommonModule,
    FormsModule,
    SdsAutocompleteModule,
  ],
  exports: [AutocompleteBasic],
  bootstrap: [AutocompleteBasic]
})
export class AutocompleteBasicModule {}
