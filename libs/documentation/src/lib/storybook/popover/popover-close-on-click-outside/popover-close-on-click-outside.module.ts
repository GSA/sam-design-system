import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsPopoverModule } from '@gsa-sam/components';
import { PopoverCloseOnClickOutsideComponent } from './popover-close-on-click-outside.component';

@NgModule({
  imports: [CommonModule, SdsPopoverModule],
  declarations: [PopoverCloseOnClickOutsideComponent],
  exports: [PopoverCloseOnClickOutsideComponent],
  bootstrap: [PopoverCloseOnClickOutsideComponent],
})
export class PopoverCloseOnClickOutsideModule {}
