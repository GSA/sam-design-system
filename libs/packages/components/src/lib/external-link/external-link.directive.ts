import {
  Directive,
  HostBinding,
  ElementRef,
  PLATFORM_ID,
  Inject,
  Input,
  ViewContainerRef,
  OnChanges,
  AfterViewInit,
} from '@angular/core';

import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: 'a[href]',
})
export class ExternalLinkDirective implements OnChanges {
  @HostBinding('attr.rel') relAttr = '';
  @HostBinding('attr.target') targetAttr = '';
  @HostBinding('attr.href') hrefAttr = '';

  @Input() href: string;
  @Input() target: string;

  @Input() public hideIcon: boolean = false;

  /** Treat these domains as internal links */
  private internalLinks = [
    /** 'fsd.gov' - Removed until fsd.gov contains proper route back to sam.gov */
  ];

  private readonly emailLinkKeyword = 'mailto';

  constructor(
    @Inject(PLATFORM_ID) private platformId: string,
    private el: ElementRef,
    private vc: ViewContainerRef
  ) {}

  public ngOnChanges() {
    this.hrefAttr = this.href;
    this.targetAttr = this.target;

    if (!this.isExternalLink) {
      return;
    }

    this.relAttr = 'noopener';
    this.targetAttr = '_blank';

    const ariaLabel = this._getAriaLabel();
    (this.el.nativeElement as HTMLAnchorElement).setAttribute(
      'aria-label',
      ariaLabel
    );

    if (!this.hideIcon) {
      this.createIcon();
    }
  }

  /**
   * Appends indication that the link will open in a separate window to the aria label.
   * If link does not contain any aria label, then an aria label will be generated using either the inner text
   *  or href value based on whether the anchor element contains children elements or not
   * If link contains aria label, but the label does not contain key words 'new' or 'window',
   *  then the text 'opens in a new window' will be appended to the end of the aria label
   * If link contains aria label as well as the key words 'new' and 'window', then aria label will
   *  be kept as is
   */
  private _getAriaLabel(): string {
    const anchorElement = this.el.nativeElement as HTMLAnchorElement;
    const currentAriaLabel: string = anchorElement.getAttribute('aria-label');

    /** No aria label, attach a default one using inner text if anchor does not contain additional
     * html element as children. If anchor does contain additional html element as children, then use href
     */
    if (!currentAriaLabel || currentAriaLabel.length === 0) {
      let label = anchorElement.firstElementChild
        ? this.href
        : anchorElement.innerText;
      label = label.trim();
      return `Open ${label} in a new window`;
    }

    const lowerCaseAriaLabel = currentAriaLabel.toLowerCase();

    /** Aria label already indicates link will open in a new window, set to defined aria label */
    if (
      lowerCaseAriaLabel.indexOf('new') != -1 &&
      lowerCaseAriaLabel.indexOf('window') != -1
    ) {
      return currentAriaLabel;
    }

    /** Aria label is attached, but does not indicate link will open in new window. 
       Add opens in new window keyword to aria label */
    return `${currentAriaLabel} - opens in a new window`;
  }

  private get isExternalLink(): boolean {
    const link = this.href
      .replace(/^https?:\/\//, '')
      .replace(/^www\./, '')
      .split('/')[0];
    return (
      isPlatformBrowser(this.platformId) &&
      !link.includes(location.hostname) &&
      link.indexOf(this.emailLinkKeyword) !== 0 &&
      !this.internalLinks.includes(link)
    );
  }
  private createIcon() {
    // tslint:disable-next-line:no-unused-expression
    this.vc.constructor.name === 'ViewContainerRef_';
    const spanElement = document.createElement('span');
    spanElement.classList.add('margin-left-1px');
    spanElement.classList.add('usa-link--external');
    spanElement.classList.add('font-body-md');
    this.el.nativeElement.appendChild(spanElement);
  }
}
