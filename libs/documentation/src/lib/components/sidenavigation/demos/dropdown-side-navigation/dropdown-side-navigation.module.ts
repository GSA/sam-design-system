import { NgModule } from '@angular/core';
import { SdsSideNavigationModule, SdsSideToolbarModule } from '@gsa-sam/components';

import { CommonModule } from '@angular/common';
import { DropdownSideNavigationComponent } from './dropdown-side-navigation.component';
@NgModule({
  imports: [SdsSideNavigationModule, SdsSideToolbarModule, CommonModule],
  exports: [DropdownSideNavigationComponent],
  declarations: [DropdownSideNavigationComponent],
  bootstrap: [DropdownSideNavigationComponent],
})
export class DropdownSideNavigationModule {}