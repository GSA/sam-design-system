import { NgModule } from '@angular/core';
import { SdsSubheaderModule } from '@sam-design-system/layouts';
import { SdsSearchModule } from '@gsa-sam/components';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SubheaderSampleComponent } from './subheader-sample.component';

@NgModule({
  imports: [FontAwesomeModule, SdsSubheaderModule, SdsSearchModule],
  exports: [],
  declarations: [SubheaderSampleComponent]
})
export class SubheaderSampleModule {}
