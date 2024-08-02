import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavigationSelectionComponent } from './side-navigation-selection.component';
import { FormsModule } from '@angular/forms';
import { SdsSideNavigationModule, SdsSelectionPanelModule, SdsSideToolbarModule } from '@gsa-sam/components';
import { UsaAccordionModule } from '@gsa-sam/ngx-uswds';
import { SdsFiltersModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import {
  NgxBootstrapIconsModule,
  chevronLeft,
  chevronRight
} from 'ngx-bootstrap-icons';
import { IconModule } from '@gsa-sam/ngx-uswds-icons';

@NgModule({
  imports: [
    CommonModule,
    SdsSideNavigationModule,
    SdsSelectionPanelModule,
    SdsSideNavigationModule,
    UsaAccordionModule,
    FormsModule,
    SdsSideToolbarModule,
    SdsFiltersModule,
    FormlyModule.forRoot(),
    IconModule,
    NgxBootstrapIconsModule.pick({
      chevronLeft,
      chevronRight
    }),
  ],
  declarations: [SideNavigationSelectionComponent],
  bootstrap: [SideNavigationSelectionComponent],
  exports: [SideNavigationSelectionComponent],
})
export class SideNavigationSelectionModule {}
