import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsDisabledComponent } from './tabs-disabled.component';
import { SdsTabsModule } from '@gsa-sam/components';

@NgModule({
  imports: [
    CommonModule,
    SdsTabsModule
  ],
  declarations: [TabsDisabledComponent],
  exports: [TabsDisabledComponent],
  bootstrap: [TabsDisabledComponent],
})
export class TabsDisabledModule { }
