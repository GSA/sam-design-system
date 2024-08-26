import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
  TemplateRef,
  OnChanges,
  OnInit,
  ViewChild,
} from '@angular/core';
import { debounce } from './debounce.decorator';
import { Instance, Placement, createPopper } from '@popperjs/core';

@Directive({
  selector: '[sdsPopoverLegacy]',
  exportAs: 'sdsPopoverLegacy',
})
export class SdsPopoverLegacyDirective implements AfterViewInit, OnChanges, OnInit {
  private _sdsPopoverContent: HTMLElement;

  // sdsPopoverDiv: HTMLElement;
  // popoverVisible = false;
  popoverDivId: string;

  @HostListener('click', ['$event']) onClick($event: MouseEvent) {
    const clickedOnContent = this.sdsPopoverLegacy.contains($event.target as any);
    if (clickedOnContent && !this.closeOnContentClick) {
      return;
    }

    this.clickEvent();
  }

  @HostListener('document:click', ['$event'])
  clickout($event: MouseEvent) {
    if (!this.closeOnClickOutside || !this.tooltipShowing) {
      return;
    }

    const clickedInElement = this.el.nativeElement.contains($event.target);
    if (!clickedInElement) {
      this.clickEvent();
    }
  }

  /**
   * Adding listener for keyup.enter to ensure that user can activate popover with keyboard
   */
  @HostListener('keyup.enter', ['$event']) onKeyUp($event: KeyboardEvent) {
    if (!this.closeOnContentClick) {
      return;
    }
    this.clickEvent();
  }

  @HostListener('keyup.escape', ['$event']) onEscape($event: KeyboardEvent) {
    this.hidePopover();
  }

  /**
   * Adding listener for keydown.space to ensure that user can activate popover with keyboard
   */
  @HostListener('keydown.Space', ['$event']) onKeySpace($event: KeyboardEvent) {
    if (!this.closeOnContentClick) {
      return;
    }
    this.clickEvent();
    $event.preventDefault();
  }

  @Input()
  position: Placement = 'top';

  @Input() closeOnContentClick = true;

  @Input() closeOnClickOutside = false;

  // @ViewChild('arrow') arrow: ElementRef;

  popperInstance: Instance
  tooltipShowing = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // this.renderer.addClass(this.el.nativeElement, 'sds-popover');

    // this.sdsPopoverDiv = document.createElement('div');
    console.log('constructor', this.sdsPopoverLegacy)
  }

  ngOnInit(): void {
    console.log('ngOnInit', this.sdsPopoverLegacy)
    // const arrow = document.createElement('div');
    // arrow.setAttribute('id', 'arrow');
    // arrow.setAttribute('data-popper-arrow', '');
    // this.renderer.appendChild(this.sdsPopoverLegacy, arrow);

    this.renderer.addClass((this.sdsPopoverLegacy as HTMLElement), 'popover-legacy')
  }

  ngAfterViewInit() {
    // console.log('ngAfterViewInit', this.sdsPopoverLegacy)
    // console.log('view child arrow', this.arrow)


    // const arrow = document.createElement('div');
    // arrow.setAttribute('id', 'arrow');
    // arrow.setAttribute('data-popper-arrow', '');
    // this.renderer.appendChild(this.sdsPopoverLegacy, arrow)
    this.renderer.setAttribute(this.sdsPopoverLegacy, 'aria-hidden', 'true');
    this.renderer.addClass(this.el.nativeElement, 'sds-popover')
    this.renderer.setAttribute(this.el.nativeElement, 'role', 'button');
    this.renderer.setAttribute(this.el.nativeElement, 'aria-expanded', 'false');
    this.renderer.setAttribute(this.el.nativeElement, 'aria-haspopup', 'dialog');
    this.popperInstance = createPopper(this.el.nativeElement, this.sdsPopoverLegacy as HTMLElement,{
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 8],
          },
        },
      ],
      placement: this.position
    });
    // console.log('instance', this.popperInstance)
    // this.popperInstance
    // setTimeout(()=>{
    // })
    // Generating semi-random id for use with aria-describedby
    // this.popoverDivId = this.el.nativeElement.id
    //   ? `${this.el.nativeElement.id}-popover`
    //   : `${this.el.nativeElement.tagName}-${this.el.nativeElement.offsetTop}-${this.el.nativeElement.offsetWidth}-popover`;
    // this.sdsPopoverDiv.id = this.popoverDivId;

    // this.renderer.addClass(this.sdsPopoverDiv, 'sds-popover__content');
    // this.renderer.addClass(this.sdsPopoverDiv, 'tooltip');
    // this.renderer.addClass(this.sdsPopoverDiv, 'out');
    this.handlePosition();

    // this.renderer.setAttribute(this.sdsPopoverDiv, 'aria-hidden', 'true');

    // Add title section and divider if title included
    // if (this._sdsPopoverTitle) {
    //   this.handlePopoverTitle();
    // }

    // this.handlePopoverContent();

    // this.renderer.setAttribute(this.el.nativeElement, 'role', 'button');
    // this.renderer.setAttribute(this.el.nativeElement, 'aria-expanded', 'false');
    // this.renderer.setAttribute(this.el.nativeElement, 'aria-haspopup', 'dialog');

    // this.renderer.appendChild(this.el.nativeElement, this.sdsPopoverDiv);
  }

  handlePosition() {
    // this.renderer.setAttribute(this.sdsPopoverLegacy, 'data-position', this.position);

    this.renderer.addClass(this.sdsPopoverLegacy, `sds-popover-${this.position}`);
  }

  handlePopoverTitle() {
    // this.renderer.appendChild(this.sdsPopoverDiv, this._sdsPopoverTitle);

    // const divider = document.createElement('hr');
    // this.renderer.addClass(divider, 'divider');
    // this.renderer.appendChild(this.sdsPopoverDiv, divider);
  }

  handlePopoverContent() {
    // this.renderer.appendChild(this.sdsPopoverDiv, this._sdsPopoverContent);
  }

  @Input()
  set sdsPopoverLegacy(value: HTMLElement) {
    // this._sdsPopoverContent = this.handlePopoverSection(value, 'content');
    this._sdsPopoverContent = value;
  }

  get sdsPopoverLegacy(): HTMLElement {
    return this._sdsPopoverContent;
  }

  // @Input()
  // set sdsPopoverTitle(value: HTMLElement) {
  //   this._sdsPopoverTitle = this.handlePopoverSection(value, 'title');
  // }

  // get sdsPopoverTitle(): HTMLElement {
  //   return this._sdsPopoverTitle;
  // }

  handlePopoverSection(
    value: HTMLElement,
    classToApply: string
  ): HTMLElement {
    let popoverSection;
    // if (typeof value === 'string') {
    //   popoverSection = document.createElement('p');
    //   popoverSection.innerText = value;
    //   // this.renderer.addClass(popoverSection, classToApply);
    // } else {
    //   popoverSection = value;
    // }
    return popoverSection;
  }

  /**
   * Using debounce decorator here to prevent a scenario where a popover is
   * applied to a button and this function is called by both the enter key
   * listener and click listener.
   */
  @debounce(100)
  clickEvent() {
    if(!this.tooltipShowing){
      this.showPopover()
    }else {
      this.hidePopover();
    }
    this.tooltipShowing = !this.tooltipShowing;
    // this.popoverVisible = !this.popoverVisible;
    // if (this.popoverVisible) {
    //   this.renderer.addClass(this.sdsPopoverDiv, 'sds-popover__shown');
    //   this.renderer.setAttribute(this.sdsPopoverDiv, 'aria-hidden', 'false');
    //   this.renderer.setAttribute(this.el.nativeElement, 'aria-describedby', this.popoverDivId);
    //   this.renderer.setAttribute(this.el.nativeElement, 'aria-expanded', 'true');
    //   this.renderer.setAttribute(this.el.nativeElement, 'role', 'none');
    //   this.renderer.removeClass(this.sdsPopoverDiv, 'sds-popover__hidden');
    // } else {
    //   this.hidePopover();
    // }
  }

  showPopover(){
    //   this.renderer.addClass(this.sdsPopoverDiv, 'sds-popover__shown');
      this.renderer.setAttribute(this.sdsPopoverLegacy, 'aria-hidden', 'false');
      this.renderer.setAttribute(this.el.nativeElement, 'aria-describedby', this.sdsPopoverLegacy.id);
      this.renderer.setAttribute(this.el.nativeElement, 'aria-expanded', 'true');
      this.renderer.setAttribute(this.el.nativeElement, 'role', 'button');
      // this.renderer.removeClass(this.sdsPopoverDiv, 'sds-popover__hidden');

    // Make the tooltip visible
    (this.sdsPopoverLegacy as HTMLElement).setAttribute('data-show', '');

    // Enable the event listeners
    this.popperInstance.setOptions((options) => ({
      ...options,
      modifiers: [
        ...options.modifiers,
        { name: 'eventListeners', enabled: true },
      ],
    }));

    // Update its position
    this.popperInstance.update();
  }

  hidePopover() {
    // this.hide()
    // this.popoverVisible = false;
    // this.renderer.addClass(this.sdsPopoverDiv, 'sds-popover__hidden');
    this.renderer.setAttribute(this.sdsPopoverLegacy, 'aria-hidden', 'true');
    this.renderer.setAttribute(this.el.nativeElement, 'aria-expanded', 'false');
    this.renderer.setAttribute(this.el.nativeElement, 'role', 'button');

    // this.renderer.removeClass(this.sdsPopoverDiv, 'sds-popover__shown');
    this.renderer.removeAttribute(this.el.nativeElement, 'aria-describedby');

    // Hide the tooltip
    (this.sdsPopoverLegacy as HTMLElement).removeAttribute('data-show');

    // Disable the event listeners
    this.popperInstance.setOptions((options) => ({
      ...options,
      modifiers: [
        ...options.modifiers,
        { name: 'eventListeners', enabled: false },
      ],
    }));
  }
  ngOnChanges(): void {
    // this.onChangesPositionUpdate();
    // this.onChangesSdsPopoverTitleUpdate();
    // this.onChangesSdsPopoverUpdate();
  }

  onChangesPositionUpdate() {
    // const possibleDirections = ['top', 'bottom', 'left', 'right'];
    // this.sdsPopoverDiv.classList.remove(...possibleDirections);

    // this.renderer.setAttribute(this.sdsPopoverDiv, 'data-position', this.position);

    // this.renderer.addClass(this.sdsPopoverDiv, this.position);
  }

  onChangesSdsPopoverUpdate() {
    // const contentToRemove = this.sdsPopoverDiv.querySelector('.content');
    // if (contentToRemove) {
    //   this.renderer.removeChild(contentToRemove.parentNode, contentToRemove);
    //   this.handlePopoverContent();
    // }
  }

  onChangesSdsPopoverTitleUpdate() {
    // const titleToRemove = this.sdsPopoverDiv.querySelector('.title');
    // const dividerToRemove = this.sdsPopoverDiv.querySelector('.divider');
    // if (titleToRemove) {
    //   this.renderer.removeChild(titleToRemove.parentNode, dividerToRemove);
    //   this.renderer.removeChild(titleToRemove.parentNode, titleToRemove);
    //   this.handlePopoverTitle();
    // }
  }
}
