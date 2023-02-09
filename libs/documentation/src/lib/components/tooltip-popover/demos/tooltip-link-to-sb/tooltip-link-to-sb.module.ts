import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipLinkToSbComponent } from './tooltip-link-to-sb.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TooltipLinkToSbComponent],
  bootstrap: [TooltipLinkToSbComponent],
  exports: [TooltipLinkToSbComponent],
})
export class TooltipLinkToSbModule {}
