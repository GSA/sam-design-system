import {
  Component,
  Directive,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'sds-landing-page-head',
  templateUrl: 'page-head.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SdsLandingPageHeadComponent {}

@Directive({
  selector: `[sdsLandingPageTitle]`,
  host: {
    class: 'text-gray-70 text-ls-neg-2',
  },
})
export class SdsLandingPageTitleDirective {}

@Component({
  selector: 'sds-landing-page-header',
  templateUrl: 'page-header.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SdsLandingPageHeaderComponent {}

@Component({
  selector: 'sds-landing-page-legacy',
  templateUrl: 'page-legacy.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'grid-col flex-auto text-center',
  },
})
export class SdsLandingPageLegacyComponent {}

@Directive({
  selector: `[sdsLandingPageLegacyLogo]`,
  host: {
    '[class]': "logoSize ? 'height-' + logoSize : 'height-4'",
  },
})
export class SdsLandingPageLegacyLogoDirective {
  @Input() logoSize: string;
}

@Directive({
  selector: `[sdsLandingPageOverview]`,
  host: {
    class: 'display-block margin-top-2',
  },
})
export class SdsLandingPageOverviewDirective {}

@Directive({
  selector: `[sdsLandingPageOverviewParagraph]`,
  host: {
    class: 'font-sans-md line-height-sans-4',
  },
})
export class SdsLandingPageOverviewParagraphDirective {}

@Directive({
  selector: `[sdsLandingPageTile]`,
  host: {
    class: 'grid-col',
  },
})
export class SdsLandingPageTileDirective {}

@Directive({
  selector: `[sdsLandingPageCard]`,
  host: {
    class: '',
  },
})
export class SdsLandingPageCardDirective {}

@Component({
  selector: 'sds-landing-page',
  templateUrl: 'page.component.html',
})
export class SdsLandingPageComponent {}
