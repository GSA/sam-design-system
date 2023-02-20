import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsSelectedTabComponent } from './tabs-selected-tab.component';
import { SdsTabsModule } from '@gsa-sam/components';

@NgModule({
  imports: [CommonModule, SdsTabsModule],
  declarations: [TabsSelectedTabComponent],
  exports: [TabsSelectedTabComponent],
  bootstrap: [TabsSelectedTabComponent],
})
export class TabsSelectedTabModule {}
