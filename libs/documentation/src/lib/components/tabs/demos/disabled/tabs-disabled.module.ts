import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SdsTabsModule } from '@gsa-sam/components';
import { OldTabsDisabledComponent } from './tabs-disabled.component';

@NgModule({
  imports: [CommonModule, SdsTabsModule],
  declarations: [OldTabsDisabledComponent],
  exports: [OldTabsDisabledComponent],
  bootstrap: [OldTabsDisabledComponent],
})
export class TabsDisabledModule {}
