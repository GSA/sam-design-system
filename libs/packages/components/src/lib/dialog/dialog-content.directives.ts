import {
  Directive,
  Input,
  OnChanges,
  OnInit,
  Optional,
  SimpleChanges,
  ElementRef,
} from '@angular/core';
import { SdsDialogService } from './dialog';
import { SdsDialogRef } from './dialog-ref';

/** Counter used to generate unique IDs for dialog elements. */
let dialogElementUid = 0;

/**
 * Button that will close the current dialog.
 */
@Directive({
  selector: `button[sds-dialog-close], button[sdsDialogClose]`,
  exportAs: 'sdsDialogClose',
  // tslint:disable-next-line: use-host-property-decorator
  host: {
    '(click)': 'dialogRef.close(dialogResult)',
    '[attr.aria-label]': 'ariaLabel || null',
    type: 'button', // Prevents accidental form submits.
  },
})
export class SdsDialogCloseDirective implements OnInit, OnChanges {
  /** Screenreader label for the button. */
  @Input('aria-label') ariaLabel: string;

  /** Dialog close input. */
  @Input('sds-dialog-close') dialogResult: any;

  @Input('sdsDialogClose') _sdsDialogClose: any;

  constructor(
    @Optional() public dialogRef: SdsDialogRef<any>,
    private _elementRef: ElementRef<HTMLElement>,
    private _dialog: SdsDialogService
  ) {}

  ngOnInit() {
    if (!this.dialogRef) {
      // When this directive is included in a dialog via TemplateRef (rather than being
      // in a Component), the DialogRef isn't available via injection because embedded
      // views cannot be given a custom injector. Instead, we look up the DialogRef by
      // ID. This must occur in `onInit`, as the ID binding for the dialog container won't
      // be resolved at constructor time.
      this.dialogRef = getClosestDialog(
        this._elementRef,
        this._dialog.openDialogs
      )!;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    const proxiedChange =
      changes['_sdsDialogClose'] || changes['_sdsDialogCloseResult'];

    if (proxiedChange) {
      this.dialogResult = proxiedChange.currentValue;
    }
  }
}

/**
 * Title of a dialog element. Stays fixed to the top of the dialog when scrolling.
 */
@Directive({
  selector: '[sds-dialog-title], [sdsDialogTitle]',
  exportAs: 'sdsDialogTitle',
  // tslint:disable-next-line: use-host-property-decorator
  host: {
    '[class.sds-dialog-title]': 'true',
    '[id]': 'id',
  },
})
export class SdsDialogTitleDirective implements OnInit {
  @Input() id = `sds-dialog-title-${dialogElementUid++}`;

  constructor(
    @Optional() private _dialogRef: SdsDialogRef<any>,
    private _elementRef: ElementRef<HTMLElement>,
    private _dialog: SdsDialogService
  ) {}

  ngOnInit() {
    if (!this._dialogRef) {
      this._dialogRef = getClosestDialog(
        this._elementRef,
        this._dialog.openDialogs
      )!;
    }

    if (this._dialogRef) {
      Promise.resolve().then(() => {
        const container = this._dialogRef._containerInstance;

        if (container && !container._ariaLabelledBy) {
          container._ariaLabelledBy = this.id;
        }
      });
    }
  }
}

/**
 * SubTitle of a dialog element
 */
@Directive({
  selector: `[sds-dialog-subtitle], sds-dialog-subtitle, [sdsDialogSubtitle]`,
  // tslint:disable-next-line: use-host-property-decorator
  host: { '[class.sds-dialog-subtitle]': 'true' },
})
export class SdsDialogSubtitleDirective {}

/**
 * Scrollable content container of a dialog.
 */
@Directive({
  selector: `[sds-dialog-content], sds-dialog-content, [sdsDialogContent]`,
  // tslint:disable-next-line: use-host-property-decorator
  host: { '[class.sds-dialog-content]': 'true' },
})
export class SdsDialogContentDirective {}

/**
 * Container for the bottom action buttons in a dialog.
 * Stays fixed to the bottom when scrolling.
 */
@Directive({
  selector: `[sds-dialog-actions], sds-dialog-actions, [sdsDialogActions]`,
  // tslint:disable-next-line: use-host-property-decorator
  host: { '[class.sds-dialog-actions]': 'true' },
})
export class SdsDialogActionsDirective {}

/**
 * Finds the closest SdsDialogRef to an element by looking at the DOM.
 * @param element Element relative to which to look for a dialog.
 * @param openDialogs References to the currently-open dialogs.
 */
function getClosestDialog(
  element: ElementRef<HTMLElement>,
  openDialogs: SdsDialogRef<any>[]
) {
  let parent: HTMLElement | null = element.nativeElement.parentElement;

  while (parent && !parent.classList.contains('sds-dialog__container')) {
    parent = parent.parentElement;
  }

  return parent ? openDialogs.find((dialog) => dialog.id === parent!.id) : null;
}
