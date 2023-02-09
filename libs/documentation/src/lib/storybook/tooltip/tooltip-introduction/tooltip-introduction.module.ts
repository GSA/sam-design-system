import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipIntroductionComponent } from './tooltip-introduction.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TooltipIntroductionComponent],
  exports: [TooltipIntroductionComponent],
  bootstrap: [TooltipIntroductionComponent],
})
export class TooltipIntroductionModule {}
