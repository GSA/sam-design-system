import { TestBed } from '@angular/core/testing';
import {
  getPopperClassPlacement,
  getBootstrapBaseClassPlacement,
  getPopperOptions,
  sdsPositioning,
  Placement,
} from './positioning';
import { addPopperOffset } from './positioning-util';
import { NgbRTL } from './rtl';

describe('positioning utilities', () => {
  let rtlService: NgbRTL;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    rtlService = TestBed.inject(NgbRTL);
  });

  describe('getPopperClassPlacement', () => {
    it('should return LTR placements when isRTL is false', () => {
      expect(getPopperClassPlacement('top', false)).toBe('top');
      expect(getPopperClassPlacement('bottom', false)).toBe('bottom');
      expect(getPopperClassPlacement('start', false)).toBe('left');
      expect(getPopperClassPlacement('end', false)).toBe('right');
      expect(getPopperClassPlacement('left', false)).toBe('left');
      expect(getPopperClassPlacement('right', false)).toBe('right');
      expect(getPopperClassPlacement('top-start', false)).toBe('top-start');
      expect(getPopperClassPlacement('top-end', false)).toBe('top-end');
      expect(getPopperClassPlacement('bottom-start', false)).toBe('bottom-start');
      expect(getPopperClassPlacement('bottom-end', false)).toBe('bottom-end');
      expect(getPopperClassPlacement('start-top', false)).toBe('left-start');
      expect(getPopperClassPlacement('end-bottom', false)).toBe('right-end');
    });

    it('should return RTL placements when isRTL is true', () => {
      expect(getPopperClassPlacement('start', true)).toBe('right');
      expect(getPopperClassPlacement('end', true)).toBe('left');
      expect(getPopperClassPlacement('top-start', true)).toBe('top-end');
      expect(getPopperClassPlacement('top-end', true)).toBe('top-start');
      expect(getPopperClassPlacement('bottom-start', true)).toBe('bottom-end');
      expect(getPopperClassPlacement('bottom-end', true)).toBe('bottom-start');
      expect(getPopperClassPlacement('start-top', true)).toBe('right-start');
      expect(getPopperClassPlacement('end-bottom', true)).toBe('left-end');
      // When rightClass is undefined, fallback to leftClass
      expect(getPopperClassPlacement('top', true)).toBe('top');
    });
  });

  describe('getBootstrapBaseClassPlacement', () => {
    it('should format placement without baseClass', () => {
      expect(getBootstrapBaseClassPlacement('', 'top')).toBe('top');
      expect(getBootstrapBaseClassPlacement('', 'left-start')).toBe('start start-top');
      expect(getBootstrapBaseClassPlacement('', 'right-end')).toBe('end end-bottom');
      expect(getBootstrapBaseClassPlacement('', 'top-start')).toBe('top top-start');
    });

    it('should format placement with baseClass', () => {
      expect(getBootstrapBaseClassPlacement('bs-popover', 'top')).toBe('bs-popover-top');
      expect(getBootstrapBaseClassPlacement('bs-tooltip', 'left-start')).toBe('bs-tooltip-start bs-tooltip-start-top');
      expect(getBootstrapBaseClassPlacement('bs-dropdown', 'right-end')).toBe('bs-dropdown-end bs-dropdown-end-bottom');
    });
  });

  describe('getPopperOptions', () => {
    let host: HTMLElement;
    let target: HTMLElement;

    beforeEach(() => {
      host = document.createElement('div');
      target = document.createElement('div');
      document.body.appendChild(host);
      document.body.appendChild(target);
    });

    afterEach(() => {
      host.remove();
      target.remove();
    });

    it('should build options for a single string placement', () => {
      const options = getPopperOptions(
        { hostElement: host, targetElement: target, placement: 'top', baseClass: 'bs-popover' },
        rtlService,
      );

      expect(options.placement).toBe('top');
      expect(options.modifiers?.length).toBeGreaterThan(0);
    });

    it('should build options for an array of placements', () => {
      const options = getPopperOptions(
        {
          hostElement: host,
          targetElement: target,
          placement: ['bottom', 'top'] as Placement[],
        },
        rtlService,
      );

      expect(options.placement).toBe('bottom');
    });

    it('should expand auto placement into available placements', () => {
      const options = getPopperOptions(
        {
          hostElement: host,
          targetElement: target,
          placement: 'auto',
        },
        rtlService,
      );

      expect(options.placement).toBe('top');
      const flipMod = options.modifiers?.find((m: any) => m.name === 'flip' && m.options?.fallbackPlacements);
      expect((flipMod as any)?.options?.fallbackPlacements?.length).toBeGreaterThan(0);
    });

    it('should execute bootstrapClasses modifier fn and update classes on popper element', () => {
      const options = getPopperOptions(
        {
          hostElement: host,
          targetElement: target,
          placement: 'top',
          baseClass: 'bs-popover',
        },
        rtlService,
      );

      const bsModifier = options.modifiers?.find((m) => m.name === 'bootstrapClasses');
      expect(bsModifier).toBeDefined();
      expect(bsModifier?.enabled).toBe(true);

      const popperEl = document.createElement('div');
      popperEl.className = 'existing-class bs-popover-bottom   extra-spaces';

      const fakeState: any = {
        elements: { popper: popperEl },
        placement: 'top-start',
      };

      (bsModifier as any).fn({ state: fakeState });

      expect(popperEl.className).toContain('existing-class');
      expect(popperEl.className).toContain('bs-popover-top');
      expect(popperEl.className).toContain('bs-popover-top-start');
      expect(popperEl.className).not.toContain('bs-popover-bottom');
    });

    it('should execute custom preventOverflow modifier fn without error', () => {
      const options = getPopperOptions({ hostElement: host, targetElement: target, placement: 'top' }, rtlService);

      const customOverflow = options.modifiers?.filter((m: any) => m.name === 'preventOverflow')[1];
      expect(customOverflow).toBeDefined();
      expect(() => (customOverflow as any).fn()).not.toThrow();
    });
  });

  describe('sdsPositioning', () => {
    let host: HTMLElement;
    let target: HTMLElement;

    beforeEach(() => {
      host = document.createElement('div');
      target = document.createElement('div');
      document.body.appendChild(host);
      document.body.appendChild(target);
    });

    afterEach(() => {
      host.remove();
      target.remove();
    });

    it('should manage popper lifecycle', () => {
      TestBed.runInInjectionContext(() => {
        const positioning = sdsPositioning();

        // Safe to call before createPopper
        expect(() => positioning.update()).not.toThrow();
        expect(() => positioning.destroy()).not.toThrow();
        expect(() =>
          positioning.setOptions({
            hostElement: host,
            targetElement: target,
            placement: 'top',
          }),
        ).not.toThrow();

        // Create popper
        positioning.createPopper({
          hostElement: host,
          targetElement: target,
          placement: 'bottom',
          baseClass: 'bs-popover',
        });

        // Calling createPopper again should be a noop
        expect(() =>
          positioning.createPopper({
            hostElement: host,
            targetElement: target,
            placement: 'bottom',
          }),
        ).not.toThrow();

        // Update and setOptions
        expect(() => positioning.update()).not.toThrow();

        const updateOptionsSpy = vi.fn((opt) => opt);
        expect(() =>
          positioning.setOptions({
            hostElement: host,
            targetElement: target,
            placement: 'top',
            updatePopperOptions: updateOptionsSpy,
          }),
        ).not.toThrow();
        expect(updateOptionsSpy).toHaveBeenCalled();

        // Destroy
        positioning.destroy();
        // Safe to call destroy again
        expect(() => positioning.destroy()).not.toThrow();
      });
    });

    it('should apply custom updatePopperOptions on creation', () => {
      TestBed.runInInjectionContext(() => {
        const positioning = sdsPositioning();
        const customSpy = vi.fn((opt) => opt);

        positioning.createPopper({
          hostElement: host,
          targetElement: target,
          placement: 'top',
          updatePopperOptions: customSpy,
        });

        expect(customSpy).toHaveBeenCalled();
        positioning.destroy();
      });
    });
  });

  describe('addPopperOffset', () => {
    it('should add offset modifier to options', () => {
      const modifierFn = addPopperOffset([10, 20]);
      const initialOptions = { modifiers: [] };
      const result = modifierFn(initialOptions as any);

      const offsetMods: any[] = result.modifiers?.filter((m: any) => m.name === 'offset') || [];
      expect(offsetMods.length).toBe(2);
      expect(offsetMods[1].options.offset()).toEqual([10, 20]);
    });
  });
});
