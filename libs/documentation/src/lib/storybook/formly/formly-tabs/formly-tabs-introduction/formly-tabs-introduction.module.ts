import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyTabsIntroductionComponent } from './formly-tabs-introduction.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FormlyTabsIntroductionComponent],
  exports: [FormlyTabsIntroductionComponent],
  bootstrap: [FormlyTabsIntroductionComponent],
})
export class FormlyTabsIntroductionModule {}
