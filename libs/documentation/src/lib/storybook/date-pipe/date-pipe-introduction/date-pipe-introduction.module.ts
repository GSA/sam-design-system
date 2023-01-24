import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipeIntroductionComponent } from './date-pipe-introduction.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DatePipeIntroductionComponent],
  exports: [DatePipeIntroductionComponent],
  bootstrap: [DatePipeIntroductionComponent],
})
export class DatePipeIntroductionModule {}
