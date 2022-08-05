import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SdsTabsModule } from '@gsa-sam/components';
import { TabsAutoActivateComponent } from './tabs-auto-activate.component';

@NgModule({
  imports: [CommonModule, SdsTabsModule],
  declarations: [TabsAutoActivateComponent],
  exports: [TabsAutoActivateComponent],
  bootstrap: [TabsAutoActivateComponent],
})
export class TabsAutoActivateModule {}
