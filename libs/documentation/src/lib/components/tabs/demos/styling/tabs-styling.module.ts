import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SdsTabsModule } from '@gsa-sam/components';
import { TabsStylingComponent } from './tabs-styling.component';

@NgModule({
  imports: [CommonModule, SdsTabsModule],
  declarations: [TabsStylingComponent],
  exports: [TabsStylingComponent],
  bootstrap: [TabsStylingComponent],
})
export class TabsStylingModule {}
