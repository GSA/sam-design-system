import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsPopoverModule } from '@gsa-sam/components';
import { PopoverTitleComponent } from './popover-title.component';
import { IconModule, StackedIconModule } from '@gsa-sam/ngx-uswds-icons';
import { NgxBootstrapIconsModule, caretDownSquare, squareFill, handThumbsDown } from 'ngx-bootstrap-icons';

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
  declarations: [PopoverTitleComponent],
  exports: [PopoverTitleComponent],
  bootstrap: [PopoverTitleComponent],
})
export class PopoverTitleModule {}
