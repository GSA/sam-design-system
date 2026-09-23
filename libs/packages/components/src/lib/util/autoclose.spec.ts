import { NgZone } from '@angular/core';
import { fakeAsync, tick, TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs';
import { sdsAutoClose, SOURCE } from './autoclose';
import { Key } from './key';

describe('sdsAutoClose', () => {
  let zone: NgZone;
  let closed$: Subject<void>;
  let closeSpy: any;
  let container: HTMLElement;
  let insideEl: HTMLElement;
  let outsideEl: HTMLElement;
  let ignoreEl: HTMLElement;

  beforeEach(() => {
    zone = TestBed.inject(NgZone);
    closed$ = new Subject<void>();
    closeSpy = vi.fn();

    container = document.createElement('div');
    insideEl = document.createElement('div');
    insideEl.className = 'inside';

    const childSelectorEl = document.createElement('span');
    childSelectorEl.className = 'closeable-child';
    insideEl.appendChild(childSelectorEl);

    const normalChildEl = document.createElement('span');
    normalChildEl.className = 'normal-child';
    insideEl.appendChild(normalChildEl);

    outsideEl = document.createElement('div');
    outsideEl.className = 'outside';

    ignoreEl = document.createElement('div');
    ignoreEl.className = 'ignore';

    container.appendChild(insideEl);
    container.appendChild(outsideEl);
    container.appendChild(ignoreEl);
    document.body.appendChild(container);
  });

  afterEach(() => {
    closed$.next();
    closed$.complete();
    container.remove();
  });

  function clickElement(el: HTMLElement, button = 0) {
    el.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true, button }));
    el.dispatchEvent(new MouseEvent('mouseup', { bubbles: true, cancelable: true, button }));
  }

  function sendEscape() {
    const event = new KeyboardEvent('keydown', {
      bubbles: true,
      cancelable: true,
      key: 'Escape',
      which: Key.Escape,
    } as any);
    document.dispatchEvent(event);
    return event;
  }

  it('should not register listeners when type is false', fakeAsync(() => {
    sdsAutoClose(zone, document, false, closeSpy, closed$, [insideEl]);

    sendEscape();
    clickElement(outsideEl);
    tick(10);

    expect(closeSpy).not.toHaveBeenCalled();
  }));

  describe('when type is true', () => {
    it('should close on Escape key with SOURCE.ESCAPE and prevent default', fakeAsync(() => {
      sdsAutoClose(zone, document, true, closeSpy, closed$, [insideEl]);

      const event = sendEscape();
      tick();

      expect(closeSpy).toHaveBeenCalledWith(SOURCE.ESCAPE);
      expect(event.defaultPrevented).toBe(true);
    }));

    it('should not close on non-Escape key', fakeAsync(() => {
      sdsAutoClose(zone, document, true, closeSpy, closed$, [insideEl]);

      const event = new KeyboardEvent('keydown', {
        bubbles: true,
        cancelable: true,
        key: 'Enter',
        which: Key.Enter,
      } as any);
      document.dispatchEvent(event);
      tick();

      expect(closeSpy).not.toHaveBeenCalled();
    }));

    it('should close on outside click with SOURCE.CLICK', fakeAsync(() => {
      sdsAutoClose(zone, document, true, closeSpy, closed$, [insideEl]);

      clickElement(outsideEl);
      tick();

      expect(closeSpy).toHaveBeenCalledWith(SOURCE.CLICK);
    }));

    it('should not close on right click', fakeAsync(() => {
      sdsAutoClose(zone, document, true, closeSpy, closed$, [insideEl]);

      clickElement(outsideEl, 2);
      tick();

      expect(closeSpy).not.toHaveBeenCalled();
    }));

    it('should not close on elements in ignoreElements list', fakeAsync(() => {
      sdsAutoClose(zone, document, true, closeSpy, closed$, [insideEl], [ignoreEl]);

      clickElement(ignoreEl);
      tick();

      expect(closeSpy).not.toHaveBeenCalled();
    }));

    it('should respect insideSelector when provided', fakeAsync(() => {
      sdsAutoClose(zone, document, true, closeSpy, closed$, [insideEl], [], '.closeable-child');

      const normalChild = insideEl.querySelector('.normal-child') as HTMLElement;
      clickElement(normalChild);
      tick();
      expect(closeSpy).not.toHaveBeenCalled();

      const closeableChild = insideEl.querySelector('.closeable-child') as HTMLElement;
      clickElement(closeableChild);
      tick();
      expect(closeSpy).toHaveBeenCalledWith(SOURCE.CLICK);
    }));
  });

  describe('when type is "inside"', () => {
    it('should close on inside click with SOURCE.CLICK', fakeAsync(() => {
      sdsAutoClose(zone, document, 'inside', closeSpy, closed$, [insideEl]);

      clickElement(insideEl);
      tick();

      expect(closeSpy).toHaveBeenCalledWith(SOURCE.CLICK);
    }));

    it('should not close on outside click', fakeAsync(() => {
      sdsAutoClose(zone, document, 'inside', closeSpy, closed$, [insideEl]);

      clickElement(outsideEl);
      tick();

      expect(closeSpy).not.toHaveBeenCalled();
    }));

    it('should respect insideSelector when type is "inside"', fakeAsync(() => {
      sdsAutoClose(zone, document, 'inside', closeSpy, closed$, [insideEl], [], '.closeable-child');

      const normalChild = insideEl.querySelector('.normal-child') as HTMLElement;
      clickElement(normalChild);
      tick();
      expect(closeSpy).not.toHaveBeenCalled();

      const closeableChild = insideEl.querySelector('.closeable-child') as HTMLElement;
      clickElement(closeableChild);
      tick();
      expect(closeSpy).toHaveBeenCalledWith(SOURCE.CLICK);
    }));
  });

  describe('when type is "outside"', () => {
    it('should close on outside click with SOURCE.CLICK', fakeAsync(() => {
      sdsAutoClose(zone, document, 'outside', closeSpy, closed$, [insideEl]);

      clickElement(outsideEl);
      tick();

      expect(closeSpy).toHaveBeenCalledWith(SOURCE.CLICK);
    }));

    it('should not close on inside click', fakeAsync(() => {
      sdsAutoClose(zone, document, 'outside', closeSpy, closed$, [insideEl]);

      clickElement(insideEl);
      tick();

      expect(closeSpy).not.toHaveBeenCalled();
    }));
  });

  it('should unsubscribe and stop listening when closed$ emits', fakeAsync(() => {
    sdsAutoClose(zone, document, true, closeSpy, closed$, [insideEl]);

    closed$.next();
    sendEscape();
    clickElement(outsideEl);
    tick();

    expect(closeSpy).not.toHaveBeenCalled();
  }));
});
