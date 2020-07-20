import {
  Directive,
  Input,
  OnChanges,
  OnInit,
  Optional,
  SimpleChanges,
  ElementRef,
} from '@angular/core';
import {SdsDownloadService} from './download';
import {SdsDownloadRef} from './download-ref';

/** Counter used to generate unique IDs for download elements. */
let downloadElementUid = 0;

/**
 * Button that will close the current download.
 */
@Directive({
  selector: `button[sds-download-close], button[sdsDownloadClose]`,
  exportAs: 'sdsDownloadClose',
  // tslint:disable-next-line: use-host-property-decorator
  host: {
    '(click)': 'downloadRef.close(downloadResult)',
    '[attr.aria-label]': 'ariaLabel || null',
    'type': 'button', // Prevents accidental form submits.
  }
})
export class SdsDownloadCloseDirective implements OnInit, OnChanges {
  /** Screenreader label for the button. */
  @Input('aria-label') ariaLabel: string;

  /** Download close input. */
  @Input('sds-download-close') downloadResult: any;

  @Input('sdsDownloadClose') _sdsDownloadClose: any;

  constructor(
    @Optional() public downloadRef: SdsDownloadRef<any>,
    private _elementRef: ElementRef<HTMLElement>,
    private _download: SdsDownloadService) {}

  ngOnInit() {
    if (!this.downloadRef) {
      // When this directive is included in a download via TemplateRef (rather than being
      // in a Component), the DownloadRef isn't available via injection because embedded
      // views cannot be given a custom injector. Instead, we look up the DownloadRef by
      // ID. This must occur in `onInit`, as the ID binding for the download container won't
      // be resolved at constructor time.
      this.downloadRef = getClosestDownload(this._elementRef, this._download.openDownloads)!;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    const proxiedChange = changes['_sdsDownloadClose'] || changes['_sdsDownloadCloseResult'];

    if (proxiedChange) {
      this.downloadResult = proxiedChange.currentValue;
    }
  }
}

/**
 * Title of a download element. Stays fixed to the top of the download when scrolling.
 */
@Directive({
  selector: '[sds-download-title], [sdsDownloadTitle]',
  exportAs: 'sdsDownloadTitle',
  // tslint:disable-next-line: use-host-property-decorator
  host: {
    '[class.sds-download-title]': 'true',
    '[id]': 'id',
  },
})
export class SdsDownloadTitleDirective implements OnInit {
  @Input() id = `sds-download-title-${downloadElementUid++}`;

  constructor(
    @Optional() private _downloadRef: SdsDownloadRef<any>,
    private _elementRef: ElementRef<HTMLElement>,
    private _download: SdsDownloadService) {}

  ngOnInit() {
    if (!this._downloadRef) {
      this._downloadRef = getClosestDownload(this._elementRef, this._download.openDownloads)!;
    }

    if (this._downloadRef) {
      Promise.resolve().then(() => {
        const container = this._downloadRef._containerInstance;

        if (container && !container._ariaLabelledBy) {
          container._ariaLabelledBy = this.id;
        }
      });
    }
  }
}

/**
 * SubTitle of a download element
 */
@Directive({
  selector: `[sds-download-subtitle], sds-download-subtitle, [sdsDownloadSubtitle]`,
  // tslint:disable-next-line: use-host-property-decorator
  host: {'[class.sds-download-subtitle]': 'true'}
})
export class SdsDownloadSubtitleDirective {}


/**
 * Scrollable content container of a download.
 */
@Directive({
  selector: `[sds-download-content], sds-download-content, [sdsDownloadContent]`,
  // tslint:disable-next-line: use-host-property-decorator
  host: {'[class.sds-download-content]': 'true'}
})
export class SdsDownloadContentDirective {}


/**
 * Container for the bottom action buttons in a download.
 * Stays fixed to the bottom when scrolling.
 */
@Directive({
  selector: `[sds-download-actions], sds-download-actions, [sdsDownloadActions]`,
  // tslint:disable-next-line: use-host-property-decorator
  host: {'[class.sds-download-actions]': 'true'}
})
export class SdsDownloadActionsDirective {}


/**
 * Finds the closest SdsDownloadRef to an element by looking at the DOM.
 * @param element Element relative to which to look for a download.
 * @param openDownloads References to the currently-open downloads.
 */
function getClosestDownload(element: ElementRef<HTMLElement>, openDownloads: SdsDownloadRef<any>[]) {
  let parent: HTMLElement | null = element.nativeElement.parentElement;

  while (parent && !parent.classList.contains('sds-download__container')) {
    parent = parent.parentElement;
  }

  return parent ? openDownloads.find(download => download.id === parent!.id) : null;
}
