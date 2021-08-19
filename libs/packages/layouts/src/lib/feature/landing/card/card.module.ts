import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  SdsLandingCardComponent,
  SdsLandingCardTitleDirective,
} from './card.component';

@NgModule({
  imports: [CommonModule],
  exports: [SdsLandingCardComponent, SdsLandingCardTitleDirective],
  declarations: [SdsLandingCardComponent, SdsLandingCardTitleDirective],
  providers: [],
})
export class SdsLandingCardModule {}
