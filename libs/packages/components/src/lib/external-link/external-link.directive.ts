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
  @HostBinding('attr.aria-label') ariaLabel = '';

  @Input() href: string;
  @Input() target: string;

  @Input() public hideIcon: boolean = false;
  private internalLinks = ['fsd.gov'];

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
    } else {
      if (!this.hideIcon) {
        this.createIcon();
      }
      this.relAttr = 'noopener';
      this.targetAttr = '_blank';
    }

    /**
     * Add aria label warning users the link will open a new window if the anchor tag
     * does not already have an aria label
     */
    if (this.targetAttr === '_blank') {
      const currentAriaLabel = this.el.nativeElement.getAttribute('aria-label');
      if (!currentAriaLabel || currentAriaLabel.length === 0) {
        this.ariaLabel = `Open ${this.href} in a new window`;
      } else {
        this.ariaLabel = currentAriaLabel;
      }
    }
  }

  private get isExternalLink(): boolean {
    const link = this.href
      .replace(/^https?:\/\//, '')
      .replace(/^www\./, '')
      .split('/')[0];
    return (
      isPlatformBrowser(this.platformId) &&
      !link.includes(location.hostname) &&
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
