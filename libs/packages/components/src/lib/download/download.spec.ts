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
import {By} from '@angular/platform-browser';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {Location} from '@angular/common';
import {SpyLocation} from '@angular/common/testing';
import {Directionality} from '@angular/cdk/bidi';
import {SdsDownloadContainerComponent} from './download-container.component';
import {OverlayContainer, ScrollStrategy, Overlay} from '@angular/cdk/overlay';
import {ScrollDispatcher} from '@angular/cdk/scrolling';
import {A, ESCAPE} from '@angular/cdk/keycodes';
import {dispatchKeyboardEvent} from '../testing/dispatch-events';
import {
  SDS_DOWNLOAD_DATA,
  SdsDownloadService,
  SDS_DOWNLOAD_DEFAULT_OPTIONS
} from './download';
import { SdsDownloadRef } from './download-ref';
import { SdsDownloadModule } from './download.module';
import { Subject } from 'rxjs';


describe('SdsDownload', () => {
  let download: SdsDownloadService;
  let overlayContainer: OverlayContainer;
  let overlayContainerElement: HTMLElement;
  let scrolledSubject = new Subject();

  let testViewContainerRef: ViewContainerRef;
  let viewContainerFixture: ComponentFixture<ComponentWithChildViewContainer>;
  let mockLocation: SpyLocation;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [SdsDownloadModule, DownloadTestModule],
      providers: [
        {provide: Location, useClass: SpyLocation},
        {provide: ScrollDispatcher, useFactory: () => ({
          scrolled: () => scrolledSubject.asObservable()
        })},
      ],
    });

    TestBed.compileComponents();
  }));

  beforeEach(inject([SdsDownloadService, Location, OverlayContainer],
    (d: SdsDownloadService, l: Location, oc: OverlayContainer) => {
      download = d;
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

  it('should open a download with a component', () => {
    let downloadRef = download.open(PizzaMsg, {
      viewContainerRef: testViewContainerRef
    });

    viewContainerFixture.detectChanges();

    expect(overlayContainerElement.textContent).toContain('Pizza');
    expect(downloadRef.componentInstance instanceof PizzaMsg).toBe(true);
    expect(downloadRef.componentInstance.downloadRef).toBe(downloadRef);

    viewContainerFixture.detectChanges();
    let downloadContainerElement = overlayContainerElement.querySelector('sds-download-container')!;
    expect(downloadContainerElement.getAttribute('role')).toBe('download');
  });

  it('should open a download with a template', () => {
    const templateRefFixture = TestBed.createComponent(ComponentWithTemplateRef);
    templateRefFixture.componentInstance.localValue = 'Bees';
    templateRefFixture.detectChanges();

    const data = {value: 'Knees'};

    let downloadRef = download.open(templateRefFixture.componentInstance.templateRef, { data });

    viewContainerFixture.detectChanges();

    expect(overlayContainerElement.textContent).toContain('Cheese Bees Knees');
    expect(templateRefFixture.componentInstance.downloadRef).toBe(downloadRef);

    viewContainerFixture.detectChanges();

    let downloadContainerElement = overlayContainerElement.querySelector('sds-download-container')!;
    expect(downloadContainerElement.getAttribute('role')).toBe('download');

    downloadRef.close();
  });

  it('should emit when download opening animation is complete', fakeAsync(() => {
    const downloadRef = download.open(PizzaMsg, {viewContainerRef: testViewContainerRef});
    const spy = jasmine.createSpy('afterOpen spy');

    downloadRef.afterOpened().subscribe(spy);

    viewContainerFixture.detectChanges();

    // callback should not be called before animation is complete
    expect(spy).not.toHaveBeenCalled();

    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
  }));

  it('should use injector from viewContainerRef for DownloadInjector', () => {
    let downloadRef = download.open(PizzaMsg, {
      viewContainerRef: testViewContainerRef
    });

    viewContainerFixture.detectChanges();

    let downloadInjector = downloadRef.componentInstance.downloadInjector;

    expect(downloadRef.componentInstance.downloadRef).toBe(downloadRef);
    expect(downloadInjector.get<DirectiveWithViewContainer>(DirectiveWithViewContainer)).toBeTruthy(
      'Expected the download component to be created with the injector from the viewContainerRef.'
    );
  });

  it('should open a download with a component and no ViewContainerRef', () => {
    let downloadRef = download.open(PizzaMsg);

    viewContainerFixture.detectChanges();

    expect(overlayContainerElement.textContent).toContain('Pizza');
    expect(downloadRef.componentInstance instanceof PizzaMsg).toBe(true);
    expect(downloadRef.componentInstance.downloadRef).toBe(downloadRef);

    viewContainerFixture.detectChanges();
    let downloadContainerElement = overlayContainerElement.querySelector('sds-download-container')!;
    expect(downloadContainerElement.getAttribute('role')).toBe('download');
  });

  it('should apply the configured role to the download element', () => {
    download.open(PizzaMsg, { role: 'alertdownload' });

    viewContainerFixture.detectChanges();

    let downloadContainerElement = overlayContainerElement.querySelector('sds-download-container')!;
    expect(downloadContainerElement.getAttribute('role')).toBe('alertdownload');
  });

  it('should apply the specified `aria-describedby`', () => {
    download.open(PizzaMsg, { ariaDescribedBy: 'description-element' });

    viewContainerFixture.detectChanges();

    let downloadContainerElement = overlayContainerElement.querySelector('sds-download-container')!;
    expect(downloadContainerElement.getAttribute('aria-describedby')).toBe('description-element');
  });

  it('should close a download and get back a result', fakeAsync(() => {
    let downloadRef = download.open(PizzaMsg, { viewContainerRef: testViewContainerRef });
    let afterCloseCallback = jasmine.createSpy('afterClose callback');

    downloadRef.afterClosed().subscribe(afterCloseCallback);
    downloadRef.close('Charmander');
    viewContainerFixture.detectChanges();
    flush();

    expect(afterCloseCallback).toHaveBeenCalledWith('Charmander');
    expect(overlayContainerElement.querySelector('sds-download-container')).toBeNull();
  }));

  it('should dispatch the beforeClose and afterClose events when the ' +
    'overlay is detached externally', fakeAsync(inject([Overlay], (overlay: Overlay) => {
      const downloadRef = download.open(PizzaMsg, {
        viewContainerRef: testViewContainerRef,
        scrollStrategy: overlay.scrollStrategies.close()
      });
      const beforeCloseCallback = jasmine.createSpy('beforeClosed callback');
      const afterCloseCallback = jasmine.createSpy('afterClosed callback');

      downloadRef.beforeClosed().subscribe(beforeCloseCallback);
      downloadRef.afterClosed().subscribe(afterCloseCallback);

      scrolledSubject.next();
      viewContainerFixture.detectChanges();
      flush();

      expect(beforeCloseCallback).toHaveBeenCalledTimes(1);
      expect(afterCloseCallback).toHaveBeenCalledTimes(1);
    })));

  it('should close a download and get back a result before it is closed', fakeAsync(() => {
    const downloadRef = download.open(PizzaMsg, {viewContainerRef: testViewContainerRef});

    flush();
    viewContainerFixture.detectChanges();

    // beforeClose should emit before download container is destroyed
    const beforeCloseHandler = jasmine.createSpy('beforeClose callback').and.callFake(() => {
      expect(overlayContainerElement.querySelector('sds-download-container'))
          .not.toBeNull('download container exists when beforeClose is called');
    });

    downloadRef.beforeClosed().subscribe(beforeCloseHandler);
    downloadRef.close('Bulbasaur');
    viewContainerFixture.detectChanges();
    flush();

    expect(beforeCloseHandler).toHaveBeenCalledWith('Bulbasaur');
    expect(overlayContainerElement.querySelector('sds-download-container')).toBeNull();
  }));

  it('should close a download via the escape key', fakeAsync(() => {
    download.open(PizzaMsg, {
      viewContainerRef: testViewContainerRef
    });

    dispatchKeyboardEvent(document.body, 'keydown', ESCAPE);
    viewContainerFixture.detectChanges();
    flush();

    expect(overlayContainerElement.querySelector('sds-download-container')).toBeNull();
  }));

  it('should close from a ViewContainerRef with OnPush change detection', fakeAsync(() => {
    const onPushFixture = TestBed.createComponent(ComponentWithOnPushViewContainer);

    onPushFixture.detectChanges();

    const downloadRef = download.open(PizzaMsg, {
      viewContainerRef: onPushFixture.componentInstance.viewContainerRef
    });

    flushMicrotasks();
    onPushFixture.detectChanges();
    flushMicrotasks();

    expect(overlayContainerElement.querySelectorAll('sds-download-container').length)
        .toBe(1, 'Expected one open download.');

    downloadRef.close();
    flushMicrotasks();
    onPushFixture.detectChanges();
    tick(500);

    expect(overlayContainerElement.querySelectorAll('sds-download-container').length)
        .toBe(0, 'Expected no open downloads.');
  }));

  it('should close when clicking on the overlay backdrop', fakeAsync(() => {
    download.open(PizzaMsg, {
      viewContainerRef: testViewContainerRef
    });

    viewContainerFixture.detectChanges();

    let backdrop = overlayContainerElement.querySelector('.cdk-overlay-backdrop') as HTMLElement;

    backdrop.click();
    viewContainerFixture.detectChanges();
    flush();

    expect(overlayContainerElement.querySelector('sds-download-container')).toBeFalsy();
  }));

  it('should emit the backdropClick stream when clicking on the overlay backdrop', fakeAsync(() => {
    const downloadRef = download.open(PizzaMsg, {
      viewContainerRef: testViewContainerRef
    });

    const spy = jasmine.createSpy('backdropClick spy');
    downloadRef.backdropClick().subscribe(spy);

    viewContainerFixture.detectChanges();

    let backdrop = overlayContainerElement.querySelector('.cdk-overlay-backdrop') as HTMLElement;

    backdrop.click();
    expect(spy).toHaveBeenCalledTimes(1);

    viewContainerFixture.detectChanges();
    flush();

    // Additional clicks after the download has closed should not be emitted
    backdrop.click();
    expect(spy).toHaveBeenCalledTimes(1);
  }));

  it('should emit the keyboardEvent stream when key events target the overlay', fakeAsync(() => {
    const downloadRef = download.open(PizzaMsg, {viewContainerRef: testViewContainerRef});

    const spy = jasmine.createSpy('keyboardEvent spy');
    downloadRef.keydownEvents().subscribe(spy);

    viewContainerFixture.detectChanges();

    let backdrop = overlayContainerElement.querySelector('.cdk-overlay-backdrop') as HTMLElement;
    let container = overlayContainerElement.querySelector('sds-download-container') as HTMLElement;
    dispatchKeyboardEvent(document.body, 'keydown', A);
    dispatchKeyboardEvent(document.body, 'keydown', A, backdrop);
    dispatchKeyboardEvent(document.body, 'keydown', A, container);

    expect(spy).toHaveBeenCalledTimes(3);
  }));

  it('should notify the observers if a download has been opened', () => {
    download.afterOpened.subscribe(ref => {
      expect(download.open(PizzaMsg, {
        viewContainerRef: testViewContainerRef
      })).toBe(ref);
    });
  });

  it('should notify the observers if all open downloads have finished closing', fakeAsync(() => {
    const ref1 = download.open(PizzaMsg, { viewContainerRef: testViewContainerRef });
    const ref2 = download.open(ContentElementDownload, { viewContainerRef: testViewContainerRef });
    const spy = jasmine.createSpy('afterAllClosed spy');

    download.afterAllClosed.subscribe(spy);

    ref1.close();
    viewContainerFixture.detectChanges();
    flush();

    expect(spy).not.toHaveBeenCalled();

    ref2.close();
    viewContainerFixture.detectChanges();
    flush();
    expect(spy).toHaveBeenCalled();
  }));

  it('should emit the afterAllClosed stream on subscribe if there are no open downloads', () => {
    const spy = jasmine.createSpy('afterAllClosed spy');

    download.afterAllClosed.subscribe(spy);

    expect(spy).toHaveBeenCalled();
  });

  it('should override the width of the overlay pane', () => {
    download.open(PizzaMsg, {
      width: '500px'
    });

    viewContainerFixture.detectChanges();

    let overlayPane = overlayContainerElement.querySelector('.cdk-overlay-pane') as HTMLElement;

    expect(overlayPane.style.width).toBe('500px');
  });

  it('should override the height of the overlay pane', () => {
    download.open(PizzaMsg, {
      height: '100px'
    });

    viewContainerFixture.detectChanges();

    let overlayPane = overlayContainerElement.querySelector('.cdk-overlay-pane') as HTMLElement;

    expect(overlayPane.style.height).toBe('100px');
  });

  it('should override the min-width of the overlay pane', () => {
    download.open(PizzaMsg, {
      minWidth: '500px'
    });

    viewContainerFixture.detectChanges();

    let overlayPane = overlayContainerElement.querySelector('.cdk-overlay-pane') as HTMLElement;

    expect(overlayPane.style.minWidth).toBe('500px');
  });

  it('should override the max-width of the overlay pane', fakeAsync(() => {
    let downloadRef = download.open(PizzaMsg);

    viewContainerFixture.detectChanges();

    let overlayPane = overlayContainerElement.querySelector('.cdk-overlay-pane') as HTMLElement;

    expect(overlayPane.style.maxWidth).toBe('80vw',
      'Expected download to set a default max-width on overlay pane');

    downloadRef.close();

    tick(500);
    viewContainerFixture.detectChanges();
    flushMicrotasks();

    downloadRef = download.open(PizzaMsg, {
      maxWidth: '100px'
    });

    viewContainerFixture.detectChanges();

    overlayPane = overlayContainerElement.querySelector('.cdk-overlay-pane') as HTMLElement;

    expect(overlayPane.style.maxWidth).toBe('100px');
  }));

  it('should override the min-height of the overlay pane', () => {
    download.open(PizzaMsg, {
      minHeight: '300px'
    });

    viewContainerFixture.detectChanges();

    let overlayPane = overlayContainerElement.querySelector('.cdk-overlay-pane') as HTMLElement;

    expect(overlayPane.style.minHeight).toBe('300px');
  });

  it('should override the max-height of the overlay pane', () => {
    download.open(PizzaMsg, {
      maxHeight: '100px'
    });

    viewContainerFixture.detectChanges();

    let overlayPane = overlayContainerElement.querySelector('.cdk-overlay-pane') as HTMLElement;

    expect(overlayPane.style.maxHeight).toBe('100px');
  });

  it('should override the top offset of the overlay pane', () => {
    download.open(PizzaMsg, {
      position: {
        top: '100px'
      }
    });

    viewContainerFixture.detectChanges();

    let overlayPane = overlayContainerElement.querySelector('.cdk-overlay-pane') as HTMLElement;

    expect(overlayPane.style.marginTop).toBe('100px');
  });

  it('should override the bottom offset of the overlay pane', () => {
    download.open(PizzaMsg, {
      position: {
        bottom: '200px'
      }
    });

    viewContainerFixture.detectChanges();

    let overlayPane = overlayContainerElement.querySelector('.cdk-overlay-pane') as HTMLElement;

    expect(overlayPane.style.marginBottom).toBe('200px');
  });

  it('should override the left offset of the overlay pane', () => {
    download.open(PizzaMsg, {
      position: {
        left: '250px'
      }
    });

    viewContainerFixture.detectChanges();

    let overlayPane = overlayContainerElement.querySelector('.cdk-overlay-pane') as HTMLElement;

    expect(overlayPane.style.marginLeft).toBe('250px');
  });

  it('should override the right offset of the overlay pane', () => {
    download.open(PizzaMsg, {
      position: {
        right: '125px'
      }
    });

    viewContainerFixture.detectChanges();

    let overlayPane = overlayContainerElement.querySelector('.cdk-overlay-pane') as HTMLElement;

    expect(overlayPane.style.marginRight).toBe('125px');
  });

  it('should allow for the position to be updated', () => {
    let downloadRef = download.open(PizzaMsg, {
      position: {
        left: '250px'
      }
    });

    viewContainerFixture.detectChanges();

    let overlayPane = overlayContainerElement.querySelector('.cdk-overlay-pane') as HTMLElement;

    expect(overlayPane.style.marginLeft).toBe('250px');

    downloadRef.updatePosition({ left: '500px' });

    expect(overlayPane.style.marginLeft).toBe('500px');
  });

  it('should allow for the dimensions to be updated', () => {
    let downloadRef = download.open(PizzaMsg, { width: '100px' });

    viewContainerFixture.detectChanges();

    let overlayPane = overlayContainerElement.querySelector('.cdk-overlay-pane') as HTMLElement;

    expect(overlayPane.style.width).toBe('100px');

    downloadRef.updateSize('200px');

    expect(overlayPane.style.width).toBe('200px');
  });

  it('should reset the overlay dimensions to their initial size', () => {
    let downloadRef = download.open(PizzaMsg);

    viewContainerFixture.detectChanges();

    let overlayPane = overlayContainerElement.querySelector('.cdk-overlay-pane') as HTMLElement;

    expect(overlayPane.style.width).toBeFalsy();
    expect(overlayPane.style.height).toBeFalsy();

    downloadRef.updateSize('200px', '200px');

    expect(overlayPane.style.width).toBe('200px');
    expect(overlayPane.style.height).toBe('200px');

    downloadRef.updateSize();

    expect(overlayPane.style.width).toBeFalsy();
    expect(overlayPane.style.height).toBeFalsy();
  });

  it('should allow setting the layout direction', () => {
    download.open(PizzaMsg, { direction: 'rtl' });

    viewContainerFixture.detectChanges();

    let overlayPane = overlayContainerElement.querySelector('.cdk-global-overlay-wrapper')!;

    expect(overlayPane.getAttribute('dir')).toBe('rtl');
  });

  it('should inject the correct layout direction in the component instance', () => {
    const downloadRef = download.open(PizzaMsg, { direction: 'rtl' });

    viewContainerFixture.detectChanges();

    expect(downloadRef.componentInstance.directionality.value).toBe('rtl');
  });

  it('should fall back to injecting the global direction if none is passed by the config', () => {
    const downloadRef = download.open(PizzaMsg, {});

    viewContainerFixture.detectChanges();

    expect(downloadRef.componentInstance.directionality.value).toBe('ltr');
  });

  it('should close all of the downloads', fakeAsync(() => {
    download.open(PizzaMsg);
    download.open(PizzaMsg);
    download.open(PizzaMsg);

    expect(overlayContainerElement.querySelectorAll('sds-download-container').length).toBe(3);

    download.closeAll();
    viewContainerFixture.detectChanges();
    flush();

    expect(overlayContainerElement.querySelectorAll('sds-download-container').length).toBe(0);
  }));

  it('should set the proper animation states', () => {
    let downloadRef = download.open(PizzaMsg, { viewContainerRef: testViewContainerRef });
    let downloadContainer: SdsDownloadContainerComponent =
        viewContainerFixture.debugElement.query(By.directive(SdsDownloadContainerComponent)).componentInstance;

    expect(downloadContainer._state).toBe('enter');

    downloadRef.close();

    expect(downloadContainer._state).toBe('exit');
  });

  it('should close all downloads when the user goes forwards/backwards in history', fakeAsync(() => {
    download.open(PizzaMsg);
    download.open(PizzaMsg);

    expect(overlayContainerElement.querySelectorAll('sds-download-container').length).toBe(2);

    mockLocation.simulateUrlPop('');
    viewContainerFixture.detectChanges();
    flush();

    expect(overlayContainerElement.querySelectorAll('sds-download-container').length).toBe(0);
  }));

  it('should close all open downloads when the location hash changes', fakeAsync(() => {
    download.open(PizzaMsg);
    download.open(PizzaMsg);

    expect(overlayContainerElement.querySelectorAll('sds-download-container').length).toBe(2);

    mockLocation.simulateHashChange('');
    viewContainerFixture.detectChanges();
    flush();

    expect(overlayContainerElement.querySelectorAll('sds-download-container').length).toBe(0);
  }));

  it('should close all of the downloads when the injectable is destroyed', fakeAsync(() => {
    download.open(PizzaMsg);
    download.open(PizzaMsg);
    download.open(PizzaMsg);

    expect(overlayContainerElement.querySelectorAll('sds-download-container').length).toBe(3);

    download.ngOnDestroy();
    viewContainerFixture.detectChanges();
    flush();

    expect(overlayContainerElement.querySelectorAll('sds-download-container').length).toBe(0);
  }));

  it('should complete open and close streams when the injectable is destroyed', fakeAsync(() => {
    const afterOpenedSpy = jasmine.createSpy('after opened spy');
    const afterAllClosedSpy = jasmine.createSpy('after all closed spy');
    const afterOpenedSubscription = download.afterOpened.subscribe({complete: afterOpenedSpy});
    const afterAllClosedSubscription = download.afterAllClosed.subscribe({
      complete: afterAllClosedSpy
    });

    download.ngOnDestroy();

    expect(afterOpenedSpy).toHaveBeenCalled();
    expect(afterAllClosedSpy).toHaveBeenCalled();

    afterOpenedSubscription.unsubscribe();
    afterAllClosedSubscription.unsubscribe();
  }));

  it('should allow the consumer to disable closing a download on navigation', fakeAsync(() => {
    download.open(PizzaMsg);
    download.open(PizzaMsg, {closeOnNavigation: false});

    expect(overlayContainerElement.querySelectorAll('sds-download-container').length).toBe(2);

    mockLocation.simulateUrlPop('');
    viewContainerFixture.detectChanges();
    flush();

    expect(overlayContainerElement.querySelectorAll('sds-download-container').length).toBe(1);
  }));

  it('should have the componentInstance available in the afterClosed callback', fakeAsync(() => {
    let downloadRef = download.open(PizzaMsg);
    let spy = jasmine.createSpy('afterClosed spy');

    flushMicrotasks();
    viewContainerFixture.detectChanges();
    flushMicrotasks();

    downloadRef.afterClosed().subscribe(() => {
      spy();
      expect(downloadRef.componentInstance).toBeTruthy('Expected component instance to be defined.');
    });

    downloadRef.close();

    flushMicrotasks();
    viewContainerFixture.detectChanges();
    tick(500);

    // Ensure that the callback actually fires.
    expect(spy).toHaveBeenCalled();
  }));

  it('should be able to attach a custom scroll strategy', fakeAsync(() => {
    const scrollStrategy: ScrollStrategy = {
      attach: () => {},
      enable: jasmine.createSpy('scroll strategy enable spy'),
      disable: () => {}
    };

    download.open(PizzaMsg, {scrollStrategy});
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

      let instance = download.open(DownloadWithInjectedData, config).componentInstance;

      expect(instance.data.stringParam).toBe(config.data.stringParam);
      expect(instance.data.dateParam).toBe(config.data.dateParam);
    });

    it('should default to null if no data is passed', () => {
      expect(() => {
        let downloadRef = download.open(DownloadWithInjectedData);
        expect(downloadRef.componentInstance.data).toBeNull();
      }).not.toThrow();
    });
  });

  it('should not keep a reference to the component after the download is closed', fakeAsync(() => {
    let downloadRef = download.open(PizzaMsg);

    expect(downloadRef.componentInstance).toBeTruthy();

    downloadRef.close();
    viewContainerFixture.detectChanges();
    flush();

    expect(downloadRef.componentInstance).toBeFalsy('Expected reference to have been cleared.');
  }));

  it('should assign a unique id to each download', () => {
    const one = download.open(PizzaMsg);
    const two = download.open(PizzaMsg);

    expect(one.id).toBeTruthy();
    expect(two.id).toBeTruthy();
    expect(one.id).not.toBe(two.id);
  });

  it('should allow for the id to be overwritten', () => {
    const downloadRef = download.open(PizzaMsg, { id: 'pizza' });
    expect(downloadRef.id).toBe('pizza');
  });

  it('should throw when trying to open a download with the same id as another download', () => {
    download.open(PizzaMsg, { id: 'pizza' });
    expect(() => download.open(PizzaMsg, { id: 'pizza' })).toThrowError(/must be unique/g);
  });

  it('should be able to find a download by id', () => {
    const downloadRef = download.open(PizzaMsg, { id: 'pizza' });
    expect(download.getDownloadById('pizza')).toBe(downloadRef);
  });

  it('should toggle `aria-hidden` on the overlay container siblings', fakeAsync(() => {
    const sibling = document.createElement('div');
    overlayContainerElement.parentNode!.appendChild(sibling);

    const downloadRef = download.open(PizzaMsg, {viewContainerRef: testViewContainerRef});
    viewContainerFixture.detectChanges();
    flush();

    expect(sibling.getAttribute('aria-hidden')).toBe('true', 'Expected sibling to be hidden');
    expect(overlayContainerElement.hasAttribute('aria-hidden'))
        .toBe(false, 'Expected overlay container not to be hidden.');

    downloadRef.close();
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

    const downloadRef = download.open(PizzaMsg, {viewContainerRef: testViewContainerRef});
    viewContainerFixture.detectChanges();
    flush();

    expect(sibling.getAttribute('aria-hidden')).toBe('true', 'Expected sibling to be hidden.');

    downloadRef.close();
    viewContainerFixture.detectChanges();
    flush();

    expect(sibling.getAttribute('aria-hidden')).toBe('true', 'Expected sibling to remain hidden.');
    sibling.parentNode!.removeChild(sibling);
  }));

  it('should not set `aria-hidden` on `aria-live` elements', fakeAsync(() => {
    const sibling = document.createElement('div');

    sibling.setAttribute('aria-live', 'polite');
    overlayContainerElement.parentNode!.appendChild(sibling);

    download.open(PizzaMsg, {viewContainerRef: testViewContainerRef});
    viewContainerFixture.detectChanges();
    flush();

    expect(sibling.hasAttribute('aria-hidden'))
        .toBe(false, 'Expected live element not to be hidden.');
    sibling.parentNode!.removeChild(sibling);
  }));

  it('should add and remove classes while open', () => {
    let downloadRef = download.open(PizzaMsg, {
      disableClose: true,
      viewContainerRef: testViewContainerRef
    });

    const pane = overlayContainerElement.querySelector('.cdk-overlay-pane') as HTMLElement;
    expect(pane.classList)
      .not.toContain('custom-class-one', 'Expected class to be initially missing');

    downloadRef.addPanelClass('custom-class-one');
    expect(pane.classList).toContain('custom-class-one', 'Expected class to be added');

    downloadRef.removePanelClass('custom-class-one');
    expect(pane.classList).not.toContain('custom-class-one', 'Expected class to be removed');
  });

  describe('disableClose option', () => {
    it('should prevent closing via clicks on the backdrop', fakeAsync(() => {
      download.open(PizzaMsg, {
        disableClose: true,
        viewContainerRef: testViewContainerRef
      });

      viewContainerFixture.detectChanges();

      let backdrop = overlayContainerElement.querySelector('.cdk-overlay-backdrop') as HTMLElement;
      backdrop.click();
      viewContainerFixture.detectChanges();
      flush();

      expect(overlayContainerElement.querySelector('sds-download-container')).toBeTruthy();
    }));

    it('should prevent closing via the escape key', fakeAsync(() => {
      download.open(PizzaMsg, {
        disableClose: true,
        viewContainerRef: testViewContainerRef
      });

      viewContainerFixture.detectChanges();
      dispatchKeyboardEvent(document.body, 'keydown', ESCAPE);
      viewContainerFixture.detectChanges();
      flush();

      expect(overlayContainerElement.querySelector('sds-download-container')).toBeTruthy();
    }));

    it('should allow for the disableClose option to be updated while open', fakeAsync(() => {
      let downloadRef = download.open(PizzaMsg, {
        disableClose: true,
        viewContainerRef: testViewContainerRef
      });

      viewContainerFixture.detectChanges();

      let backdrop = overlayContainerElement.querySelector('.cdk-overlay-backdrop') as HTMLElement;
      backdrop.click();

      expect(overlayContainerElement.querySelector('sds-download-container')).toBeTruthy();

      downloadRef.disableClose = false;
      backdrop.click();
      viewContainerFixture.detectChanges();
      flush();

      expect(overlayContainerElement.querySelector('sds-download-container')).toBeFalsy();
    }));
  });

  describe('hasBackdrop option', () => {
    it('should have a backdrop', () => {
      download.open(PizzaMsg, {
        hasBackdrop: true,
        viewContainerRef: testViewContainerRef
      });

      viewContainerFixture.detectChanges();

      expect(overlayContainerElement.querySelector('.cdk-overlay-backdrop')).toBeTruthy();
    });

    it('should not have a backdrop', () => {
      download.open(PizzaMsg, {
        hasBackdrop: false,
        viewContainerRef: testViewContainerRef
      });

      viewContainerFixture.detectChanges();

      expect(overlayContainerElement.querySelector('.cdk-overlay-backdrop')).toBeFalsy();
    });
  });

  describe('panelClass option', () => {
    it('should have custom panel class', () => {
      download.open(PizzaMsg, {
        panelClass: 'custom-panel-class',
        viewContainerRef: testViewContainerRef
      });

      viewContainerFixture.detectChanges();

      expect(overlayContainerElement.querySelector('.custom-panel-class')).toBeTruthy();
    });
  });

  describe('backdropClass option', () => {
    it('should have default backdrop class', () => {
      download.open(PizzaMsg, {
        backdropClass: '',
        viewContainerRef: testViewContainerRef
      });

      viewContainerFixture.detectChanges();

      expect(overlayContainerElement.querySelector('.cdk-overlay-dark-backdrop')).toBeTruthy();
    });

    it('should have custom backdrop class', () => {
      download.open(PizzaMsg, {
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

    it('should focus the first tabbable element of the download on open', fakeAsync(() => {
      download.open(PizzaMsg, {
        viewContainerRef: testViewContainerRef
      });

      viewContainerFixture.detectChanges();
      flushMicrotasks();

      expect(document.activeElement!.tagName)
          .toBe('BUTTON', 'Expected first tabbable element (button) in the download to be focused.');
    }));

    it('should allow disabling focus of the first tabbable element', fakeAsync(() => {
      download.open(PizzaMsg, {
        viewContainerRef: testViewContainerRef,
        autoFocus: false
      });

      viewContainerFixture.detectChanges();
      flushMicrotasks();

      expect(document.activeElement!.tagName).not.toBe('INPUT');
    }));

    it('should re-focus trigger element when download closes', fakeAsync(() => {
      // Create a element that has focus before the download is opened.
      let button = document.createElement('button');
      button.id = 'download-trigger';
      document.body.appendChild(button);
      button.focus();

      let downloadRef = download.open(PizzaMsg, { viewContainerRef: testViewContainerRef });

      flushMicrotasks();
      viewContainerFixture.detectChanges();
      flushMicrotasks();

      expect(document.activeElement!.id)
          .not.toBe('download-trigger', 'Expected the focus to change when download was opened.');

      downloadRef.close();
      expect(document.activeElement!.id).not.toBe('download-trigger',
          'Expcted the focus not to have changed before the animation finishes.');

      flushMicrotasks();
      viewContainerFixture.detectChanges();
      tick(500);

      expect(document.activeElement!.id).toBe('download-trigger',
          'Expected that the trigger was refocused after the download is closed.');

      document.body.removeChild(button);
    }));

    it('should allow the consumer to shift focus in afterClosed', fakeAsync(() => {
      // Create a element that has focus before the download is opened.
      let button = document.createElement('button');
      let input = document.createElement('input');

      button.id = 'download-trigger';
      input.id = 'input-to-be-focused';

      document.body.appendChild(button);
      document.body.appendChild(input);
      button.focus();

      let downloadRef = download.open(PizzaMsg, { viewContainerRef: testViewContainerRef });

      tick(500);
      viewContainerFixture.detectChanges();

      downloadRef.afterClosed().subscribe(() => input.focus());
      downloadRef.close();

      tick(500);
      viewContainerFixture.detectChanges();
      flushMicrotasks();

      expect(document.activeElement!.id).toBe('input-to-be-focused',
          'Expected that the trigger was refocused after the download is closed.');

      document.body.removeChild(button);
      document.body.removeChild(input);
    }));

    it('should be able to disable focus restoration', fakeAsync(() => {
      // Create a element that has focus before the download is opened.
      const button = document.createElement('button');
      button.id = 'download-trigger';
      document.body.appendChild(button);
      button.focus();

      const downloadRef = download.open(PizzaMsg, {
        viewContainerRef: testViewContainerRef,
        restoreFocus: false
      });

      flushMicrotasks();
      viewContainerFixture.detectChanges();
      flushMicrotasks();

      expect(document.activeElement!.id)
          .not.toBe('download-trigger', 'Expected the focus to change when download was opened.');

      downloadRef.close();
      flushMicrotasks();
      viewContainerFixture.detectChanges();
      tick(500);

      expect(document.activeElement!.id).not.toBe('download-trigger',
          'Expected focus not to have been restored.');

      document.body.removeChild(button);
    }));


  });

  describe('download content elements', () => {
    let downloadRef: SdsDownloadRef<any>;

    describe('inside component download', () => {
      beforeEach(fakeAsync(() => {
        downloadRef = download.open(ContentElementDownload, {viewContainerRef: testViewContainerRef});
        viewContainerFixture.detectChanges();
        flush();
      }));

      runContentElementTests();
    });

    describe('inside template portal', () => {
      beforeEach(fakeAsync(() => {
        const fixture = TestBed.createComponent(ComponentWithContentElementTemplateRef);
        fixture.detectChanges();

        downloadRef = download.open(fixture.componentInstance.templateRef, {
          viewContainerRef: testViewContainerRef
        });

        viewContainerFixture.detectChanges();
        flush();
      }));

      runContentElementTests();
    });

    function runContentElementTests() {
      it('should close the download when clicking on the close button', fakeAsync(() => {
        expect(overlayContainerElement.querySelectorAll('.sds-download__container').length).toBe(1);

        (overlayContainerElement.querySelector('button[sds-download-close]') as HTMLElement).click();
        viewContainerFixture.detectChanges();
        flush();

        expect(overlayContainerElement.querySelectorAll('.sds-download__container').length).toBe(0);
      }));

      it('should not close if [sds-download-close] is applied on a non-button node', () => {
        expect(overlayContainerElement.querySelectorAll('.sds-download__container').length).toBe(1);

        (overlayContainerElement.querySelector('div[sds-download-close]') as HTMLElement).click();

        expect(overlayContainerElement.querySelectorAll('.sds-download__container').length).toBe(1);
      });

      it('should allow for a user-specified aria-label on the close button', fakeAsync(() => {
        let button = overlayContainerElement.querySelector('.close-with-aria-label')!;
        expect(button.getAttribute('aria-label')).toBe('Best close button ever');
      }));

      it('should override the "type" attribute of the close button', () => {
        let button = overlayContainerElement.querySelector('button[sds-download-close]')!;

        expect(button.getAttribute('type')).toBe('button');
      });

      it('should return the [sds-download-close] result when clicking the close button',
        fakeAsync(() => {
          let afterCloseCallback = jasmine.createSpy('afterClose callback');
          downloadRef.afterClosed().subscribe(afterCloseCallback);

          (overlayContainerElement.querySelector('button.close-with-true') as HTMLElement).click();
          viewContainerFixture.detectChanges();
          flush();

          expect(afterCloseCallback).toHaveBeenCalledWith(true);
        }));

      it('should set the aria-labelledby attribute to the id of the title', fakeAsync(() => {
        let title = overlayContainerElement.querySelector('[sds-download-title]')!;
        let container = overlayContainerElement.querySelector('sds-download-container')!;

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
      download.open(PizzaMsg, {
        ariaLabel: 'Hello there',
        viewContainerRef: testViewContainerRef
      });
      viewContainerFixture.detectChanges();

      const container = overlayContainerElement.querySelector('sds-download-container')!;
      expect(container.getAttribute('aria-label')).toBe('Hello there');
    });

    it('should not set the aria-labelledby automatically if it has an aria-label', fakeAsync(() => {
      download.open(ContentElementDownload, {
        ariaLabel: 'Hello there',
        viewContainerRef: testViewContainerRef
      });
      viewContainerFixture.detectChanges();
      tick();
      viewContainerFixture.detectChanges();

      const container = overlayContainerElement.querySelector('sds-download-container')!;
      expect(container.hasAttribute('aria-labelledby')).toBe(false);
    }));
  });

});

describe('SdsDownload with a parent SdsDownload', () => {
  let parentDownload: SdsDownloadService;
  let childDownload: SdsDownloadService;
  let overlayContainerElement: HTMLElement;
  let fixture: ComponentFixture<ComponentThatProvidesSdsDownload>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [SdsDownloadModule, DownloadTestModule],
      declarations: [ComponentThatProvidesSdsDownload],
      providers: [
        {provide: OverlayContainer, useFactory: () => {
          overlayContainerElement = document.createElement('div');
          return {getContainerElement: () => overlayContainerElement};
        }},
        {provide: Location, useClass: SpyLocation}
      ],
    });

    TestBed.compileComponents();
  }));

  beforeEach(inject([SdsDownloadService], (d: SdsDownloadService) => {
    parentDownload = d;

    fixture = TestBed.createComponent(ComponentThatProvidesSdsDownload);
    childDownload = fixture.componentInstance.download;
    fixture.detectChanges();
  }));

  afterEach(() => {
    overlayContainerElement.innerHTML = '';
  });

  it('should close downloads opened by a parent when calling closeAll on a child SdsDownload',
    fakeAsync(() => {
      parentDownload.open(PizzaMsg);
      fixture.detectChanges();
      flush();

      expect(overlayContainerElement.textContent)
          .toContain('Pizza', 'Expected a download to be opened');

      childDownload.closeAll();
      fixture.detectChanges();
      flush();

      expect(overlayContainerElement.textContent!.trim())
          .toBe('', 'Expected closeAll on child SdsDownload to close download opened by parent');
    }));

  it('should close downloads opened by a child when calling closeAll on a parent SdsDownload',
    fakeAsync(() => {
      childDownload.open(PizzaMsg);
      fixture.detectChanges();

      expect(overlayContainerElement.textContent)
          .toContain('Pizza', 'Expected a download to be opened');

      parentDownload.closeAll();
      fixture.detectChanges();
      flush();

      expect(overlayContainerElement.textContent!.trim())
          .toBe('', 'Expected closeAll on parent SdsDownload to close download opened by child');
    }));

  it('should close the top download via the escape key', fakeAsync(() => {
    childDownload.open(PizzaMsg);

    dispatchKeyboardEvent(document.body, 'keydown', ESCAPE);
    fixture.detectChanges();
    flush();

    expect(overlayContainerElement.querySelector('sds-download-container')).toBeNull();
  }));

  it('should not close the parent downloads when a child is destroyed', fakeAsync(() => {
    parentDownload.open(PizzaMsg);
    fixture.detectChanges();
    flush();

    expect(overlayContainerElement.textContent)
        .toContain('Pizza', 'Expected a download to be opened');

    childDownload.ngOnDestroy();
    fixture.detectChanges();
    flush();

    expect(overlayContainerElement.textContent)
        .toContain('Pizza', 'Expected a download to be opened');
  }));
});

describe('SdsDownload with default options', () => {
  let download: SdsDownloadService;
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
      imports: [SdsDownloadModule, DownloadTestModule],
      providers: [
        {provide: SDS_DIALOG_DEFAULT_OPTIONS, useValue: defaultConfig},
      ],
    });

    TestBed.compileComponents();
  }));

  beforeEach(inject([SdsDownloadService, OverlayContainer],
    (d: SdsDownloadService, oc: OverlayContainer) => {
      download = d;
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
    download.open(PizzaMsg, {viewContainerRef: testViewContainerRef});

    viewContainerFixture.detectChanges();

    expect(overlayContainerElement.querySelector('.cdk-overlay-backdrop')).toBeFalsy();

    dispatchKeyboardEvent(document.body, 'keydown', ESCAPE);
    expect(overlayContainerElement.querySelector('sds-download-container')).toBeTruthy();

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
    download.open(PizzaMsg, {
      hasBackdrop: true,
      disableClose: false,
      viewContainerRef: testViewContainerRef
    });

    viewContainerFixture.detectChanges();

    expect(overlayContainerElement.querySelector('.cdk-overlay-backdrop')).toBeTruthy();

    dispatchKeyboardEvent(document.body, 'keydown', ESCAPE);
    viewContainerFixture.detectChanges();
    flush();

    expect(overlayContainerElement.querySelector('sds-download-container')).toBeFalsy();
  }));
});


@Directive({selector: 'dir-with-view-container'})
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
  @ViewChild(DirectiveWithViewContainer) childWithViewContainer: DirectiveWithViewContainer;

  get childViewContainer() {
    return this.childWithViewContainer.viewContainerRef;
  }
}

@Component({
  selector: 'arbitrary-component-with-template-ref',
  template: `<ng-template let-data let-downloadRef="downloadRef">
      Cheese {{localValue}} {{data?.value}}{{setDownloadRef(downloadRef)}}</ng-template>`,
})
class ComponentWithTemplateRef {
  localValue: string;
  downloadRef: SdsDownloadRef<any>;

  @ViewChild(TemplateRef) templateRef: TemplateRef<any>;

  setDownloadRef(downloadRef: SdsDownloadRef<any>): string {
    this.downloadRef = downloadRef;
    return '';
  }
}

/** Simple component for testing ComponentPortal. */
@Component({template: '<p>Pizza</p> <input> <button>Close</button>'})
class PizzaMsg {
  constructor(public downloadRef: SdsDownloadRef<PizzaMsg>,
              public downloadInjector: Injector,
              public directionality: Directionality) {}
}

@Component({
  template: `
    <h1 sds-download-title>This is the title</h1>
    <sds-download-content>Lorem ipsum dolor sit amet.</sds-download-content>
    <sds-download-actions>
      <button sds-download-close>Close</button>
      <button class="close-with-true" [sds-download-close]="true">Close and return true</button>
      <button
        class="close-with-aria-label"
        aria-label="Best close button ever"
        [sds-download-close]="true"></button>
      <div sds-download-close>Should not close</div>
    </sds-download-actions>
  `
})
class ContentElementDownload {}

@Component({
  template: `
    <ng-template>
      <h1 sds-download-title>This is the title</h1>
      <sds-download-content>Lorem ipsum dolor sit amet.</sds-download-content>
      <sds-download-actions>
        <button sds-download-close>Close</button>
        <button class="close-with-true" [sds-download-close]="true">Close and return true</button>
        <button
          class="close-with-aria-label"
          aria-label="Best close button ever"
          [sds-download-close]="true"></button>
        <div sds-download-close>Should not close</div>
      </sds-download-actions>
    </ng-template>
  `
})
class ComponentWithContentElementTemplateRef {
  @ViewChild(TemplateRef) templateRef: TemplateRef<any>;
}

@Component({
  template: '',
  providers: [SdsDownloadService]
})
class ComponentThatProvidesSdsDownload {
  constructor(public download: SdsDownloadService) {}
}

/** Simple component for testing ComponentPortal. */
@Component({template: ''})
class DownloadWithInjectedData {
  constructor(@Inject(SDS_DIALOG_DATA) public data: any) { }
}

@Component({template: '<p>Pasta</p>'})
class DownloadWithoutFocusableElements {}

// Create a real (non-test) NgModule as a workaround for
// https://github.com/angular/angular/issues/10760
const TEST_DIRECTIVES = [
  ComponentWithChildViewContainer,
  ComponentWithTemplateRef,
  PizzaMsg,
  DirectiveWithViewContainer,
  ComponentWithOnPushViewContainer,
  ContentElementDownload,
  DownloadWithInjectedData,
  DownloadWithoutFocusableElements,
  ComponentWithContentElementTemplateRef,
];

@NgModule({
  imports: [SdsDownloadModule, NoopAnimationsModule],
  exports: TEST_DIRECTIVES,
  declarations: TEST_DIRECTIVES,
  entryComponents: [
    ComponentWithChildViewContainer,
    ComponentWithTemplateRef,
    PizzaMsg,
    ContentElementDownload,
    DownloadWithInjectedData,
    DownloadWithoutFocusableElements,
  ],
})
class DownloadTestModule { }
