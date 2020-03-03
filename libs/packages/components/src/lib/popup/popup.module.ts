import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsPopupDirective } from './popup.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { sds } from '@gsa-sam/sam-styles/src/icons/';
import { fas } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [SdsPopupDirective],
  imports: [
    CommonModule, FontAwesomeModule
  ],
  exports: [SdsPopupDirective]
})
export class SdsPopupModule {
  constructor() {
    library.add(fas, sds);
  }
 }
