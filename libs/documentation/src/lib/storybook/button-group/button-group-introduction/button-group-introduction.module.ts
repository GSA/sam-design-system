import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonGroupIntroductionComponent } from './button-group-introduction.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ButtonGroupIntroductionComponent],
  exports: [ButtonGroupIntroductionComponent],
  bootstrap: [ButtonGroupIntroductionComponent],
})
export class ButtonGroupIntroductionModule {}
