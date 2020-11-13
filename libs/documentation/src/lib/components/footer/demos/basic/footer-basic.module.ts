import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterBasic } from './footer-basic.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SdsFooterModule } from '@gsa-sam/layouts';
import { SdsCollapseModule } from '@gsa-sam/components';


@NgModule({
  declarations: [FooterBasic],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SdsFooterModule,
    SdsCollapseModule
  ],
  exports: [FooterBasic],
  bootstrap: [FooterBasic]
})
export class FooterBasicModule {}
