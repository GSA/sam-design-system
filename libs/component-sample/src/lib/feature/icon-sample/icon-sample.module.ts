import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconSampleComponent } from './icon-sample.component';

@NgModule({
  imports: [FontAwesomeModule],
  exports: [IconSampleComponent],
  declarations: [IconSampleComponent],
  providers: []
})
export class IconSampleModule {}
