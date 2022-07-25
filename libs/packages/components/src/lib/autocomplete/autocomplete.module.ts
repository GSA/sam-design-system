import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SDSAutocompleteComponent } from './autocomplete.component';
import { RouterModule } from '@angular/router';
import { SdsSelectedResultsModule } from '../selected-result/selected-result.module';
import { SdsAutocompleteSearchModule } from '../autocomplete-search/autocomplete-search.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SdsSelectedResultsModule,
    SdsAutocompleteSearchModule,
  ],
  declarations: [SDSAutocompleteComponent],
  exports: [SDSAutocompleteComponent],
})
export class SdsAutocompleteModule {}
