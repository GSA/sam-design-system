import { NgModule } from '@angular/core';
import { SdsSubheaderModule } from '@gsa-sam/layouts';
import { CommonModule } from '@angular/common';
import { SdsSubheaderWrapperRequestComponent } from './sds-subheader-wrapper-request.component';

// import { NgxBootstrapIconsModule, chevronLeft } from 'ngx-bootstrap-icons';
// import { IconModule } from '@gsa-sam/ngx-uswds-icons';



@NgModule({
  imports: [
    CommonModule,
    SdsSubheaderModule,
  //  NgxBootstrapIconsModule.pick({chevronLeft})
  ],
  declarations: [SdsSubheaderWrapperRequestComponent],
  exports: [SdsSubheaderWrapperRequestComponent],
  bootstrap: [SdsSubheaderWrapperRequestComponent]
})
export class SdsSubheaderRequestModule {}
