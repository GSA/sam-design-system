import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TestBed, ComponentFixture, async, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, ViewChild } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule, FormlyForm } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { FormlyFieldSelectComponent } from './select';
import { of as observableOf } from 'rxjs';

const createTestComponent = (html: string) =>
  createGenericTestComponent(html, TestComponent) as ComponentFixture<TestComponent>;

export function createGenericTestComponent<T>(html: string, type: { new(...args: any[]): T }): ComponentFixture<T> {
  TestBed.overrideComponent(type, { set: { template: html } });
  const fixture = TestBed.createComponent(type);
  fixture.detectChanges();
  return fixture as ComponentFixture<T>;
}

let testComponentInputs;

describe('Formly Field Select Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, FormlyFieldSelectComponent],
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        FormlySelectModule,
        FormlyModule.forRoot({
          types: [
            {
              name: 'select',
              component: FormlyFieldSelectComponent,
            },
          ],
        }),
      ],
    });
  });

  describe('options', () => {
    beforeEach(() => {
      testComponentInputs = {
        form: new FormGroup({}),
        options: {},
        model: {},
      };
    });

    it('should correctly bind to a static array of data', () => {
      testComponentInputs.fields = [{
        key: 'sportId',
        type: 'select',
        templateOptions: {
          options: [
            { id: '1', name: 'Soccer' },
            { id: '2', name: 'Basketball' },
            { id: { test: 'A' }, name: 'Not Soccer or Basketball' },
          ],
          valueProp: 'id',
          labelProp: 'name',
        },
      }];

      const fixture = createTestComponent('<formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>'),
        trigger = fixture.nativeElement.querySelector('usa-select')


      fixture.detectChanges();

      expect(fixture.debugElement.queryAll(By.css('option')).length).toEqual(3);
    });

    it('should correctly bind to an Observable', async(() => {
      const sports$ = observableOf([
        { id: '1', name: 'Soccer' },
        { id: '2', name: 'Basketball' },
        { id: { test: 'A' }, name: 'Not Soccer or Basketball' },
      ]);

      testComponentInputs.fields = [{
        key: 'sportId',
        type: 'select',
        templateOptions: {
          options: sports$,
          valueProp: 'id',
          labelProp: 'name',
        },
      }];

      const fixture = createTestComponent('<formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>'),
        trigger = fixture.debugElement.query(By.css('option')).nativeElement;


      fixture.detectChanges();

      expect(fixture.debugElement.queryAll(By.css('option')).length).toEqual(3);
    }));

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