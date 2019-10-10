import {
  Component,
  ElementRef,
  OnDestroy,
  Inject,
  Input,
  HostBinding,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  Optional
} from '@angular/core';
import { FocusableOption, FocusMonitor, FocusOrigin } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { SDS_MENU_TOKEN, SdsMenuInterface } from './menu.component';
import { SdsMenuHeaderComponent } from './menu-header.component';

@Component({
  // tslint:disable-next-line: component-selector
  selector: '[sds-menu-item]',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SdsMenuItemComponent implements FocusableOption, OnDestroy {
  /** Menu item class */
  @HostBinding('class') class = this._getClass();

  /** ARIA role for the menu item. */
  @HostBinding('attr.role') @Input() role: 'menuitem' = 'menuitem';

  /** Menu item tab index */
  @HostBinding('attr.tabIndex') tabIndex = this.disabled ? '-1' : '0';

  /** Holds the disable status value */
  private _disabled = false;

  /** Whether the menu item should be disabled */
  @Input()
  get disabled() {
    return this._disabled;
  }
  set disabled(value: any) {
    this._disabled = coerceBooleanProperty(value);
  }

  constructor(
    private _elementRef: ElementRef<HTMLElement>,
    private _focusMonitor: FocusMonitor,
    @Inject(SDS_MENU_TOKEN)
    private _parentMenu: SdsMenuInterface<SdsMenuItemComponent>,
    @Optional() private _parentMenuHeader: SdsMenuHeaderComponent
  ) {
    // Start listening to focus changes
    _focusMonitor.monitor(this._elementRef, false);
    // Add this menu item to its parent menu
    // If item its inside a header
    // add it as the first item in the list
    if(_parentMenuHeader){
      _parentMenu.insertItem(this, 0);
    } else {
      _parentMenu.addItem(this);
    }
  }

  /** Get item class */
  _getClass(): string{
    return this._parentMenuHeader ? 'sds-button sds-button--circular' : 'sds-menu__item';
  }

  /** Focuses the menu item. */
  focus(origin: FocusOrigin = 'program'): void {
    this._focusMonitor.focusVia(this._elementRef.nativeElement, origin);
  }

  /** Stop listening to focus changes and remove item from parent */
  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef);
    this._parentMenu.removeItem(this);
  }

}
