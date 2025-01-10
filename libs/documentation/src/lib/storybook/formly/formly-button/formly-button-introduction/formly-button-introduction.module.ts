import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyButtonIntroductionComponent } from './formly-button-introduction.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FormlyButtonIntroductionComponent],
  exports: [FormlyButtonIntroductionComponent],
  bootstrap: [FormlyButtonIntroductionComponent],
})
export class FormlyButtonIntroductionModule {}
