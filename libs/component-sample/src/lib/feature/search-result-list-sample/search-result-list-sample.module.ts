import { NgModule } from '@angular/core';
import {
  SdsAccordionModule, SdsToolbarModule, SdsPageModule,
  SdsSideNavigationModule
} from '@gsa-sam/components';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchResultListSampleComponent } from './search-result-list-sample.component';
import { SearchResultListSampleDataComponent } from './search-result-list-sample-data.component';
import { SdsSearchResultListModule } from '@gsa-sam/components';
import { SearchResultListSampleData2Component } from './search-result-list-sample-data2.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { sds } from '@gsa-sam/sam-styles/src/icons/';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { SdsActionsMenuModule } from '@sam-design-system/layouts';
import { SdsPopupSampleComponent } from './popup-sample.component';
import { SdsDualDisplayComponent } from './dual-display.component';


@NgModule({
  imports: [FontAwesomeModule, SdsSideNavigationModule, SdsAccordionModule, CommonModule, FormsModule,
    SdsToolbarModule, SdsPageModule, SdsSearchResultListModule, SdsActionsMenuModule],
  exports: [SearchResultListSampleComponent],
  declarations: [SearchResultListSampleComponent, SearchResultListSampleDataComponent, SearchResultListSampleData2Component,SdsPopupSampleComponent,SdsDualDisplayComponent],
  providers: []
})
export class SearchResultListSampleModule {
  constructor() {
    library.add(fas, sds);
  }
}
