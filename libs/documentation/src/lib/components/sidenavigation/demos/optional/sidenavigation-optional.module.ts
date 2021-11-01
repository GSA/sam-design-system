import { NgModule } from '@angular/core';
import {
  SdsSideToolbarModule,
  SdsSideNavigationModule
} from '@gsa-sam/components';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SideNavigationOptional } from './sidenavigation-optional.component';
import { SdsFiltersModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { UsaAccordionModule } from '@gsa-sam/ngx-uswds';

@NgModule({
  imports: [
    SdsSideNavigationModule,
    UsaAccordionModule,
    CommonModule,
    FormsModule,
    SdsSideToolbarModule,
    SdsFiltersModule,
    FormlyModule.forRoot()
  ],
  exports: [SideNavigationOptional],
  declarations: [SideNavigationOptional],
  bootstrap: [SideNavigationOptional]
})
export class SideNavigationOptionalModule {}
