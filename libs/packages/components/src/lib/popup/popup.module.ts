import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SdsPopupDirective } from './popup.directive';
import { IconSampleModule } from '../../../../../component-sample/src/lib/feature/icon-sample/icon-sample.module';


@NgModule({
  declarations: [SdsPopupDirective],
  imports: [
    CommonModule, FontAwesomeModule, IconSampleModule
  ],
  exports: [SdsPopupDirective]
})
export class SdsPopupModule { }
