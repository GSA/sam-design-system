import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SdsFooterModule} from '@gsa-sam/components/footer';
import {FooterOverviewExample} from './overview/footer-overview-example';

export {
  FooterOverviewExample,
};

const EXAMPLES = [
  FooterOverviewExample,
];

@NgModule({
  imports: [
    CommonModule,
    SdsFooterModule
  ],
  declarations: EXAMPLES,
  exports: EXAMPLES,
})
export class FooterExamplesModule {
}
