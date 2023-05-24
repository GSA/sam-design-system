import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogIntroductionComponent } from './dialog-introduction.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DialogIntroductionComponent],
  exports: [DialogIntroductionComponent],
  bootstrap: [DialogIntroductionComponent],
})
export class DialogIntroductionModule { }
