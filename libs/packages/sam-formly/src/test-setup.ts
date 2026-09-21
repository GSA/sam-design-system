/* eslint-disable @typescript-eslint/no-explicit-any -- Zone.js's internal test-patching API (`Zone.__symbol__`, `withProxyZone`) is untyped; casting through `any` here is the standard pattern this shared test-setup file borrows from the analogous ngx-uswds/sam-ui-elements Vitest migrations. */
/**
 * Vitest test setup, shared by the components, sam-formly, and
 * sam-material-extensions libraries.
 *
 * The `@angular/build:unit-test` builder initialises the Angular TestBed and
 * cleanup hooks, but it does not wrap Vitest's `beforeEach`/`it` callbacks in a
 * Zone.js ProxyZone. Angular's `waitForAsync()` and `fakeAsync()` helpers rely
 * on that ProxyZone being present, so we wrap the global test functions here
 * using the `withProxyZone` helper that zone.js/testing exposes on the global
 * `Zone`.
 *
 * We also polyfill `ResizeObserver`, which jsdom does not implement but some
 * components depend on at runtime.
 */

// jsdom does not provide ResizeObserver; provide a no-op implementation.
if (typeof (globalThis as any).ResizeObserver === 'undefined') {
  (globalThis as any).ResizeObserver = class {
    observe(): void {}
    unobserve(): void {}
    disconnect(): void {}
  };
}

// jsdom never computes real layout, so `offsetWidth`/`offsetHeight` and
// `getClientRects()` are always 0/empty. Angular CDK's `InteractivityChecker`
// (used by FocusTrap to find the first tabbable element in a dialog) treats
// that as "the element has no geometry" and therefore invisible/unfocusable,
// which breaks every dialog-autofocus assertion under jsdom. Stub a nonzero
// geometry so CDK's visibility check passes, matching what a real browser
// reports for a rendered element.
if (typeof HTMLElement !== 'undefined') {
  Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
    configurable: true,
    get() {
      return 100;
    },
  });
  Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
    configurable: true,
    get() {
      return 40;
    },
  });
}

// jsdom intentionally does not implement `innerText` (it requires a real
// layout engine to compute rendered/visible text). Some specs/directives
// read it directly on native elements; fall back to `textContent`, which is
// close enough for jsdom's non-rendering DOM.
if (typeof HTMLElement !== 'undefined' && !('innerText' in HTMLElement.prototype)) {
  Object.defineProperty(HTMLElement.prototype, 'innerText', {
    get() {
      return this.textContent;
    },
    set(value) {
      this.textContent = value;
    },
    configurable: true,
  });
}

const zone = (globalThis as any).Zone;
if (zone) {
  const fakeAsyncTestModule = zone[zone.__symbol__('fakeAsyncTest')];
  const withProxyZone: (<T extends (...args: any[]) => any>(fn: T) => T) | undefined =
    fakeAsyncTestModule?.withProxyZone;

  if (withProxyZone) {
    // Wrap the Vitest lifecycle/test functions so every setup and test body runs
    // inside a shared ProxyZone that Angular's zone-based async helpers can find.
    const g = globalThis as any;
    for (const name of ['beforeEach', 'afterEach', 'beforeAll', 'afterAll', 'it', 'test'] as const) {
      const original = g[name];
      if (typeof original !== 'function') {
        continue;
      }

      const wrap = (fn: unknown) => (typeof fn === 'function' ? withProxyZone(fn as any) : fn);

      const patched: any = (first: unknown, ...rest: unknown[]) => {
        // `it`/`test` take (name, fn, timeout); hooks take (fn, timeout).
        if (typeof first === 'string') {
          const [fn, ...tail] = rest;
          return original(first, wrap(fn), ...tail);
        }
        return original(wrap(first), ...rest);
      };

      // Preserve modifiers like it.only / it.skip / it.each, but route the ones
      // that ultimately execute test callbacks through the same ProxyZone
      // wrapper. `it.only`/`test.only` (and `.skip`, `.concurrent`, etc.) accept
      // the same (name, fn, timeout) signature as the base function, while
      // `it.each(...)`/`test.each(...)` return a registrar with that signature.
      // Assigning the originals directly would let those callbacks bypass
      // `withProxyZone`, breaking any `fakeAsync`/`waitForAsync` inside them.
      const patchTestFn = (fn: any): any =>
        typeof fn === 'function'
          ? (first: unknown, ...rest: unknown[]) => {
              if (typeof first === 'string') {
                const [inner, ...tail] = rest;
                return fn(first, wrap(inner), ...tail);
              }
              return fn(wrap(first), ...rest);
            }
          : fn;

      // Modifiers that take a test callback directly.
      const callbackModifiers = new Set(['only', 'skip', 'todo', 'concurrent', 'sequential', 'fails']);

      const skipKeys = new Set([
        'length',
        'name',
        'prototype',
        'caller',
        'arguments',
        'fn',
        'withContext',
        'setContext',
        'mergeContext',
      ]);
      for (const key of Object.getOwnPropertyNames(original)) {
        if (skipKeys.has(key)) {
          continue;
        }
        const value = (original as any)[key];
        if (callbackModifiers.has(key)) {
          patched[key] = patchTestFn(value);
        } else if (key === 'each' && typeof value === 'function') {
          // `it.each(cases)` returns a registrar with the (name, fn) signature.
          patched[key] = (...eachArgs: unknown[]) => patchTestFn(value(...eachArgs));
        } else {
          patched[key] = value;
        }
      }

      g[name] = patched;
    }
  }
}
