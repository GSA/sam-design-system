import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SdsTabsModule } from '@gsa-sam/components';
import { TabsBasicComponent } from './tabs-basic.component';
import { IconModule } from '@gsa-sam/ngx-uswds-icons';

@NgModule({
  imports: [CommonModule, SdsTabsModule, IconModule],
  declarations: [TabsBasicComponent],
  exports: [TabsBasicComponent],
  bootstrap: [TabsBasicComponent],
})
export class TabsBasicModule {}
