import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapseIntroductionComponent } from './collapse-introduction.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CollapseIntroductionComponent],
  exports: [CollapseIntroductionComponent],
  bootstrap: [CollapseIntroductionComponent],
})
export class CollapseIntroductionModule {}
