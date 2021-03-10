import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SDSAutocompleteSearchComponent } from './autocomplete-search.component';
import { SDSClickOutsideModule } from '../click-outside/click-outside.module';
import { SdsTabOutsideModule } from '../tab-outside/taboutside.module';
import { SdsIconModule } from '@gsa-sam/components';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SDSClickOutsideModule,
    SdsTabOutsideModule,
    SdsIconModule
  ],
  declarations: [SDSAutocompleteSearchComponent],
  exports: [SDSAutocompleteSearchComponent]
})
export class SdsAutocompleteSearchModule {}
