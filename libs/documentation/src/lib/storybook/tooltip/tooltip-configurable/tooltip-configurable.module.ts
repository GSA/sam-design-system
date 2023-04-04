import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipConfigurableComponent } from './tooltip-configurable.component';
import { SdsTooltipModule } from '@gsa-sam/components';

@NgModule({
  imports: [CommonModule, SdsTooltipModule],
  declarations: [TooltipConfigurableComponent],
  exports: [TooltipConfigurableComponent],
  bootstrap: [TooltipConfigurableComponent],
})
export class TooltipConfigurableModule {}
