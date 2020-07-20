import {
  Component,
  ComponentRef,
  ElementRef,
  EmbeddedViewRef,
  EventEmitter,
  Inject,
  Optional,
  ChangeDetectorRef,
  ViewChild,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {AnimationEvent} from '@angular/animations';
import {sdsDownloadAnimations} from './download-animations';
import {
  BasePortalOutlet,
  ComponentPortal,
  CdkPortalOutlet,
  TemplatePortal
} from '@angular/cdk/portal';
import {FocusTrap, FocusTrapFactory} from '@angular/cdk/a11y';
import {SdsDownloadConfig} from './download-config';


/**
 * Throws an exception for the case when a ComponentPortal is
 * attached to a DomPortalOutlet without an origin.
 * @docs-private
 */
export function throwSdsDownloadContentAlreadyAttachedError() {
  throw Error('Attempting to attach download content after content is already attached');
}

/**
 * Internal component that wraps user-provided download content.
 * @docs-private
 */
@Component({
  selector: 'sds-download-container',
  templateUrl: 'download-container.component.html',
  encapsulation: ViewEncapsulation.None,
  // Using OnPush for downloads caused some G3 sync issues. Disabled until we can track them down.
  // tslint:disable-next-line:validate-decorators
  changeDetection: ChangeDetectionStrategy.Default,
  animations: [sdsDownloadAnimations.downloadContainer],
  // tslint:disable-next-line: use-host-property-decorator
  host: {
    'class': 'sds-download__container',
    '[class.sds-download--alert]': '_config.alert',
    '[class.sds-download--alert-error]':'_config.alert === "error"',
    '[class.sds-download--alert-warning]':'_config.alert === "warning"',
    '[class.sds-download--alert-info]':'_config.alert === "info"',
    'tabindex': '-1',
    'aria-modal': 'true',
    '[attr.id]': '_id',
    '[attr.role]': '_config.role',
    '[attr.aria-labelledby]': '_config.ariaLabel ? null : _ariaLabelledBy',
    '[attr.aria-label]': '_config.ariaLabel',
    '[attr.aria-describedby]': '_config.ariaDescribedBy || null',
    '[@downloadContainer]': '_state',
    '(@downloadContainer.start)': '_onAnimationStart($event)',
    '(@downloadContainer.done)': '_onAnimationDone($event)',
  },
})
export class SdsDownloadContainerComponent extends BasePortalOutlet {
  /** The portal outlet inside of this container into which the download content will be loaded. */
  @ViewChild(CdkPortalOutlet) _portalOutlet: CdkPortalOutlet;

  /** The class that traps and manages focus within the download. */
  private _focusTrap: FocusTrap;

  /** Element that was focused before the download was opened. Save this to restore upon close. */
  private _elementFocusedBeforeDownloadWasOpened: HTMLElement | null = null;

  /** State of the download animation. */
  _state: 'void' | 'enter' | 'exit' = 'enter';

  /** Emits when an animation state changes. */
  _animationStateChanged = new EventEmitter<AnimationEvent>();

  /** ID of the element that should be considered as the download's label. */
  _ariaLabelledBy: string | null = null;

  /** ID for the container DOM element. */
  _id: string;

  constructor(
    private _elementRef: ElementRef,
    private _focusTrapFactory: FocusTrapFactory,
    private _changeDetectorRef: ChangeDetectorRef,
    @Optional() @Inject(DOCUMENT) private _document: any,
    /** The download configuration. */
    public _config: SdsDownloadConfig) {

    super();
  }

  /**
   * Attach a ComponentPortal as content to this download container.
   * @param portal Portal to be attached as the download content.
   */
  attachComponentPortal<T>(portal: ComponentPortal<T>): ComponentRef<T> {
    if (this._portalOutlet.hasAttached()) {
      throwSdsDownloadContentAlreadyAttachedError();
    }

    this._savePreviouslyFocusedElement();
    return this._portalOutlet.attachComponentPortal(portal);
  }

  /**
   * Attach a TemplatePortal as content to this download container.
   * @param portal Portal to be attached as the download content.
   */
  attachTemplatePortal<C>(portal: TemplatePortal<C>): EmbeddedViewRef<C> {
    if (this._portalOutlet.hasAttached()) {
      throwSdsDownloadContentAlreadyAttachedError();
    }

    this._savePreviouslyFocusedElement();
    return this._portalOutlet.attachTemplatePortal(portal);
  }

  /** Moves the focus inside the focus trap. */
  private _trapFocus() {
    if (!this._focusTrap) {
      this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
    }

    // If were to attempt to focus immediately, then the content of the download would not yet be
    // ready in instances where change detection has to run first. To deal with this, we simply
    // wait for the microtask queue to be empty.
    if (this._config.autoFocus) {
      this._focusTrap.focusInitialElementWhenReady();
    }
  }

  /** Restores focus to the element that was focused before the download opened. */
  private _restoreFocus() {
    const toFocus = this._elementFocusedBeforeDownloadWasOpened;

    // We need the extra check, because IE can set the `activeElement` to null in some cases.
    if (this._config.restoreFocus && toFocus && typeof toFocus.focus === 'function') {
      toFocus.focus();
    }

    if (this._focusTrap) {
      this._focusTrap.destroy();
    }
  }

  /** Saves a reference to the element that was focused before the download was opened. */
  private _savePreviouslyFocusedElement() {
    if (this._document) {
      this._elementFocusedBeforeDownloadWasOpened = this._document.activeElement as HTMLElement;

      // Note that there is no focus method when rendering on the server.
      if (this._elementRef.nativeElement.focus) {
        // Move focus onto the download immediately in order to prevent the user from accidentally
        // opening multiple downloads at the same time. Needs to be async, because the element
        // may not be focusable immediately.
        Promise.resolve().then(() => this._elementRef.nativeElement.focus());
      }
    }
  }

  /** Callback, invoked whenever an animation on the host completes. */
  _onAnimationDone(event: AnimationEvent) {
    if (event.toState === 'enter') {
      this._trapFocus();
    } else if (event.toState === 'exit') {
      this._restoreFocus();
    }

    this._animationStateChanged.emit(event);
  }

  /** Callback, invoked when an animation on the host starts. */
  _onAnimationStart(event: AnimationEvent) {
    this._animationStateChanged.emit(event);
  }

  /** Starts the download exit animation. */
  _startExitAnimation(): void {
    this._state = 'exit';

    // Mark the container for check so it can react if the
    // view container is using OnPush change detection.
    this._changeDetectorRef.markForCheck();
  }
}
