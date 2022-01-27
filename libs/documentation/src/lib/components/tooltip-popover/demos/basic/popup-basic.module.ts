import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupBasic } from './popup-basic.component';

import { SdsPopoverModule, SdsTooltipModule } from '@gsa-sam/components';
import {
  NgxBootstrapIconsModule,
  caretDownSquare,
  squareFill,
  handThumbsDown,
} from 'ngx-bootstrap-icons';
import { IconModule, StackedIconModule } from '@gsa-sam/ngx-uswds-icons';

@NgModule({
  declarations: [PopupBasic],
  imports: [
    CommonModule,
    IconModule,
    StackedIconModule,
    SdsTooltipModule,
    SdsPopoverModule,
    NgxBootstrapIconsModule.pick({
      caretDownSquare,
      squareFill,
      handThumbsDown,
    }),
  ],
  exports: [PopupBasic],
  bootstrap: [PopupBasic],
})
export class PopupBasicModule {}
