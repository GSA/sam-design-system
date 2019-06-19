import { NgModule } from '@angular/core';
import { SdsSubheaderModule } from '@sam-design-system/layouts';
import { SubheaderSampleComponent } from './subheader-sample.component';

@NgModule({
  imports: [SdsSubheaderModule],
  exports: [],
  declarations: [SubheaderSampleComponent]
})
export class SubheaderSampleModule {}
