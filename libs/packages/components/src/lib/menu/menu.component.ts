import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  InjectionToken,
  Input,
  OnDestroy,
  Output,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
  OnInit,
} from '@angular/core';
import { AnimationEvent } from '@angular/animations';
import {
  ESCAPE,
  DOWN_ARROW,
  UP_ARROW,
  HOME,
  END,
  hasModifierKey,
} from '@angular/cdk/keycodes';
import { FocusKeyManager, FocusOrigin } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Subscription } from 'rxjs';
import { sdsMenuAnimations } from './menu-animations';
import { SdsMenuItemComponent } from './menu-item.component';

/** Menu Positions */
export type MenuPositionX = 'before' | 'after';
export type MenuPositionY = 'above' | 'below';

/** Menu available sizes */
// sm = 'small'
export type MenuSizes = 'sm';

/** Injection token used to provide the parent menu to menu items. */
export const SDS_MENU_TOKEN = new InjectionToken<SdsMenuInterface>(
  'SDS_MENU_TOKEN'
);

/** Menu Interface */
export interface SdsMenuInterface<T = any> {
  xPosition: MenuPositionX;
  yPosition: MenuPositionY;
  overlapTrigger: boolean;
  templateRef: TemplateRef<any>;
  closed: EventEmitter<void | 'click' | 'keydown' | 'tab'>;
  parentMenu?: SdsMenuInterface;
  size?: MenuSizes;
  focusFirstItem: (origin?: FocusOrigin) => void;
  setPositionClasses?: (x: MenuPositionX, y: MenuPositionY) => void;
  addItem?: (item: T) => void;
  insertItem?: (item: T, index: number) => void;
  removeItem?: (item: T) => void;
}

@Component({
  selector: 'sds-menu',
  exportAs: 'sdsMenu',
  templateUrl: 'menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  animations: [sdsMenuAnimations.transformMenu],
  providers: [{ provide: SDS_MENU_TOKEN, useExisting: SdsMenuComponent }],
})
export class SdsMenuComponent
  implements
    OnInit,
    AfterContentInit,
    OnDestroy,
    SdsMenuInterface<SdsMenuItemComponent> {
  /** After | Before the menu triger element */
  private _xPosition: MenuPositionX = 'after';

  /** Above | Below the menu triger element */
  private _yPosition: MenuPositionY = 'below';

  /** Manage browser focus */
  private _keyManager: FocusKeyManager<SdsMenuItemComponent>;

  /** Menu items inside the current menu. */
  private _items: SdsMenuItemComponent[] = [];

  /** Subscription to tab events on the menu panel */
  private _tabSubscription = Subscription.EMPTY;

  /** Stores <sds-menu> classes */
  private _previousPanelClass: string;

  /** Config object to be passed into the menu's ngClass */
  _classList: { [key: string]: boolean } = {};

  /** Current state of the panel animation. */
  _panelAnimationState: 'void' | 'enter' = 'void';

  /** Grab the component template */
  @ViewChild(TemplateRef, { static: false }) templateRef: TemplateRef<any>;

  /**
   * Size of menu component.
   * Affects the font-size of the menu items and
   * the size of the close button in the menu header
   */
  @Input() size: MenuSizes;

  /** Position of the menu in the X axis. */
  @Input()
  get xPosition(): MenuPositionX {
    return this._xPosition;
  }
  set xPosition(value: MenuPositionX) {
    this._xPosition = value;
    this.setPositionClasses();
  }

  /** Position of the menu in the Y axis. */
  @Input()
  get yPosition(): MenuPositionY {
    return this._yPosition;
  }
  set yPosition(value: MenuPositionY) {
    this._yPosition = value;
    this.setPositionClasses();
  }

  /** Whether menu panel overlaps trigger element */
  @Input()
  get overlapTrigger(): boolean {
    return this._overlapTrigger;
  }
  set overlapTrigger(value: boolean) {
    this._overlapTrigger = coerceBooleanProperty(value);
  }
  private _overlapTrigger = false;

  /** Transfer classes from the sds-menu to the overlay container */
  @Input('class')
  set panelClass(classes: string) {
    const previousPanelClass = this._previousPanelClass;
    // Remove previous classes from current set of classes
    if (previousPanelClass && previousPanelClass.length) {
      previousPanelClass.split(' ').forEach((className: string) => {
        this._classList[className] = false;
      });
    }

    this._previousPanelClass = classes;

    // Adds new classes to current set of classes
    if (classes && classes.length) {
      classes.split(' ').forEach((className: string) => {
        this._classList[className] = true;
      });

      // Remove all classes from <sds-menu>
      this._elementRef.nativeElement.className = '';
    }
  }

  /** Event emitted when the menu is closed. */
  @Output() closed = new EventEmitter<void | 'click' | 'keydown' | 'tab'>();

  constructor(private _elementRef: ElementRef<HTMLElement>) {}

  ngOnInit() {
    this.setPositionClasses();
  }

  ngAfterContentInit() {
    this._keyManager = new FocusKeyManager<SdsMenuItemComponent>(
      this._items
    ).withWrap();
    this._tabSubscription = this._keyManager.tabOut.subscribe(() =>
      this.closed.emit('tab')
    );
  }

  ngOnDestroy() {
    this._tabSubscription.unsubscribe();
    this.closed.complete();
  }

  /** Focus the first item in the menu */
  focusFirstItem(origin: FocusOrigin = 'program'): void {
    this._keyManager.setFocusOrigin(origin).setFirstItemActive();
  }

  /** Adds classes to the menu panel based on its position */
  setPositionClasses(
    posX: MenuPositionX = this.xPosition,
    posY: MenuPositionY = this.yPosition
  ) {
    const classes = this._classList;
    classes['sds-menu-before'] = posX === 'before';
    classes['sds-menu-after'] = posX === 'after';
    classes['sds-menu-above'] = posY === 'above';
    classes['sds-menu-below'] = posY === 'below';
  }

  /** Adds a menu item with the menu. */
  addItem(item: SdsMenuItemComponent) {
    if (this._items.indexOf(item) === -1) {
      this._items.push(item);
    }
  }

  /** Inserts a menu item at an index */
  insertItem(item: SdsMenuItemComponent, index: number) {
    if (this._items.indexOf(item) === -1 && index < this._items.length) {
      this._items.splice(index, 0, item);
    }
  }

  /** Removes an item from the menu. */
  removeItem(item: SdsMenuItemComponent) {
    const index = this._items.indexOf(item);
    if (this._items.indexOf(item) > -1) {
      this._items.splice(index, 1);
    }
  }

  /** Handle a keyboard event from the menu */
  _handleKeydown(event: KeyboardEvent) {
    // tslint:disable-next-line: deprecation
    const keyCode = event.keyCode;
    const manager = this._keyManager;

    switch (keyCode) {
      case ESCAPE:
        this.closed.emit('keydown');
        break;
      case HOME:
      case END:
        if (!hasModifierKey(event)) {
          keyCode === HOME
            ? manager.setFirstItemActive()
            : manager.setLastItemActive();
          event.preventDefault();
        }
        break;
      default:
        if (keyCode === UP_ARROW || keyCode === DOWN_ARROW) {
          manager.setFocusOrigin('keyboard');
        }

        manager.onKeydown(event);
    }
  }

  /** Starts the enter animation. */
  _startAnimation() {
    this._panelAnimationState = 'enter';
  }

  /** Callback that is invoked when the panel animation completes. */
  _onAnimationDone(event: AnimationEvent) {}

  /** Resets the panel animation to its initial state. */
  _resetAnimation() {
    this._panelAnimationState = 'void';
  }

  _onAnimationStart(event: AnimationEvent) {
    // Scroll the content element to the top as soon as the animation starts.
    if (event.toState === 'enter' && this._keyManager.activeItemIndex === 0) {
      event.element.scrollTop = 0;
    }
  }
}
