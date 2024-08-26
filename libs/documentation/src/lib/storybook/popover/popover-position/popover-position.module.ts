import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsPopoverLegacyModule, SdsPopoverModule } from '@gsa-sam/components';
import { PopoverPositionComponent } from './popover-position.component';

@NgModule({
  imports: [CommonModule, SdsPopoverModule, SdsPopoverLegacyModule],
  declarations: [PopoverPositionComponent],
  exports: [PopoverPositionComponent],
  bootstrap: [PopoverPositionComponent],
})
export class PopoverPositionModule {}
