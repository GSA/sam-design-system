import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TabPanelComponent } from './tab-panel.component';
import { TabsComponent } from './tabs.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TabsComponent, TabPanelComponent],
  exports: [TabsComponent, TabPanelComponent],
})
export class SdsTabsModule {}
