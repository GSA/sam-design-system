import { NgZone } from '@angular/core';
import { fakeAsync, tick, TestBed } from '@angular/core/testing';
import { ngbRunTransition, ngbCompleteTransition, NgbTransitionStartFn } from './ngbTransition';
import { getTransitionDurationMs } from './util';

describe('transition utilities', () => {
  let zone: NgZone;
  let element: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    zone = TestBed.inject(NgZone);
    element = document.createElement('div');
    document.body.appendChild(element);
  });

  afterEach(() => {
    element.remove();
  });

  describe('getTransitionDurationMs', () => {
    it('should compute total transition duration from duration and delay in seconds', () => {
      element.style.transitionDuration = '0.3s';
      element.style.transitionDelay = '0.1s';

      const duration = getTransitionDurationMs(element);
      expect(Math.round(duration)).toBe(400);
    });
  });

  describe('ngbRunTransition without animation or with transitionProperty none', () => {
    it('should immediately execute end function and complete when animation is false', () => {
      const endFn = vi.fn();
      const startFn: NgbTransitionStartFn = vi.fn(() => endFn);
      const spy = vi.fn();

      ngbRunTransition(zone, element, startFn, {
        animation: false,
        runningTransition: 'continue',
      }).subscribe(spy);

      expect(startFn).toHaveBeenCalled();
      expect(endFn).toHaveBeenCalled();
      expect(spy).toHaveBeenCalled();
    });

    it('should handle startFn returning void', () => {
      const startFn: NgbTransitionStartFn = vi.fn(() => {});
      const spy = vi.fn();

      ngbRunTransition(zone, element, startFn, {
        animation: false,
        runningTransition: 'continue',
      }).subscribe(spy);

      expect(startFn).toHaveBeenCalled();
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('ngbRunTransition with animation enabled', () => {
    beforeEach(() => {
      element.style.transitionProperty = 'opacity';
      element.style.transitionDuration = '0.1s';
      element.style.transitionDelay = '0s';
    });

    it('should complete via ngbCompleteTransition', () => {
      const endFn = vi.fn();
      const startFn: NgbTransitionStartFn = vi.fn(() => endFn);
      const completeSpy = vi.fn();

      ngbRunTransition(zone, element, startFn, {
        animation: true,
        runningTransition: 'continue',
      }).subscribe({ complete: completeSpy });

      expect(startFn).toHaveBeenCalled();
      expect(endFn).not.toHaveBeenCalled();

      ngbCompleteTransition(element);

      expect(endFn).toHaveBeenCalled();
      expect(completeSpy).toHaveBeenCalled();
    });

    it('should complete via transitionend event', () => {
      const endFn = vi.fn();
      const startFn: NgbTransitionStartFn = vi.fn(() => endFn);
      const completeSpy = vi.fn();

      ngbRunTransition(zone, element, startFn, {
        animation: true,
        runningTransition: 'continue',
      }).subscribe({ complete: completeSpy });

      const event = new Event('transitionend');
      Object.defineProperty(event, 'target', { value: element });
      element.dispatchEvent(event);

      expect(endFn).toHaveBeenCalled();
      expect(completeSpy).toHaveBeenCalled();
    });

    it('should complete via timer fallback', fakeAsync(() => {
      const endFn = vi.fn();
      const startFn: NgbTransitionStartFn = vi.fn(() => endFn);
      const completeSpy = vi.fn();

      ngbRunTransition(zone, element, startFn, {
        animation: true,
        runningTransition: 'continue',
      }).subscribe({ complete: completeSpy });

      expect(endFn).not.toHaveBeenCalled();
      tick(1000);

      expect(endFn).toHaveBeenCalled();
      expect(completeSpy).toHaveBeenCalled();
    }));

    it('should return EMPTY when new transition has runningTransition: "continue"', () => {
      const startFn1: NgbTransitionStartFn = vi.fn();
      const startFn2: NgbTransitionStartFn = vi.fn();
      const completeSpy2 = vi.fn();

      ngbRunTransition(zone, element, startFn1, {
        animation: true,
        runningTransition: 'continue',
      });

      ngbRunTransition(zone, element, startFn2, {
        animation: true,
        runningTransition: 'continue',
      }).subscribe({ complete: completeSpy2 });

      expect(startFn2).not.toHaveBeenCalled();
      expect(completeSpy2).toHaveBeenCalled();

      ngbCompleteTransition(element);
    });

    it('should stop previous transition and merge context when runningTransition is "stop"', () => {
      const endFn1 = vi.fn();
      const startFn1: NgbTransitionStartFn = vi.fn(() => endFn1);
      const startFn2: NgbTransitionStartFn = vi.fn();
      const completeSpy1 = vi.fn();

      ngbRunTransition(zone, element, startFn1, {
        animation: true,
        runningTransition: 'continue',
        context: { a: 1 },
      }).subscribe({ complete: completeSpy1 });

      ngbRunTransition(zone, element, startFn2, {
        animation: true,
        runningTransition: 'stop',
        context: { b: 2 },
      });

      expect(completeSpy1).toHaveBeenCalled();
      expect(startFn2).toHaveBeenCalled();

      ngbCompleteTransition(element);
    });
  });
});
