import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverIntroductionComponent } from './popover-introduction.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PopoverIntroductionComponent],
  exports: [PopoverIntroductionComponent],
  bootstrap: [PopoverIntroductionComponent],
})
export class PopoverIntroductionModule {}
