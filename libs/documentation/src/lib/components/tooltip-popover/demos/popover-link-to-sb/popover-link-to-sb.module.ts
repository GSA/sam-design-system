import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverLinkToSbComponent } from './popover-link-to-sb.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PopoverLinkToSbComponent],
  bootstrap: [PopoverLinkToSbComponent],
  exports: [PopoverLinkToSbComponent],
})
export class PopoverLinkToSbModule { }
