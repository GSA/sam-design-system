import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExternalLinkIntroductionComponent } from './external-link-introduction.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ExternalLinkIntroductionComponent],
  exports: [ExternalLinkIntroductionComponent],
  bootstrap: [ExternalLinkIntroductionComponent],
})
export class ExternalLinkIntroductionModule {}
