import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipPositionComponent } from './tooltip-position.component';
import { SdsTooltipModule } from '@gsa-sam/components';

@NgModule({
  imports: [CommonModule, SdsTooltipModule],
  declarations: [TooltipPositionComponent],
  exports: [TooltipPositionComponent],
  bootstrap: [TooltipPositionComponent],
})
export class TooltipPositionModule {}
