import { NgModule } from '@angular/core';
import {
  SdsToolbarModule,
  SdsSideNavigationModule
} from '@gsa-sam/components';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SideNavigationOptional } from './sidenavigation-optional.component';
import { SdsFiltersModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { SdsAccordionModule } from '@gsa-sam/sam-material-extensions';

@NgModule({
  imports: [
    SdsSideNavigationModule,
    SdsAccordionModule,
    CommonModule,
    FormsModule,
    SdsToolbarModule,
    SdsFiltersModule,
    FormlyModule.forRoot()
  ],
  exports: [SideNavigationOptional],
  declarations: [SideNavigationOptional],
  bootstrap: [SideNavigationOptional]
})
export class SideNavigationOptionalModule {}
