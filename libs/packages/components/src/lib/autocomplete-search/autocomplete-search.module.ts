import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SDSAutocompleteSearchComponent } from './autocomplete-search.component';
import { RouterModule } from '@angular/router';
import { SDSClickOutsideModule } from '../click-outside/click-outside.module';
import { SdsTabOutsideModule } from '../tab-outside/taboutside.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SDSClickOutsideModule,
    SdsTabOutsideModule,
    FontAwesomeModule
  ],
  declarations: [SDSAutocompleteSearchComponent],
  exports: [SDSAutocompleteSearchComponent]
})

export class SdsAutocompleteSearchModule {}
