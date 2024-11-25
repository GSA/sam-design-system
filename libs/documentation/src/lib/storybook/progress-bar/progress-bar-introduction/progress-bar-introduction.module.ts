import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarIntroductionComponent } from './progress-bar-introduction.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ProgressBarIntroductionComponent],
  exports: [ProgressBarIntroductionComponent],
  bootstrap: [ProgressBarIntroductionComponent],
})
export class ProgressBarIntroductionModule {}
