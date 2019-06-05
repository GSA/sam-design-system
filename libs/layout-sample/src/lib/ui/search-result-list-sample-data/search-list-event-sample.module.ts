import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchResultListSampleDataComponent } from './search-result-list-sample-data.component';


@NgModule({
  declarations: [SearchResultListSampleDataComponent],
  imports: [
    CommonModule, FormsModule,

  ], exports: [SearchResultListSampleDataComponent]
})
export class SearchResultListSampleDataComponentModule { }
