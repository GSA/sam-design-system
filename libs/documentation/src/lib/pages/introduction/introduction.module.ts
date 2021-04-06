import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import {SdsIconModule } from '@gsa-sam/components';
import { IntroductionComponent } from './introduction.component';

@NgModule({
  imports: [CommonModule, SdsIconModule],
  exports: [IntroductionComponent],
  declarations: [IntroductionComponent],
  providers: []
})
export class IntroductionModule {}
