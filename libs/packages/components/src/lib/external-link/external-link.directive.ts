import {
  Directive,
  AfterViewChecked,
  ElementRef,
  Renderer2,
  Input,
  ComponentFactoryResolver,
  ViewContainerRef,
  OnChanges
} from '@angular/core';
import { faCoffee, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
@Directive({
  selector: 'a[href]'
})
export class ExternalLinkDirective
  implements OnChanges {
    private vcRef: ViewContainerRef;
  @Input() href: string;
  @Input() public hideIcon: boolean = false;

  private get hasExternalIcon (): boolean {
    return this.el.nativeElement
      .querySelectorAll('.sds-external-link')
      .length > 0;
  }

  private get canRenderIcon (): boolean {
    return !(this.hasExternalIcon || this.hideIcon);
  }

  private get isExternalLink (): boolean {
    return this.href.replace(/^https?:\/\//,'').replace(/^www\./, '').split('/')[0] != location.hostname;
  }

  constructor (
    private el: ElementRef,
    private renderer: Renderer2, private cfr: ComponentFactoryResolver , private vc : ViewContainerRef) {
      
    }

    public ngOnChanges () {
    if (!this.isExternalLink){
      return;
    }
    if (this.canRenderIcon) {
      this.createIcon();
    }
  }

  private createIcon () {
    // tslint:disable-next-line:no-unused-expression
    this.vc.constructor.name === "ViewContainerRef_";
    const factory = this.cfr.resolveComponentFactory(FaIconComponent);
    const component = this.vc.createComponent(factory);
    this.renderer.addClass(component.location.nativeElement, 'sds-external-link');
    this.renderer.addClass(component.location.nativeElement, 'usa-link');
    this.renderer.addClass(component.location.nativeElement, 'margin-left-05');
    component.instance.iconProp = faExternalLinkAlt;
    component.instance.ngOnChanges({});
  }
}
