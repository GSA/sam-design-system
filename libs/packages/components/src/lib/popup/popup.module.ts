import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsPopupDirective } from './popup.directive';

@NgModule({
  declarations: [SdsPopupDirective],
  imports: [CommonModule],
  exports: [SdsPopupDirective],
})
export class SdsPopupModule {}
