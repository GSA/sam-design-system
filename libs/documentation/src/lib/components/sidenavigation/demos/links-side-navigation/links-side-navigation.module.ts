import { NgModule } from '@angular/core';
import { SdsSideNavigationModule, SdsSideToolbarModule } from '@gsa-sam/components';

import { CommonModule } from '@angular/common';
import { LinksSideNavigationComponent } from './links-side-navigation.component';
@NgModule({
  imports: [SdsSideNavigationModule, SdsSideToolbarModule, CommonModule],
  exports: [LinksSideNavigationComponent],
  declarations: [LinksSideNavigationComponent],
  bootstrap: [LinksSideNavigationComponent],
})
export class LinksSideNavigationModule {}
