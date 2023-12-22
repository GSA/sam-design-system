import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { SideNavigationFiltersComponent } from './side-navigation-filters.component';
import { FormsModule } from '@angular/forms';
import { SdsSideNavigationModule, SdsSelectionPanelModule, SdsSideToolbarModule } from '@gsa-sam/components';
import { UsaAccordionModule } from '@gsa-sam/ngx-uswds';
import { SdsFiltersModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';

@NgModule({
  imports: [
    CommonModule,
    RouterTestingModule,
    SdsSideNavigationModule,
    SdsSelectionPanelModule,
    SdsSideNavigationModule,
    UsaAccordionModule,
    FormsModule,
    SdsSideToolbarModule,
    SdsFiltersModule,
    FormlyModule.forRoot(),
  ],
  declarations: [SideNavigationFiltersComponent],
  bootstrap: [SideNavigationFiltersComponent],
  exports: [SideNavigationFiltersComponent],
})
export class SideNavigationFiltersModule {}
