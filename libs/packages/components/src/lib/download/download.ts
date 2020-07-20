import {Directionality} from '@angular/cdk/bidi';
import {
  Overlay,
  OverlayConfig,
  OverlayContainer,
  OverlayRef,
  ScrollStrategy,
} from '@angular/cdk/overlay';
import {ComponentPortal, ComponentType, PortalInjector, TemplatePortal} from '@angular/cdk/portal';
import {Location} from '@angular/common';
import {
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  OnDestroy,
  Optional,
  SkipSelf,
  TemplateRef,
} from '@angular/core';
import {defer, Observable, of as observableOf, Subject} from 'rxjs';
import {startWith} from 'rxjs/operators';
import {SdsDownloadConfig} from './download-config';
import {SdsDownloadContainerComponent} from './download-container.component';
import {SdsDownloadRef} from './download-ref';


/** Injection token that can be used to access the data that was passed in to a download. */
export const SDS_DOWNLOAD_DATA = new InjectionToken<any>('SdsDownloadData');

/** Injection token that can be used to specify default download options. */
export const SDS_DOWNLOAD_DEFAULT_OPTIONS =
    new InjectionToken<SdsDownloadConfig>('sds-download-default-options');

/** Injection token that determines the scroll handling while the download is open. */
export const SDS_DOWNLOAD_SCROLL_STRATEGY =
    new InjectionToken<() => ScrollStrategy>('sds-download-scroll-strategy');

/** @docs-private */
export function SDS_DOWNLOAD_SCROLL_STRATEGY_FACTORY(overlay: Overlay): () => ScrollStrategy {
  return () => overlay.scrollStrategies.block();
}

/** @docs-private */
export function SDS_DOWNLOAD_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay: Overlay):
  () => ScrollStrategy {
  return () => overlay.scrollStrategies.block();
}

/** @docs-private */
export const SDS_DOWNLOAD_SCROLL_STRATEGY_PROVIDER = {
  provide: SDS_DOWNLOAD_SCROLL_STRATEGY,
  deps: [Overlay],
  useFactory: SDS_DOWNLOAD_SCROLL_STRATEGY_PROVIDER_FACTORY,
};


/**
 * Service to open modal downloads.
 */
@Injectable()
export class SdsDownloadService implements OnDestroy {
  private _openDownloadsAtThisLevel: SdsDownloadRef<any>[] = [];
  private readonly _afterAllClosedAtThisLevel = new Subject<void>();
  private readonly _afterOpenedAtThisLevel = new Subject<SdsDownloadRef<any>>();
  private _ariaHiddenElements = new Map<Element, string|null>();
  private _scrollStrategy: () => ScrollStrategy;

  /** Keeps track of the currently-open downloads. */
  get openDownloads(): SdsDownloadRef<any>[] {
    return this._parentDownload ? this._parentDownload.openDownloads : this._openDownloadsAtThisLevel;
  }

  /** Stream that emits when a download has been opened. */
  get afterOpened(): Subject<SdsDownloadRef<any>> {
    return this._parentDownload ? this._parentDownload.afterOpened : this._afterOpenedAtThisLevel;
  }

  get _afterAllClosed(): Subject<void> {
    const parent = this._parentDownload;
    return parent ? parent._afterAllClosed : this._afterAllClosedAtThisLevel;
  }

  /**
   * Stream that emits when all open download have finished closing.
   * Will emit on subscribe if there are no open downloads to begin with.
   */
  readonly afterAllClosed: Observable<void> = defer<void>(() => this.openDownloads.length ?
      this._afterAllClosed :
      this._afterAllClosed.pipe(startWith(undefined)));

  constructor(
      private _overlay: Overlay,
      private _injector: Injector,
      @Optional() private _location: Location,
      @Optional() @Inject(SDS_DOWNLOAD_DEFAULT_OPTIONS) private _defaultOptions: SdsDownloadConfig,
      @Inject(SDS_DOWNLOAD_SCROLL_STRATEGY) scrollStrategy: any,
      @Optional() @SkipSelf() private _parentDownload: SdsDownloadService,
      private _overlayContainer: OverlayContainer) {
    this._scrollStrategy = scrollStrategy;
  }

  /**
   * Opens a modal download containing the given component.
   * @param componentOrTemplateRef Type of the component to load into the download,
   *     or a TemplateRef to instantiate as the download content.
   * @param config Extra configuration options.
   * @returns Reference to the newly-opened download.
   */
  open<T, D = any, R = any>(componentOrTemplateRef: ComponentType<T> | TemplateRef<T>,
          config?: SdsDownloadConfig<D>): SdsDownloadRef<T, R> {

    // Convenience widths names: small | medium | large
    // added to help with standardization
    if (config && config.width) {
      switch (config.width) {
        case 'small': {
          config.width = '370px';
          break;
        }
        case 'medium': {
          config.width = '730px';
          break;
        }
        case 'large': {
          config.width = '960px';
          break;
        }
        default: {
          break;
        }
      }
    }

    config = _applyConfigDefaults(config, this._defaultOptions || new SdsDownloadConfig());

    if (config.id && this.getDownloadById(config.id)) {
      throw Error(`Download with id "${config.id}" exists already. The download id must be unique.`);
    }

    const overlayRef = this._createOverlay(config);
    const downloadContainer = this._attachDownloadContainer(overlayRef, config);
    const downloadRef = this._attachDownloadContent<T, R>(componentOrTemplateRef,
                                                      downloadContainer,
                                                      overlayRef,
                                                      config);

    // If this is the first download that we're opening, hide all the non-overlay content.
    if (!this.openDownloads.length) {
      this._hideNonDownloadContentFromAssistiveTechnology();
    }

    this.openDownloads.push(downloadRef);
    downloadRef.afterClosed().subscribe(() => this._removeOpenDownload(downloadRef));
    this.afterOpened.next(downloadRef);

    return downloadRef;
  }

  /**
   * Closes all of the currently-open downloads.
   */
  closeAll(): void {
    this._closeDownloads(this.openDownloads);
  }

  /**
   * Finds an open download by its id.
   * @param id ID to use when looking up the download.
   */
  getDownloadById(id: string): SdsDownloadRef<any> | undefined {
    return this.openDownloads.find(download => download.id === id);
  }

  ngOnDestroy() {
    // Only close the downloads at this level on destroy
    // since the parent service may still be active.
    this._closeDownloads(this._openDownloadsAtThisLevel);
    this._afterAllClosedAtThisLevel.complete();
    this._afterOpenedAtThisLevel.complete();
  }

  /**
   * Creates the overlay into which the download will be loaded.
   * @param config The download configuration.
   * @returns A promise resolving to the OverlayRef for the created overlay.
   */
  private _createOverlay(config: SdsDownloadConfig): OverlayRef {
    const overlayConfig = this._getOverlayConfig(config);
    return this._overlay.create(overlayConfig);
  }

  /**
   * Creates an overlay config from a download config.
   * @param downloadConfig The download configuration.
   * @returns The overlay configuration.
   */
  private _getOverlayConfig(downloadConfig: SdsDownloadConfig): OverlayConfig {
    const state = new OverlayConfig({
      positionStrategy: this._overlay.position().global(),
      scrollStrategy: downloadConfig.scrollStrategy || this._scrollStrategy(),
      panelClass: downloadConfig.panelClass,
      hasBackdrop: downloadConfig.hasBackdrop,
      direction: downloadConfig.direction,
      minWidth: downloadConfig.minWidth,
      minHeight: downloadConfig.minHeight,
      maxWidth: downloadConfig.maxWidth,
      maxHeight: downloadConfig.maxHeight,
      disposeOnNavigation: downloadConfig.closeOnNavigation
    });

    if (downloadConfig.backdropClass) {
      state.backdropClass = downloadConfig.backdropClass;
    }

    return state;
  }

  /**
   * Attaches an SdsDownloadContainerComponent to a download's already-created overlay.
   * @param overlay Reference to the download's underlying overlay.
   * @param config The download configuration.
   * @returns A promise resolving to a ComponentRef for the attached container.
   */
  private _attachDownloadContainer(overlay: OverlayRef, config: SdsDownloadConfig): SdsDownloadContainerComponent {
    const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
    const injector = new PortalInjector(userInjector || this._injector, new WeakMap([
      [SdsDownloadConfig, config]
    ]));
    const containerPortal =
        new ComponentPortal(SdsDownloadContainerComponent, config.viewContainerRef, injector);
    const containerRef = overlay.attach<SdsDownloadContainerComponent>(containerPortal);

    return containerRef.instance;
  }

  /**
   * Attaches the user-provided component to the already-created SdsDownloadContainerComponent.
   * @param componentOrTemplateRef The type of component being loaded into the download,
   *     or a TemplateRef to instantiate as the content.
   * @param downloadContainer Reference to the wrapping SdsDownloadContainerComponent.
   * @param overlayRef Reference to the overlay in which the download resides.
   * @param config The download configuration.
   * @returns A promise resolving to the SdsDownloadRef that should be returned to the user.
   */
  private _attachDownloadContent<T, R>(
      componentOrTemplateRef: ComponentType<T> | TemplateRef<T>,
      downloadContainer: SdsDownloadContainerComponent,
      overlayRef: OverlayRef,
      config: SdsDownloadConfig): SdsDownloadRef<T, R> {

    // Create a reference to the download we're creating in order to give the user a handle
    // to modify and close it.
    const downloadRef =
        new SdsDownloadRef<T, R>(overlayRef, downloadContainer, this._location, config.id);

    // When the download backdrop is clicked, we want to close it.
    if (config.hasBackdrop) {
      overlayRef.backdropClick().subscribe(() => {
        if (!downloadRef.disableClose) {
          downloadRef.close();
        }
      });
    }

    if (componentOrTemplateRef instanceof TemplateRef) {
      downloadContainer.attachTemplatePortal(
        new TemplatePortal<T>(componentOrTemplateRef, null!,
          <any>{ $implicit: config.data, downloadRef }));
    } else {
      const injector = this._createInjector<T>(config, downloadRef, downloadContainer);
      const contentRef = downloadContainer.attachComponentPortal<T>(
          new ComponentPortal(componentOrTemplateRef, undefined, injector));
      downloadRef.componentInstance = contentRef.instance;
    }

    downloadRef
      .updateSize(config.width, config.height)
      .updatePosition(config.position);

    return downloadRef;
  }

  /**
   * Creates a custom injector to be used inside the download. This allows a component loaded inside
   * of a download to close itself and, optionally, to return a value.
   * @param config Config object that is used to construct the download.
   * @param downloadRef Reference to the download.
   * @param container Download container element that wraps all of the contents.
   * @returns The custom injector that can be used inside the download.
   */
  private _createInjector<T>(
      config: SdsDownloadConfig,
      downloadRef: SdsDownloadRef<T>,
      downloadContainer: SdsDownloadContainerComponent): PortalInjector {

    const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;

    // The SdsDownloadContainerComponent is injected in the portal as the SdsDownloadContainerComponent and the download's
    // content are created out of the same ViewContainerRef and as such, are siblings for injector
    // purposes. To allow the hierarchy that is expected, the SdsDownloadContainerComponent is explicitly
    // added to the injection tokens.
    const injectionTokens = new WeakMap<any, any>([
      [SdsDownloadContainerComponent, downloadContainer],
      [SDS_DOWNLOAD_DATA, config.data],
      [SdsDownloadRef, downloadRef]
    ]);

    if (config.direction &&
        (!userInjector || !userInjector.get<Directionality | null>(Directionality, null))) {
      injectionTokens.set(Directionality, {
        value: config.direction,
        change: observableOf()
      });
    }

    return new PortalInjector(userInjector || this._injector, injectionTokens);
  }

  /**
   * Removes a download from the array of open downloads.
   * @param downloadRef Download to be removed.
   */
  private _removeOpenDownload(downloadRef: SdsDownloadRef<any>) {
    const index = this.openDownloads.indexOf(downloadRef);

    if (index > -1) {
      this.openDownloads.splice(index, 1);

      // If all the downloads were closed, remove/restore the `aria-hidden`
      // to a the siblings and emit to the `afterAllClosed` stream.
      if (!this.openDownloads.length) {
        this._ariaHiddenElements.forEach((previousValue, element) => {
          if (previousValue) {
            element.setAttribute('aria-hidden', previousValue);
          } else {
            element.removeAttribute('aria-hidden');
          }
        });

        this._ariaHiddenElements.clear();
        this._afterAllClosed.next();
      }
    }
  }

  /**
   * Hides all of the content that isn't an overlay from assistive technology.
   */
  private _hideNonDownloadContentFromAssistiveTechnology() {
    const overlayContainer = this._overlayContainer.getContainerElement();

    // Ensure that the overlay container is attached to the DOM.
    if (overlayContainer.parentElement) {
      const siblings = overlayContainer.parentElement.children;

      for (let i = siblings.length - 1; i > -1; i--) {
        const sibling = siblings[i];

        if (sibling !== overlayContainer &&
          sibling.nodeName !== 'SCRIPT' &&
          sibling.nodeName !== 'STYLE' &&
          !sibling.hasAttribute('aria-live')) {

          this._ariaHiddenElements.set(sibling, sibling.getAttribute('aria-hidden'));
          sibling.setAttribute('aria-hidden', 'true');
        }
      }
    }
  }

  /** Closes all of the downloads in an array. */
  private _closeDownloads(downloads: SdsDownloadRef<any>[]) {
    let i = downloads.length;

    while (i--) {
      // The `_openDownloads` property isn't updated after close until the rxjs subscription
      // runs on the next microtask, in addition to modifying the array as we're going
      // through it. We loop through all of them and call close without assuming that
      // they'll be removed from the list instantaneously.
      downloads[i].close();
    }
  }

}

/**
 * Applies default options to the download config.
 * @param config Config to be modified.
 * @param defaultOptions Default options provided.
 * @returns The new configuration object.
 */
function _applyConfigDefaults(
    config?: SdsDownloadConfig, defaultOptions?: SdsDownloadConfig): SdsDownloadConfig {
  return {...defaultOptions, ...config};
}
