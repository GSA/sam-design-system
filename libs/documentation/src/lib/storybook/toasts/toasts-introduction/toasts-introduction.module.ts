import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastsIntroductionComponent } from './toasts-introduction.component';
import { SdsToastModule } from '@gsa-sam/components';

@NgModule({
  imports: [CommonModule, SdsToastModule],
  declarations: [ToastsIntroductionComponent],
  bootstrap: [ToastsIntroductionComponent],
  exports: [ToastsIntroductionComponent],
})
export class ToastsIntroductionModule {}
