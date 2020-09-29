import {
  ComponentFixture,
  fakeAsync,
  flush,
  inject,
  TestBed,
  tick
} from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import {
  Component,
  ElementRef,
  ViewChild,
  ViewChildren,
  QueryList,
  Type,
  Provider
} from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ESCAPE, DOWN_ARROW, HOME, END } from '@angular/cdk/keycodes';
import { FocusMonitor } from '@angular/cdk/a11y';
import { SdsMenuModule } from './menu.module';
import {
  SdsMenuComponent,
  MenuPositionX,
  MenuPositionY
} from './menu.component';
import { SdsMenuItemComponent } from './menu-item.component';
import { SdsMenuTriggerForDirective } from './menu-trigger.directive';
import {
  dispatchFakeEvent,
  dispatchEvent,
  dispatchMouseEvent,
  dispatchKeyboardEvent
} from '../testing/dispatch-events';
import { createKeyboardEvent } from '../testing/event-objects';
import { patchElementFocus } from '../testing/element-focus';

describe('SdsMenu', () => {
  let overlayContainer: OverlayContainer;
  let overlayContainerElement: HTMLElement;
  let focusMonitor: FocusMonitor;

  function createComponent<T>(
    component: Type<T>,
    providers: Provider[] = [],
    declarations: any[] = []
  ): ComponentFixture<T> {
    TestBed.configureTestingModule({
      imports: [SdsMenuModule, NoopAnimationsModule],
      declarations: [component, ...declarations],
      providers
    }).compileComponents();

    inject(
      [OverlayContainer, FocusMonitor],
      (oc: OverlayContainer, fm: FocusMonitor) => {
        overlayContainer = oc;
        overlayContainerElement = oc.getContainerElement();
        focusMonitor = fm;
      }
    )();

    return TestBed.createComponent<T>(component);
  }

  afterEach(inject(
    [OverlayContainer],
    (currentOverlayContainer: OverlayContainer) => {
      currentOverlayContainer.ngOnDestroy();
      overlayContainer.ngOnDestroy();
    }
  ));

  it('should close the menu when a click occurs outside the menu', fakeAsync(() => {
    const fixture = createComponent(
      SimpleMenuComponent,
      [],
      [FakeIconComponent]
    );
    fixture.detectChanges();
    fixture.componentInstance.trigger.openMenu();

    const backdrop = <HTMLElement>(
      overlayContainerElement.querySelector('.cdk-overlay-backdrop')
    );
    backdrop.click();
    fixture.detectChanges();
    tick(500);

    expect(overlayContainerElement.textContent).toBe('');
  }));

  it('should restore focus to the trigger when the menu was opened by keyboard', fakeAsync(() => {
    const fixture = createComponent(
      SimpleMenuComponent,
      [],
      [FakeIconComponent]
    );
    fixture.detectChanges();
    const triggerEl = fixture.componentInstance.triggerEl.nativeElement;

    // A click without a mousedown before it is considered a keyboard open.
    triggerEl.click();
    fixture.detectChanges();

    expect(
      overlayContainerElement.querySelector('.sds-overlay')
    ).toBeTruthy();

    fixture.componentInstance.trigger.closeMenu();
    fixture.detectChanges();
    tick(500);

    expect(document.activeElement).toBe(triggerEl);
  }));

  it('should restore focus to the root trigger when the menu was opened by mouse', fakeAsync(() => {
    const fixture = createComponent(
      SimpleMenuComponent,
      [],
      [FakeIconComponent]
    );
    fixture.detectChanges();

    const triggerEl = fixture.componentInstance.triggerEl.nativeElement;
    dispatchFakeEvent(triggerEl, 'mousedown');
    triggerEl.click();
    fixture.detectChanges();

    expect(
      overlayContainerElement.querySelector('.sds-overlay')
    ).toBeTruthy();

    fixture.componentInstance.trigger.closeMenu();
    fixture.detectChanges();
    tick(500);

    expect(document.activeElement).toBe(triggerEl);
  }));

  it('should restore focus to the root trigger when the menu was opened by touch', fakeAsync(() => {
    const fixture = createComponent(
      SimpleMenuComponent,
      [],
      [FakeIconComponent]
    );
    fixture.detectChanges();

    const triggerEl = fixture.componentInstance.triggerEl.nativeElement;
    dispatchFakeEvent(triggerEl, 'touchstart');
    triggerEl.click();
    fixture.detectChanges();

    expect(
      overlayContainerElement.querySelector('.sds-overlay')
    ).toBeTruthy();

    fixture.componentInstance.trigger.closeMenu();
    fixture.detectChanges();
    flush();

    expect(document.activeElement).toBe(triggerEl);
  }));

  it('should scroll the panel to the top on open, when it is scrollable', fakeAsync(() => {
    const fixture = createComponent(
      SimpleMenuComponent,
      [],
      [FakeIconComponent]
    );
    fixture.detectChanges();

    // Add 50 items to make the menu scrollable
    fixture.componentInstance.extraItems = new Array(50).fill('Hello there');
    fixture.detectChanges();

    const triggerEl = fixture.componentInstance.triggerEl.nativeElement;
    dispatchFakeEvent(triggerEl, 'mousedown');
    triggerEl.click();
    fixture.detectChanges();

    // Flush due to the additional tick that is necessary for the FocusMonitor.
    flush();

    expect(
      overlayContainerElement.querySelector('.sds-overlay').scrollTop
    ).toBe(0);
  }));

  it('should close the menu when pressing ESCAPE', fakeAsync(() => {
    const fixture = createComponent(
      SimpleMenuComponent,
      [],
      [FakeIconComponent]
    );
    fixture.detectChanges();
    fixture.componentInstance.trigger.openMenu();

    const panel = overlayContainerElement.querySelector('.sds-overlay');
    const event = createKeyboardEvent('keydown', ESCAPE);

    dispatchEvent(panel, event);
    fixture.detectChanges();
    tick(500);

    expect(overlayContainerElement.textContent).toBe('');
  }));

  it('should transfer any custom classes from the host to the overlay', () => {
    const fixture = createComponent(
      SimpleMenuComponent,
      [],
      [FakeIconComponent]
    );

    fixture.componentInstance.panelClass = 'custom-one custom-two';
    fixture.detectChanges();
    fixture.componentInstance.trigger.openMenu();
    fixture.detectChanges();

    const menuEl = fixture.debugElement.query(By.css('sds-menu')).nativeElement;
    const panel = overlayContainerElement.querySelector('.sds-overlay')!;

    expect(menuEl.classList).not.toContain('custom-one');
    expect(menuEl.classList).not.toContain('custom-two');

    expect(panel.classList).toContain('custom-one');
    expect(panel.classList).toContain('custom-two');
  });

  it('should set the "menu" role on the overlay panel', () => {
    const fixture = createComponent(
      SimpleMenuComponent,
      [],
      [FakeIconComponent]
    );
    fixture.detectChanges();
    fixture.componentInstance.trigger.openMenu();
    fixture.detectChanges();

    const menuPanel = overlayContainerElement.querySelector('.sds-overlay');

    expect(menuPanel).toBeTruthy('Expected to find a menu panel.');

    const role = menuPanel ? menuPanel.getAttribute('role') : '';
    expect(role).toBe('menu', 'Expected panel to have the "menu" role.');
  });

  it('should set the "menuitem" role on the items by default', () => {
    const fixture = createComponent(
      SimpleMenuComponent,
      [],
      [FakeIconComponent]
    );
    fixture.detectChanges();
    fixture.componentInstance.trigger.openMenu();
    fixture.detectChanges();

    const items = Array.from(
      overlayContainerElement.querySelectorAll('.sds-menu__item')
    );

    expect(items.length).toBeGreaterThan(0);
    expect(items.every(item => item.getAttribute('role') === 'menuitem')).toBe(
      true
    );
  });

  it('should not throw an error on destroy', () => {
    const fixture = createComponent(
      SimpleMenuComponent,
      [],
      [FakeIconComponent]
    );
    expect(fixture.destroy.bind(fixture)).not.toThrow();
  });

  it('should set the proper focus origin when opening by mouse', fakeAsync(() => {
    const fixture = createComponent(
      SimpleMenuComponent,
      [],
      [FakeIconComponent]
    );
    fixture.detectChanges();
    spyOn(fixture.componentInstance.items.first, 'focus').and.callThrough();

    const triggerEl = fixture.componentInstance.triggerEl.nativeElement;

    dispatchMouseEvent(triggerEl, 'mousedown');
    triggerEl.click();
    fixture.detectChanges();
    tick(500);

    expect(fixture.componentInstance.items.first.focus).toHaveBeenCalledWith(
      'mouse'
    );
  }));

  it('should set the proper focus origin when opening by touch', fakeAsync(() => {
    const fixture = createComponent(
      SimpleMenuComponent,
      [],
      [FakeIconComponent]
    );
    fixture.detectChanges();
    spyOn(fixture.componentInstance.items.first, 'focus').and.callThrough();

    const triggerEl = fixture.componentInstance.triggerEl.nativeElement;

    dispatchMouseEvent(triggerEl, 'touchstart');
    triggerEl.click();
    fixture.detectChanges();
    flush();

    expect(fixture.componentInstance.items.first.focus).toHaveBeenCalledWith(
      'touch'
    );
  }));

  it('should switch to keyboard focus when using the keyboard after opening using the mouse', fakeAsync(() => {
    const fixture = createComponent(
      SimpleMenuComponent,
      [],
      [FakeIconComponent]
    );

    fixture.detectChanges();
    fixture.componentInstance.triggerEl.nativeElement.click();
    fixture.detectChanges();

    const panel = document.querySelector('.sds-overlay') as HTMLElement;
    const items: HTMLElement[] = Array.from(
      panel.querySelectorAll('.sds-overlay [sds-menu-item]')
    );

    items.forEach(item => patchElementFocus(item));

    tick(500);
    tick();
    fixture.detectChanges();
    expect(
      items.some(item => item.classList.contains('cdk-keyboard-focused'))
    ).toBe(false);

    dispatchKeyboardEvent(panel, 'keydown', DOWN_ARROW);
    fixture.detectChanges();

    // Flush due to the additional tick that is necessary for the FocusMonitor.
    flush();

    // We skip to the third item, because the second one is disabled.
    expect(items[2].classList).toContain('cdk-focused');
    expect(items[2].classList).toContain('cdk-keyboard-focused');
  }));

  it('should toggle the aria-expanded attribute on the trigger', () => {
    const fixture = createComponent(
      // tslint:disable-next-line: no-use-before-declare
      SimpleMenuComponent,
      [],
      // tslint:disable-next-line: no-use-before-declare
      [FakeIconComponent]
    );
    fixture.detectChanges();
    const triggerEl = fixture.componentInstance.triggerEl.nativeElement;

    expect(triggerEl.getAttribute('aria-expanded')).toBe('false');

    fixture.componentInstance.trigger.openMenu();

    fixture.detectChanges();

    expect(triggerEl.getAttribute('aria-expanded')).toBe('true');

    fixture.componentInstance.trigger.closeMenu();
    fixture.detectChanges();

    expect(triggerEl.getAttribute('aria-expanded')).toBe('false');
  });

  it('should focus the first item when pressing home', fakeAsync(() => {
    const fixture = createComponent(
      SimpleMenuComponent,
      [],
      [FakeIconComponent]
    );
    fixture.detectChanges();

    fixture.componentInstance.trigger.openMenu();
    fixture.detectChanges();

    const panel = overlayContainerElement.querySelector('.sds-overlay')!;
    const items = Array.from(
      panel.querySelectorAll('.sds-menu__item')
    ) as HTMLElement[];
    items.forEach(patchElementFocus);

    // Focus the last item since focus starts from the first one.
    items[items.length - 1].focus();
    fixture.detectChanges();

    spyOn(items[0], 'focus').and.callThrough();

    const event = dispatchKeyboardEvent(panel, 'keydown', HOME);
    fixture.detectChanges();

    expect(items[0].focus).toHaveBeenCalled();
    expect(event.defaultPrevented).toBe(true);
    flush();
  }));

  it('should focus the last item when pressing end', fakeAsync(() => {
    const fixture = createComponent(
      SimpleMenuComponent,
      [],
      [FakeIconComponent]
    );
    fixture.detectChanges();

    fixture.componentInstance.trigger.openMenu();
    fixture.detectChanges();

    const panel = overlayContainerElement.querySelector('.sds-overlay')!;
    const items = Array.from(
      panel.querySelectorAll('.sds-menu__item')
    ) as HTMLElement[];
    items.forEach(patchElementFocus);

    spyOn(items[items.length - 1], 'focus').and.callThrough();

    const event = dispatchKeyboardEvent(panel, 'keydown', END);
    fixture.detectChanges();

    expect(items[items.length - 1].focus).toHaveBeenCalled();
    expect(event.defaultPrevented).toBe(true);
    flush();
  }));

  describe('positions', () => {
    let fixture: ComponentFixture<PositionedMenuComponent>;
    let trigger: HTMLElement;

    beforeEach(() => {
      fixture = createComponent(PositionedMenuComponent);
      fixture.detectChanges();

      trigger = fixture.componentInstance.triggerEl.nativeElement;

      // Push trigger to the bottom edge of viewport,so it has space to open "above"
      trigger.style.position = 'fixed';
      trigger.style.top = '600px';

      // Push trigger to the right, so it has space to open "before"
      trigger.style.left = '100px';
    });

    it('should append sds-menu-before if the x position is changed', () => {
      fixture.componentInstance.trigger.openMenu();
      fixture.detectChanges();

      const panel = overlayContainerElement.querySelector(
        '.sds-overlay'
      ) as HTMLElement;
      expect(panel.classList).toContain('sds-menu-before');
      expect(panel.classList).not.toContain('sds-menu-after');

      fixture.componentInstance.xPosition = 'after';
      fixture.detectChanges();

      expect(panel.classList).toContain('sds-menu-after');
      expect(panel.classList).not.toContain('sds-menu-before');
    });

    it('should append sds-menu-above if the y position is changed', () => {
      fixture.componentInstance.trigger.openMenu();
      fixture.detectChanges();

      const panel = overlayContainerElement.querySelector(
        '.sds-overlay'
      ) as HTMLElement;

      expect(panel.classList).toContain('sds-menu-above');
      expect(panel.classList).not.toContain('sds-menu-below');

      fixture.componentInstance.yPosition = 'below';
      fixture.detectChanges();

      expect(panel.classList).toContain('sds-menu-below');
      expect(panel.classList).not.toContain('sds-menu-above');
    });

    it('should default to the "below" and "after" positions', () => {
      overlayContainer.ngOnDestroy();
      fixture.destroy();
      TestBed.resetTestingModule();

      const newFixture = createComponent(
        SimpleMenuComponent,
        [],
        [FakeIconComponent]
      );

      newFixture.detectChanges();
      newFixture.componentInstance.trigger.openMenu();
      newFixture.detectChanges();
      const panel = overlayContainerElement.querySelector(
        '.sds-overlay'
      ) as HTMLElement;

      expect(panel.classList).toContain('sds-menu-below');
      expect(panel.classList).toContain('sds-menu-after');
    });

    it('should be able to update the position after the first open', () => {
      trigger.style.position = 'fixed';
      trigger.style.top = '200px';

      fixture.componentInstance.yPosition = 'above';
      fixture.detectChanges();

      fixture.componentInstance.trigger.openMenu();
      fixture.detectChanges();

      let panel = overlayContainerElement.querySelector(
        '.sds-overlay'
      ) as HTMLElement;
      fixture.detectChanges();
      expect(Math.floor(panel.getBoundingClientRect().bottom)).toBe(
        Math.floor(trigger.getBoundingClientRect().top),
        'Expected menu to open above'
      );

      fixture.componentInstance.trigger.closeMenu();
      fixture.detectChanges();

      fixture.componentInstance.yPosition = 'below';
      fixture.detectChanges();

      fixture.componentInstance.trigger.openMenu();
      fixture.detectChanges();
      panel = overlayContainerElement.querySelector(
        '.sds-overlay'
      ) as HTMLElement;

      expect(Math.floor(panel.getBoundingClientRect().top)).toBe(
        Math.floor(trigger.getBoundingClientRect().bottom),
        'Expected menu to open below'
      );
    });
  });
});

@Component({
  template: `
    <button [sdsMenuTriggerFor]="menu" #triggerEl>Toggle menu</button>
    <sds-menu
      #menu="sdsMenu"
      [class]="panelClass"
      (closed)="closeCallback($event)"
    >
      <button sds-menu-item>Item</button>
      <button sds-menu-item disabled>Disabled</button>
      <button sds-menu-item>
        <sds-fake-icon>sds icon</sds-fake-icon>
        Item with an icon
      </button>
      <button *ngFor="let item of extraItems" sds-menu-item>{{ item }}</button>
    </sds-menu>
  `
})
class SimpleMenuComponent {
  @ViewChild(SdsMenuTriggerForDirective, { static: false }) trigger: SdsMenuTriggerForDirective;
  @ViewChild('triggerEl', { static: false }) triggerEl: ElementRef<HTMLElement>;
  @ViewChild(SdsMenuComponent, { static: false }) menu: SdsMenuComponent;
  @ViewChildren(SdsMenuItemComponent) items: QueryList<SdsMenuItemComponent>;
  extraItems: string[] = [];
  closeCallback = jasmine.createSpy('menu closed callback');
  panelClass: string;
}

@Component({
  selector: 'sds-fake-icon',
  template: '<ng-content></ng-content>'
})
class FakeIconComponent { }

@Component({
  template: `
    <button [sdsMenuTriggerFor]="menu" #triggerEl>Toggle menu</button>
    <sds-menu [xPosition]="xPosition" [yPosition]="yPosition" #menu="sdsMenu">
      <button sds-menu-item>Positioned Content</button>
    </sds-menu>
  `
})
class PositionedMenuComponent {
  @ViewChild(SdsMenuTriggerForDirective, { static: false }) trigger: SdsMenuTriggerForDirective;
  @ViewChild('triggerEl', { static: false }) triggerEl: ElementRef<HTMLElement>;
  xPosition: MenuPositionX = 'before';
  yPosition: MenuPositionY = 'above';
}
