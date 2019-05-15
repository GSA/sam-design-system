import { NgModule } from '@angular/core';

import {
  SdsSideNavigationModule
} from '@gsa-sam/components';

import { SideNavigationSampleComponent } from './side-navigation-sample.component';

@NgModule({
  imports: [SdsSideNavigationModule],
  exports: [SideNavigationSampleComponent],
  declarations: [SideNavigationSampleComponent],
  providers: []
})
export class SideNavigationSampleModule { }
