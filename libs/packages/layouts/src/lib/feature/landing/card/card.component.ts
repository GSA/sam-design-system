import { Component, Directive } from '@angular/core';

@Directive({
  selector: `[sdsLandingCardTitle]`,
  host: {
    class: 'sds-card__title',
  },
})
export class SdsLandingCardTitleDirective {}

@Component({
  selector: 'sds-landing-card',
  templateUrl: './card.component.html',
})
export class SdsLandingCardComponent {}
