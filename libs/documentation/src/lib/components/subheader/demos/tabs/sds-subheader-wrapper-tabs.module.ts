import { NgModule } from '@angular/core';
import { SdsSubheaderModule } from '@gsa-sam/layouts';
import { CommonModule } from '@angular/common';
import { SdsSubheaderWrapperTabComponent } from './sds-subheader-wrapper-tabs.component';

@NgModule({
  imports: [
    CommonModule,
    SdsSubheaderModule,
  ],
  declarations: [SdsSubheaderWrapperTabComponent],
  exports: [SdsSubheaderWrapperTabComponent],
  bootstrap: [SdsSubheaderWrapperTabComponent]
})
export class SdsSubheaderTabModule {}
