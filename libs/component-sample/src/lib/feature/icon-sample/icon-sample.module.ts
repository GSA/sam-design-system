import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconSampleComponent } from './icon-sample.component';
import { FaConfig } from '@fortawesome/angular-fontawesome';
import { sds } from '@gsa-sam/sam-styles/src/icons/';

@NgModule({
  imports: [FontAwesomeModule],
  exports: [IconSampleComponent],
  declarations: [IconSampleComponent],
  providers: []
})
export class IconSampleModule {
  constructor(config: FaConfig){
    config.fallbackIcon = sds;
  }
}
