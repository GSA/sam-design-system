import { NgModule } from '@angular/core';
import { SdsSubheaderModule } from '@sam-design-system/layouts';
import { SubheaderSampleComponent } from './subheader-sample.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [SdsSubheaderModule, CommonModule],
  exports: [],
  declarations: [SubheaderSampleComponent]
})
export class SubheaderSampleModule {}
