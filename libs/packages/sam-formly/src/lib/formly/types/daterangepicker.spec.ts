import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { Component, ViewChild } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule, FormlyForm } from '@ngx-formly/core';

import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { FormlyFieldDateRangePickerComponent } from './daterangepicker';
import { dateRangeValidator } from '../formly.validators';
import { TypeOption } from '@ngx-formly/core/lib/services/formly.config';

const createTestComponent = (html: string) =>
  createGenericTestComponent(html, TestComponent) as ComponentFixture<TestComponent>;

export function createGenericTestComponent<T>(html: string, type: { new(...args: any[]): T }): ComponentFixture<T> {
  TestBed.overrideComponent(type, { set: { template: html } });
  const fixture = TestBed.createComponent(type);
  fixture.detectChanges();
  return fixture as ComponentFixture<T>;
}


let testComponentInputs;

let dateRangePickerType: TypeOption = {
  name: 'daterangepickerv2',
  component: FormlyFieldDateRangePickerComponent,
  defaultOptions: {
    validators: {
      validation: [dateRangeValidator]
    },
    fieldGroup: [
      {
        key: 'fromDate',
        templateOptions: {
          placeholder: 'Start Date',
        },
      },
      {
        key: 'toDate',
        templateOptions: {
          placeholder: 'End Date',
        },
      }
    ]
  }
};

describe('Formly Field DateRangePicker Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, FormlyFieldDateRangePickerComponent],
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatInputModule,
        FormlyModule.forRoot({
          types: [dateRangePickerType],
        }),
      ],
    });

    testComponentInputs = {
      form: new FormGroup({}),
      options: {},
      model: {
        expirationDate: {
          fromDate: {},
          toDate: {}
        }
      },
      fields: [{
        key: 'expirationDate',
        type: 'daterangepickerv2',
        templateOptions: {
          label: 'Expiration Date',
          startDate: new Date(2019, 11, 25),
          minDate: new Date(2019, 8, 15),
          maxDate: new Date(2020, 0, 1)
        }
      }],
    };
  });

  it('should open date picker and select value', () => {

    const fixture = createTestComponent('<formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>');
    //Checks created
    expect(fixture).toBeTruthy();

    //Clicks open date modal
    let dateOpen = fixture.nativeElement.querySelector('.mat-icon-button');
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

  it ('Should display validation error if date is below minimum date', () => {
    testComponentInputs.fields[0].templateOptions.minDate = new Date(2019, 8, 15);

    const fixture = createTestComponent('<formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>');
    //Checks created
    expect(fixture).toBeTruthy();

    const expirationDateControl = testComponentInputs.form.get('expirationDate')
    expirationDateControl.get('fromDate').setValue(new Date(2019, 8, 14));
    expirationDateControl.get('toDate').setValue(new Date(2019, 10, 14));
    testComponentInputs.form.markAsDirty();
    fixture.detectChanges();

    expect(expirationDateControl.hasError('matDatepickerMin')).toBeTruthy();
  });

  it ('Should display validation error if date is above maximum date', () => {
    testComponentInputs.fields[0].templateOptions.maxDate = new Date(2020, 0, 1);

    const fixture = createTestComponent('<formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>');
    //Checks created
    expect(fixture).toBeTruthy();

    const expirationDateControl = testComponentInputs.form.get('expirationDate')
    expirationDateControl.get('fromDate').setValue(new Date(2019, 8, 15));
    expirationDateControl.get('toDate').setValue(new Date(2022, 10, 14));
    testComponentInputs.form.markAsDirty();
    fixture.detectChanges();

    expect(expirationDateControl.hasError('matDatepickerMax')).toBeTruthy();
  });

  it ('Should display validation error if date is invalid range', () => {
    const fixture = createTestComponent('<formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>');
    //Checks created
    expect(fixture).toBeTruthy();

    const expirationDateControl = testComponentInputs.form.get('expirationDate')
    expirationDateControl.get('fromDate').setValue(new Date(2019, 10, 15));
    expirationDateControl.get('toDate').setValue(new Date(2019, 10, 14));
    testComponentInputs.form.markAsDirty();
    fixture.detectChanges();

    expect(expirationDateControl.hasError('matStartDateInvalid')).toBeTruthy();
  });
});

@Component({ selector: 'formly-form-test', template: '', entryComponents: [] })
class TestComponent {
  @ViewChild(FormlyForm, { static: false }) formlyForm: FormlyForm;

  fields = testComponentInputs.fields;
  form: FormGroup = testComponentInputs.form;
  model = testComponentInputs.model || {};
  options = testComponentInputs.options;
}