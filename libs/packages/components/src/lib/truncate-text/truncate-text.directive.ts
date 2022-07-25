import {
  Directive,
  ElementRef,
  OnInit,
  Input,
  OnDestroy,
  AfterViewInit,
  HostListener,
  Injector,
  ViewContainerRef,
} from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';
import {
  ViewportRuler,
  OverlayConfig,
  Overlay,
  OverlayRef,
  ConnectedPosition,
} from '@angular/cdk/overlay';
import { Subscription, merge } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { PortalInjector, ComponentPortal } from '@angular/cdk/portal';
import { SdsTruncatedTextContainerComponent } from './truncate-text-container.component';
import { SDS_TRUNCATED_TEXT_DATA } from './truncates-text-base';

@Directive({ selector: '[sdsTruncateTextByLine]' })
export class SdsTruncateTextByLineDirective
  implements OnInit, OnDestroy, AfterViewInit {
  /** Maximum lines of text limit */
  @Input('sdsTruncateTextByLine')
  get textLinesLimit(): any {
    return this._textLinesLimit;
  }
  set textLinesLimit(_textLinesLimit: any) {
    _textLinesLimit = coerceNumberProperty(_textLinesLimit);
    if (this._textLinesLimit !== _textLinesLimit) {
      this._textLinesLimit = _textLinesLimit;
    }
  }
  private _textLinesLimit: number;

  /** PortalOutlet */
  private _overlayRef: OverlayRef | null = null;

  /** Holds subscription to stream of overlay closing events */
  private _closingActionsSubscription = Subscription.EMPTY;

  /** Holds initial text */
  private initialText: string;

  /** Subscription to window resize stream */
  windowResize$: Subscription;

  /** Approximated character width of the host text */
  private approximatedCharacterWidth: number;

  constructor(
    private _overlay: Overlay,
    private _injector: Injector,
    private _element: ElementRef,
    private _viewportRuler: ViewportRuler,
    private _viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit() {
    this.initialText = this._element.nativeElement.innerText.trim();

    // Clone element to facilitate calculations
    const hostCloneEl = this._element.nativeElement.cloneNode() as HTMLElement;

    // Add 1 character to calculate character width
    hostCloneEl.innerHTML = 'x';

    // Render the clone to get character width
    this._element.nativeElement.parentElement.appendChild(hostCloneEl);

    // Set the clone to inline to prevent cases where the clone
    // expands to 100% width of the container
    hostCloneEl.setAttribute('style', 'display: inline');

    // These are close approximations that are used to better guess
    // how many characters fit in X number of lines
    this.approximatedCharacterWidth = hostCloneEl.offsetWidth;

    // Remove clone after calculations
    hostCloneEl.remove();
  }

  ngAfterViewInit(): void {
    this.windowResize$ = this._viewportRuler
      .change(0)
      .pipe(startWith('Start'))
      .subscribe(() => this.updateUI());
  }

  ngOnDestroy(): void {
    if (this._overlayRef) {
      this._overlayRef.dispose();
    }
    this._closingActionsSubscription.unsubscribe();
    this.windowResize$.unsubscribe();
  }

  /** Configures and creates the CDK overlay */
  private _createOverlay() {
    const overlayPositions: ConnectedPosition = {
      originX: 'start',
      originY: 'bottom',
      overlayX: 'start',
      overlayY: 'top',
    };
    const config = new OverlayConfig({
      positionStrategy: this._overlay
        .position()
        .flexibleConnectedTo(this._element)
        .withLockedPosition()
        .withPositions([overlayPositions])
        .withTransformOriginOn('.sds-overlay'),
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop',
      scrollStrategy: this._overlay.scrollStrategies.close(),
    });
    return this._overlay.create(config);
  }

  /** Attach a ComponentPortal to the overlay **/
  private _attachContainer(overlay: OverlayRef) {
    const injector = new PortalInjector(
      this._injector,
      new WeakMap([[SDS_TRUNCATED_TEXT_DATA, { text: this.initialText }]])
    );
    const containerPortal = new ComponentPortal(
      SdsTruncatedTextContainerComponent,
      this._viewContainerRef,
      injector
    );
    const containerRef = overlay.attach(containerPortal);

    return containerRef.instance;
  }

  /** Returns a stream that emits whenever an action that should close the overlay occurs. */
  private _overlayClosingActions() {
    const backdrop = this._overlayRef.backdropClick();
    const detachments = this._overlayRef.detachments();
    return merge(backdrop, detachments);
  }

  /** Width of host element */
  private _getHostWidth(): number {
    return this._element.nativeElement.offsetWidth;
  }

  /** Approximated number of characters that are visible in the container */
  private _getVisibleCharacters(): number {
    return Math.floor(
      (this._getHostWidth() / this.approximatedCharacterWidth) *
        this.textLinesLimit
    );
  }

  private _isNotLongEnough(): boolean {
    return this._getVisibleCharacters() > this.initialText.length;
  }

  @HostListener('click')
  openOverlay(): void {
    // Exit if all text can be visible in container
    if (this._isNotLongEnough()) return;

    this._overlayRef = this._createOverlay();
    const container = this._attachContainer(this._overlayRef);
    this._closingActionsSubscription = this._overlayClosingActions().subscribe(
      () => this.closeOverlay()
    );
    // Wait for the next event loop tick to start the animation
    setTimeout(() => {
      container.startAnimation();
    });
  }

  updateUI() {
    // Exit if all text can be visible in container
    if (this._isNotLongEnough()) return;

    const wordCut = false;
    const ellipsis = '...';
    const limit = this._getVisibleCharacters() - ellipsis.length;

    let visibleText = this.initialText.slice(0, limit);

    if (!wordCut) {
      const isEndofWord = this.initialText.substr(limit, limit + 1) === ' ';
      if (!isEndofWord) {
        const previousWord = visibleText.lastIndexOf(' ');
        visibleText = visibleText.slice(0, previousWord);
      }
    }

    this._element.nativeElement.innerText = visibleText + ellipsis;
  }

  closeOverlay() {
    this._closingActionsSubscription.unsubscribe();
    this._overlayRef.detach();
  }
}
