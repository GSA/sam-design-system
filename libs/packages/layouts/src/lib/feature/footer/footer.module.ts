import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsFooterComponent } from './footer.component';
import { RouterModule } from '@angular/router';
import { SdsCollapseModule } from '@gsa-sam/components';
import { SdsExternalLinkDirectivesModule } from '@gsa-sam/components';
import { SdsFeedbackModule } from '../sds-feedback/sds-feedback.module';
import { UsaAccordionModule } from '@gsa-sam/ngx-uswds';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SdsCollapseModule,
    SdsExternalLinkDirectivesModule,
    SdsFeedbackModule,
    UsaAccordionModule,
  ],
  declarations: [SdsFooterComponent],
  exports: [SdsFooterComponent],
})
export class SdsFooterModule {}
