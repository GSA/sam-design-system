import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterSampleComponent } from './footer-sample.component';
import { SdsFooterModule } from '../../../../../packages/components/src/lib/footer/footer.module';
import { CollapseSampleComponent } from '../../collapse-sample.component';
import { SdsCollapseModule } from '../../../../../../libs/packages/components/src/lib/collapse/collapse.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [FooterSampleComponent],
  imports: [
    CommonModule, SdsFooterModule, SdsCollapseModule, FontAwesomeModule
  ], exports: [FooterSampleComponent]
})
export class FooterSampleModule { }
