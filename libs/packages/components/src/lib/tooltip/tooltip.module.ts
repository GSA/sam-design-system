import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsTooltipDirective } from './tooltip.directive';

@NgModule({
  declarations: [SdsTooltipDirective],
  imports: [CommonModule],
  exports: [SdsTooltipDirective],
})
export class SdsTooltipModule {}
