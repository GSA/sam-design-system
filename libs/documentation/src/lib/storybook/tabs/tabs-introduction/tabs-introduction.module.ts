import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsTabsModule } from '@gsa-sam/components';
import { TabsIntroductionComponent } from './tabs-introduction.component';

@NgModule({
  imports: [CommonModule, SdsTabsModule],
  declarations: [TabsIntroductionComponent],
  exports: [TabsIntroductionComponent],
  bootstrap: [TabsIntroductionComponent],
})
export class TabsIntroductionModule {}
