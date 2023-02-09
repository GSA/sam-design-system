import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipSdsTooltipComponent } from './tooltip-sdsTooltip.component';
import { SdsTooltipModule } from '@gsa-sam/components';

@NgModule({
  imports: [CommonModule, SdsTooltipModule],
  declarations: [TooltipSdsTooltipComponent],
  exports: [TooltipSdsTooltipComponent],
  bootstrap: [TooltipSdsTooltipComponent],
})
export class TooltipSdsTooltipModule {}
