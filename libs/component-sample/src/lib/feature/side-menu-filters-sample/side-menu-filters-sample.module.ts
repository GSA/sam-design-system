import { NgModule } from '@angular/core';
import {
  SdsAccordionModule, SdsToolbarModule, SdsPageModule,
  SdsSideNavigationModule
} from '@gsa-sam/components';
import { SdsFiltersModule } from '@gsa-sam/sam-formly';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SideMenuFiltersSampleComponent } from './side-menu-filters-sample.component';
import { FormlyModule } from '@ngx-formly/core';

@NgModule({
  imports: [SdsSideNavigationModule, SdsAccordionModule,
    SdsToolbarModule, SdsPageModule,
    CommonModule,
    FormsModule,
    SdsFiltersModule,
    FormlyModule.forRoot(),
    ReactiveFormsModule
  
  ],
  exports: [SideMenuFiltersSampleComponent],
  declarations: [SideMenuFiltersSampleComponent],
  providers: []
})
export class SideMenuFiltersSampleModule { }
