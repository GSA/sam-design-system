import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchResultListSampleDataComponent } from './search-result-list-sample-data.component';
import { SdsSubheaderModule } from '@sam-design-system/layouts';
import { IconSampleComponent } from '/libs/component-sample/src/lib/feature/icon-sample/icon-sample.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [SearchResultListSampleDataComponent],
  imports: [
    CommonModule, FormsModule, SdsSubheaderModule, FontAwesomeModule,

  ], exports: [SearchResultListSampleDataComponent]
})
export class SearchResultListSampleDataComponentModule{}
