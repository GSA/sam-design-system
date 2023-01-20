import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyInputIntroductionComponent } from './formly-input-introduction.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FormlyInputIntroductionComponent],
  exports: [FormlyInputIntroductionComponent],
  bootstrap: [FormlyInputIntroductionComponent],
})
export class FormlyInputIntroductionModule { }
