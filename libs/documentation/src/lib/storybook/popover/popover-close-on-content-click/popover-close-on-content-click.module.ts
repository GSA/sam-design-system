import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsPopoverModule } from '@gsa-sam/components';
import { PopoverCloseOnContentClickComponent } from './popover-close-on-content-click.component';

@NgModule({
  imports: [CommonModule, SdsPopoverModule],
  declarations: [PopoverCloseOnContentClickComponent],
  exports: [PopoverCloseOnContentClickComponent],
  bootstrap: [PopoverCloseOnContentClickComponent],
})
export class PopoverCloseOnContentClickModule {}
