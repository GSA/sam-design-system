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
import { UntypedFormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule, FormlyForm, ConfigOption } from '@ngx-formly/core';

import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule, MatStartDate, MatEndDate } from '@angular/material/datepicker';
import { FormlyFieldDateRangePickerComponent } from './daterangepicker';
import { FormlyValidationWrapperComponent } from '../wrappers/validation.wrapper';
import { dateRangeValidator } from '../formly.validators';
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

let dateRangePickerType: ConfigOption['types'][number] = {
  name: 'daterangepickerv2',
  component: FormlyFieldDateRangePickerComponent,
  wrappers: ['validation'],
  defaultOptions: {
    validators: {
      validation: [dateRangeValidator],
    },
    fieldGroup: [
      {
        key: 'fromDate',
        props: {
          placeholder: 'Start Date',
        },
      },
      {
        key: 'toDate',
        props: {
          placeholder: 'End Date',
        },
      },
    ],
  },
};

describe('Formly Field DateRangePicker Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        FormlyFieldDateRangePickerComponent,
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
          types: [dateRangePickerType],
          wrappers: [
            {
              name: 'validation',
              component: FormlyValidationWrapperComponent,
            },
          ],
        }),
      ],
    });

    testComponentInputs = {
      form: new UntypedFormGroup({}),
      options: {},
      model: {
        expirationDate: {
          fromDate: {},
          toDate: {},
        },
      },
      fields: [
        {
          key: 'expirationDate',
          type: 'daterangepickerv2',
          props: {
            label: 'Expiration Date',
            startDate: new Date(2019, 11, 25),
            minDate: new Date(2019, 8, 15),
            maxDate: new Date(2020, 0, 1),
          },
        },
      ],
    };
  });

  it('should open date picker and select value', () => {
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
    let dateButton = <NodeListOf<HTMLButtonElement>>document.querySelectorAll('.mat-calendar-body-cell');
    dateButton.item(24).click();
    dateButton.item(26).click();
    fixture.detectChanges();
    //Check the start the date is the selected date
    expect(testComponentInputs.model.expirationDate.fromDate).toEqual(new Date(2019, 11, 25));
    expect(testComponentInputs.model.expirationDate.toDate).toEqual(new Date(2019, 11, 27));
  });

  it('Should display validation error if date is below minimum date', () => {
    testComponentInputs.fields[0].props.minDate = new Date(2019, 8, 15);

    const fixture = createTestComponent(
      '<formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>',
    );
    //Checks created
    expect(fixture).toBeTruthy();

    const expirationDateControl = testComponentInputs.form.get('expirationDate');
    expirationDateControl.get('fromDate').setValue(new Date(2019, 8, 14));
    expirationDateControl.get('toDate').setValue(new Date(2019, 10, 14));
    testComponentInputs.form.markAsDirty();
    fixture.detectChanges();

    expect(expirationDateControl.hasError('matDatepickerMin')).toBeTruthy();
  });

  it('Should display validation error if date is above maximum date', () => {
    testComponentInputs.fields[0].props.maxDate = new Date(2020, 0, 1);

    const fixture = createTestComponent(
      '<formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>',
    );
    //Checks created
    expect(fixture).toBeTruthy();

    const expirationDateControl = testComponentInputs.form.get('expirationDate');
    expirationDateControl.get('fromDate').setValue(new Date(2019, 8, 15));
    expirationDateControl.get('toDate').setValue(new Date(2022, 10, 14));
    testComponentInputs.form.markAsDirty();
    fixture.detectChanges();

    expect(expirationDateControl.hasError('matDatepickerMax')).toBeTruthy();
  });

  it('Should display validation error if date is invalid range', () => {
    const fixture = createTestComponent(
      '<formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>',
    );
    //Checks created
    expect(fixture).toBeTruthy();

    const expirationDateControl = testComponentInputs.form.get('expirationDate');
    expirationDateControl.get('fromDate').setValue(new Date(2019, 10, 15));
    expirationDateControl.get('toDate').setValue(new Date(2019, 10, 14));
    testComponentInputs.form.markAsDirty();
    fixture.detectChanges();

    expect(expirationDateControl.hasError('matStartDateInvalid')).toBeTruthy();
  });

  it('should call change callbacks on start and end date input change events', () => {
    const fromChangeSpy = vi.fn();
    const toChangeSpy = vi.fn();

    testComponentInputs.fields = [
      {
        key: 'expirationDate',
        type: 'daterangepickerv2',
        props: {
          label: 'Expiration Date',
        },
        fieldGroup: [
          {
            key: 'fromDate',
            props: {
              placeholder: 'Start Date',
              change: fromChangeSpy,
            },
          },
          {
            key: 'toDate',
            props: {
              placeholder: 'End Date',
              change: toChangeSpy,
            },
          },
        ],
      },
    ];

    const fixture = createTestComponent(
      '<formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>',
    );
    fixture.detectChanges();

    const startInputDebug = fixture.debugElement.query(By.directive(MatStartDate));
    const endInputDebug = fixture.debugElement.query(By.directive(MatEndDate));
    const startDateDirective = startInputDebug.injector.get(MatStartDate);
    const endDateDirective = endInputDebug.injector.get(MatEndDate);

    startDateDirective.dateChange.emit({ value: new Date(2020, 9, 10) } as any);
    fixture.detectChanges();
    expect(fromChangeSpy).toHaveBeenCalled();

    endDateDirective.dateChange.emit({ value: new Date(2020, 9, 20) } as any);
    fixture.detectChanges();
    expect(toChangeSpy).toHaveBeenCalled();
  });

  it('should handle input change without change callback defined', () => {
    testComponentInputs.fields = [
      {
        key: 'expirationDate',
        type: 'daterangepickerv2',
        props: { label: 'Expiration Date' },
        fieldGroup: [
          { key: 'fromDate', props: {} },
          { key: 'toDate', props: {} },
        ],
      },
    ];

    const fixture = createTestComponent(
      '<formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>',
    );
    fixture.detectChanges();

    const startInputDebug = fixture.debugElement.query(By.directive(MatStartDate));
    const endInputDebug = fixture.debugElement.query(By.directive(MatEndDate));
    const startDateDirective = startInputDebug.injector.get(MatStartDate);
    const endDateDirective = endInputDebug.injector.get(MatEndDate);

    expect(() => {
      startDateDirective.dateChange.emit({ value: new Date(2020, 9, 10) } as any);
      endDateDirective.dateChange.emit({ value: new Date(2020, 9, 20) } as any);
      fixture.detectChanges();
    }).not.toThrow();

    expect(fixture).toBeTruthy();
  });

  it('should bind disabled state to child inputs', () => {
    const fixture = createTestComponent(
      '<formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>',
    );
    fixture.detectChanges();

    const inputs = fixture.nativeElement.querySelectorAll('mat-date-range-input input');
    expect(inputs[0].disabled).toBe(false);
    expect(inputs[1].disabled).toBe(false);

    testComponentInputs.form.get('expirationDate').disable();
    fixture.detectChanges();

    expect(inputs[0].disabled).toBe(true);
    expect(inputs[1].disabled).toBe(true);

    testComponentInputs.form.get('expirationDate').enable();
    fixture.detectChanges();

    expect(inputs[0].disabled).toBe(false);
    expect(inputs[1].disabled).toBe(false);
  });

  it('should render error state class when control is invalid and touched', () => {
    const fixture = createTestComponent(
      '<formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>',
    );
    fixture.detectChanges();

    const rangeInputEl = fixture.nativeElement.querySelector('mat-date-range-input');
    const expirationDateControl = testComponentInputs.form.get('expirationDate');

    expect(rangeInputEl.classList.contains('usa-input--error')).toBe(false);

    expirationDateControl.get('fromDate').setValue(new Date(2019, 10, 15));
    expirationDateControl.get('toDate').setValue(new Date(2019, 10, 14));
    expirationDateControl.markAsTouched();
    testComponentInputs.form.markAsDirty();
    fixture.detectChanges();

    expect(rangeInputEl.classList.contains('usa-input--error')).toBe(true);
  });

  it('should hide component when field.hide is true', () => {
    testComponentInputs.fields[0].hide = true;
    const fixture = createTestComponent(
      '<formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>',
    );
    fixture.detectChanges();

    const rangeInputEl = fixture.nativeElement.querySelector('mat-date-range-input');
    expect(rangeInputEl).toBeNull();
  });

  it('should use fallback aria-label and placeholder when not provided in fieldGroup', () => {
    testComponentInputs.fields = [
      {
        key: 'expirationDate',
        type: 'daterangepickerv2',
        props: {
          label: 'Expiration Date',
        },
        fieldGroup: [
          {
            key: 'fromDate',
            props: {},
          },
          {
            key: 'toDate',
            props: {},
          },
        ],
      },
    ];

    const fixture = createTestComponent(
      '<formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>',
    );
    fixture.detectChanges();

    const inputs = fixture.nativeElement.querySelectorAll('mat-date-range-input input');
    expect(inputs[0].getAttribute('aria-label')).toBe('Start Date');
    expect(inputs[0].getAttribute('placeholder')).toBe('mmm-dd-yyyy');
    expect(inputs[1].getAttribute('aria-label')).toBe('End Date');
    expect(inputs[1].getAttribute('placeholder')).toBe('mmm-dd-yyyy');
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
