import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionsIntroductionComponent } from './actions-introduction.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ActionsIntroductionComponent],
  exports: [ActionsIntroductionComponent],
  bootstrap: [ActionsIntroductionComponent],
})
export class ActionsIntroductionModule {}
