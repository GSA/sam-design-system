import {ESCAPE} from '@angular/cdk/keycodes';
import {GlobalPositionStrategy, OverlayRef} from '@angular/cdk/overlay';
import {Location} from '@angular/common';
import {Observable, Subject} from 'rxjs';
import {filter, take} from 'rxjs/operators';
import {DownloadPosition} from './download-config';
import {SdsDownloadContainerComponent} from './download-container.component';

// Counter for unique download ids.
let uniqueId = 0;

/**
 * Reference to a download opened via the SdsDownload service.
 */
export class SdsDownloadRef<T, R = any> {
  /** The instance of component opened into the download. */
  componentInstance: T;

  /** Whether the user is allowed to close the download. */
  disableClose: boolean | undefined = this._containerInstance._config.disableClose;

  /** Subject for notifying the user that the download has finished opening. */
  private readonly _afterOpened = new Subject<void>();

  /** Subject for notifying the user that the download has finished closing. */
  private readonly _afterClosed = new Subject<R | undefined>();

  /** Subject for notifying the user that the download has started closing. */
  private readonly _beforeClosed = new Subject<R | undefined>();

  /** Result to be passed to afterClosed. */
  private _result: R | undefined;

  constructor(
    private _overlayRef: OverlayRef,
    public _containerInstance: SdsDownloadContainerComponent,
    _location?: Location,
    readonly id: string = `sds-download-${uniqueId++}`) {

    // Pass the id along to the container.
    _containerInstance._id = id;

    // Emit when opening animation completes
    _containerInstance._animationStateChanged.pipe(
      filter(event => event.phaseName === 'done' && event.toState === 'enter'),
      take(1)
    )
    .subscribe(() => {
      this._afterOpened.next();
      this._afterOpened.complete();
    });

    // Dispose overlay when closing animation is complete
    _containerInstance._animationStateChanged.pipe(
      filter(event => event.phaseName === 'done' && event.toState === 'exit'),
      take(1)
    ).subscribe(() => this._overlayRef.dispose());

    _overlayRef.detachments().subscribe(() => {
      this._beforeClosed.next(this._result);
      this._beforeClosed.complete();
      this._afterClosed.next(this._result);
      this._afterClosed.complete();
      this.componentInstance = null!;
      this._overlayRef.dispose();
    });

    _overlayRef.keydownEvents()
      .pipe(filter(event => event.keyCode === ESCAPE && !this.disableClose))
      .subscribe(() => this.close());
  }

  /**
   * Close the download.
   * @param downloadResult Optional result to return to the download opener.
   */
  close(downloadResult?: R): void {
    this._result = downloadResult;

    // Transition the backdrop in parallel to the download.
    this._containerInstance._animationStateChanged.pipe(
      filter(event => event.phaseName === 'start'),
      take(1)
    )
    .subscribe(() => {
      this._beforeClosed.next(downloadResult);
      this._beforeClosed.complete();
      this._overlayRef.detachBackdrop();
    });

    this._containerInstance._startExitAnimation();
  }

  /**
   * Gets an observable that is notified when the download is finished opening.
   */
  afterOpened(): Observable<void> {
    return this._afterOpened.asObservable();
  }

  /**
   * Gets an observable that is notified when the download is finished closing.
   */
  afterClosed(): Observable<R | undefined> {
    return this._afterClosed.asObservable();
  }

  /**
   * Gets an observable that is notified when the download has started closing.
   */
  beforeClosed(): Observable<R | undefined> {
    return this._beforeClosed.asObservable();
  }

  /**
   * Gets an observable that emits when the overlay's backdrop has been clicked.
   */
  backdropClick(): Observable<MouseEvent> {
    return this._overlayRef.backdropClick();
  }

  /**
   * Gets an observable that emits when keydown events are targeted on the overlay.
   */
  keydownEvents(): Observable<KeyboardEvent> {
    return this._overlayRef.keydownEvents();
  }

  /**
   * Updates the download's position.
   * @param position New download position.
   */
  updatePosition(position?: DownloadPosition): this {
    const strategy = this._getPositionStrategy();

    if (position && (position.left || position.right)) {
      position.left ? strategy.left(position.left) : strategy.right(position.right);
    } else {
      strategy.centerHorizontally();
    }

    if (position && (position.top || position.bottom)) {
      position.top ? strategy.top(position.top) : strategy.bottom(position.bottom);
    } else {
      strategy.centerVertically();
    }

    this._overlayRef.updatePosition();

    return this;
  }

  /**
   * Updates the download's width and height.
   * @param width New width of the download.
   * @param height New height of the download.
   */
  updateSize(width: string = '', height: string = ''): this {
    this._getPositionStrategy().width(width).height(height);
    this._overlayRef.updatePosition();
    return this;
  }

  /** Add a CSS class or an array of classes to the overlay pane. */
  addPanelClass(classes: string | string[]): this {
    this._overlayRef.addPanelClass(classes);
    return this;
  }

  /** Remove a CSS class or an array of classes from the overlay pane. */
  removePanelClass(classes: string | string[]): this {
    this._overlayRef.removePanelClass(classes);
    return this;
  }

  /** Fetches the position strategy object from the overlay ref. */
  private _getPositionStrategy(): GlobalPositionStrategy {
    return this._overlayRef.getConfig().positionStrategy as GlobalPositionStrategy;
  }
}
