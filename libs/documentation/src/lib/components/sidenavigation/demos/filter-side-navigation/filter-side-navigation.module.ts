import { NgModule } from '@angular/core';
import {
  SdsToolbarModule,
  SdsSideNavigationModule, SdsSelectionPanelModule
} from '@gsa-sam/components';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SdsFiltersModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { SdsAccordionModule } from '@gsa-sam/sam-material-extensions';
import { SideToolbarModule } from '@gsa-sam/layouts';
import { FilterSideNavigationComponent } from './filter-side-navigation.component';

@NgModule({
  imports: [
    SideToolbarModule,
    SdsSideNavigationModule,
    CommonModule,
    SdsSelectionPanelModule,
    SdsSideNavigationModule,
    SdsAccordionModule,
    CommonModule,
    FormsModule,
    SdsToolbarModule,
    SdsFiltersModule,
    FormlyModule.forRoot()
  ],
  exports: [FilterSideNavigationComponent],
  declarations: [FilterSideNavigationComponent],
  bootstrap: [FilterSideNavigationComponent]
})
export class FilterSideNavigationModule {}
