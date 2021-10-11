import { NgModule } from '@angular/core';
import { SdsSubheaderModule } from '@gsa-sam/layouts';
import { CommonModule } from '@angular/common';
import { SdsSubheaderWrapperRequestComponent } from './sds-subheader-wrapper-request.component';

@NgModule({
  imports: [
    CommonModule,
    SdsSubheaderModule,
  ],
  declarations: [SdsSubheaderWrapperRequestComponent],
  exports: [SdsSubheaderWrapperRequestComponent],
  bootstrap: [SdsSubheaderWrapperRequestComponent]
})
export class SdsSubheaderRequestModule {}
