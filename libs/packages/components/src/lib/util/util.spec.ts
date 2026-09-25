import { NgZone } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import {
  toInteger,
  toString,
  getValueInRange,
  isString,
  isNumber,
  isInteger,
  isDefined,
  isPromise,
  padNumber,
  regExpEscape,
  hasClassName,
  closest,
  reflow,
  runInZone,
  removeAccents,
  getActiveElement,
} from './util';

describe('general utilities (util.ts)', () => {
  describe('toInteger', () => {
    it('should parse integers correctly', () => {
      expect(toInteger('42')).toBe(42);
      expect(toInteger(42.7)).toBe(42);
      expect(toInteger('invalid')).toBeNaN();
    });
  });

  describe('toString', () => {
    it('should convert defined values to string and return empty string for null/undefined', () => {
      expect(toString('hello')).toBe('hello');
      expect(toString(123)).toBe('123');
      expect(toString(0)).toBe('0');
      expect(toString(false)).toBe('false');
      expect(toString(null)).toBe('');
      expect(toString(undefined)).toBe('');
    });
  });

  describe('getValueInRange', () => {
    it('should clamp values between min and max', () => {
      expect(getValueInRange(5, 10, 0)).toBe(5);
      expect(getValueInRange(-2, 10, 0)).toBe(0);
      expect(getValueInRange(15, 10, 0)).toBe(10);
      expect(getValueInRange(5, 10)).toBe(5);
      expect(getValueInRange(-5, 10)).toBe(0);
    });
  });

  describe('type predicates', () => {
    it('isString should check for strings', () => {
      expect(isString('hello')).toBe(true);
      expect(isString('')).toBe(true);
      expect(isString(123)).toBe(false);
      expect(isString(null)).toBe(false);
      expect(isString({})).toBe(false);
    });

    it('isNumber should check for valid numbers', () => {
      expect(isNumber(123)).toBe(true);
      expect(isNumber('123')).toBe(true);
      expect(isNumber(0)).toBe(true);
      expect(isNumber('abc')).toBe(false);
      expect(isNumber(NaN)).toBe(false);
    });

    it('isInteger should check for valid integers', () => {
      expect(isInteger(42)).toBe(true);
      expect(isInteger(0)).toBe(true);
      expect(isInteger(-5)).toBe(true);
      expect(isInteger(42.5)).toBe(false);
      expect(isInteger('42')).toBe(false);
      expect(isInteger(Infinity)).toBe(false);
    });

    it('isDefined should check if defined and not null', () => {
      expect(isDefined(0)).toBe(true);
      expect(isDefined('')).toBe(true);
      expect(isDefined(false)).toBe(true);
      expect(isDefined(null)).toBe(false);
      expect(isDefined(undefined)).toBe(false);
    });

    it('isPromise should check if thenable', () => {
      expect(isPromise(Promise.resolve(1))).toBeTruthy();
      expect(isPromise({ then: () => {} })).toBeTruthy();
      expect(isPromise(null)).toBeFalsy();
      expect(isPromise({})).toBeFalsy();
      expect(isPromise('not-a-promise')).toBeFalsy();
    });
  });

  describe('padNumber', () => {
    it('should pad single digits with 0', () => {
      expect(padNumber(5)).toBe('05');
      expect(padNumber(12)).toBe('12');
      expect(padNumber('invalid' as any)).toBe('');
    });
  });

  describe('regExpEscape', () => {
    it('should escape regex characters', () => {
      expect(regExpEscape('foo[bar]')).toBe('foo\\[bar\\]');
      expect(regExpEscape('a*b+c?^$|#.')).toBe('a\\*b\\+c\\?\\^\\$\\|\\#\\.');
    });
  });

  describe('hasClassName', () => {
    it('should check if element has class', () => {
      const el = { className: 'btn btn-primary active' };
      expect(hasClassName(el, 'btn')).toBe(true);
      expect(hasClassName(el, 'btn-primary')).toBe(true);
      expect(hasClassName(el, 'disabled')).toBe(false);
      expect(hasClassName(null, 'btn')).toBeFalsy();
      expect(hasClassName({}, 'btn')).toBeFalsy();
    });
  });

  describe('closest', () => {
    it('should return null if selector is empty or missing', () => {
      const el = document.createElement('div');
      expect(closest(el, '')).toBeNull();
      expect(closest(el, undefined)).toBeNull();
    });

    it('should find closest matching element', () => {
      const parent = document.createElement('div');
      parent.className = 'container';
      const child = document.createElement('span');
      child.className = 'child';
      parent.appendChild(child);
      document.body.appendChild(parent);

      expect(closest(child, '.container')).toBe(parent);
      expect(closest(child, '.nonexistent')).toBeNull();

      parent.remove();
    });

    it('should return null when element.closest is undefined', () => {
      const el = { closest: undefined } as any;
      expect(closest(el, '.foo')).toBeNull();
    });
  });

  describe('reflow', () => {
    it('should return bounding client rect', () => {
      const el = document.createElement('div');
      document.body.appendChild(el);
      const rect = reflow(el);
      expect(rect).toBeDefined();
      el.remove();

      const bodyRect = reflow(null as any);
      expect(bodyRect).toBeDefined();
    });
  });

  describe('runInZone', () => {
    it('should execute observable callbacks inside zone', () => {
      TestBed.configureTestingModule({});
      const zone = TestBed.inject(NgZone);
      const spy = vi.spyOn(zone, 'run');

      of('test-val')
        .pipe(runInZone(zone))
        .subscribe((val) => {
          expect(val).toBe('test-val');
        });

      expect(spy).toHaveBeenCalled();
    });
  });

  describe('removeAccents', () => {
    it('should strip accents and diacritics', () => {
      expect(removeAccents('café')).toBe('cafe');
      expect(removeAccents('résumé')).toBe('resume');
      expect(removeAccents('naïve')).toBe('naive');
      expect(removeAccents('jalapeño')).toBe('jalapeno');
    });
  });

  describe('getActiveElement', () => {
    it('should return document active element', () => {
      const btn = document.createElement('button');
      document.body.appendChild(btn);
      btn.focus();

      expect(getActiveElement(document)).toBe(btn);
      expect(getActiveElement()).toBe(btn);
      btn.remove();
    });

    it('should return null when active element is null', () => {
      expect(getActiveElement(null as any)).toBeNull();
    });

    it('should find active element inside shadow root recursively', () => {
      const shadowBtn = document.createElement('button');
      const shadow = { activeElement: shadowBtn } as unknown as ShadowRoot;
      const host = { shadowRoot: shadow } as unknown as Element;
      const rootStub = { activeElement: host } as unknown as Document;

      expect(getActiveElement(rootStub)).toBe(shadowBtn);
    });
  });
});
