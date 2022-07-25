import { FocusMonitor, FocusableOption, FocusOrigin } from '@angular/cdk/a11y';
import { ENTER, SPACE, hasModifierKey } from '@angular/cdk/keycodes';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Host,
  OnDestroy,
  ViewEncapsulation,
} from '@angular/core';
import { merge, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { SdsAccordionItemComponent } from './accordion-item.component';

@Component({
  selector: 'sds-accordion-item-header',
  templateUrl: './accordion-item-header.component.html',
  styleUrls: ['./accordion-item-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'sds-accordion__trigger',
    role: 'button',
    '[attr.id]': 'accordionItem._headerId',
    '[attr.tabindex]': 'disabled ? -1 : 0',
    '[attr.aria-controls]': '_getAccordionItemId()',
    '[attr.aria-expanded]': '_isExpanded()',
    '[attr.aria-disabled]': 'accordionItem.disabled',
    '(click)': '_toggle()',
    '(keydown)': '_keydown($event)',
  },
})
export class SdsAccordionItemHeaderComponent
  implements OnDestroy, FocusableOption {
  private _parentChangeSubscription = Subscription.EMPTY;
  constructor(
    @Host() public accordionItem: SdsAccordionItemComponent,
    private _element: ElementRef,
    private _focusMonitor: FocusMonitor,
    private _changeDetectorRef: ChangeDetectorRef
  ) {
    // Since the toggle state depends on an @Input on the accordion item, we
    // need to subscribe and trigger change detection manually.
    this._parentChangeSubscription = merge(
      accordionItem.opened,
      accordionItem.closed,
      accordionItem._inputChanges.pipe(
        filter((changes) => !!changes['disabled'])
      )
    ).subscribe(() => this._changeDetectorRef.markForCheck());

    _focusMonitor.monitor(_element).subscribe((origin) => {
      if (origin && accordionItem.accordion) {
        accordionItem.accordion._handleHeaderFocus(this);
      }
    });
  }

  /**
   * Whether the associated accordion item is disabled.
   * Implemented as a part of `FocusableOption`.
   */
  get disabled() {
    return this.accordionItem.disabled;
  }

  /** Toggles the expanded state of the accordion item. */
  _toggle(): void {
    this.accordionItem.toggle();
  }

  /** Gets whether the accordion item is expanded. */
  _isExpanded(): boolean {
    return this.accordionItem.expanded;
  }

  /** Gets the accordion item id. */
  _getAccordionItemId(): string {
    return this.accordionItem.id;
  }

  /** Handle keydown event calling to toggle() if appropriate. */
  _keydown(event: KeyboardEvent) {
    switch (event.keyCode) {
      // Toggle for space and enter keys.
      case SPACE:
      case ENTER:
        if (!hasModifierKey(event)) {
          event.preventDefault();
          this._toggle();
        }

        break;
      default:
        if (this.accordionItem.accordion) {
          this.accordionItem.accordion._handleHeaderKeydown(event);
        }

        return;
    }
  }

  /**
   * Focuses the item header. Implemented as a part of `FocusableOption`.
   * @param origin Origin of the action that triggered the focus.
   * @docs-private
   */
  focus(origin: FocusOrigin = 'program') {
    this._focusMonitor.focusVia(this._element, origin);
  }

  ngOnDestroy() {
    this._parentChangeSubscription.unsubscribe();
    this._focusMonitor.stopMonitoring(this._element);
  }
}
