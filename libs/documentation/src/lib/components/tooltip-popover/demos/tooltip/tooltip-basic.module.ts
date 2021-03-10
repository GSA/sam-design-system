import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SdsIconModule, SdsTooltipModule } from '@gsa-sam/components';
import { TooltipBasic } from './tooltip-basic.component';

@NgModule({
  declarations: [TooltipBasic],
  imports: [
    CommonModule,
    SdsIconModule,
    SdsTooltipModule,
    SdsIconModule
  ],
  exports: [TooltipBasic],
  bootstrap: [TooltipBasic]
})
export class TooltipBasicModule {}
