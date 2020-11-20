import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ResultsLayoutComponent } from './layout.component';
import {
  SdsSearchResultListModule,
  SdsToolbarModule,
  SdsSideNavigationModule,
  SdsAccordionModule,
} from '@gsa-sam/components';
import {
  SdsFiltersModule
} from '@gsa-sam/sam-formly';

import { ResultModule } from './result/result.module';
import { SearchListServiceModule } from '@gsa-sam/layouts';
import { FilterService } from './filter.service';
import { AutocompleteSampleDataService } from './services/autocomplete-sample.service';
import { LayoutResponsiveComponent } from './layout-responsive/layout-responsive.component';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    SdsToolbarModule,
    SdsAccordionModule,
    SdsSideNavigationModule,
    SdsFiltersModule,
    SdsSearchResultListModule,
    SearchListServiceModule,
    ResultModule,
 ],
  exports: [ResultsLayoutComponent, LayoutResponsiveComponent],
  declarations: [ResultsLayoutComponent, LayoutResponsiveComponent],
  providers: [FilterService, AutocompleteSampleDataService]
})
export class ResultsLayoutModule {}
