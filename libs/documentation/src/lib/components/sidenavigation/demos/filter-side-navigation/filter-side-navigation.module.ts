import { NgModule } from '@angular/core';
import {
  SdsSideToolbarModule,
  SdsSideNavigationModule,
  SdsSelectionPanelModule,
} from '@gsa-sam/components';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SdsFiltersModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FilterSideNavigationComponent } from './filter-side-navigation.component';
import { UsaAccordionModule } from '@gsa-sam/ngx-uswds';

@NgModule({
  imports: [
    SdsSideNavigationModule,
    CommonModule,
    SdsSelectionPanelModule,
    SdsSideNavigationModule,
    UsaAccordionModule,
    CommonModule,
    FormsModule,
    SdsSideToolbarModule,
    SdsFiltersModule,
    FormlyModule.forRoot(),
  ],
  exports: [FilterSideNavigationComponent],
  declarations: [FilterSideNavigationComponent],
  bootstrap: [FilterSideNavigationComponent],
})
export class FilterSideNavigationModule {}
