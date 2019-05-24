import { NgModule } from '@angular/core';

import { SdsMenuModule } from '@gsa-sam/components';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SubheaderSampleComponent } from './subheader-sample.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, FontAwesomeModule, SdsMenuModule],
  exports: [],
  declarations: [SubheaderSampleComponent],
  providers: []
})
export class SubheaderSampleModule {}
