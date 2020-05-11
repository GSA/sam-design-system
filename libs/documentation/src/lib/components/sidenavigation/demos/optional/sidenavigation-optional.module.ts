import { NgModule } from '@angular/core';
import {
  SdsAccordionModule,
  SdsToolbarModule,
  SdsPageModule,
  SdsSideNavigationModule
} from '@gsa-sam/components';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SideNavigationOptional } from './sidenavigation-optional.component';
import { SdsFiltersModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';

@NgModule({
  imports: [
    SdsSideNavigationModule,
    SdsAccordionModule,
    CommonModule,
    FormsModule,
    SdsToolbarModule,
    SdsPageModule,
    SdsFiltersModule,
    FormlyModule.forRoot()
  ],
  exports: [SideNavigationOptional],
  declarations: [SideNavigationOptional],
  bootstrap: [SideNavigationOptional]
})
export class SideNavigationOptionalModule {}
