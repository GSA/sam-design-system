import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupBasic } from './popup-basic.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SdsPopupModule } from '@gsa-sam/components';
import { SdsIconModule, SdsPopoverModule, SdsTooltipModule } from '../../../../../../../packages/components/src/lib/public-api';

@NgModule({
  declarations: [PopupBasic],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SdsTooltipModule,
    SdsPopoverModule,
    SdsIconModule
  ],
  exports: [PopupBasic],
  bootstrap: [PopupBasic]
})
export class PopupBasicModule {}
