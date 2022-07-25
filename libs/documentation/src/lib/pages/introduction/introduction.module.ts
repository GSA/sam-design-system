import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IntroductionComponent } from './introduction.component';
import { IconModule } from '@gsa-sam/ngx-uswds-icons';

@NgModule({
  imports: [CommonModule, IconModule],
  exports: [IntroductionComponent],
  declarations: [IntroductionComponent],
  providers: [],
})
export class IntroductionModule {}
