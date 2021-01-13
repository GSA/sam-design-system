import {
  Directive,
  AfterViewChecked,
  ElementRef,
  Renderer2,
  Input,
  ComponentFactoryResolver,
  ViewContainerRef,
  OnChanges,
  HostListener,
} from '@angular/core';

import { FaIconComponent } from '@fortawesome/angular-fontawesome';
@Directive({
  selector: 'a[href]',
})
export class ExternalLinkDirective implements OnChanges {
  @Input() href: string;
  @Input() public hideIcon: boolean = false;
  private internalLinks = ['fsd.gov'];

  private get isExternalLink(): boolean {
    let link = this.href
      .replace(/^https?:\/\//, '')
      .replace(/^www\./, '')
      .split('/')[0];
    return link != location.hostname && !this.internalLinks.includes(link);
  }

  constructor(
    private el: ElementRef,
    private cfr: ComponentFactoryResolver,
    private vc: ViewContainerRef
  ) {}

  @HostListener('click', ['$event'])
  click(event: Event) {
    window.location.href = this.href;
  }

  public ngOnChanges() {
    if (!this.isExternalLink) {
      return;
    }
    if (!this.hideIcon) {
      this.createIcon();
    }
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
