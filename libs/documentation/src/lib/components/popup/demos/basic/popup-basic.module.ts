import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupBasic } from './popup-basic.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SdsPopupModule } from '@gsa-sam/components';

@NgModule({
  declarations: [PopupBasic],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SdsPopupModule
  ],
  exports: [PopupBasic],
  bootstrap: [PopupBasic]
})
export class PopupBasicModule {}
