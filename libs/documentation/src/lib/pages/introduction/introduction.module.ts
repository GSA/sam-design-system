import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IntroductionComponent } from './introduction.component';
import { PrismModule } from '@ngx-prism/core';

@NgModule({
  imports: [FontAwesomeModule, PrismModule],
  exports: [IntroductionComponent],
  declarations: [IntroductionComponent],
  providers: []
})
export class IntroductionModule {}
