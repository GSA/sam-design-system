import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupBasic } from './popup-basic.component';

import { SdsIconModule, SdsPopoverModule, SdsTooltipModule } from '@gsa-sam/components';
import { NgxBootstrapIconsModule, caretDownSquare, squareFill, handThumbsDown } from 'ngx-bootstrap-icons';

@NgModule({
  declarations: [PopupBasic],
  imports: [
    CommonModule,
    SdsIconModule,
    SdsTooltipModule,
    SdsPopoverModule,
    SdsIconModule,
    NgxBootstrapIconsModule.pick({caretDownSquare, squareFill, handThumbsDown})
  ],
  exports: [PopupBasic],
  bootstrap: [PopupBasic]
})
export class PopupBasicModule {}
