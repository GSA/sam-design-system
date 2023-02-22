import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsAriaComponent } from './tabs-aria.component';
import { SdsTabsModule } from '@gsa-sam/components';

@NgModule({
  imports: [CommonModule, SdsTabsModule],
  declarations: [TabsAriaComponent],
  bootstrap: [TabsAriaComponent],
  exports: [TabsAriaComponent],
})
export class TabsAriaModule {}
