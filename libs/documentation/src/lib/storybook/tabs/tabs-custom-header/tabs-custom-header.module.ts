import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsCustomHeaderComponent } from './tabs-custom-header.component';
import { SdsTabsModule } from '@gsa-sam/components';
import { IconModule } from '@gsa-sam/ngx-uswds-icons';
import { NgxBootstrapIconsModule, table } from 'ngx-bootstrap-icons';

@NgModule({
  imports: [
    CommonModule,
    SdsTabsModule,
    IconModule,
    NgxBootstrapIconsModule.pick({table})
  ],
  declarations: [TabsCustomHeaderComponent],
  exports: [TabsCustomHeaderComponent],
  bootstrap: [TabsCustomHeaderComponent],
})
export class TabsCustomHeaderModule { }
