import { NgModule } from '@angular/core';
import { SdsSubheaderModule } from '@gsa-sam/layouts';
import { CommonModule } from '@angular/common';
import { SdsSubheaderWrapperSearchWrapperComponent } from './sds-subheader-wrapper-search-wrapper.component';

@NgModule({
  imports: [
    CommonModule,
    SdsSubheaderModule,
  ],
  declarations: [SdsSubheaderWrapperSearchWrapperComponent],
  exports: [SdsSubheaderWrapperSearchWrapperComponent],
  bootstrap: [SdsSubheaderWrapperSearchWrapperComponent]
})
export class SdsSubheaderSearchWrapperModule {}
