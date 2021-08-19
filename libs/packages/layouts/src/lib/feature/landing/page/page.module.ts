import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  SdsLandingPageComponent,
  SdsLandingPageHeadComponent,
  SdsLandingPageTitleDirective,
  SdsLandingPageHeaderComponent,
  SdsLandingPageLegacyComponent,
  SdsLandingPageLegacyLogoDirective,
  SdsLandingPageOverviewDirective,
  SdsLandingPageOverviewParagraphDirective,
  SdsLandingPageTileDirective,
  SdsLandingPageCardDirective
} from './page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    SdsLandingPageComponent,
    SdsLandingPageHeadComponent,
    SdsLandingPageHeaderComponent,
    SdsLandingPageTitleDirective,
    SdsLandingPageLegacyComponent,
    SdsLandingPageLegacyLogoDirective,
    SdsLandingPageOverviewDirective,
    SdsLandingPageOverviewParagraphDirective,
    SdsLandingPageTileDirective,
    SdsLandingPageCardDirective
  ],
  declarations: [
    SdsLandingPageComponent,
    SdsLandingPageHeadComponent,
    SdsLandingPageHeaderComponent,
    SdsLandingPageTitleDirective,
    SdsLandingPageLegacyComponent,
    SdsLandingPageLegacyLogoDirective,
    SdsLandingPageOverviewDirective,
    SdsLandingPageOverviewParagraphDirective,
    SdsLandingPageTileDirective,
    SdsLandingPageCardDirective
  ],
  providers: [],
})
export class SdsLandingPageModule {}
