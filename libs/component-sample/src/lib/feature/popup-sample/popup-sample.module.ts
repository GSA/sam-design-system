import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupSampleComponent } from './popup-sample.component';
import { SdsPopupModule } from '@gsa-sam/components';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { IconSampleModule } from '../icon-sample/icon-sample.module';
import { library } from '@fortawesome/fontawesome-svg-core';
import { sds } from '@gsa-sam/sam-styles/src/icons/';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { IconSampleModule } from '../icon-sample/icon-sample.module';

@NgModule({
  declarations: [PopupSampleComponent],
  imports: [
    CommonModule, SdsPopupModule, FontAwesomeModule, IconSampleModule
  ],exports: [PopupSampleComponent]
})
export class PopupSampleModule {
  constructor() {
    library.add(fas, sds);
  }
}
