import {
  ComponentFixture,
  fakeAsync,
  flushMicrotasks,
  inject,
  TestBed,
  tick,
  flush,
} from '@angular/core/testing';
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  Inject,
  Injector,
  NgModule,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Location } from '@angular/common';
import { SpyLocation } from '@angular/common/testing';
import { Directionality } from '@angular/cdk/bidi';
import { SdsDialogContainerComponent } from './dialog-container.component';
import { OverlayContainer, ScrollStrategy, Overlay } from '@angular/cdk/overlay';
import { ScrollDispatcher } from '@angular/cdk/scrolling';
import { A, ESCAPE } from '@angular/cdk/keycodes';
import { dispatchKeyboardEvent } from '../testing/dispatch-events';
import {
  SDS_DIALOG_DATA,
  SdsDialogService,
  SDS_DIALOG_DEFAULT_OPTIONS
} from './dialog';
import { SdsDialogRef } from './dialog-ref';
import { SdsDialogModule } from './dialog.module';
import { Subject } from 'rxjs';


describe('SdsDialog', () => {
  let dialog: SdsDialogService;
  let overlayContainer: OverlayContainer;
  let overlayContainerElement: HTMLElement;
  let scrolledSubject = new Subject();

  let testViewContainerRef: ViewContainerRef;
  let viewContainerFixture: ComponentFixture<ComponentWithChildViewContainer>;
  let mockLocation: SpyLocation;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [SdsDialogModule, DialogTestModule],
      providers: [
        { provide: Location, useClass: SpyLocation },
        {
          provide: ScrollDispatcher, useFactory: () => ({
            scrolled: () => scrolledSubject.asObservable()
          })
        },
      ],
    });

    TestBed.compileComponents();
  }));

  beforeEach(inject([SdsDialogService, Location, OverlayContainer],
    (d: SdsDialogService, l: Location, oc: OverlayContainer) => {
      dialog = d;
      mockLocation = l as SpyLocation;
      overlayContainer = oc;
      overlayContainerElement = oc.getContainerElement();
    }));

  afterEach(() => {
    overlayContainer.ngOnDestroy();
  });

  beforeEach(() => {
    viewContainerFixture = TestBed.createComponent(ComponentWithChildViewContainer);

    viewContainerFixture.detectChanges();
    testViewContainerRef = viewContainerFixture.componentInstance.childViewContainer;
  });

  it('should open a dialog with a component', () => {
    let dialogRef = dialog.open(PizzaMsg, {
      viewContainerRef: testViewContainerRef
    });

    viewContainerFixture.detectChanges();

    expect(overlayContainerElement.textContent).toContain('Pizza');
    expect(dialogRef.componentInstance instanceof PizzaMsg).toBe(true);
    expect(dialogRef.componentInstance.dialogRef).toBe(dialogRef);

    viewContainerFixture.detectChanges();
    let dialogContainerElement = overlayContainerElement.querySelector('sds-dialog-container')!;
    expect(dialogContainerElement.getAttribute('role')).toBe('dialog');
  });

  it('should open a dialog with a template', () => {
    const templateRefFixture = TestBed.createComponent(ComponentWithTemplateRef);
    templateRefFixture.componentInstance.localValue = 'Bees';
    templateRefFixture.detectChanges();

    const data = { value: 'Knees' };

    let dialogRef = dialog.open(templateRefFixture.componentInstance.templateRef, { data });

    viewContainerFixture.detectChanges();

    expect(overlayContainerElement.textContent).toContain('Cheese Bees Knees');
    expect(templateRefFixture.componentInstance.dialogRef).toBe(dialogRef);

    viewContainerFixture.detectChanges();

    let dialogContainerElement = overlayContainerElement.querySelector('sds-dialog-container')!;
    expect(dialogContainerElement.getAttribute('role')).toBe('dialog');

    dialogRef.close();
  });

  it('should emit when dialog opening animation is complete', fakeAsync(() => {
    const dialogRef = dialog.open(PizzaMsg, { viewContainerRef: testViewContainerRef });
    const spy = jasmine.createSpy('afterOpen spy');

    dialogRef.afterOpened().subscribe(spy);

    viewContainerFixture.detectChanges();

    // callback should not be called before animation is complete
    expect(spy).not.toHaveBeenCalled();

    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
  }));

  it('should use injector from viewContainerRef for DialogInjector', () => {
    let dialogRef = dialog.open(PizzaMsg, {
      viewContainerRef: testViewContainerRef
    });

    viewContainerFixture.detectChanges();

    let dialogInjector = dialogRef.componentInstance.dialogInjector;

    expect(dialogRef.componentInstance.dialogRef).toBe(dialogRef);
    expect(dialogInjector.get<DirectiveWithViewContainer>(DirectiveWithViewContainer)).toBeTruthy(
      'Expected the dialog component to be created with the injector from the viewContainerRef.'
    );
  });

  it('should open a dialog with a component and no ViewContainerRef', () => {
    let dialogRef = dialog.open(PizzaMsg);

    viewContainerFixture.detectChanges();

    expect(overlayContainerElement.textContent).toContain('Pizza');
    expect(dialogRef.componentInstance instanceof PizzaMsg).toBe(true);
    expect(dialogRef.componentInstance.dialogRef).toBe(dialogRef);

    viewContainerFixture.detectChanges();
    let dialogContainerElement = overlayContainerElement.querySelector('sds-dialog-container')!;
    expect(dialogContainerElement.getAttribute('role')).toBe('dialog');
  });

  it('should apply the configured role to the dialog element', () => {
    dialog.open(PizzaMsg, { role: 'alertdialog' });

    viewContainerFixture.detectChanges();

    let dialogContainerElement = overlayContainerElement.querySelector('sds-dialog-container')!;
    expect(dialogContainerElement.getAttribute('role')).toBe('alertdialog');
  });

  it('should apply the specified `aria-describedby`', () => {
    dialog.open(PizzaMsg, { ariaDescribedBy: 'description-element' });

    viewContainerFixture.detectChanges();

    let dialogContainerElement = overlayContainerElement.querySelector('sds-dialog-container')!;
    expect(dialogContainerElement.getAttribute('aria-describedby')).toBe('description-element');
  });

  it('should close a dialog and get back a result', fakeAsync(() => {
    let dialogRef = dialog.open(PizzaMsg, { viewContainerRef: testViewContainerRef });
    let afterCloseCallback = jasmine.createSpy('afterClose callback');

    dialogRef.afterClosed().subscribe(afterCloseCallback);
    dialogRef.close('Charmander');
    viewContainerFixture.detectChanges();
    flush();

    expect(afterCloseCallback).toHaveBeenCalledWith('Charmander');
    expect(overlayContainerElement.querySelector('sds-dialog-container')).toBeNull();
  }));

  it('should dispatch the beforeClose and afterClose events when the ' +
    'overlay is detached externally', fakeAsync(inject([Overlay], (overlay: Overlay) => {
      const dialogRef = dialog.open(PizzaMsg, {
        viewContainerRef: testViewContainerRef,
        scrollStrategy: overlay.scrollStrategies.close()
      });
      const beforeCloseCallback = jasmine.createSpy('beforeClosed callback');
      const afterCloseCallback = jasmine.createSpy('afterClosed callback');

      dialogRef.beforeClosed().subscribe(beforeCloseCallback);
      dialogRef.afterClosed().subscribe(afterCloseCallback);

      scrolledSubject.next();
      viewContainerFixture.detectChanges();
      flush();

      expect(beforeCloseCallback).toHaveBeenCalledTimes(1);
      expect(afterCloseCallback).toHaveBeenCalledTimes(1);
    })));

  it('should close a dialog and get back a result before it is closed', fakeAsync(() => {
    const dialogRef = dialog.open(PizzaMsg, { viewContainerRef: testViewContainerRef });

    flush();
    viewContainerFixture.detectChanges();

    // beforeClose should emit before dialog container is destroyed
    const beforeCloseHandler = jasmine.createSpy('beforeClose callback').and.callFake(() => {
      expect(overlayContainerElement.querySelector('sds-dialog-container'))
        .not.toBeNull('dialog container exists when beforeClose is called');
    });

    dialogRef.beforeClosed().subscribe(beforeCloseHandler);
    dialogRef.close('Bulbasaur');
    viewContainerFixture.detectChanges();
    flush();

    expect(beforeCloseHandler).toHaveBeenCalledWith('Bulbasaur');
    expect(overlayContainerElement.querySelector('sds-dialog-container')).toBeNull();
  }));

  it('should close a dialog via the escape key', fakeAsync(() => {
    dialog.open(PizzaMsg, {
      viewContainerRef: testViewContainerRef
    });

    dispatchKeyboardEvent(document.body, 'keydown', ESCAPE);
    viewContainerFixture.detectChanges();
    flush();

    expect(overlayContainerElement.querySelector('sds-dialog-container')).toBeNull();
  }));

  it('should close from a ViewContainerRef with OnPush change detection', fakeAsync(() => {
    const onPushFixture = TestBed.createComponent(ComponentWithOnPushViewContainer);

    onPushFixture.detectChanges();

    const dialogRef = dialog.open(PizzaMsg, {
      viewContainerRef: onPushFixture.componentInstance.viewContainerRef
    });

    flushMicrotasks();
    onPushFixture.detectChanges();
    flushMicrotasks();

    expect(overlayContainerElement.querySelectorAll('sds-dialog-container').length)
      .toBe(1, 'Expected one open dialog.');

    dialogRef.close();
    flushMicrotasks();
    onPushFixture.detectChanges();
    tick(500);

    expect(overlayContainerElement.querySelectorAll('sds-dialog-container').length)
      .toBe(0, 'Expected no open dialogs.');
  }));

  it('should close when clicking on the overlay backdrop', fakeAsync(() => {
    dialog.open(PizzaMsg, {
      viewContainerRef: testViewContainerRef
    });

    viewContainerFixture.detectChanges();

    let backdrop = overlayContainerElement.querySelector('.cdk-overlay-backdrop') as HTMLElement;

    backdrop.click();
    viewContainerFixture.detectChanges();
    flush();

    expect(overlayContainerElement.querySelector('sds-dialog-container')).toBeFalsy();
  }));

  it('should emit the backdropClick stream when clicking on the overlay backdrop', fakeAsync(() => {
    const dialogRef = dialog.open(PizzaMsg, {
      viewContainerRef: testViewContainerRef
    });

    const spy = jasmine.createSpy('backdropClick spy');
    dialogRef.backdropClick().subscribe(spy);

    viewContainerFixture.detectChanges();

    let backdrop = overlayContainerElement.querySelector('.cdk-overlay-backdrop') as HTMLElement;

    backdrop.click();
    expect(spy).toHaveBeenCalledTimes(1);

    viewContainerFixture.detectChanges();
    flush();

    // Additional clicks after the dialog has closed should not be emitted
    backdrop.click();
    expect(spy).toHaveBeenCalledTimes(1);
  }));

  it('should emit the keyboardEvent stream when key events target the overlay', fakeAsync(() => {
    const dialogRef = dialog.open(PizzaMsg, { viewContainerRef: testViewContainerRef });

    const spy = jasmine.createSpy('keyboardEvent spy');
    dialogRef.keydownEvents().subscribe(spy);

    viewContainerFixture.detectChanges();

    let backdrop = overlayContainerElement.querySelector('.cdk-overlay-backdrop') as HTMLElement;
    let container = overlayContainerElement.querySelector('sds-dialog-container') as HTMLElement;
    dispatchKeyboardEvent(document.body, 'keydown', A);
    dispatchKeyboardEvent(document.body, 'keydown', A, backdrop);
    dispatchKeyboardEvent(document.body, 'keydown', A, container);

    expect(spy).toHaveBeenCalledTimes(3);
  }));

  it('should notify the observers if a dialog has been opened', () => {
    dialog.afterOpened.subscribe(ref => {
      expect(dialog.open(PizzaMsg, {
        viewContainerRef: testViewContainerRef
      })).toBe(ref);
    });
  });

  it('should notify the observers if all open dialogs have finished closing', fakeAsync(() => {
    const ref1 = dialog.open(PizzaMsg, { viewContainerRef: testViewContainerRef });
    const ref2 = dialog.open(ContentElementDialog, { viewContainerRef: testViewContainerRef });
    const spy = jasmine.createSpy('afterAllClosed spy');

    dialog.afterAllClosed.subscribe(spy);

    ref1.close();
    viewContainerFixture.detectChanges();
    flush();

    expect(spy).not.toHaveBeenCalled();

    ref2.close();
    viewContainerFixture.detectChanges();
    flush();
    expect(spy).toHaveBeenCalled();
  }));

  it('should emit the afterAllClosed stream on subscribe if there are no open dialogs', () => {
    const spy = jasmine.createSpy('afterAllClosed spy');

    dialog.afterAllClosed.subscribe(spy);

    expect(spy).toHaveBeenCalled();
  });

  it('should override the width of the overlay pane', () => {
    dialog.open(PizzaMsg, {
      width: '500px'
    });

    viewContainerFixture.detectChanges();

    let overlayPane = overlayContainerElement.querySelector('.cdk-overlay-pane') as HTMLElement;

    expect(overlayPane.style.width).toBe('500px');
  });

  it('should override the height of the overlay pane', () => {
    dialog.open(PizzaMsg, {
      height: '100px'
    });

    viewContainerFixture.detectChanges();

    let overlayPane = overlayContainerElement.querySelector('.cdk-overlay-pane') as HTMLElement;

    expect(overlayPane.style.height).toBe('100px');
  });

  it('should override the min-width of the overlay pane', () => {
    dialog.open(PizzaMsg, {
      minWidth: '500px'
    });

    viewContainerFixture.detectChanges();

    let overlayPane = overlayContainerElement.querySelector('.cdk-overlay-pane') as HTMLElement;

    expect(overlayPane.style.minWidth).toBe('500px');
  });

  it('should override the max-width of the overlay pane', fakeAsync(() => {
    let dialogRef = dialog.open(PizzaMsg);

    viewContainerFixture.detectChanges();

    let overlayPane = overlayContainerElement.querySelector('.cdk-overlay-pane') as HTMLElement;

    expect(overlayPane.style.maxWidth).toBe('80vw',
      'Expected dialog to set a default max-width on overlay pane');

    dialogRef.close();

    tick(500);
    viewContainerFixture.detectChanges();
    flushMicrotasks();

    dialogRef = dialog.open(PizzaMsg, {
      maxWidth: '100px'
    });

    viewContainerFixture.detectChanges();

    overlayPane = overlayContainerElement.querySelector('.cdk-overlay-pane') as HTMLElement;

    expect(overlayPane.style.maxWidth).toBe('100px');
  }));

  it('should override the min-height of the overlay pane', () => {
    dialog.open(PizzaMsg, {
      minHeight: '300px'
    });

    viewContainerFixture.detectChanges();

    let overlayPane = overlayContainerElement.querySelector('.cdk-overlay-pane') as HTMLElement;

    expect(overlayPane.style.minHeight).toBe('300px');
  });

  it('should override the max-height of the overlay pane', () => {
    dialog.open(PizzaMsg, {
      maxHeight: '100px'
    });

    viewContainerFixture.detectChanges();

    let overlayPane = overlayContainerElement.querySelector('.cdk-overlay-pane') as HTMLElement;

    expect(overlayPane.style.maxHeight).toBe('100px');
  });

  it('should override the top offset of the overlay pane', () => {
    dialog.open(PizzaMsg, {
      position: {
        top: '100px'
      }
    });

    viewContainerFixture.detectChanges();

    let overlayPane = overlayContainerElement.querySelector('.cdk-overlay-pane') as HTMLElement;

    expect(overlayPane.style.marginTop).toBe('100px');
  });

  it('should override the bottom offset of the overlay pane', () => {
    dialog.open(PizzaMsg, {
      position: {
        bottom: '200px'
      }
    });

    viewContainerFixture.detectChanges();

    let overlayPane = overlayContainerElement.querySelector('.cdk-overlay-pane') as HTMLElement;

    expect(overlayPane.style.marginBottom).toBe('200px');
  });

  it('should override the left offset of the overlay pane', () => {
    dialog.open(PizzaMsg, {
      position: {
        left: '250px'
      }
    });

    viewContainerFixture.detectChanges();

    let overlayPane = overlayContainerElement.querySelector('.cdk-overlay-pane') as HTMLElement;

    expect(overlayPane.style.marginLeft).toBe('250px');
  });

  it('should override the right offset of the overlay pane', () => {
    dialog.open(PizzaMsg, {
      position: {
        right: '125px'
      }
    });

    viewContainerFixture.detectChanges();

    let overlayPane = overlayContainerElement.querySelector('.cdk-overlay-pane') as HTMLElement;

    expect(overlayPane.style.marginRight).toBe('125px');
  });

  it('should allow for the position to be updated', () => {
    let dialogRef = dialog.open(PizzaMsg, {
      position: {
        left: '250px'
      }
    });

    viewContainerFixture.detectChanges();

    let overlayPane = overlayContainerElement.querySelector('.cdk-overlay-pane') as HTMLElement;

    expect(overlayPane.style.marginLeft).toBe('250px');

    dialogRef.updatePosition({ left: '500px' });

    expect(overlayPane.style.marginLeft).toBe('500px');
  });

  it('should allow for the dimensions to be updated', () => {
    let dialogRef = dialog.open(PizzaMsg, { width: '100px' });

    viewContainerFixture.detectChanges();

    let overlayPane = overlayContainerElement.querySelector('.cdk-overlay-pane') as HTMLElement;

    expect(overlayPane.style.width).toBe('100px');

    dialogRef.updateSize('200px');

    expect(overlayPane.style.width).toBe('200px');
  });

  it('should reset the overlay dimensions to their initial size', () => {
    let dialogRef = dialog.open(PizzaMsg);

    viewContainerFixture.detectChanges();

    let overlayPane = overlayContainerElement.querySelector('.cdk-overlay-pane') as HTMLElement;

    expect(overlayPane.style.width).toBeFalsy();
    expect(overlayPane.style.height).toBeFalsy();

    dialogRef.updateSize('200px', '200px');

    expect(overlayPane.style.width).toBe('200px');
    expect(overlayPane.style.height).toBe('200px');

    dialogRef.updateSize();

    expect(overlayPane.style.width).toBeFalsy();
    expect(overlayPane.style.height).toBeFalsy();
  });

  it('should allow setting the layout direction', () => {
    dialog.open(PizzaMsg, { direction: 'rtl' });

    viewContainerFixture.detectChanges();

    let overlayPane = overlayContainerElement.querySelector('.cdk-global-overlay-wrapper')!;

    expect(overlayPane.getAttribute('dir')).toBe('rtl');
  });

  it('should inject the correct layout direction in the component instance', () => {
    const dialogRef = dialog.open(PizzaMsg, { direction: 'rtl' });

    viewContainerFixture.detectChanges();

    expect(dialogRef.componentInstance.directionality.value).toBe('rtl');
  });

  it('should fall back to injecting the global direction if none is passed by the config', () => {
    const dialogRef = dialog.open(PizzaMsg, {});

    viewContainerFixture.detectChanges();

    expect(dialogRef.componentInstance.directionality.value).toBe('ltr');
  });

  it('should close all of the dialogs', fakeAsync(() => {
    dialog.open(PizzaMsg);
    dialog.open(PizzaMsg);
    dialog.open(PizzaMsg);

    expect(overlayContainerElement.querySelectorAll('sds-dialog-container').length).toBe(3);

    dialog.closeAll();
    viewContainerFixture.detectChanges();
    flush();

    expect(overlayContainerElement.querySelectorAll('sds-dialog-container').length).toBe(0);
  }));

  it('should set the proper animation states', () => {
    let dialogRef = dialog.open(PizzaMsg, { viewContainerRef: testViewContainerRef });
    let dialogContainer: SdsDialogContainerComponent =
      viewContainerFixture.debugElement.query(By.directive(SdsDialogContainerComponent)).componentInstance;

    expect(dialogContainer._state).toBe('enter');

    dialogRef.close();

    expect(dialogContainer._state).toBe('exit');
  });

  it('should close all dialogs when the user goes forwards/backwards in history', fakeAsync(() => {
    dialog.open(PizzaMsg);
    dialog.open(PizzaMsg);

    expect(overlayContainerElement.querySelectorAll('sds-dialog-container').length).toBe(2);

    mockLocation.simulateUrlPop('');
    viewContainerFixture.detectChanges();
    flush();

    expect(overlayContainerElement.querySelectorAll('sds-dialog-container').length).toBe(0);
  }));

  it('should close all open dialogs when the location hash changes', fakeAsync(() => {
    dialog.open(PizzaMsg);
    dialog.open(PizzaMsg);

    expect(overlayContainerElement.querySelectorAll('sds-dialog-container').length).toBe(2);

    mockLocation.simulateHashChange('');
    viewContainerFixture.detectChanges();
    flush();

    expect(overlayContainerElement.querySelectorAll('sds-dialog-container').length).toBe(0);
  }));

  it('should close all of the dialogs when the injectable is destroyed', fakeAsync(() => {
    dialog.open(PizzaMsg);
    dialog.open(PizzaMsg);
    dialog.open(PizzaMsg);

    expect(overlayContainerElement.querySelectorAll('sds-dialog-container').length).toBe(3);

    dialog.ngOnDestroy();
    viewContainerFixture.detectChanges();
    flush();

    expect(overlayContainerElement.querySelectorAll('sds-dialog-container').length).toBe(0);
  }));

  it('should complete open and close streams when the injectable is destroyed', fakeAsync(() => {
    const afterOpenedSpy = jasmine.createSpy('after opened spy');
    const afterAllClosedSpy = jasmine.createSpy('after all closed spy');
    const afterOpenedSubscription = dialog.afterOpened.subscribe({ complete: afterOpenedSpy });
    const afterAllClosedSubscription = dialog.afterAllClosed.subscribe({
      complete: afterAllClosedSpy
    });

    dialog.ngOnDestroy();

    expect(afterOpenedSpy).toHaveBeenCalled();
    expect(afterAllClosedSpy).toHaveBeenCalled();

    afterOpenedSubscription.unsubscribe();
    afterAllClosedSubscription.unsubscribe();
  }));

  it('should allow the consumer to disable closing a dialog on navigation', fakeAsync(() => {
    dialog.open(PizzaMsg);
    dialog.open(PizzaMsg, { closeOnNavigation: false });

    expect(overlayContainerElement.querySelectorAll('sds-dialog-container').length).toBe(2);

    mockLocation.simulateUrlPop('');
    viewContainerFixture.detectChanges();
    flush();

    expect(overlayContainerElement.querySelectorAll('sds-dialog-container').length).toBe(1);
  }));

  it('should have the componentInstance available in the afterClosed callback', fakeAsync(() => {
    let dialogRef = dialog.open(PizzaMsg);
    let spy = jasmine.createSpy('afterClosed spy');

    flushMicrotasks();
    viewContainerFixture.detectChanges();
    flushMicrotasks();

    dialogRef.afterClosed().subscribe(() => {
      spy();
      expect(dialogRef.componentInstance).toBeTruthy('Expected component instance to be defined.');
    });

    dialogRef.close();

    flushMicrotasks();
    viewContainerFixture.detectChanges();
    tick(500);

    // Ensure that the callback actually fires.
    expect(spy).toHaveBeenCalled();
  }));

  it('should be able to attach a custom scroll strategy', fakeAsync(() => {
    const scrollStrategy: ScrollStrategy = {
      attach: () => { },
      enable: jasmine.createSpy('scroll strategy enable spy'),
      disable: () => { }
    };

    dialog.open(PizzaMsg, { scrollStrategy });
    expect(scrollStrategy.enable).toHaveBeenCalled();
  }));

  describe('passing in data', () => {
    it('should be able to pass in data', () => {
      let config = {
        data: {
          stringParam: 'hello',
          dateParam: new Date()
        }
      };

      let instance = dialog.open(DialogWithInjectedData, config).componentInstance;

      expect(instance.data.stringParam).toBe(config.data.stringParam);
      expect(instance.data.dateParam).toBe(config.data.dateParam);
    });

    it('should default to null if no data is passed', () => {
      expect(() => {
        let dialogRef = dialog.open(DialogWithInjectedData);
        expect(dialogRef.componentInstance.data).toBeNull();
      }).not.toThrow();
    });
  });

  it('should not keep a reference to the component after the dialog is closed', fakeAsync(() => {
    let dialogRef = dialog.open(PizzaMsg);

    expect(dialogRef.componentInstance).toBeTruthy();

    dialogRef.close();
    viewContainerFixture.detectChanges();
    flush();

    expect(dialogRef.componentInstance).toBeFalsy('Expected reference to have been cleared.');
  }));

  it('should assign a unique id to each dialog', () => {
    const one = dialog.open(PizzaMsg);
    const two = dialog.open(PizzaMsg);

    expect(one.id).toBeTruthy();
    expect(two.id).toBeTruthy();
    expect(one.id).not.toBe(two.id);
  });

  it('should allow for the id to be overwritten', () => {
    const dialogRef = dialog.open(PizzaMsg, { id: 'pizza' });
    expect(dialogRef.id).toBe('pizza');
  });

  it('should throw when trying to open a dialog with the same id as another dialog', () => {
    dialog.open(PizzaMsg, { id: 'pizza' });
    expect(() => dialog.open(PizzaMsg, { id: 'pizza' })).toThrowError(/must be unique/g);
  });

  it('should be able to find a dialog by id', () => {
    const dialogRef = dialog.open(PizzaMsg, { id: 'pizza' });
    expect(dialog.getDialogById('pizza')).toBe(dialogRef);
  });

  it('should toggle `aria-hidden` on the overlay container siblings', fakeAsync(() => {
    const sibling = document.createElement('div');
    overlayContainerElement.parentNode!.appendChild(sibling);

    const dialogRef = dialog.open(PizzaMsg, { viewContainerRef: testViewContainerRef });
    viewContainerFixture.detectChanges();
    flush();

    expect(sibling.getAttribute('aria-hidden')).toBe('true', 'Expected sibling to be hidden');
    expect(overlayContainerElement.hasAttribute('aria-hidden'))
      .toBe(false, 'Expected overlay container not to be hidden.');

    dialogRef.close();
    viewContainerFixture.detectChanges();
    flush();

    expect(sibling.hasAttribute('aria-hidden'))
      .toBe(false, 'Expected sibling to no longer be hidden.');
    sibling.parentNode!.removeChild(sibling);
  }));

  it('should restore `aria-hidden` to the overlay container siblings on close', fakeAsync(() => {
    const sibling = document.createElement('div');

    sibling.setAttribute('aria-hidden', 'true');
    overlayContainerElement.parentNode!.appendChild(sibling);

    const dialogRef = dialog.open(PizzaMsg, { viewContainerRef: testViewContainerRef });
    viewContainerFixture.detectChanges();
    flush();

    expect(sibling.getAttribute('aria-hidden')).toBe('true', 'Expected sibling to be hidden.');

    dialogRef.close();
    viewContainerFixture.detectChanges();
    flush();

    expect(sibling.getAttribute('aria-hidden')).toBe('true', 'Expected sibling to remain hidden.');
    sibling.parentNode!.removeChild(sibling);
  }));

  it('should not set `aria-hidden` on `aria-live` elements', fakeAsync(() => {
    const sibling = document.createElement('div');

    sibling.setAttribute('aria-live', 'polite');
    overlayContainerElement.parentNode!.appendChild(sibling);

    dialog.open(PizzaMsg, { viewContainerRef: testViewContainerRef });
    viewContainerFixture.detectChanges();
    flush();

    expect(sibling.hasAttribute('aria-hidden'))
      .toBe(false, 'Expected live element not to be hidden.');
    sibling.parentNode!.removeChild(sibling);
  }));

  it('should add and remove classes while open', () => {
    let dialogRef = dialog.open(PizzaMsg, {
      disableClose: true,
      viewContainerRef: testViewContainerRef
    });

    const pane = overlayContainerElement.querySelector('.cdk-overlay-pane') as HTMLElement;
    expect(pane.classList)
      .not.toContain('custom-class-one', 'Expected class to be initially missing');

    dialogRef.addPanelClass('custom-class-one');
    expect(pane.classList).toContain('custom-class-one', 'Expected class to be added');

    dialogRef.removePanelClass('custom-class-one');
    expect(pane.classList).not.toContain('custom-class-one', 'Expected class to be removed');
  });

  describe('disableClose option', () => {
    it('should prevent closing via clicks on the backdrop', fakeAsync(() => {
      dialog.open(PizzaMsg, {
        disableClose: true,
        viewContainerRef: testViewContainerRef
      });

      viewContainerFixture.detectChanges();

      let backdrop = overlayContainerElement.querySelector('.cdk-overlay-backdrop') as HTMLElement;
      backdrop.click();
      viewContainerFixture.detectChanges();
      flush();

      expect(overlayContainerElement.querySelector('sds-dialog-container')).toBeTruthy();
    }));

    it('should prevent closing via the escape key', fakeAsync(() => {
      dialog.open(PizzaMsg, {
        disableClose: true,
        viewContainerRef: testViewContainerRef
      });

      viewContainerFixture.detectChanges();
      dispatchKeyboardEvent(document.body, 'keydown', ESCAPE);
      viewContainerFixture.detectChanges();
      flush();

      expect(overlayContainerElement.querySelector('sds-dialog-container')).toBeTruthy();
    }));

    it('should allow for the disableClose option to be updated while open', fakeAsync(() => {
      let dialogRef = dialog.open(PizzaMsg, {
        disableClose: true,
        viewContainerRef: testViewContainerRef
      });

      viewContainerFixture.detectChanges();

      let backdrop = overlayContainerElement.querySelector('.cdk-overlay-backdrop') as HTMLElement;
      backdrop.click();

      expect(overlayContainerElement.querySelector('sds-dialog-container')).toBeTruthy();

      dialogRef.disableClose = false;
      backdrop.click();
      viewContainerFixture.detectChanges();
      flush();

      expect(overlayContainerElement.querySelector('sds-dialog-container')).toBeFalsy();
    }));
  });

  describe('hasBackdrop option', () => {
    it('should have a backdrop', () => {
      dialog.open(PizzaMsg, {
        hasBackdrop: true,
        viewContainerRef: testViewContainerRef
      });

      viewContainerFixture.detectChanges();

      expect(overlayContainerElement.querySelector('.cdk-overlay-backdrop')).toBeTruthy();
    });

    it('should not have a backdrop', () => {
      dialog.open(PizzaMsg, {
        hasBackdrop: false,
        viewContainerRef: testViewContainerRef
      });

      viewContainerFixture.detectChanges();

      expect(overlayContainerElement.querySelector('.cdk-overlay-backdrop')).toBeFalsy();
    });
  });

  describe('panelClass option', () => {
    it('should have custom panel class', () => {
      dialog.open(PizzaMsg, {
        panelClass: 'custom-panel-class',
        viewContainerRef: testViewContainerRef
      });

      viewContainerFixture.detectChanges();

      expect(overlayContainerElement.querySelector('.custom-panel-class')).toBeTruthy();
    });
  });

  describe('backdropClass option', () => {
    it('should have default backdrop class', () => {
      dialog.open(PizzaMsg, {
        backdropClass: '',
        viewContainerRef: testViewContainerRef
      });

      viewContainerFixture.detectChanges();

      expect(overlayContainerElement.querySelector('.cdk-overlay-dark-backdrop')).toBeTruthy();
    });

    it('should have custom backdrop class', () => {
      dialog.open(PizzaMsg, {
        backdropClass: 'custom-backdrop-class',
        viewContainerRef: testViewContainerRef
      });

      viewContainerFixture.detectChanges();

      expect(overlayContainerElement.querySelector('.custom-backdrop-class')).toBeTruthy();
    });
  });

  describe('focus management', () => {
    // When testing focus, all of the elements must be in the DOM.
    beforeEach(() => document.body.appendChild(overlayContainerElement));
    afterEach(() => document.body.removeChild(overlayContainerElement));

    it('should focus the first tabbable element of the dialog on open', fakeAsync(() => {
      dialog.open(PizzaMsg, {
        viewContainerRef: testViewContainerRef
      });

      viewContainerFixture.detectChanges();
      flushMicrotasks();

      expect(document.activeElement!.tagName)
        .toBe('BUTTON', 'Expected first tabbable element (button) in the dialog to be focused.');
    }));

    it('should allow disabling focus of the first tabbable element', fakeAsync(() => {
      dialog.open(PizzaMsg, {
        viewContainerRef: testViewContainerRef,
        autoFocus: false
      });

      viewContainerFixture.detectChanges();
      flushMicrotasks();

      expect(document.activeElement!.tagName).not.toBe('INPUT');
    }));

    it('should re-focus trigger element when dialog closes', fakeAsync(() => {
      // Create a element that has focus before the dialog is opened.
      let button = document.createElement('button');
      button.id = 'dialog-trigger';
      document.body.appendChild(button);
      button.focus();

      let dialogRef = dialog.open(PizzaMsg, { viewContainerRef: testViewContainerRef });

      flushMicrotasks();
      viewContainerFixture.detectChanges();
      flushMicrotasks();

      expect(document.activeElement!.id)
        .not.toBe('dialog-trigger', 'Expected the focus to change when dialog was opened.');

      dialogRef.close();
      expect(document.activeElement!.id).not.toBe('dialog-trigger',
        'Expcted the focus not to have changed before the animation finishes.');

      flushMicrotasks();
      viewContainerFixture.detectChanges();
      tick(500);

      expect(document.activeElement!.id).toBe('dialog-trigger',
        'Expected that the trigger was refocused after the dialog is closed.');

      document.body.removeChild(button);
    }));

    it('should allow the consumer to shift focus in afterClosed', fakeAsync(() => {
      // Create a element that has focus before the dialog is opened.
      let button = document.createElement('button');
      let input = document.createElement('input');

      button.id = 'dialog-trigger';
      input.id = 'input-to-be-focused';

      document.body.appendChild(button);
      document.body.appendChild(input);
      button.focus();

      let dialogRef = dialog.open(PizzaMsg, { viewContainerRef: testViewContainerRef });

      tick(500);
      viewContainerFixture.detectChanges();

      dialogRef.afterClosed().subscribe(() => input.focus());
      dialogRef.close();

      tick(500);
      viewContainerFixture.detectChanges();
      flushMicrotasks();

      expect(document.activeElement!.id).toBe('input-to-be-focused',
        'Expected that the trigger was refocused after the dialog is closed.');

      document.body.removeChild(button);
      document.body.removeChild(input);
    }));

    it('should be able to disable focus restoration', fakeAsync(() => {
      // Create a element that has focus before the dialog is opened.
      const button = document.createElement('button');
      button.id = 'dialog-trigger';
      document.body.appendChild(button);
      button.focus();

      const dialogRef = dialog.open(PizzaMsg, {
        viewContainerRef: testViewContainerRef,
        restoreFocus: false
      });

      flushMicrotasks();
      viewContainerFixture.detectChanges();
      flushMicrotasks();

      expect(document.activeElement!.id)
        .not.toBe('dialog-trigger', 'Expected the focus to change when dialog was opened.');

      dialogRef.close();
      flushMicrotasks();
      viewContainerFixture.detectChanges();
      tick(500);

      expect(document.activeElement!.id).not.toBe('dialog-trigger',
        'Expected focus not to have been restored.');

      document.body.removeChild(button);
    }));


  });

  describe('dialog content elements', () => {
    let dialogRef: SdsDialogRef<any>;

    describe('inside component dialog', () => {
      beforeEach(fakeAsync(() => {
        dialogRef = dialog.open(ContentElementDialog, { viewContainerRef: testViewContainerRef });
        viewContainerFixture.detectChanges();
        flush();
      }));

      runContentElementTests();
    });

    describe('inside template portal', () => {
      beforeEach(fakeAsync(() => {
        const fixture = TestBed.createComponent(ComponentWithContentElementTemplateRef);
        fixture.detectChanges();

        dialogRef = dialog.open(fixture.componentInstance.templateRef, {
          viewContainerRef: testViewContainerRef
        });

        viewContainerFixture.detectChanges();
        flush();
      }));

      runContentElementTests();
    });

    function runContentElementTests() {
      it('should close the dialog when clicking on the close button', fakeAsync(() => {
        expect(overlayContainerElement.querySelectorAll('.sds-dialog__container').length).toBe(1);

        (overlayContainerElement.querySelector('button[sds-dialog-close]') as HTMLElement).click();
        viewContainerFixture.detectChanges();
        flush();

        expect(overlayContainerElement.querySelectorAll('.sds-dialog__container').length).toBe(0);
      }));

      it('should not close if [sds-dialog-close] is applied on a non-button node', () => {
        expect(overlayContainerElement.querySelectorAll('.sds-dialog__container').length).toBe(1);

        (overlayContainerElement.querySelector('div[sds-dialog-close]') as HTMLElement).click();

        expect(overlayContainerElement.querySelectorAll('.sds-dialog__container').length).toBe(1);
      });

      it('should allow for a user-specified aria-label on the close button', fakeAsync(() => {
        let button = overlayContainerElement.querySelector('.close-with-aria-label')!;
        expect(button.getAttribute('aria-label')).toBe('Best close button ever');
      }));

      it('should override the "type" attribute of the close button', () => {
        let button = overlayContainerElement.querySelector('button[sds-dialog-close]')!;

        expect(button.getAttribute('type')).toBe('button');
      });

      it('should return the [sds-dialog-close] result when clicking the close button',
        fakeAsync(() => {
          let afterCloseCallback = jasmine.createSpy('afterClose callback');
          dialogRef.afterClosed().subscribe(afterCloseCallback);

          (overlayContainerElement.querySelector('button.close-with-true') as HTMLElement).click();
          viewContainerFixture.detectChanges();
          flush();

          expect(afterCloseCallback).toHaveBeenCalledWith(true);
        }));

      it('should set the aria-labelledby attribute to the id of the title', fakeAsync(() => {
        let title = overlayContainerElement.querySelector('[sds-dialog-title]')!;
        let container = overlayContainerElement.querySelector('sds-dialog-container')!;

        flush();
        viewContainerFixture.detectChanges();

        expect(title.id).toBeTruthy('Expected title element to have an id.');
        expect(container.getAttribute('aria-labelledby'))
          .toBe(title.id, 'Expected the aria-labelledby to match the title id.');
      }));
    }
  });

  describe('aria-label', () => {
    it('should be able to set a custom aria-label', () => {
      dialog.open(PizzaMsg, {
        ariaLabel: 'Hello there',
        viewContainerRef: testViewContainerRef
      });
      viewContainerFixture.detectChanges();

      const container = overlayContainerElement.querySelector('sds-dialog-container')!;
      expect(container.getAttribute('aria-label')).toBe('Hello there');
    });

    it('should not set the aria-labelledby automatically if it has an aria-label', fakeAsync(() => {
      dialog.open(ContentElementDialog, {
        ariaLabel: 'Hello there',
        viewContainerRef: testViewContainerRef
      });
      viewContainerFixture.detectChanges();
      tick();
      viewContainerFixture.detectChanges();

      const container = overlayContainerElement.querySelector('sds-dialog-container')!;
      expect(container.hasAttribute('aria-labelledby')).toBe(false);
    }));
  });

});

describe('SdsDialog with a parent SdsDialog', () => {
  let parentDialog: SdsDialogService;
  let childDialog: SdsDialogService;
  let overlayContainerElement: HTMLElement;
  let fixture: ComponentFixture<ComponentThatProvidesSdsDialog>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [SdsDialogModule, DialogTestModule],
      declarations: [ComponentThatProvidesSdsDialog],
      providers: [
        {
          provide: OverlayContainer, useFactory: () => {
            overlayContainerElement = document.createElement('div');
            return { getContainerElement: () => overlayContainerElement };
          }
        },
        { provide: Location, useClass: SpyLocation }
      ],
    });

    TestBed.compileComponents();
  }));

  beforeEach(inject([SdsDialogService], (d: SdsDialogService) => {
    parentDialog = d;

    fixture = TestBed.createComponent(ComponentThatProvidesSdsDialog);
    childDialog = fixture.componentInstance.dialog;
    fixture.detectChanges();
  }));

  afterEach(() => {
    overlayContainerElement.innerHTML = '';
  });

  it('should close dialogs opened by a parent when calling closeAll on a child SdsDialog',
    fakeAsync(() => {
      parentDialog.open(PizzaMsg);
      fixture.detectChanges();
      flush();

      expect(overlayContainerElement.textContent)
        .toContain('Pizza', 'Expected a dialog to be opened');

      childDialog.closeAll();
      fixture.detectChanges();
      flush();

      expect(overlayContainerElement.textContent!.trim())
        .toBe('', 'Expected closeAll on child SdsDialog to close dialog opened by parent');
    }));

  it('should close dialogs opened by a child when calling closeAll on a parent SdsDialog',
    fakeAsync(() => {
      childDialog.open(PizzaMsg);
      fixture.detectChanges();

      expect(overlayContainerElement.textContent)
        .toContain('Pizza', 'Expected a dialog to be opened');

      parentDialog.closeAll();
      fixture.detectChanges();
      flush();

      expect(overlayContainerElement.textContent!.trim())
        .toBe('', 'Expected closeAll on parent SdsDialog to close dialog opened by child');
    }));

  it('should close the top dialog via the escape key', fakeAsync(() => {
    childDialog.open(PizzaMsg);

    dispatchKeyboardEvent(document.body, 'keydown', ESCAPE);
    fixture.detectChanges();
    flush();

    expect(overlayContainerElement.querySelector('sds-dialog-container')).toBeNull();
  }));

  it('should not close the parent dialogs when a child is destroyed', fakeAsync(() => {
    parentDialog.open(PizzaMsg);
    fixture.detectChanges();
    flush();

    expect(overlayContainerElement.textContent)
      .toContain('Pizza', 'Expected a dialog to be opened');

    childDialog.ngOnDestroy();
    fixture.detectChanges();
    flush();

    expect(overlayContainerElement.textContent)
      .toContain('Pizza', 'Expected a dialog to be opened');
  }));
});

describe('SdsDialog with default options', () => {
  let dialog: SdsDialogService;
  let overlayContainer: OverlayContainer;
  let overlayContainerElement: HTMLElement;

  let testViewContainerRef: ViewContainerRef;
  let viewContainerFixture: ComponentFixture<ComponentWithChildViewContainer>;

  beforeEach(fakeAsync(() => {
    const defaultConfig = {
      hasBackdrop: false,
      disableClose: true,
      width: '100px',
      height: '100px',
      minWidth: '50px',
      minHeight: '50px',
      maxWidth: '150px',
      maxHeight: '150px',
      autoFocus: false,
    };

    TestBed.configureTestingModule({
      imports: [SdsDialogModule, DialogTestModule],
      providers: [
        { provide: SDS_DIALOG_DEFAULT_OPTIONS, useValue: defaultConfig },
      ],
    });

    TestBed.compileComponents();
  }));

  beforeEach(inject([SdsDialogService, OverlayContainer],
    (d: SdsDialogService, oc: OverlayContainer) => {
      dialog = d;
      overlayContainer = oc;
      overlayContainerElement = oc.getContainerElement();
    }));

  afterEach(() => {
    overlayContainer.ngOnDestroy();
  });

  beforeEach(() => {
    viewContainerFixture = TestBed.createComponent(ComponentWithChildViewContainer);

    viewContainerFixture.detectChanges();
    testViewContainerRef = viewContainerFixture.componentInstance.childViewContainer;
  });

  it('should use the provided defaults', () => {
    dialog.open(PizzaMsg, { viewContainerRef: testViewContainerRef });

    viewContainerFixture.detectChanges();

    expect(overlayContainerElement.querySelector('.cdk-overlay-backdrop')).toBeFalsy();

    dispatchKeyboardEvent(document.body, 'keydown', ESCAPE);
    expect(overlayContainerElement.querySelector('sds-dialog-container')).toBeTruthy();

    expect(document.activeElement!.tagName).not.toBe('INPUT');

    let overlayPane = overlayContainerElement.querySelector('.cdk-overlay-pane') as HTMLElement;
    expect(overlayPane.style.width).toBe('100px');
    expect(overlayPane.style.height).toBe('100px');
    expect(overlayPane.style.minWidth).toBe('50px');
    expect(overlayPane.style.minHeight).toBe('50px');
    expect(overlayPane.style.maxWidth).toBe('150px');
    expect(overlayPane.style.maxHeight).toBe('150px');
  });

  it('should be overridable by open() options', fakeAsync(() => {
    dialog.open(PizzaMsg, {
      hasBackdrop: true,
      disableClose: false,
      viewContainerRef: testViewContainerRef
    });

    viewContainerFixture.detectChanges();

    expect(overlayContainerElement.querySelector('.cdk-overlay-backdrop')).toBeTruthy();

    dispatchKeyboardEvent(document.body, 'keydown', ESCAPE);
    viewContainerFixture.detectChanges();
    flush();

    expect(overlayContainerElement.querySelector('sds-dialog-container')).toBeFalsy();
  }));
});


@Directive({ selector: 'dir-with-view-container' })
class DirectiveWithViewContainer {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: 'hello',
})
class ComponentWithOnPushViewContainer {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

@Component({
  selector: 'arbitrary-component',
  template: `<dir-with-view-container></dir-with-view-container>`,
})
class ComponentWithChildViewContainer {
  @ViewChild(DirectiveWithViewContainer, { static: false }) childWithViewContainer: DirectiveWithViewContainer;

  get childViewContainer() {
    return this.childWithViewContainer.viewContainerRef;
  }
}

@Component({
  selector: 'arbitrary-component-with-template-ref',
  template: `<ng-template let-data let-dialogRef="dialogRef">
      Cheese {{localValue}} {{data?.value}}{{setDialogRef(dialogRef)}}</ng-template>`,
})
class ComponentWithTemplateRef {
  localValue: string;
  dialogRef: SdsDialogRef<any>;

  @ViewChild(TemplateRef, { static: false }) templateRef: TemplateRef<any>;

  setDialogRef(dialogRef: SdsDialogRef<any>): string {
    this.dialogRef = dialogRef;
    return '';
  }
}

/** Simple component for testing ComponentPortal. */
@Component({ template: '<p>Pizza</p> <input> <button>Close</button>' })
class PizzaMsg {
  constructor(public dialogRef: SdsDialogRef<PizzaMsg>,
    public dialogInjector: Injector,
    public directionality: Directionality) { }
}

@Component({
  template: `
    <h1 sds-dialog-title>This is the title</h1>
    <sds-dialog-content>Lorem ipsum dolor sit amet.</sds-dialog-content>
    <sds-dialog-actions>
      <button sds-dialog-close>Close</button>
      <button class="close-with-true" [sds-dialog-close]="true">Close and return true</button>
      <button
        class="close-with-aria-label"
        aria-label="Best close button ever"
        [sds-dialog-close]="true"></button>
      <div sds-dialog-close>Should not close</div>
    </sds-dialog-actions>
  `
})
class ContentElementDialog { }

@Component({
  template: `
    <ng-template>
      <h1 sds-dialog-title>This is the title</h1>
      <sds-dialog-content>Lorem ipsum dolor sit amet.</sds-dialog-content>
      <sds-dialog-actions>
        <button sds-dialog-close>Close</button>
        <button class="close-with-true" [sds-dialog-close]="true">Close and return true</button>
        <button
          class="close-with-aria-label"
          aria-label="Best close button ever"
          [sds-dialog-close]="true"></button>
        <div sds-dialog-close>Should not close</div>
      </sds-dialog-actions>
    </ng-template>
  `
})
class ComponentWithContentElementTemplateRef {
  @ViewChild(TemplateRef, { static: false }) templateRef: TemplateRef<any>;
}

@Component({
  template: '',
  providers: [SdsDialogService]
})
class ComponentThatProvidesSdsDialog {
  constructor(public dialog: SdsDialogService) { }
}

/** Simple component for testing ComponentPortal. */
@Component({ template: '' })
class DialogWithInjectedData {
  constructor(@Inject(SDS_DIALOG_DATA) public data: any) { }
}

@Component({ template: '<p>Pasta</p>' })
class DialogWithoutFocusableElements { }

// Create a real (non-test) NgModule as a workaround for
// https://github.com/angular/angular/issues/10760
const TEST_DIRECTIVES = [
  ComponentWithChildViewContainer,
  ComponentWithTemplateRef,
  PizzaMsg,
  DirectiveWithViewContainer,
  ComponentWithOnPushViewContainer,
  ContentElementDialog,
  DialogWithInjectedData,
  DialogWithoutFocusableElements,
  ComponentWithContentElementTemplateRef,
];

@NgModule({
  imports: [SdsDialogModule, NoopAnimationsModule],
  exports: TEST_DIRECTIVES,
  declarations: TEST_DIRECTIVES,
  entryComponents: [
    ComponentWithChildViewContainer,
    ComponentWithTemplateRef,
    PizzaMsg,
    ContentElementDialog,
    DialogWithInjectedData,
    DialogWithoutFocusableElements,
  ],
})
class DialogTestModule { }
