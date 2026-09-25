import { Renderer2, RendererFactory2 } from '@angular/core';
import { fakeAsync, tick, TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs';
import { Trigger, parseTriggers, observeTriggers, triggerDelay, listenToTriggers } from './triggers';

describe('triggers utilities', () => {
  let renderer: Renderer2;
  let element: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    const rendererFactory = TestBed.inject(RendererFactory2);
    renderer = rendererFactory.createRenderer(null, null);
    element = document.createElement('button');
    document.body.appendChild(element);
  });

  afterEach(() => {
    element.remove();
  });

  describe('Trigger class', () => {
    it('should default close to open when close is omitted', () => {
      const trigger = new Trigger('click');
      expect(trigger.open).toBe('click');
      expect(trigger.close).toBe('click');
      expect(trigger.isManual()).toBe(false);
    });

    it('should use explicit close if provided', () => {
      const trigger = new Trigger('focusin', 'focusout');
      expect(trigger.open).toBe('focusin');
      expect(trigger.close).toBe('focusout');
      expect(trigger.isManual()).toBe(false);
    });

    it('should identify manual trigger', () => {
      expect(new Trigger('manual').isManual()).toBe(true);
      expect(new Trigger('manual', 'click').isManual()).toBe(true);
      expect(new Trigger('click', 'manual').isManual()).toBe(true);
      expect(new Trigger('click', 'focusout').isManual()).toBe(false);
    });
  });

  describe('parseTriggers', () => {
    it('should return empty array for empty or falsy triggers', () => {
      expect(parseTriggers('')).toEqual([]);
      expect(parseTriggers('   ')).toEqual([]);
      expect(parseTriggers(undefined as unknown as string)).toEqual([]);
      expect(parseTriggers(null as unknown as string)).toEqual([]);
    });

    it('should parse simple triggers', () => {
      const triggers = parseTriggers('click');
      expect(triggers.length).toBe(1);
      expect(triggers[0].open).toBe('click');
      expect(triggers[0].close).toBe('click');
    });

    it('should parse paired triggers', () => {
      const triggers = parseTriggers('focusin:focusout');
      expect(triggers.length).toBe(1);
      expect(triggers[0].open).toBe('focusin');
      expect(triggers[0].close).toBe('focusout');
    });

    it('should expand default aliases for hover and focus', () => {
      const triggers = parseTriggers('hover focus');
      expect(triggers.length).toBe(2);
      expect(triggers[0].open).toBe('mouseenter');
      expect(triggers[0].close).toBe('mouseleave');
      expect(triggers[1].open).toBe('focusin');
      expect(triggers[1].close).toBe('focusout');
    });

    it('should allow custom aliases', () => {
      const customAliases = {
        hover: ['mouseenter', 'mouseleave'],
        focus: ['focusin', 'focusout'],
        custom: ['openEvent', 'closeEvent'],
      };
      const triggers = parseTriggers('custom', customAliases as any);
      expect(triggers[0].open).toBe('openEvent');
      expect(triggers[0].close).toBe('closeEvent');
    });

    it('should throw when multiple manual triggers are present', () => {
      expect(() => parseTriggers('manual manual')).toThrow('Triggers parse error: only one manual trigger is allowed');
    });

    it('should throw when manual trigger is mixed with other triggers', () => {
      expect(() => parseTriggers('click manual')).toThrow(
        "Triggers parse error: manual trigger can't be mixed with other triggers",
      );
    });
  });

  describe('observeTriggers', () => {
    it('should toggle when open equals close', () => {
      let isOpen = false;
      const emitted: boolean[] = [];
      const triggers = [new Trigger('click')];
      const subscription = observeTriggers(renderer, element, triggers, () => isOpen).subscribe((val) =>
        emitted.push(val),
      );

      element.dispatchEvent(new Event('click'));
      expect(emitted).toEqual([true]);

      isOpen = true;
      element.dispatchEvent(new Event('click'));
      expect(emitted).toEqual([true, false]);

      subscription.unsubscribe();
      element.dispatchEvent(new Event('click'));
      expect(emitted.length).toBe(2);
    });

    it('should emit true on open event and false on close event when different', () => {
      const emitted: boolean[] = [];
      const triggers = [new Trigger('mouseenter', 'mouseleave')];
      const subscription = observeTriggers(renderer, element, triggers, () => false).subscribe((val) =>
        emitted.push(val),
      );

      element.dispatchEvent(new Event('mouseenter'));
      expect(emitted).toEqual([true]);

      element.dispatchEvent(new Event('mouseleave'));
      expect(emitted).toEqual([true, false]);

      subscription.unsubscribe();
      element.dispatchEvent(new Event('mouseenter'));
      expect(emitted.length).toBe(2);
    });
  });

  describe('triggerDelay', () => {
    it('should pass values immediately when delay is 0', fakeAsync(() => {
      let isOpen = false;
      const input$ = new Subject<boolean>();
      const output: boolean[] = [];

      input$.pipe(triggerDelay(0, 0, () => isOpen)).subscribe((v) => output.push(v));

      input$.next(true);
      tick();
      expect(output).toEqual([true]);

      isOpen = true;
      input$.next(false);
      tick();
      expect(output).toEqual([true, false]);
    }));

    it('should delay open and close when delay is specified', fakeAsync(() => {
      let isOpen = false;
      const input$ = new Subject<boolean>();
      const output: boolean[] = [];

      input$.pipe(triggerDelay(100, 200, () => isOpen)).subscribe((v) => output.push(v));

      input$.next(true);
      tick(50);
      expect(output).toEqual([]);
      tick(50);
      expect(output).toEqual([true]);

      isOpen = true;
      input$.next(false);
      tick(100);
      expect(output).toEqual([true]);
      tick(100);
      expect(output).toEqual([true, false]);
    }));

    it('should cancel pending open if close is emitted before delay expires', fakeAsync(() => {
      const isOpen = false;
      const input$ = new Subject<boolean>();
      const output: boolean[] = [];

      input$.pipe(triggerDelay(100, 100, () => isOpen)).subscribe((v) => output.push(v));

      input$.next(true);
      tick(50);
      input$.next(false);
      tick(100);

      expect(output).toEqual([]);
    }));
  });

  describe('listenToTriggers', () => {
    it('should return noop when triggers is manual', () => {
      const openSpy = vi.fn();
      const closeSpy = vi.fn();
      const unlisten = listenToTriggers(renderer, element, 'manual', () => false, openSpy, closeSpy);

      expect(typeof unlisten).toBe('function');
      element.dispatchEvent(new Event('click'));
      expect(openSpy).not.toHaveBeenCalled();
      expect(closeSpy).not.toHaveBeenCalled();
      unlisten();
    });

    it('should listen to triggers and invoke openFn and closeFn', fakeAsync(() => {
      let isOpen = false;
      const openSpy = vi.fn().mockImplementation(() => {
        isOpen = true;
      });
      const closeSpy = vi.fn().mockImplementation(() => {
        isOpen = false;
      });

      const unlisten = listenToTriggers(renderer, element, 'mouseenter:mouseleave', () => isOpen, openSpy, closeSpy);

      element.dispatchEvent(new Event('mouseenter'));
      tick();
      expect(openSpy).toHaveBeenCalledTimes(1);
      expect(closeSpy).not.toHaveBeenCalled();

      element.dispatchEvent(new Event('mouseleave'));
      tick();
      expect(closeSpy).toHaveBeenCalledTimes(1);

      unlisten();
      element.dispatchEvent(new Event('mouseenter'));
      tick();
      expect(openSpy).toHaveBeenCalledTimes(1);
    }));
  });
});
