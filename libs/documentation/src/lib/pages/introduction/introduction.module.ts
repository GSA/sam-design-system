import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IntroductionComponent } from './introduction.component';

@NgModule({
  imports: [CommonModule, FontAwesomeModule],
  exports: [IntroductionComponent],
  declarations: [IntroductionComponent],
  providers: []
})
export class IntroductionModule {}
