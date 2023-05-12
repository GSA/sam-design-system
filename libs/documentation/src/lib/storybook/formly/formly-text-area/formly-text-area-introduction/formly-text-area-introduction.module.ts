import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyTextAreaIntroductionComponent } from './formly-text-area-introduction.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FormlyTextAreaIntroductionComponent],
  exports: [FormlyTextAreaIntroductionComponent],
  bootstrap: [FormlyTextAreaIntroductionComponent],
})
export class FormlyTextAreaIntroductionModule {}
