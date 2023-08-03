import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideOutIntroductionComponent } from './slide-out-introduction.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SlideOutIntroductionComponent],
  bootstrap: [SlideOutIntroductionComponent],
  exports: [SlideOutIntroductionComponent],
})
export class SlideOutIntroductionModule {}
