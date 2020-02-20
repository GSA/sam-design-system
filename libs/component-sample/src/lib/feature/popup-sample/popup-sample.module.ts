import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsPopupSampleComponent } from './popup-sample.component';
import { SdsPopupModule } from '@gsa-sam/components';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconSampleModule } from '../icon-sample/icon-sample.module';
@NgModule({
  declarations: [SdsPopupSampleComponent],
  imports: [
    CommonModule, SdsPopupModule, FontAwesomeModule, IconSampleModule
  ],exports: [SdsPopupSampleComponent]
})
export class SdsPopupSampleModule { }
