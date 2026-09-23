import { Component as StubComponent, Input } from '@angular/core';

@StubComponent({
  selector: 'usa-icon',
  template: '',
  standalone: false,
})
class UsaIconStubComponent {
  @Input() icon = '';
  @Input() size = 'lg';
  @Input() rotate = 0;
  @Input() classes?: string[];
  @Input() skew?: any;
}
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { Component, ViewChild } from '@angular/core';
import { UntypedFormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormlyModule, FormlyForm } from '@ngx-formly/core';

import { FormlyFieldDatePickerComponent } from './datepicker';
import { FormlyValidationWrapperComponent } from '../wrappers/validation.wrapper';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';

const createTestComponent = (html: string) =>
  createGenericTestComponent(html, TestComponent) as ComponentFixture<TestComponent>;

export function createGenericTestComponent<T>(html: string, type: { new (...args: any[]): T }): ComponentFixture<T> {
  TestBed.overrideComponent(type, { set: { template: html } });
  const fixture = TestBed.createComponent(type);
  fixture.detectChanges();
  return fixture as ComponentFixture<T>;
}

let testComponentInputs: any;

describe('Formly Field Datepicker Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        FormlyFieldDatePickerComponent,
        FormlyValidationWrapperComponent,
        UsaIconStubComponent,
      ],
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatInputModule,

        FormlyModule.forRoot({
          types: [
            {
              name: 'datepicker',
              component: FormlyFieldDatePickerComponent,
              wrappers: ['validation'],
            },
          ],
          wrappers: [
            {
              name: 'validation',
              component: FormlyValidationWrapperComponent,
            },
          ],
        }),
      ],
    });
  });

  describe('options', () => {
    beforeEach(() => {
      testComponentInputs = {
        form: new UntypedFormGroup({}),
        options: {},
        model: {},
      };
    });

    it('should open date picker and select value', () => {
      testComponentInputs.fields = [
        {
          key: 'entityDate',
          type: 'datepicker',
          props: {
            label: 'Expiration Date',
            startDate: new Date(2019, 11, 25),
            minDate: new Date(2019, 8, 15),
            maxDate: new Date(2020, 0, 1),
          },
        },
      ];

      const fixture = createTestComponent(
        '<formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>',
      );
      //Checks created
      expect(fixture).toBeTruthy();

      //Clicks open date modal
      let dateOpen = fixture.nativeElement.querySelector('.mdc-icon-button');
      dateOpen.click();
      fixture.detectChanges();

      //Selects start date
      let dateButton = <HTMLButtonElement>document.querySelector('.mat-calendar-body-active');
      dateButton.click();
      fixture.detectChanges();
      //Check the start the date is the selected date
      expect(testComponentInputs.model.entityDate).toEqual(new Date(2019, 11, 25));
    });

    it('should call props.change callback on input change events', () => {
      const changeSpy = vi.fn();
      testComponentInputs.fields = [
        {
          key: 'entityDate',
          type: 'datepicker',
          props: {
            label: 'Expiration Date',
            change: changeSpy,
          },
        },
      ];

      const fixture = createTestComponent(
        '<formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>',
      );
      fixture.detectChanges();

      const inputEl = fixture.nativeElement.querySelector('input.usa-input');
      inputEl.value = '12/25/2020';
      inputEl.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      expect(changeSpy).toHaveBeenCalled();
    });

    it('should bind disabled state correctly to input element', () => {
      testComponentInputs.fields = [
        {
          key: 'entityDate',
          type: 'datepicker',
          props: {
            label: 'Expiration Date',
          },
        },
      ];

      const fixture = createTestComponent(
        '<formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>',
      );
      fixture.detectChanges();

      const inputEl = fixture.nativeElement.querySelector('input.usa-input');
      expect(inputEl.disabled).toBe(false);

      testComponentInputs.form.get('entityDate').disable();
      fixture.detectChanges();
      expect(inputEl.disabled).toBe(true);

      testComponentInputs.form.get('entityDate').enable();
      fixture.detectChanges();
      expect(inputEl.disabled).toBe(false);
    });

    it('should render error state class and validation message when invalid and touched', () => {
      testComponentInputs.model = { entityDate: null };
      testComponentInputs.fields = [
        {
          key: 'entityDate',
          type: 'datepicker',
          validators: {
            validation: [Validators.required],
          },
          props: {
            label: 'Expiration Date',
          },
        },
      ];

      const fixture = createTestComponent(
        '<formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>',
      );
      fixture.detectChanges();

      const inputEl = fixture.nativeElement.querySelector('input.usa-input');
      const control = testComponentInputs.form.get('entityDate');

      expect(control.invalid).toBe(true);
      expect(inputEl.classList.contains('usa-input--error')).toBe(false);
      expect(fixture.nativeElement.querySelector('.usa-error-message')).toBeNull();

      control.markAsTouched();
      fixture.detectChanges();

      expect(inputEl.classList.contains('usa-input--error')).toBe(true);
      expect(fixture.nativeElement.querySelector('.usa-error-message')).not.toBeNull();

      control.setValue(new Date(2022, 5, 15));
      fixture.detectChanges();

      expect(inputEl.classList.contains('usa-input--error')).toBe(false);
      expect(fixture.nativeElement.querySelector('.usa-error-message')).toBeNull();
    });

    it('should set placeholder and aria-describedby attributes when configured', () => {
      testComponentInputs.fields = [
        {
          key: 'entityDate',
          type: 'datepicker',
          id: 'custom-datepicker-id',
          props: {
            label: 'Expiration Date',
            placeholder: 'YYYY-MM-DD',
            description: 'Enter expiration date',
          },
        },
      ];

      const fixture = createTestComponent(
        '<formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>',
      );
      fixture.detectChanges();

      const inputEl = fixture.nativeElement.querySelector('input.usa-input');
      expect(inputEl.getAttribute('placeholder')).toBe('YYYY-MM-DD');
      expect(inputEl.getAttribute('aria-describedby')).toBe('custom-datepicker-id-description');
    });

    it('should default placeholder to empty string and aria-describedby to undefined when omitted', () => {
      testComponentInputs.fields = [
        {
          key: 'entityDate',
          type: 'datepicker',
          id: 'custom-datepicker-id-2',
          props: {
            label: 'Expiration Date',
          },
        },
      ];

      const fixture = createTestComponent(
        '<formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>',
      );
      fixture.detectChanges();

      const inputEl = fixture.nativeElement.querySelector('input.usa-input');
      expect(inputEl.placeholder).toBe('');
      expect(inputEl.getAttribute('aria-describedby')).toBeNull();
    });
  });
});

@Component({
  selector: 'formly-form-test',
  template: '',
  standalone: false,
})
class TestComponent {
  @ViewChild(FormlyForm, { static: false }) formlyForm: FormlyForm;

  get fields() {
    return testComponentInputs.fields;
  }
  get form() {
    return testComponentInputs.form;
  }
  get model() {
    return testComponentInputs.model || {};
  }
  get options() {
    return testComponentInputs.options;
  }
}
