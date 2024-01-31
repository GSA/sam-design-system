import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyStepperIntroductionComponent } from './formly-stepper-introduction.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FormlyStepperIntroductionComponent],
  exports: [FormlyStepperIntroductionComponent],
  bootstrap: [FormlyStepperIntroductionComponent],
})
export class FormlyStepperIntroductionModule {}
