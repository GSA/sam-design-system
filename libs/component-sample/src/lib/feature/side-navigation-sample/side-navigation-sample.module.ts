import { NgModule } from '@angular/core';
import {
  SdsAccordionModule, SdsToolbarModule, SdsPageModule,
  SdsSideNavigationModule
} from '@gsa-sam/components';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SideNavigationSampleComponent } from './side-navigation-sample.component';
import { SdsFiltersModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';

@NgModule({
  imports: [SdsSideNavigationModule, SdsAccordionModule, CommonModule, FormsModule,
    SdsToolbarModule, SdsPageModule,  SdsFiltersModule,
    FormlyModule.forRoot(),],
  exports: [SideNavigationSampleComponent],
  declarations: [SideNavigationSampleComponent],
  providers: []
})
export class SideNavigationSampleModule { }
