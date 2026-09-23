import { Component } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { UntypedFormControl } from '@angular/forms';
import {
  FIELD_TYPE_COMPONENTS,
  FORMLY_CONFIG,
  FORMLY_WRAPPERS,
  getParentHideOptional,
  maxDateFromDateRangePicker,
  maxDateToDateRangePicker,
  minDateFromDateRangePicker,
  minDateToDateRangePicker,
} from './formly.config';
import { sdsFieldWrapper, sdsGroupWrapper, sdsWrappers } from './sds-formly-options';
import { AbstractSdsFormly } from './sds-formly';

@Component({
  selector: 'sds-test-formly-field',
  template: '',
  standalone: false,
})
class ConcreteSdsFormlyComponent extends AbstractSdsFormly {}

describe('sam-formly core options and config', () => {
  describe('sds-formly-options', () => {
    it('should define sdsFieldWrapper correctly', () => {
      expect(sdsFieldWrapper).toEqual(['readonly', 'label', 'description', 'validation']);
    });

    it('should define sdsGroupWrapper correctly', () => {
      expect(sdsGroupWrapper).toEqual(['group']);
    });

    it('should combine wrappers into sdsWrappers', () => {
      expect(sdsWrappers).toEqual(['group', 'readonly', 'label', 'description', 'validation']);
    });
  });

  describe('FORMLY_CONFIG and wrappers', () => {
    it('should contain configured types and wrappers', () => {
      expect(FORMLY_CONFIG.types).toBeDefined();
      expect(FORMLY_CONFIG.types.length).toBeGreaterThan(0);
      expect(FORMLY_CONFIG.wrappers).toBeDefined();
      expect(FORMLY_CONFIG.wrappers.length).toBeGreaterThan(0);
    });

    it('should contain all required wrappers in FORMLY_WRAPPERS', () => {
      const wrapperNames = FORMLY_WRAPPERS.map((w: any) => w.name);
      expect(wrapperNames).toContain('form-field');
      expect(wrapperNames).toContain('accordionwrapper');
      expect(wrapperNames).toContain('filterwrapper');
      expect(wrapperNames).toContain('label');
      expect(wrapperNames).toContain('description');
      expect(wrapperNames).toContain('validation');
      expect(wrapperNames).toContain('group');
      expect(wrapperNames).toContain('readonly');
      expect(wrapperNames).toContain('tabs');
    });

    it('should export FIELD_TYPE_COMPONENTS array', () => {
      expect(Array.isArray(FIELD_TYPE_COMPONENTS)).toBe(true);
      expect(FIELD_TYPE_COMPONENTS.length).toBeGreaterThan(0);
    });
  });

  describe('date range helper functions in formly.config', () => {
    const parentMinDate = new Date('2024-01-01');
    const parentMaxDate = new Date('2024-12-31');

    describe('minDateToDateRangePicker', () => {
      it('should return null when neither parent minDate nor model.fromDate is provided', () => {
        const field: FormlyFieldConfig = { parent: { props: {} } };
        expect(minDateToDateRangePicker(null, null, field)).toBeNull();
      });

      it('should return parent minDate when available and model has no fromDate', () => {
        const field: FormlyFieldConfig = { parent: { props: { minDate: parentMinDate } } };
        const result = minDateToDateRangePicker(null, null, field);
        expect(result).toEqual(parentMinDate);
      });

      it('should return model.fromDate when model contains fromDate', () => {
        const fromDate = new Date('2024-06-15');
        const field: FormlyFieldConfig = { parent: { props: { minDate: parentMinDate } } };
        const result = minDateToDateRangePicker({ fromDate }, null, field);
        expect(result).toEqual(fromDate);
      });
    });

    describe('minDateFromDateRangePicker', () => {
      it('should return null when parent minDate is not provided', () => {
        const field: FormlyFieldConfig = { parent: { props: {} } };
        expect(minDateFromDateRangePicker(null, null, field)).toBeNull();
      });

      it('should return parent minDate when provided', () => {
        const field: FormlyFieldConfig = { parent: { props: { minDate: parentMinDate } } };
        const result = minDateFromDateRangePicker(null, null, field);
        expect(result).toEqual(parentMinDate);
      });
    });

    describe('maxDateToDateRangePicker', () => {
      it('should return null when parent maxDate is not provided', () => {
        const field: FormlyFieldConfig = { parent: { props: {} } };
        expect(maxDateToDateRangePicker(null, null, field)).toBeNull();
      });

      it('should return parent maxDate when provided', () => {
        const field: FormlyFieldConfig = { parent: { props: { maxDate: parentMaxDate } } };
        const result = maxDateToDateRangePicker(null, null, field);
        expect(result).toEqual(parentMaxDate);
      });
    });

    describe('maxDateFromDateRangePicker', () => {
      it('should return null when neither parent maxDate nor model.toDate is provided', () => {
        const field: FormlyFieldConfig = { parent: { props: {} } };
        expect(maxDateFromDateRangePicker(null, null, field)).toBeNull();
      });

      it('should return parent maxDate when available and model has no toDate', () => {
        const field: FormlyFieldConfig = { parent: { props: { maxDate: parentMaxDate } } };
        const result = maxDateFromDateRangePicker(null, null, field);
        expect(result).toEqual(parentMaxDate);
      });

      it('should return model.toDate when model contains toDate', () => {
        const toDate = new Date('2024-08-20');
        const field: FormlyFieldConfig = { parent: { props: { maxDate: parentMaxDate } } };
        const result = maxDateFromDateRangePicker({ toDate }, null, field);
        expect(result).toEqual(toDate);
      });
    });

    describe('getParentHideOptional', () => {
      it('should return false if field parent is not provided', () => {
        const field: FormlyFieldConfig = {};
        expect(getParentHideOptional(null, null, field)).toBe(false);
      });

      it('should return false if field parent props is not provided', () => {
        const field: FormlyFieldConfig = { parent: {} as any };
        expect(getParentHideOptional(null, null, field)).toBe(false);
      });

      it('should return parent hideOptional value when configured', () => {
        const fieldTrue: FormlyFieldConfig = { parent: { props: { hideOptional: true } } };
        expect(getParentHideOptional(null, null, fieldTrue)).toBe(true);

        const fieldFalse: FormlyFieldConfig = { parent: { props: { hideOptional: false } } };
        expect(getParentHideOptional(null, null, fieldFalse)).toBe(false);
      });
    });
  });

  describe('AbstractSdsFormly', () => {
    it('should set properties on template from field props on ngOnInit', () => {
      const comp = new ConcreteSdsFormlyComponent();
      const templateTarget: any = { control: true };
      comp.template = templateTarget;
      comp.field = {
        props: {
          label: 'Custom Label',
          placeholder: 'Enter text',
          disabled: true,
        },
      } as any;
      const formControl = new UntypedFormControl('test-val');
      Object.defineProperty(comp, 'formControl', { value: formControl, writable: true });

      comp.ngOnInit();

      expect(templateTarget.label).toBe('Custom Label');
      expect(templateTarget.placeholder).toBe('Enter text');
      expect(templateTarget.disabled).toBe(true);
      expect(templateTarget.control).toBe(formControl);
    });

    it('should handle template without control property during setProperties', () => {
      const comp = new ConcreteSdsFormlyComponent();
      const templateTarget: any = {};
      comp.template = templateTarget;

      comp.setProperties(templateTarget, { customProp: 'hello' });

      expect(templateTarget.customProp).toBe('hello');
      expect(templateTarget.control).toBeUndefined();
    });
  });
});
