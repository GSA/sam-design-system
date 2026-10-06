import { UntypedFormControl } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import {
  autocompleteRequired,
  dateRangeValidator,
  maxDateValidator,
  minDateValidator,
  multiCheckboxRequired,
} from './formly.validators';

describe('sam-formly custom validators', () => {
  describe('minDateValidator', () => {
    it('should return null if control has no value', () => {
      const control = new UntypedFormControl(null);
      const field: FormlyFieldConfig = { props: { minDate: new Date('2025-01-01') } };
      expect(minDateValidator(control, field)).toBeNull();
    });

    it('should return null if field props has no minDate', () => {
      const control = new UntypedFormControl(new Date('2025-01-01'));
      const field: FormlyFieldConfig = { props: {} };
      expect(minDateValidator(control, field)).toBeNull();
    });

    it('should return null if control value is not a Date instance', () => {
      const control = new UntypedFormControl('2025-01-01');
      const field: FormlyFieldConfig = { props: { minDate: new Date('2025-01-01') } };
      expect(minDateValidator(control, field)).toBeNull();
    });

    it('should return null if minDate prop is not a Date instance', () => {
      const control = new UntypedFormControl(new Date('2025-01-01'));
      const field: FormlyFieldConfig = { props: { minDate: '2025-01-01' as any } };
      expect(minDateValidator(control, field)).toBeNull();
    });

    it('should return null when value and minDate are normal Date instances', () => {
      const control = new UntypedFormControl(new Date('2025-06-01'));
      const field: FormlyFieldConfig = { props: { minDate: new Date('2025-01-01') } };
      expect(minDateValidator(control, field)).toBeNull();
    });

    it('should return null when value and minDate are equal', () => {
      const control = new UntypedFormControl(new Date('2025-01-01'));
      const field: FormlyFieldConfig = { props: { minDate: new Date('2025-01-01') } };
      expect(minDateValidator(control, field)).toBeNull();
    });

    it('should return minDate error when value is before minDate and maxDate is not set', () => {
      const control = new UntypedFormControl(new Date('2025-01-01'));
      const field: FormlyFieldConfig = { props: { minDate: new Date('2025-01-02') } };

      const result = minDateValidator(control, field);
      expect(result).toEqual({ minDate: true });
    });

    it('should return betweenDate error when value is before minDate and maxDate is set', () => {
      const control = new UntypedFormControl(new Date('2025-01-01'));
      const field: FormlyFieldConfig = {
        props: {
          minDate: new Date('2025-01-02'),
          maxDate: new Date('2025-12-31'),
        },
      };

      const result = minDateValidator(control, field);
      expect(result).toEqual({ betweenDate: true });
    });
  });

  describe('maxDateValidator', () => {
    it('should return null if control has no value', () => {
      const control = new UntypedFormControl(null);
      const field: FormlyFieldConfig = { props: { maxDate: new Date('2025-01-01') } };
      expect(maxDateValidator(control, field)).toBeNull();
    });

    it('should return null if field props has no maxDate', () => {
      const control = new UntypedFormControl(new Date('2025-01-01'));
      const field: FormlyFieldConfig = { props: {} };
      expect(maxDateValidator(control, field)).toBeNull();
    });

    it('should return null if control value is not a Date instance', () => {
      const control = new UntypedFormControl('2025-01-01');
      const field: FormlyFieldConfig = { props: { maxDate: new Date('2025-01-01') } };
      expect(maxDateValidator(control, field)).toBeNull();
    });

    it('should return null if maxDate prop is not a Date instance', () => {
      const control = new UntypedFormControl(new Date('2025-01-01'));
      const field: FormlyFieldConfig = { props: { maxDate: '2025-01-01' as any } };
      expect(maxDateValidator(control, field)).toBeNull();
    });

    it('should return null when value and maxDate are normal Date instances', () => {
      const control = new UntypedFormControl(new Date('2025-01-01'));
      const field: FormlyFieldConfig = { props: { maxDate: new Date('2025-06-01') } };
      expect(maxDateValidator(control, field)).toBeNull();
    });

    it('should return null when value and maxDate are equal', () => {
      const control = new UntypedFormControl(new Date('2025-06-01'));
      const field: FormlyFieldConfig = { props: { maxDate: new Date('2025-06-01') } };
      expect(maxDateValidator(control, field)).toBeNull();
    });

    it('should return maxDate error when value is after maxDate and minDate is not set', () => {
      const control = new UntypedFormControl(new Date('2025-06-01'));
      const field: FormlyFieldConfig = { props: { maxDate: new Date('2025-05-01') } };

      const result = maxDateValidator(control, field);
      expect(result).toEqual({ maxDate: true });
    });

    it('should return betweenDate error when value is after maxDate and minDate is set', () => {
      const control = new UntypedFormControl(new Date('2025-06-01'));
      const field: FormlyFieldConfig = {
        props: {
          maxDate: new Date('2025-05-01'),
          minDate: new Date('2025-01-01'),
        },
      };

      const result = maxDateValidator(control, field);
      expect(result).toEqual({ betweenDate: true });
    });
  });

  describe('autocompleteRequired', () => {
    it('should return null when control value is null or undefined', () => {
      expect(autocompleteRequired(new UntypedFormControl(null))).toBeNull();
      expect(autocompleteRequired(new UntypedFormControl(undefined))).toBeNull();
    });

    it('should return null when control value has no items or empty items', () => {
      expect(autocompleteRequired(new UntypedFormControl({}))).toBeNull();
      expect(autocompleteRequired(new UntypedFormControl({ items: null, length: 0 }))).toBeNull();
      expect(autocompleteRequired(new UntypedFormControl({ items: [], length: 0 }))).toBeNull();
    });

    it('should return null when control value has items but no length property', () => {
      expect(autocompleteRequired(new UntypedFormControl({ items: ['item1'] }))).toBeNull();
    });

    it('should return required error when control value has items and non-zero length', () => {
      const control = new UntypedFormControl({ items: ['item1'], length: 1 });
      expect(autocompleteRequired(control)).toEqual({ required: true });
    });
  });

  describe('multiCheckboxRequired', () => {
    it('should return required error when at least one key is true', () => {
      const control = new UntypedFormControl({ option1: true, option2: false });
      expect(multiCheckboxRequired(control)).toEqual({ required: true });
    });

    it('should return required error when multiple keys are true', () => {
      const control = new UntypedFormControl({ option1: true, option2: true });
      expect(multiCheckboxRequired(control)).toEqual({ required: true });
    });

    it('should return null when all keys are false', () => {
      const control = new UntypedFormControl({ option1: false, option2: false });
      expect(multiCheckboxRequired(control)).toBeNull();
    });

    it('should return null when value is empty object', () => {
      const control = new UntypedFormControl({});
      expect(multiCheckboxRequired(control)).toBeNull();
    });
  });

  describe('dateRangeValidator', () => {
    it('should return errors when field formControl itself is invalid and has errors', () => {
      const formControl = new UntypedFormControl('');
      formControl.setErrors({ required: true });
      const field: FormlyFieldConfig = {
        formControl,
        fieldGroup: [],
      };

      const result = dateRangeValidator(formControl, field);
      expect(result).toEqual({ required: true });
    });

    it('should return inner field errors when parent formControl is valid but inner field is invalid', () => {
      const parentControl = new UntypedFormControl('');
      const childControl1 = new UntypedFormControl('valid');
      const childControl2 = new UntypedFormControl('');
      childControl2.setErrors({ dateInvalid: true });

      const field: FormlyFieldConfig = {
        formControl: parentControl,
        fieldGroup: [
          {
            formControl: childControl1,
          },
          {
            formControl: childControl2,
          },
        ],
      };

      const result = dateRangeValidator(parentControl, field);
      expect(result).toEqual({ dateInvalid: true });
    });

    it('should return null when neither parent formControl nor inner field groups have errors', () => {
      const parentControl = new UntypedFormControl('');
      const childControl = new UntypedFormControl('valid');

      const field: FormlyFieldConfig = {
        formControl: parentControl,
        fieldGroup: [
          {
            formControl: childControl,
          },
        ],
      };

      const result = dateRangeValidator(parentControl, field);
      expect(result).toBeNull();
    });

    it('should return null when fieldGroup is empty and parent is valid', () => {
      const parentControl = new UntypedFormControl('');
      const field: FormlyFieldConfig = {
        formControl: parentControl,
        fieldGroup: [],
      };

      expect(dateRangeValidator(parentControl, field)).toBeNull();
    });
  });
});
