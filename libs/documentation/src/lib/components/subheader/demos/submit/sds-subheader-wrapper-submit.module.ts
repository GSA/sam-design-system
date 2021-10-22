import { NgModule } from '@angular/core';
import { SdsSubheaderModule } from '@gsa-sam/layouts';
import { CommonModule } from '@angular/common';
import { SdsSubheaderWrapperSubmitComponent } from './sds-subheader-wrapper-submit.component';

@NgModule({
  imports: [
    CommonModule,
    SdsSubheaderModule,
  ],
  declarations: [SdsSubheaderWrapperSubmitComponent],
  exports: [SdsSubheaderWrapperSubmitComponent],
  bootstrap: [SdsSubheaderWrapperSubmitComponent]
})
export class SdsSubheaderSubmitModule {}
