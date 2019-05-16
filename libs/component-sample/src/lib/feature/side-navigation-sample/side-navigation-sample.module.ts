import { NgModule } from '@angular/core';
import {
  SdsAccordionModule,  SdsToolbarModule,  SdsPageModule,
  SdsSideNavigationModule
} from '@gsa-sam/components';

import { SideNavigationSampleComponent } from './side-navigation-sample.component';

@NgModule({
  imports: [SdsSideNavigationModule, SdsAccordionModule,
    SdsToolbarModule, SdsPageModule],
  exports: [SideNavigationSampleComponent],
  declarations: [SideNavigationSampleComponent],
  providers: []
})
export class SideNavigationSampleModule { }
