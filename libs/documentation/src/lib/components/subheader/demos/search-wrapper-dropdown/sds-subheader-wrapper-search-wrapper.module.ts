import { NgModule } from '@angular/core';
import { SdsSubheaderModule } from '@gsa-sam/layouts';
import { CommonModule } from '@angular/common';
import { SdsSubheaderWrapperSearchWrapperDropdownComponent } from './sds-subheader-wrapper-search-wrapper.component';
@NgModule({
  imports: [
    CommonModule,
    SdsSubheaderModule,
  ],
  declarations: [SdsSubheaderWrapperSearchWrapperDropdownComponent],
  exports: [SdsSubheaderWrapperSearchWrapperDropdownComponent],
  bootstrap: [SdsSubheaderWrapperSearchWrapperDropdownComponent]
})
export class SdsSubheaderSearchWrapperDropdownModule {}
