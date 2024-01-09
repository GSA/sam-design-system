import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavigationLinksComponent } from './side-navigation-links.component';
import { SdsSideNavigationModule, SdsSideToolbarModule } from '@gsa-sam/components';

@NgModule({
  imports: [CommonModule, SdsSideNavigationModule, SdsSideToolbarModule],
  declarations: [SideNavigationLinksComponent],
  bootstrap: [SideNavigationLinksComponent],
  exports: [SideNavigationLinksComponent],
})
export class SideNavigationLinksModule {}
