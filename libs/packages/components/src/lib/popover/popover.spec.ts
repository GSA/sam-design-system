import { Component, ElementRef, ViewChild, TemplateRef } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SdsPopoverModule } from './popover.module';
import { SdsPopover, SdsPopoverWindow } from './popover';
import { SdsPopoverConfig } from './popover-config';
import { Key } from '../util/key';

function dispatchEscapeEvent(node: Node = document) {
  const event = new KeyboardEvent('keydown', { bubbles: true, cancelable: true });
  Object.defineProperties(event, {
    which: { get: () => Key.Escape },
    keyCode: { get: () => Key.Escape },
  });
  node.dispatchEvent(event);
  return event;
}

function dispatchInsideOrOutsideClick(element: HTMLElement) {
  const mousedown = new MouseEvent('mousedown', { bubbles: true, cancelable: true, button: 0 });
  const mouseup = new MouseEvent('mouseup', { bubbles: true, cancelable: true, button: 0 });
  element.dispatchEvent(mousedown);
  element.dispatchEvent(mouseup);
}

@Component({
  template: `
    <button
      [sdsPopover]="content"
      [sdsPopoverTitle]="title"
      [autoClose]="autoClose"
      [disablePopover]="disablePopover"
      [popoverClass]="popoverClass"
      [container]="container"
      [position]="position"
      [popperOptions]="popperOptions"
      [positionTarget]="positionTarget"
      [triggers]="triggers"
      [openDelay]="openDelay"
      [closeDelay]="closeDelay"
      [popoverContext]="context"
      (shown)="onShown()"
      (hidden)="onHidden()"
      #popover="sdsPopover"
    >
      Trigger
    </button>
    <div id="custom-target">Custom Target</div>
    <div id="outside-element">Outside Element</div>

    <ng-template #contentTpl let-text="text">
      <span class="custom-content">{{ text || 'Template Content' }}</span>
    </ng-template>

    <ng-template #titleTpl let-heading="heading">
      <span class="custom-title">{{ heading || 'Template Title' }}</span>
    </ng-template>
  `,
  imports: [SdsPopoverModule],
})
class TestPopoverComponent {
  content: string | TemplateRef<any> | null | undefined = 'Popover Content';
  title: string | TemplateRef<any> | null | undefined = 'Popover Title';
  autoClose: boolean | 'inside' | 'outside' = 'inside';
  disablePopover = false;
  popoverClass = 'initial-class';
  container = '';
  position = 'auto';
  popperOptions = (opts: any) => opts;
  positionTarget: string | HTMLElement | undefined = undefined;
  triggers = 'click';
  openDelay = 0;
  closeDelay = 0;
  context: any = { text: 'Bound Context', heading: 'Bound Heading' };

  shownCalls = 0;
  hiddenCalls = 0;

  @ViewChild('popover', { static: false }) popover: SdsPopover;
  @ViewChild('popover', { read: ElementRef, static: false }) buttonEl: ElementRef<HTMLButtonElement>;
  @ViewChild('contentTpl', { static: true }) contentTpl: TemplateRef<any>;
  @ViewChild('titleTpl', { static: true }) titleTpl: TemplateRef<any>;

  onShown() {
    this.shownCalls++;
  }

  onHidden() {
    this.hiddenCalls++;
  }
}

describe('SdsPopover', () => {
  let fixture: ComponentFixture<TestPopoverComponent>;
  let comp: TestPopoverComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestPopoverComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestPopoverComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    if (comp.popover && comp.popover.isOpen()) {
      comp.popover.close();
    }
  });

  describe('SdsPopoverConfig', () => {
    it('should have default configuration values', () => {
      const config = TestBed.inject(SdsPopoverConfig);
      expect(config.autoClose).toBe('inside');
      expect(config.placement).toBe('auto');
      expect(config.triggers).toBe('click');
      expect(config.disablePopover).toBe(false);
      expect(config.openDelay).toBe(0);
      expect(config.closeDelay).toBe(0);
      expect(config.animation).toBe(false);

      config.animation = true;
      expect(config.animation).toBe(true);
      config.animation = false;
      expect(config.animation).toBe(false);
    });
  });

  describe('opening and closing triggers', () => {
    it('should open and close via manual open(), close(), and toggle()', fakeAsync(() => {
      expect(comp.popover.isOpen()).toBe(false);

      comp.popover.open();
      fixture.detectChanges();
      tick();

      expect(comp.popover.isOpen()).toBe(true);
      expect(comp.shownCalls).toBe(1);

      comp.popover.close();
      fixture.detectChanges();
      tick();

      expect(comp.popover.isOpen()).toBe(false);
      expect(comp.hiddenCalls).toBe(1);

      comp.popover.toggle();
      fixture.detectChanges();
      tick();

      expect(comp.popover.isOpen()).toBe(true);

      comp.popover.toggle();
      fixture.detectChanges();
      tick();

      expect(comp.popover.isOpen()).toBe(false);
    }));

    it('should open and toggle on trigger click', fakeAsync(() => {
      const button = comp.buttonEl.nativeElement;
      expect(comp.popover.isOpen()).toBe(false);

      button.click();
      fixture.detectChanges();
      tick();
      expect(comp.popover.isOpen()).toBe(true);

      button.click();
      fixture.detectChanges();
      tick();
      expect(comp.popover.isOpen()).toBe(false);
    }));

    it('should respect openDelay and closeDelay', fakeAsync(() => {
      comp.popover.ngOnDestroy();
      comp.openDelay = 100;
      comp.closeDelay = 100;
      fixture.detectChanges();
      comp.popover.ngOnInit(); // re-register triggers with new delay

      const button = comp.buttonEl.nativeElement;
      button.click();
      fixture.detectChanges();
      tick(50);
      expect(comp.popover.isOpen()).toBe(false);

      tick(50);
      fixture.detectChanges();
      tick();
      expect(comp.popover.isOpen()).toBe(true);

      button.click();
      fixture.detectChanges();
      tick(50);
      expect(comp.popover.isOpen()).toBe(true);

      tick(50);
      fixture.detectChanges();
      tick();
      expect(comp.popover.isOpen()).toBe(false);
    }));

    it('should not open when disablePopover is true', fakeAsync(() => {
      comp.disablePopover = true;
      fixture.detectChanges();

      comp.popover.open();
      fixture.detectChanges();
      tick();

      expect(comp.popover.isOpen()).toBe(false);
    }));

    it('should not open when content and title are both empty', fakeAsync(() => {
      comp.content = '';
      comp.title = '';
      fixture.detectChanges();

      comp.popover.open();
      fixture.detectChanges();
      tick();

      expect(comp.popover.isOpen()).toBe(false);
    }));

    it('should close when disablePopover changes to true via ngOnChanges', fakeAsync(() => {
      comp.popover.open();
      fixture.detectChanges();
      tick();
      expect(comp.popover.isOpen()).toBe(true);

      comp.disablePopover = true;
      comp.popover.ngOnChanges({
        disablePopover: {
          currentValue: true,
          previousValue: false,
          firstChange: false,
          isFirstChange: () => false,
        },
      });
      fixture.detectChanges();
      tick();

      expect(comp.popover.isOpen()).toBe(false);
    }));

    it('should close when content and title become empty via ngOnChanges', fakeAsync(() => {
      comp.popover.open();
      fixture.detectChanges();
      tick();
      expect(comp.popover.isOpen()).toBe(true);

      comp.content = '';
      comp.title = '';
      comp.popover.sdsPopover = '';
      comp.popover.sdsPopoverTitle = '';
      comp.popover.ngOnChanges({
        sdsPopover: {
          currentValue: '',
          previousValue: 'Popover Content',
          firstChange: false,
          isFirstChange: () => false,
        },
      });
      fixture.detectChanges();
      tick();

      expect(comp.popover.isOpen()).toBe(false);
    }));
  });

  describe('content and title rendering', () => {
    it('should render string title and content', fakeAsync(() => {
      comp.popover.open();
      fixture.detectChanges();
      tick();

      const popoverWindow = document.querySelector('sds-popover-window');
      expect(popoverWindow).toBeTruthy();
      expect(popoverWindow?.querySelector('.popover-header')?.textContent).toContain('Popover Title');
      expect(popoverWindow?.querySelector('.popover-body')?.textContent).toContain('Popover Content');
    }));

    it('should render TemplateRef title and content with context', fakeAsync(() => {
      comp.content = comp.contentTpl;
      comp.title = comp.titleTpl;
      fixture.detectChanges();

      comp.popover.open({ text: 'Custom Text', heading: 'Custom Heading' });
      fixture.detectChanges();
      tick();

      const popoverWindow = document.querySelector('sds-popover-window');
      expect(popoverWindow).toBeTruthy();
      expect(popoverWindow?.querySelector('.custom-title')?.textContent).toContain('Custom Heading');
      expect(popoverWindow?.querySelector('.custom-content')?.textContent).toContain('Custom Text');
    }));

    it('should fallback to bound popoverContext if open() context is not provided', fakeAsync(() => {
      comp.content = comp.contentTpl;
      comp.title = comp.titleTpl;
      fixture.detectChanges();

      comp.popover.open();
      fixture.detectChanges();
      tick();

      const popoverWindow = document.querySelector('sds-popover-window');
      expect(popoverWindow?.querySelector('.custom-title')?.textContent).toContain('Bound Heading');
      expect(popoverWindow?.querySelector('.custom-content')?.textContent).toContain('Bound Context');
    }));
  });

  describe('ARIA attributes, styling and container', () => {
    it('should set and remove aria-describedby on the target element', fakeAsync(() => {
      const button = comp.buttonEl.nativeElement;
      expect(button.getAttribute('aria-describedby')).toBeNull();

      comp.popover.open();
      fixture.detectChanges();
      tick();

      const ariaDescribedBy = button.getAttribute('aria-describedby');
      expect(ariaDescribedBy).toMatch(/^sds-popover-\d+$/);

      const popoverWindow = document.querySelector('sds-popover-window');
      expect(popoverWindow?.getAttribute('id')).toBe(ariaDescribedBy);

      comp.popover.close();
      fixture.detectChanges();
      tick();

      expect(button.getAttribute('aria-describedby')).toBeNull();
    }));

    it('should apply popoverClass to the popover window and update on ngOnChanges', fakeAsync(() => {
      comp.popoverClass = 'my-popover-class';
      fixture.detectChanges();

      comp.popover.open();
      fixture.detectChanges();
      tick();

      let popoverWindow = document.querySelector('sds-popover-window');
      expect(popoverWindow?.classList.contains('my-popover-class')).toBe(true);

      comp.popover.ngOnChanges({
        popoverClass: {
          currentValue: 'updated-class',
          previousValue: 'my-popover-class',
          firstChange: false,
          isFirstChange: () => false,
        },
      });
      (comp.popover as any)._windowRef?.changeDetectorRef.detectChanges();

      expect(popoverWindow?.classList.contains('updated-class')).toBe(true);
    }));

    it('should append to body when container="body"', fakeAsync(() => {
      comp.container = 'body';
      fixture.detectChanges();

      comp.popover.open();
      fixture.detectChanges();
      tick();

      const popoverWindow = document.body.querySelector(':scope > sds-popover-window');
      expect(popoverWindow).toBeTruthy();

      comp.popover.close();
      fixture.detectChanges();
      tick();

      expect(document.body.querySelector(':scope > sds-popover-window')).toBeNull();
    }));

    it('should support custom positionTarget as selector or HTMLElement', fakeAsync(() => {
      comp.positionTarget = '#custom-target';
      fixture.detectChanges();

      comp.popover.open();
      fixture.detectChanges();
      tick();

      const customTarget = document.querySelector('#custom-target');
      expect(customTarget?.getAttribute('aria-describedby')).toBeTruthy();

      comp.popover.close();
      fixture.detectChanges();
      tick();

      expect(customTarget?.getAttribute('aria-describedby')).toBeNull();

      comp.positionTarget = customTarget as HTMLElement;
      fixture.detectChanges();

      comp.popover.open();
      fixture.detectChanges();
      tick();

      expect(customTarget?.getAttribute('aria-describedby')).toBeTruthy();
    }));

    it('should accept custom position and popperOptions', fakeAsync(() => {
      let popperOptionsCalled = false;
      comp.position = 'bottom-right';
      comp.popperOptions = (opts: any) => {
        popperOptionsCalled = true;
        return opts;
      };
      fixture.detectChanges();

      comp.popover.open();
      fixture.detectChanges();
      tick();

      expect(popperOptionsCalled).toBe(true);
    }));
  });

  describe('autoClose and keyboard event handling', () => {
    it('should close on Escape keydown when autoClose is true', fakeAsync(() => {
      comp.autoClose = true;
      fixture.detectChanges();

      comp.popover.open();
      fixture.detectChanges();
      tick();
      expect(comp.popover.isOpen()).toBe(true);

      dispatchEscapeEvent(document);
      fixture.detectChanges();
      tick();

      expect(comp.popover.isOpen()).toBe(false);
    }));

    it('should close on Escape keydown when autoClose is "inside"', fakeAsync(() => {
      comp.autoClose = 'inside';
      fixture.detectChanges();

      comp.popover.open();
      fixture.detectChanges();
      tick();
      expect(comp.popover.isOpen()).toBe(true);

      dispatchEscapeEvent(document);
      fixture.detectChanges();
      tick();

      expect(comp.popover.isOpen()).toBe(false);
    }));

    it('should close on Escape keydown when autoClose is "outside"', fakeAsync(() => {
      comp.autoClose = 'outside';
      fixture.detectChanges();

      comp.popover.open();
      fixture.detectChanges();
      tick();
      expect(comp.popover.isOpen()).toBe(true);

      dispatchEscapeEvent(document);
      fixture.detectChanges();
      tick();

      expect(comp.popover.isOpen()).toBe(false);
    }));

    it('should not close on Escape keydown when autoClose is false', fakeAsync(() => {
      comp.autoClose = false;
      fixture.detectChanges();

      comp.popover.open();
      fixture.detectChanges();
      tick();
      expect(comp.popover.isOpen()).toBe(true);

      dispatchEscapeEvent(document);
      fixture.detectChanges();
      tick();

      expect(comp.popover.isOpen()).toBe(true);
    }));

    it('should close on inside click when autoClose is true or "inside"', fakeAsync(() => {
      comp.autoClose = 'inside';
      fixture.detectChanges();

      comp.popover.open();
      fixture.detectChanges();
      tick();
      expect(comp.popover.isOpen()).toBe(true);

      const popoverWindow = document.querySelector('sds-popover-window') as HTMLElement;
      dispatchInsideOrOutsideClick(popoverWindow);
      fixture.detectChanges();
      tick(10);

      expect(comp.popover.isOpen()).toBe(false);
    }));

    it('should not close on outside click when autoClose is "inside"', fakeAsync(() => {
      comp.autoClose = 'inside';
      fixture.detectChanges();

      comp.popover.open();
      fixture.detectChanges();
      tick();
      expect(comp.popover.isOpen()).toBe(true);

      const outsideEl = document.querySelector('#outside-element') as HTMLElement;
      dispatchInsideOrOutsideClick(outsideEl);
      fixture.detectChanges();
      tick(10);

      expect(comp.popover.isOpen()).toBe(true);
    }));

    it('should close on outside click when autoClose is "outside"', fakeAsync(() => {
      comp.autoClose = 'outside';
      fixture.detectChanges();

      comp.popover.open();
      fixture.detectChanges();
      tick();
      expect(comp.popover.isOpen()).toBe(true);

      const outsideEl = document.querySelector('#outside-element') as HTMLElement;
      dispatchInsideOrOutsideClick(outsideEl);
      fixture.detectChanges();
      tick(10);

      expect(comp.popover.isOpen()).toBe(false);
    }));

    it('should not close on inside click when autoClose is "outside"', fakeAsync(() => {
      comp.autoClose = 'outside';
      fixture.detectChanges();

      comp.popover.open();
      fixture.detectChanges();
      tick();
      expect(comp.popover.isOpen()).toBe(true);

      const popoverWindow = document.querySelector('sds-popover-window') as HTMLElement;
      dispatchInsideOrOutsideClick(popoverWindow);
      fixture.detectChanges();
      tick(10);

      expect(comp.popover.isOpen()).toBe(true);
    }));
  });

  describe('lifecycle and cleanup', () => {
    it('should close and clean up on ngOnDestroy', fakeAsync(() => {
      comp.popover.open();
      fixture.detectChanges();
      tick();
      expect(comp.popover.isOpen()).toBe(true);

      fixture.destroy();
      tick();

      expect(document.querySelector('sds-popover-window')).toBeNull();
    }));
  });

  describe('SdsPopoverWindow', () => {
    it('should correctly determine isTitleTemplate', () => {
      const windowInstance = new SdsPopoverWindow();
      windowInstance.title = 'Plain string';
      expect(windowInstance.isTitleTemplate()).toBe(false);

      windowInstance.title = comp.titleTpl;
      expect(windowInstance.isTitleTemplate()).toBe(true);
    });
  });
});
