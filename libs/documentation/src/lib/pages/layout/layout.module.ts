import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  SdsSearchResultListModule,
  SdsSideNavigationModule,
  SdsSelectionPanelModule,
  SdsSideToolbarModule
} from '@gsa-sam/components';
import {
  SdsFiltersModule,
  SDSFormlyUpdateModelService,
} from '@gsa-sam/sam-formly';

import { ResultModule } from './result/result.module';
import { SearchListServiceModule } from '@gsa-sam/layouts';
import { FilterService } from './filter.service';
import { AutocompleteSampleDataService } from './services/autocomplete-sample.service';
import { LayoutResponsiveComponent } from './layout-responsive/layout-responsive.component';
import { SdsAccordionModule } from '@gsa-sam/sam-material-extensions';
import { IconModule } from '@gsa-sam/ngx-uswds-icons';
@NgModule({
  imports: [
    CommonModule,
    IconModule,
    SdsAccordionModule,
    SdsSideNavigationModule,
    SdsFiltersModule,
    SdsSearchResultListModule,
    SearchListServiceModule,
    ResultModule,
    SdsSideToolbarModule,
    SdsSelectionPanelModule,
  ],

  exports: [LayoutResponsiveComponent],
  declarations: [LayoutResponsiveComponent],
  providers: [
    FilterService,
    AutocompleteSampleDataService,
    SDSFormlyUpdateModelService,
  ],
})
export class ResultsLayoutModule {}
