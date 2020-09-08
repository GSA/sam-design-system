import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ResultsLayoutComponent } from './layout.component';
import {
  PaginationModule,
  SdsPageModule,
  SdsSearchResultListModule,
  SdsToolbarModule,
  SdsSideNavigationModule,
  SdsAccordionModule
} from '@gsa-sam/components';
import {
  SdsFiltersModule,
  SdsFormlyDialogModule,
  SDSFormlyUpdateComunicationService,
  SdsFormlyModule
} from '@gsa-sam/sam-formly';

import { ResultModule } from './result/result.module';
import { SearchListServiceModule } from '@sam-design-system/layouts';
import { FilterService } from './filter.service';
import { AutocompleteSampleDataService } from './services/autocomplete-sample.service';

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
    ResultModule
 ],
  exports: [ResultsLayoutComponent],
  declarations: [ResultsLayoutComponent],
  providers: [FilterService, AutocompleteSampleDataService]
})
export class ResultsLayoutModule {}
