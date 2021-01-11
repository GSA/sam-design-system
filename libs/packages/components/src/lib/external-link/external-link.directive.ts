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
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { sds } from '@gsa-sam/sam-styles/src/icons/';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
@Directive({
  selector: 'a[href]',
})
export class ExternalLinkDirective implements OnChanges {
  private vcRef: ViewContainerRef;
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
    private renderer: Renderer2,
    private cfr: ComponentFactoryResolver,
    private vc: ViewContainerRef,
    library: FaIconLibrary
  ) {
    library.addIconPacks(fas, sds);
  }

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
    const factory = this.cfr.resolveComponentFactory(FaIconComponent);
    const component = this.vc.createComponent(factory);
    const spanElement = document.createElement('span');
    spanElement.classList.add('margin-left-1px');
    spanElement.classList.add('usa-link--external');
    this.el.nativeElement.appendChild(spanElement);
    component.instance.ngOnChanges({});
  }
}
