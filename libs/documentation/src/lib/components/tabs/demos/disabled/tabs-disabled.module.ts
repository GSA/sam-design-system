import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SdsTabsModule } from '@gsa-sam/components';
import { TabsDisabledComponent } from './tabs-disabled.component';

@NgModule({
  imports: [CommonModule, SdsTabsModule],
  declarations: [TabsDisabledComponent],
  exports: [TabsDisabledComponent],
  bootstrap: [TabsDisabledComponent],
})
export class TabsDisabledModule {}
