import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UsaSidenavModule } from '@gsa-sam/ngx-uswds';
import { SdsSideToolbarModule } from '@gsa-sam/components';
import { DropdownSideNavigationComponent } from './dropdown-side-navigation.component';


@NgModule({
  imports: [
    CommonModule,
    UsaSidenavModule,
    SdsSideToolbarModule
  ],
  declarations: [
    DropdownSideNavigationComponent
  ],
  exports: [
    DropdownSideNavigationComponent
  ]
})
export class DropdownSideNavigationModule { }
