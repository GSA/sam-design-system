import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterSampleComponent } from './footer-sample.component';
import { SdsFooterModule } from '../../../../../packages/components/src/lib/footer/footer.module';
@NgModule({
  declarations: [FooterSampleComponent],
  imports: [
    CommonModule, SdsFooterModule
  ], exports: [FooterSampleComponent]
})
export class FooterSampleModule { }
