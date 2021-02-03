import {
  Directive,
  HostBinding,
  ElementRef,
  PLATFORM_ID,
  Inject,
  Input,
  ViewContainerRef,
  OnChanges,
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
  @Input() public hideIcon: boolean = false;
  private internalLinks = ['fsd.gov'];

  constructor(
    @Inject(PLATFORM_ID) private platformId: string,
    private el: ElementRef,
    private vc: ViewContainerRef
  ) {}

  public ngOnChanges() {
    if (!this.isExternalLink) {
      return;
    } else {
      if (!this.hideIcon) {
        this.createIcon();
      }
      this.hrefAttr = this.href;
      this.relAttr = 'noopener';
      this.targetAttr = '_blank';
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
    this.el.nativeElement.appendChild(spanElement);
  }
}
