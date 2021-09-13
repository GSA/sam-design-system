import { NgModule } from '@angular/core';
import {
  SdsSideNavigationModule
} from '@gsa-sam/components';

import { CommonModule } from '@angular/common';
import { LinksSideNavigationComponent } from './links-side-navigation.component';
import { SideToolbarModule } from '@gsa-sam/layouts';

@NgModule({
  imports: [
    SideToolbarModule,
    SdsSideNavigationModule,
    CommonModule
  ],
  exports: [LinksSideNavigationComponent],
  declarations: [LinksSideNavigationComponent],
  bootstrap: [LinksSideNavigationComponent]
})
export class LinksSideNavigationModule {}
