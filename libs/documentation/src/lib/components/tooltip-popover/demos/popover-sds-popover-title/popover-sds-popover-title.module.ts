import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsPopoverModule } from '@gsa-sam/components';
import { PopoverSdsPopoverTitleComponent } from './popover-sds-popover-title.component';
import { IconModule, StackedIconModule } from '@gsa-sam/ngx-uswds-icons';
import {
  NgxBootstrapIconsModule,
  caretDownSquare,
  squareFill,
  handThumbsDown,
} from 'ngx-bootstrap-icons';

@NgModule({
  imports: [
    CommonModule,
    SdsPopoverModule,
    IconModule,
    StackedIconModule,
    NgxBootstrapIconsModule.pick({
      caretDownSquare,
      squareFill,
      handThumbsDown,
    }),
  ],
  declarations: [PopoverSdsPopoverTitleComponent],
  exports: [PopoverSdsPopoverTitleComponent],
  bootstrap: [PopoverSdsPopoverTitleComponent],
})
export class PopoverSdsPopoverTitleModule {}
