import { Component, ElementRef, ViewChild, TemplateRef } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SdsTooltipModule } from './tooltip.module';
import { SdsTooltip, SdsTooltipWindow } from './tooltip';
import { SdsTooltipConfig } from './tooltip-config';
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
      [sdsTooltip]="content"
      [autoClose]="autoClose"
      [disableTooltip]="disableTooltip"
      [tooltipClass]="tooltipClass"
      [container]="container"
      [position]="position"
      [popperOptions]="popperOptions"
      [positionTarget]="positionTarget"
      [triggers]="triggers"
      [openDelay]="openDelay"
      [closeDelay]="closeDelay"
      (shown)="onShown()"
      (hidden)="onHidden()"
      #tooltip="sdsTooltip"
    >
      Trigger
    </button>
    <div id="custom-target">Custom Target</div>
    <div id="outside-element">Outside Element</div>

    <ng-template #contentTpl let-msg="msg">
      <span class="custom-content">{{ msg || 'Template Content' }}</span>
    </ng-template>
  `,
  imports: [SdsTooltipModule],
})
class TestTooltipComponent {
  content: string | TemplateRef<any> | null | undefined = 'Tooltip Message';
  autoClose: boolean | 'inside' | 'outside' = true;
  disableTooltip = false;
  tooltipClass = 'initial-class';
  container = '';
  position = 'auto';
  popperOptions = (opts: any) => opts;
  positionTarget: string | HTMLElement | undefined = undefined;
  triggers = 'hover focus';
  openDelay = 0;
  closeDelay = 0;

  shownCalls = 0;
  hiddenCalls = 0;

  @ViewChild('tooltip', { static: false }) tooltip: SdsTooltip;
  @ViewChild('tooltip', { read: ElementRef, static: false }) buttonEl: ElementRef<HTMLButtonElement>;
  @ViewChild('contentTpl', { static: true }) contentTpl: TemplateRef<any>;

  onShown() {
    this.shownCalls++;
  }

  onHidden() {
    this.hiddenCalls++;
  }
}

describe('SdsTooltip', () => {
  let fixture: ComponentFixture<TestTooltipComponent>;
  let comp: TestTooltipComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestTooltipComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestTooltipComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    if (comp.tooltip && comp.tooltip.isOpen()) {
      comp.tooltip.close();
    }
  });

  describe('SdsTooltipConfig', () => {
    it('should have default configuration values', () => {
      const config = TestBed.inject(SdsTooltipConfig);
      expect(config.autoClose).toBe(true);
      expect(config.placement).toBe('auto');
      expect(config.triggers).toBe('hover focus');
      expect(config.disableTooltip).toBe(false);
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
      expect(comp.tooltip.isOpen()).toBe(false);

      comp.tooltip.open();
      fixture.detectChanges();
      tick();

      expect(comp.tooltip.isOpen()).toBe(true);
      expect(comp.shownCalls).toBe(1);

      comp.tooltip.close();
      fixture.detectChanges();
      tick();

      expect(comp.tooltip.isOpen()).toBe(false);
      expect(comp.hiddenCalls).toBe(1);

      comp.tooltip.toggle();
      fixture.detectChanges();
      tick();

      expect(comp.tooltip.isOpen()).toBe(true);

      comp.tooltip.toggle();
      fixture.detectChanges();
      tick();

      expect(comp.tooltip.isOpen()).toBe(false);
    }));

    it('should open on mouseenter and close on mouseleave by default', fakeAsync(() => {
      const button = comp.buttonEl.nativeElement;
      expect(comp.tooltip.isOpen()).toBe(false);

      button.dispatchEvent(new MouseEvent('mouseenter'));
      fixture.detectChanges();
      tick();

      expect(comp.tooltip.isOpen()).toBe(true);

      button.dispatchEvent(new MouseEvent('mouseleave'));
      fixture.detectChanges();
      tick();

      expect(comp.tooltip.isOpen()).toBe(false);
    }));

    it('should open on focusin and close on focusout by default', fakeAsync(() => {
      const button = comp.buttonEl.nativeElement;
      expect(comp.tooltip.isOpen()).toBe(false);

      button.dispatchEvent(new FocusEvent('focusin'));
      fixture.detectChanges();
      tick();

      expect(comp.tooltip.isOpen()).toBe(true);

      button.dispatchEvent(new FocusEvent('focusout'));
      fixture.detectChanges();
      tick();

      expect(comp.tooltip.isOpen()).toBe(false);
    }));

    it('should respect openDelay and closeDelay', fakeAsync(() => {
      comp.tooltip.ngOnDestroy();
      comp.openDelay = 100;
      comp.closeDelay = 100;
      fixture.detectChanges();
      comp.tooltip.ngOnInit();

      const button = comp.buttonEl.nativeElement;
      button.dispatchEvent(new MouseEvent('mouseenter'));
      fixture.detectChanges();
      tick(50);
      expect(comp.tooltip.isOpen()).toBe(false);

      tick(50);
      fixture.detectChanges();
      tick();
      expect(comp.tooltip.isOpen()).toBe(true);

      button.dispatchEvent(new MouseEvent('mouseleave'));
      fixture.detectChanges();
      tick(50);
      expect(comp.tooltip.isOpen()).toBe(true);

      tick(50);
      fixture.detectChanges();
      tick();
      expect(comp.tooltip.isOpen()).toBe(false);
    }));

    it('should not open when disableTooltip is true', fakeAsync(() => {
      comp.disableTooltip = true;
      fixture.detectChanges();

      comp.tooltip.open();
      fixture.detectChanges();
      tick();

      expect(comp.tooltip.isOpen()).toBe(false);
    }));

    it('should not open when sdsTooltip is empty', fakeAsync(() => {
      comp.content = '';
      fixture.detectChanges();

      comp.tooltip.open();
      fixture.detectChanges();
      tick();

      expect(comp.tooltip.isOpen()).toBe(false);
    }));

    it('should close when sdsTooltip changes to empty via setter', fakeAsync(() => {
      expect(comp.tooltip.sdsTooltip).toBe('Tooltip Message');
      comp.tooltip.open();
      fixture.detectChanges();
      tick();
      expect(comp.tooltip.isOpen()).toBe(true);

      comp.tooltip.sdsTooltip = '';
      expect(comp.tooltip.sdsTooltip).toBe('');
      fixture.detectChanges();
      tick();

      expect(comp.tooltip.isOpen()).toBe(false);
    }));
  });

  describe('content and TemplateRef rendering', () => {
    it('should render string tooltip content', fakeAsync(() => {
      comp.tooltip.open();
      fixture.detectChanges();
      tick();

      const tooltipWindow = document.querySelector('sds-tooltip-window');
      expect(tooltipWindow).toBeTruthy();
      expect(tooltipWindow?.querySelector('.tooltip-inner')?.textContent).toContain('Tooltip Message');
    }));

    it('should render TemplateRef tooltip content with context', fakeAsync(() => {
      comp.content = comp.contentTpl;
      fixture.detectChanges();

      comp.tooltip.open({ msg: 'Dynamic Tooltip' });
      fixture.detectChanges();
      tick();

      const tooltipWindow = document.querySelector('sds-tooltip-window');
      expect(tooltipWindow).toBeTruthy();
      expect(tooltipWindow?.querySelector('.custom-content')?.textContent).toContain('Dynamic Tooltip');
    }));
  });

  describe('ARIA attributes, styling and container', () => {
    it('should set and remove aria-describedby on the target element', fakeAsync(() => {
      const button = comp.buttonEl.nativeElement;
      expect(button.getAttribute('aria-describedby')).toBeNull();

      comp.tooltip.open();
      fixture.detectChanges();
      tick();

      const ariaDescribedBy = button.getAttribute('aria-describedby');
      expect(ariaDescribedBy).toMatch(/^sds-tooltip-\d+$/);

      const tooltipWindow = document.querySelector('sds-tooltip-window');
      expect(tooltipWindow?.getAttribute('id')).toBe(ariaDescribedBy);

      comp.tooltip.close();
      fixture.detectChanges();
      tick();

      expect(button.getAttribute('aria-describedby')).toBeNull();
    }));

    it('should apply tooltipClass to the tooltip window and update on ngOnChanges', fakeAsync(() => {
      comp.tooltipClass = 'my-tooltip-class';
      fixture.detectChanges();

      comp.tooltip.open();
      fixture.detectChanges();
      tick();

      const tooltipWindow = document.querySelector('sds-tooltip-window');
      expect(tooltipWindow?.classList.contains('my-tooltip-class')).toBe(true);

      comp.tooltip.ngOnChanges({
        tooltipClass: {
          currentValue: 'updated-tooltip-class',
          previousValue: 'my-tooltip-class',
          firstChange: false,
          isFirstChange: () => false,
        },
      });
      (comp.tooltip as any)._windowRef?.changeDetectorRef.detectChanges();

      expect(tooltipWindow?.classList.contains('updated-tooltip-class')).toBe(true);
    }));

    it('should append to body when container="body"', fakeAsync(() => {
      comp.container = 'body';
      fixture.detectChanges();

      comp.tooltip.open();
      fixture.detectChanges();
      tick();

      const tooltipWindow = document.body.querySelector(':scope > sds-tooltip-window');
      expect(tooltipWindow).toBeTruthy();

      comp.tooltip.close();
      fixture.detectChanges();
      tick();

      expect(document.body.querySelector(':scope > sds-tooltip-window')).toBeNull();
    }));

    it('should support custom positionTarget as selector or HTMLElement', fakeAsync(() => {
      comp.positionTarget = '#custom-target';
      fixture.detectChanges();

      comp.tooltip.open();
      fixture.detectChanges();
      tick();

      const customTarget = document.querySelector('#custom-target');
      expect(customTarget?.getAttribute('aria-describedby')).toBeTruthy();

      comp.tooltip.close();
      fixture.detectChanges();
      tick();

      expect(customTarget?.getAttribute('aria-describedby')).toBeNull();

      comp.positionTarget = customTarget as HTMLElement;
      fixture.detectChanges();

      comp.tooltip.open();
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

      comp.tooltip.open();
      fixture.detectChanges();
      tick();

      expect(popperOptionsCalled).toBe(true);
    }));
  });

  describe('autoClose and keyboard event handling', () => {
    it('should close on Escape keydown when autoClose is true', fakeAsync(() => {
      comp.autoClose = true;
      fixture.detectChanges();

      comp.tooltip.open();
      fixture.detectChanges();
      tick();
      expect(comp.tooltip.isOpen()).toBe(true);

      dispatchEscapeEvent(document);
      fixture.detectChanges();
      tick();

      expect(comp.tooltip.isOpen()).toBe(false);
    }));

    it('should close on Escape keydown when autoClose is "inside"', fakeAsync(() => {
      comp.autoClose = 'inside';
      fixture.detectChanges();

      comp.tooltip.open();
      fixture.detectChanges();
      tick();
      expect(comp.tooltip.isOpen()).toBe(true);

      dispatchEscapeEvent(document);
      fixture.detectChanges();
      tick();

      expect(comp.tooltip.isOpen()).toBe(false);
    }));

    it('should close on Escape keydown when autoClose is "outside"', fakeAsync(() => {
      comp.autoClose = 'outside';
      fixture.detectChanges();

      comp.tooltip.open();
      fixture.detectChanges();
      tick();
      expect(comp.tooltip.isOpen()).toBe(true);

      dispatchEscapeEvent(document);
      fixture.detectChanges();
      tick();

      expect(comp.tooltip.isOpen()).toBe(false);
    }));

    it('should not close on Escape keydown when autoClose is false', fakeAsync(() => {
      comp.autoClose = false;
      fixture.detectChanges();

      comp.tooltip.open();
      fixture.detectChanges();
      tick();
      expect(comp.tooltip.isOpen()).toBe(true);

      dispatchEscapeEvent(document);
      fixture.detectChanges();
      tick();

      expect(comp.tooltip.isOpen()).toBe(true);
    }));

    it('should close on inside click when autoClose is true or "inside"', fakeAsync(() => {
      comp.autoClose = 'inside';
      fixture.detectChanges();

      comp.tooltip.open();
      fixture.detectChanges();
      tick();
      expect(comp.tooltip.isOpen()).toBe(true);

      const tooltipWindow = document.querySelector('sds-tooltip-window') as HTMLElement;
      dispatchInsideOrOutsideClick(tooltipWindow);
      fixture.detectChanges();
      tick(10);

      expect(comp.tooltip.isOpen()).toBe(false);
    }));

    it('should not close on outside click when autoClose is "inside"', fakeAsync(() => {
      comp.autoClose = 'inside';
      fixture.detectChanges();

      comp.tooltip.open();
      fixture.detectChanges();
      tick();
      expect(comp.tooltip.isOpen()).toBe(true);

      const outsideEl = document.querySelector('#outside-element') as HTMLElement;
      dispatchInsideOrOutsideClick(outsideEl);
      fixture.detectChanges();
      tick(10);

      expect(comp.tooltip.isOpen()).toBe(true);
    }));

    it('should close on outside click when autoClose is "outside"', fakeAsync(() => {
      comp.autoClose = 'outside';
      fixture.detectChanges();

      comp.tooltip.open();
      fixture.detectChanges();
      tick();
      expect(comp.tooltip.isOpen()).toBe(true);

      const outsideEl = document.querySelector('#outside-element') as HTMLElement;
      dispatchInsideOrOutsideClick(outsideEl);
      fixture.detectChanges();
      tick(10);

      expect(comp.tooltip.isOpen()).toBe(false);
    }));

    it('should not close on inside click when autoClose is "outside"', fakeAsync(() => {
      comp.autoClose = 'outside';
      fixture.detectChanges();

      comp.tooltip.open();
      fixture.detectChanges();
      tick();
      expect(comp.tooltip.isOpen()).toBe(true);

      const tooltipWindow = document.querySelector('sds-tooltip-window') as HTMLElement;
      dispatchInsideOrOutsideClick(tooltipWindow);
      fixture.detectChanges();
      tick(10);

      expect(comp.tooltip.isOpen()).toBe(true);
    }));
  });

  describe('lifecycle and cleanup', () => {
    it('should close and clean up on ngOnDestroy', fakeAsync(() => {
      comp.tooltip.open();
      fixture.detectChanges();
      tick();
      expect(comp.tooltip.isOpen()).toBe(true);

      fixture.destroy();
      tick();

      expect(document.querySelector('sds-tooltip-window')).toBeNull();
    }));
  });

  describe('SdsTooltipWindow', () => {
    it('should instantiate SdsTooltipWindow directly', () => {
      const windowInstance = new SdsTooltipWindow();
      expect(windowInstance).toBeTruthy();
    });
  });
});
