import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TestBed, ComponentFixture, fakeAsync, tick, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { Component, ViewChild } from '@angular/core';
import { UntypedFormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule, FormlyForm } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { FormlyFieldCheckboxComponent } from './checkbox';
import { of as observableOf } from 'rxjs';

const createTestComponent = (html: string) =>
  createGenericTestComponent(html, TestComponent) as ComponentFixture<TestComponent>;

export function createGenericTestComponent<T>(html: string, type: { new (...args: any[]): T }): ComponentFixture<T> {
  TestBed.overrideComponent(type, { set: { template: html } });
  const fixture = TestBed.createComponent(type);
  fixture.detectChanges();
  return fixture as ComponentFixture<T>;
}

let testComponentInputs;

describe('Formly Field checkbox Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, FormlyFieldCheckboxComponent],
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        FormlySelectModule,
        FormlyModule.forRoot({
          types: [
            {
              name: 'checkbox',
              component: FormlyFieldCheckboxComponent,
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

    it('should correctly bind to a static array of data', () => {
      testComponentInputs.fields = [
        {
          key: 'textcheckbox',
          type: 'checkbox',
          templateOptions: {
            label: 'Formly Checkbox',
            option: { label: 'Option A', value: 'a' },
          },
        },
      ];

      const fixture = createTestComponent(
          '<formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>'
        ),
        trigger = fixture.nativeElement.querySelector('usa-checkbox');
      const expectedValue = fixture.debugElement.query(By.css('.usa-checkbox')).componentInstance.field.templateOptions
        .option.value;

      fixture.detectChanges();
      expect(expectedValue).toBe('a');
    });
  });
});

@Component({ selector: 'formly-form-test', template: '' })
class TestComponent {
  @ViewChild(FormlyForm, { static: false }) formlyForm: FormlyForm;

  fields = testComponentInputs.fields;
  form: UntypedFormGroup = testComponentInputs.form;
  model = testComponentInputs.model || {};
  options = testComponentInputs.options;
}
