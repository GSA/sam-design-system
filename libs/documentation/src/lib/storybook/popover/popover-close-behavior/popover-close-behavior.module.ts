import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsPopoverModule } from '@gsa-sam/components';
import { PopoverCloseBehaviorComponent } from './popover-close-behavior.component';

@NgModule({
  imports: [CommonModule, SdsPopoverModule],
  declarations: [PopoverCloseBehaviorComponent],
  exports: [PopoverCloseBehaviorComponent],
  bootstrap: [PopoverCloseBehaviorComponent],
})
export class PopoverCloseBehaviorModule {}
