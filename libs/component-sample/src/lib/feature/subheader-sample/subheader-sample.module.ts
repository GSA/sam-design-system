import { NgModule } from '@angular/core';
import { SdsSubheaderModule } from '@sam-design-system/layouts';
import { SubheaderSampleComponent } from './subheader-sample.component';
import { SdsDrawerModule } from '@gsa-sam/components';

@NgModule({
  imports: [SdsSubheaderModule, SdsDrawerModule],
  exports: [],
  declarations: [SubheaderSampleComponent]
})
export class SubheaderSampleModule {}
