import {
  ApplicationRef,
  Component,
  Injector,
  NgZone,
  Renderer2,
  RendererFactory2,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContentRef, PopupService } from './popup';

@Component({
  template: '<div class="dummy-window"><ng-content></ng-content></div>',
  standalone: false,
})
class DummyWindowComponent {}

@Component({
  template: `
    <ng-template #tpl let-text="text">Template {{ text }}</ng-template>
    <div #container></div>
  `,
  standalone: false,
})
class HostComponent {
  @ViewChild('container', { read: ViewContainerRef, static: true }) vcr!: ViewContainerRef;
  @ViewChild('tpl', { static: true }) tpl!: TemplateRef<any>;
}

describe('PopupService and ContentRef', () => {
  let fixture: ComponentFixture<HostComponent>;
  let hostComponent: HostComponent;
  let injector: Injector;
  let renderer: Renderer2;
  let ngZone: NgZone;
  let appRef: ApplicationRef;
  let popupService: PopupService<DummyWindowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DummyWindowComponent, HostComponent],
    });

    fixture = TestBed.createComponent(HostComponent);
    hostComponent = fixture.componentInstance;
    fixture.detectChanges();

    injector = TestBed.inject(Injector);
    renderer = TestBed.inject(RendererFactory2).createRenderer(null, null);
    ngZone = TestBed.inject(NgZone);
    appRef = TestBed.inject(ApplicationRef);

    popupService = new PopupService<DummyWindowComponent>(
      DummyWindowComponent,
      injector,
      hostComponent.vcr,
      renderer,
      ngZone,
      appRef,
    );
  });

  afterEach(() => {
    popupService.close().subscribe();
    fixture.destroy();
  });

  describe('ContentRef', () => {
    it('should hold nodes, viewRef, and componentRef', () => {
      const node = document.createElement('span');
      const contentRef = new ContentRef([[node]]);
      expect(contentRef.nodes).toEqual([[node]]);
      expect(contentRef.viewRef).toBeUndefined();
      expect(contentRef.componentRef).toBeUndefined();
    });
  });

  describe('PopupService operations', () => {
    it('should return of(undefined) when closing an unopened popup', () => {
      let emitted = false;
      popupService.close().subscribe((val) => {
        expect(val).toBeUndefined();
        emitted = true;
      });
      expect(emitted).toBe(true);
    });

    it('should open popup with string content and close cleanly', () => {
      const { windowRef, transition$ } = popupService.open('Hello Popup');
      expect(windowRef).toBeTruthy();
      expect(transition$).toBeDefined();
      expect(windowRef.location.nativeElement.textContent).toContain('Hello Popup');

      let closed = false;
      popupService.close().subscribe(() => {
        closed = true;
      });
      expect(closed).toBe(true);
    });

    it('should open popup with templateRef content and clean up on close', () => {
      const { windowRef, transition$ } = popupService.open(hostComponent.tpl, { text: 'Dynamic' });
      expect(windowRef).toBeTruthy();
      expect(transition$).toBeDefined();

      let closed = false;
      popupService.close().subscribe(() => {
        closed = true;
      });
      expect(closed).toBe(true);
    });

    it('should open popup with empty content', () => {
      const { windowRef } = popupService.open();
      expect(windowRef).toBeTruthy();

      let closed = false;
      popupService.close().subscribe(() => {
        closed = true;
      });
      expect(closed).toBe(true);
    });

    it('should reuse windowRef when already open', () => {
      const first = popupService.open('First');
      const second = popupService.open('Second');

      expect(first.windowRef).toBe(second.windowRef);
    });
  });
});
