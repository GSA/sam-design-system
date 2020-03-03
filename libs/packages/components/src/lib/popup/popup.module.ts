import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SdsPopupDirective } from './popup.directive';

@NgModule({
  declarations: [SdsPopupDirective],
  imports: [
    CommonModule, FontAwesomeModule
  ],
  exports: [SdsPopupDirective]
})
export class SdsPopupModule { }
