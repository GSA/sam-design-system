import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpiresIntroductionComponent } from './expires-introduction.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ExpiresIntroductionComponent],
  exports: [ExpiresIntroductionComponent],
  bootstrap: [ExpiresIntroductionComponent],
})
export class ExpiresIntroductionModule {}
