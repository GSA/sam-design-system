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
  HostBinding
} from '@angular/core';
import { faCoffee, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
@Directive({
  selector: 'a[href]'
})
export class ExternalLinkDirective implements OnChanges {
  private vcRef: ViewContainerRef;

  @HostBinding('attr.href')
  @Input() href: string;

  @Input() public hideIcon = false;

  private get isExternalLink(): boolean {
    return (
      this.href
        .replace(/^https?:\/\//, '')
        .replace(/^www\./, '')
        .split('/')[0] !== location.hostname
    );
  }

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private cfr: ComponentFactoryResolver,
    private vc: ViewContainerRef
  ) {}

  public ngOnChanges() {
    if (!this.isExternalLink) {
      return;
    }
    if (!this.hideIcon) {
      this.createIcon();
      this.renderer.setAttribute(this.el.nativeElement, "target", "_blank");
    }
  }

  private createIcon() {
    // tslint:disable-next-line:no-unused-expression
    this.vc.constructor.name === 'ViewContainerRef_';
    const factory = this.cfr.resolveComponentFactory(FaIconComponent);
    const component = this.vc.createComponent(factory);
    component.instance.iconProp = ['fas', 'external-link-alt'];
    const spanElement = document.createElement('span');
    spanElement.classList.add('margin-left-2px');
    const supElement = document.createElement('sup');
    supElement.appendChild(component.location.nativeElement);
    spanElement.appendChild(supElement);
    this.el.nativeElement.appendChild(spanElement);
    component.instance.ngOnChanges({});
  }
}
