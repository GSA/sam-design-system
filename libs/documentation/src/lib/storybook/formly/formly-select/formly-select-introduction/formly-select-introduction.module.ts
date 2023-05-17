import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlySelectIntroductionComponent } from './formly-select-introduction.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FormlySelectIntroductionComponent],
  exports: [FormlySelectIntroductionComponent],
  bootstrap: [FormlySelectIntroductionComponent],
})
export class FormlySelectIntroductionModule {}
