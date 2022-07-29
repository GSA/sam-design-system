import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SdsTabsModule } from '@gsa-sam/components';
import { TabsInterceptComponent } from './tabs-intercept.component';
import { IconModule } from '@gsa-sam/ngx-uswds-icons';

@NgModule({
  imports: [CommonModule, SdsTabsModule, IconModule],
  declarations: [TabsInterceptComponent],
  exports: [TabsInterceptComponent],
  bootstrap: [TabsInterceptComponent],
})
export class TabsInterceptModule {}
