import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterBasic } from './footer-basic.component';
import { IconModule } from 'ngx-uswds-icons';
import { SdsFeedbackModule, SdsFooterModule } from '@gsa-sam/layouts';
import { SdsCollapseModule } from '@gsa-sam/components';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [FooterBasic],
  imports: [
    CommonModule,
    IconModule,
    SdsFooterModule,
    SdsCollapseModule,
    ReactiveFormsModule,
    SdsFeedbackModule,
  ],
  exports: [FooterBasic],
  bootstrap: [FooterBasic]
})
export class FooterBasicModule {}
