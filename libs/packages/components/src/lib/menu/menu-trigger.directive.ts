import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  ViewContainerRef,
  HostBinding,
  HostListener,
} from '@angular/core';
import {
  FocusMonitor,
  FocusOrigin,
  isFakeMousedownFromScreenReader,
} from '@angular/cdk/a11y';
import {
  FlexibleConnectedPositionStrategy,
  HorizontalConnectionPos,
  Overlay,
  OverlayConfig,
  OverlayRef,
  VerticalConnectionPos,
} from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { normalizePassiveListenerOptions } from '@angular/cdk/platform';
import { merge, Subscription } from 'rxjs';
import {
  SdsMenuInterface,
  SdsMenuComponent,
  MenuPositionX,
  MenuPositionY,
} from './menu.component';

@Directive({
  selector: '[sdsMenuTriggerFor]',
})
export class SdsMenuTriggerForDirective implements OnDestroy {
  /** ARIA haspopup for the menu trigger. */
  @HostBinding('attr.aria-haspopup') ariaHasPopup = true;

  /** ARIA expanded for the menu trigger. */
  @HostBinding('attr.aria-expanded')
  get menuOpen(): boolean {
    return this._menuOpen;
  }

  /** Holds the menu instance */
  private _menu: SdsMenuInterface;

  /** Holds value for menuOpen variable */
  private _menuOpen = false;

  /** CDK Portal for menu panel */
  private _portal: TemplatePortal;

  /** PortalOutlet */
  private _overlayRef: OverlayRef | null = null;

  /** Tracks input type  */
  private _openedBy: 'mouse' | 'touch' | null = null;

  private _closingActionsSubscription = Subscription.EMPTY;
  private _menuCloseSubscription = Subscription.EMPTY;

  /** References the menu instance that the trigger is associated with. */
  @Input('sdsMenuTriggerFor')
  get menu() {
    return this._menu;
  }
  set menu(menu: SdsMenuInterface) {
    if (menu === this._menu) {
      return;
    }
    this._menu = menu;
    this._menuCloseSubscription.unsubscribe();

    if (menu) {
      this._menuCloseSubscription = menu.closed.asObservable().subscribe(() => {
        this._destroyMenu();
      });
    }
  }

  /** Event emitted when the associated menu is opened. */
  @Output() menuOpened: EventEmitter<void> = new EventEmitter<void>();

  /** Event emitted when the associated menu is closed. */
  @Output() menuClosed: EventEmitter<void> = new EventEmitter<void>();

  /** Handles mouse presses on the trigger. */
  @HostListener('mousedown', ['$event'])
  _handleMousedown(event: MouseEvent): void {
    if (!isFakeMousedownFromScreenReader(event)) {
      // Since right or middle button clicks won't trigger the `click` event,
      // we shouldn't consider the menu as opened by mouse in those cases.
      this._openedBy = event.button === 0 ? 'mouse' : null;
    }
  }

  /** Toggles the menu between the open and closed states. */
  @HostListener('click')
  toggleMenu(): void {
    return this._menuOpen ? this.closeMenu() : this.openMenu();
  }

  constructor(
    private _overlay: Overlay,
    private _element: ElementRef<HTMLElement>,
    private _viewContainerRef: ViewContainerRef,
    private _focusMonitor: FocusMonitor
  ) {
    // On touch devices set _openedBy to 'touch'
    _element.nativeElement.addEventListener(
      'touchstart',
      () => (this._openedBy = 'touch'),
      normalizePassiveListenerOptions({ passive: true })
    );
  }

  ngOnDestroy() {
    if (this._overlayRef) {
      this._overlayRef.dispose();
      this._overlayRef = null;
    }

    this._element.nativeElement.removeEventListener(
      'touchstart',
      () => (this._openedBy = 'touch'),
      normalizePassiveListenerOptions({ passive: true })
    );

    this._menuCloseSubscription.unsubscribe();
    this._closingActionsSubscription.unsubscribe();
  }

  /** Opens the menu. */
  openMenu(): void {
    if (this._menuOpen) {
      return;
    }
    const overlayRef = this._createOverlay();
    const overlayConfig = overlayRef.getConfig();
    this._setPosition(
      overlayConfig.positionStrategy as FlexibleConnectedPositionStrategy
    );
    overlayRef.attach(this._getPortal());
    this._closingActionsSubscription = this._menuClosingActions().subscribe(
      () => this.closeMenu()
    );
    this._initMenu();
    if (this.menu instanceof SdsMenuComponent) {
      this.menu._startAnimation();
    }
  }

  /** Closes the menu. */
  closeMenu(): void {
    this.menu.closed.emit();
  }

  /** Focuses the menu trigger. */
  focus(origin: FocusOrigin = 'program'): void {
    this._focusMonitor.focusVia(this._element, origin);
  }

  /** This method sets the menu state to open and focuses the first item */
  private _initMenu(): void {
    this._setIsMenuOpen(true);
    this.menu.focusFirstItem(this._openedBy || 'program');
  }

  /** sets open state */
  private _setIsMenuOpen(isOpen: boolean): void {
    this._menuOpen = isOpen;
    this._menuOpen ? this.menuOpened.emit() : this.menuClosed.emit();
  }

  /**
   * This method resets the menu when it's closed,
   * most importantly restoring focus to the menu trigger
   */
  private _resetMenu(): void {
    this._setIsMenuOpen(false);

    if (!this._openedBy) {
      this.focus();
    } else {
      this.focus(this._openedBy);
    }

    this._openedBy = null;
  }

  /** Closes the menu and does the necessary cleanup. */
  private _destroyMenu() {
    if (!this._overlayRef || !this.menuOpen) {
      return;
    }

    this._closingActionsSubscription.unsubscribe();

    this._overlayRef.detach();

    if (this.menu instanceof SdsMenuComponent) {
      this.menu._resetAnimation();
      this._resetMenu();
    }
  }

  /**
   * This method creates the overlay from the provided menu's template and saves its
   * OverlayRef so that it can be attached to the DOM when openMenu is called.
   */
  private _createOverlay(): OverlayRef {
    if (!this._overlayRef) {
      const config = this._getOverlayConfig();
      this._subscribeToPositions(
        config.positionStrategy as FlexibleConnectedPositionStrategy
      );
      this._overlayRef = this._overlay.create(config);
      this._overlayRef.keydownEvents().subscribe();
    }
    return this._overlayRef;
  }

  /**
   * This method builds the configuration object needed to create the overlay, the OverlayState.
   * @returns OverlayConfig
   */
  private _getOverlayConfig(): OverlayConfig {
    return new OverlayConfig({
      positionStrategy: this._overlay
        .position()
        .flexibleConnectedTo(this._element)
        .withLockedPosition()
        .withTransformOriginOn('.sds-overlay'),
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop',
      scrollStrategy: this._overlay.scrollStrategies.reposition(),
    });
  }

  /**
   * Listens to changes in the position of the overlay and sets the correct classes
   * on the menu based on the new position.
   */
  private _subscribeToPositions(
    position: FlexibleConnectedPositionStrategy
  ): void {
    position.positionChanges.subscribe((change) => {
      const posX: MenuPositionX =
        change.connectionPair.overlayX === 'start' ? 'after' : 'before';
      const posY: MenuPositionY =
        change.connectionPair.overlayY === 'top' ? 'below' : 'above';

      this.menu.setPositionClasses(posX, posY);
    });
  }

  /**
   * Sets the appropriate positions on a position strategy
   * so the overlay connects with the trigger correctly.
   */
  private _setPosition(positionStrategy: FlexibleConnectedPositionStrategy) {
    const [originX, originFallbackX]: HorizontalConnectionPos[] =
      this.menu.xPosition === 'before' ? ['end', 'start'] : ['start', 'end'];

    const [overlayY, overlayFallbackY]: VerticalConnectionPos[] =
      this.menu.yPosition === 'above' ? ['bottom', 'top'] : ['top', 'bottom'];

    let [originY, originFallbackY] = [overlayY, overlayFallbackY];
    const [overlayX, overlayFallbackX] = [originX, originFallbackX];
    const offsetY = 0;

    if (!this.menu.overlapTrigger) {
      originY = overlayY === 'top' ? 'bottom' : 'top';
      originFallbackY = overlayFallbackY === 'top' ? 'bottom' : 'top';
    }

    // Positions from most to least desirable
    positionStrategy.withPositions([
      { originX, originY, overlayX, overlayY, offsetY },
      {
        originX: originFallbackX,
        originY,
        overlayX: overlayFallbackX,
        overlayY,
        offsetY,
      },
      {
        originX,
        originY: originFallbackY,
        overlayX,
        overlayY: overlayFallbackY,
        offsetY: -offsetY,
      },
      {
        originX: originFallbackX,
        originY: originFallbackY,
        overlayX: overlayFallbackX,
        overlayY: overlayFallbackY,
        offsetY: -offsetY,
      },
    ]);
  }

  /** Returns a stream that emits whenever an action that should close the menu occurs. */
  private _menuClosingActions() {
    const backdrop = this._overlayRef.backdropClick();
    const detachments = this._overlayRef.detachments();
    return merge(backdrop, detachments);
  }

  /** Gets the portal that should be attached to the overlay. */
  private _getPortal(): TemplatePortal {
    if (!this._portal || this._portal.templateRef !== this.menu.templateRef) {
      this._portal = new TemplatePortal(
        this.menu.templateRef,
        this._viewContainerRef
      );
    }
    return this._portal;
  }
}
