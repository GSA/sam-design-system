import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SdsTooltipModule } from '@gsa-sam/components';
import { TooltipBasic } from './tooltip-basic.component';
import { NgxBootstrapIconsModule, exclamationCircle } from 'ngx-bootstrap-icons';
import { IconModule } from 'ngx-uswds-icons';

@NgModule({
  declarations: [TooltipBasic],
  imports: [
    CommonModule,
    IconModule,
    SdsTooltipModule,
    NgxBootstrapIconsModule.pick({exclamationCircle})
  ],
  exports: [TooltipBasic],
  bootstrap: [TooltipBasic]
})
export class TooltipBasicModule {}
