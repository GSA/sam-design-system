import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PopupDirective } from './popup.directive';

@NgModule({
  imports: [CommonModule, FontAwesomeModule],
  exports: [PopupDirective],
  declarations: [ PopupDirective]
})
export class SdsPopupModule { }
