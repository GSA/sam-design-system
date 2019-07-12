import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchResultListSampleDataComponent } from './search-result-list-sample-data.component';
import { SdsSubheaderModule } from '@sam-design-system/layouts';



@NgModule({
  declarations: [SearchResultListSampleDataComponent],
  imports: [
    CommonModule, FormsModule, SdsSubheaderModule,

  ], exports: [SearchResultListSampleDataComponent]
})
export class SearchResultListSampleDataComponentModule{}
