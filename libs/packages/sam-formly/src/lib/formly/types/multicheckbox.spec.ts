import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  TestBed,
  ComponentFixture,

} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Component, ViewChild, DebugElement } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule, FormlyForm } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { FormlyFieldMultiCheckboxComponent } from './multicheckbox';
import { SdsCollapseModule } from '@gsa-sam/components';

const createTestComponent = (html: string) =>
  createGenericTestComponent(html, TestComponent) as ComponentFixture<
    TestComponent
  >;

export function createGenericTestComponent<T>(
  html: string,
  type: { new(...args: any[]): T }
): ComponentFixture<T> {
  TestBed.overrideComponent(type, { set: { template: html } });
  const fixture = TestBed.createComponent(type);
  fixture.detectChanges();
  return fixture as ComponentFixture<T>;
}

let testComponentInputs;

describe('Formly Field multicheckbox Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, FormlyFieldMultiCheckboxComponent],
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        FormlySelectModule,
        SdsCollapseModule,
        FontAwesomeModule,
        FormlyModule.forRoot({
          types: [
            {
              name: 'multicheckbox',
              component: FormlyFieldMultiCheckboxComponent
            }
          ]
        })
      ]
    });
  });

  describe('options', () => {
    beforeEach(() => {
      testComponentInputs = {
        form: new FormGroup({}),
        options: {},
        model: {}
      };
    });

    it('should bind to a static array of data', () => {
      testComponentInputs.fields = [
        {
          key: 'multi-checkbox',
          type: 'multicheckbox',
          templateOptions: {
            label: 'Formly multi Select checkbox',
            options: [
              {
                key: 'sports',
                value: 'Sports'
              },
              {
                key: 'movies',
                value: 'Movies'
              },
              {
                key: 'others',
                value: 'Others'
              }
            ]
          }
        }
      ];

      const fixture = createTestComponent(
        '<formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>'
      ),
        trigger = fixture.nativeElement.querySelector('usa-fieldset');
      const expectedValue = fixture.debugElement.query(By.css('.usa-fieldset'))
        .componentInstance.field;
      fixture.detectChanges();
      expect(expectedValue.templateOptions.options.length).toBe(3);
    });

    it('on change with selectAllOption enabled', () => {
      testComponentInputs.fields = [
        {
          key: 'multi-checkbox',
          type: 'multicheckbox',
          templateOptions: {
            label: 'Formly multi Select checkbox',
            type: 'array',
            options: [
              {
                key: 'sports',
                value: 'Sports'
              },
              {
                key: 'movies',
                value: 'Movies'
              },
              {
                key: 'others',
                value: 'Others'
              }
            ]
          }
        }
      ];

      const fixture = createTestComponent(
        '<formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>'
      ),
        trigger = fixture.nativeElement.querySelector('usa-fieldset');
      const expectedValue = fixture.debugElement.query(By.css('.usa-fieldset'))
        .componentInstance.field;
      fixture.detectChanges();
      const checkboxes = fixture.debugElement.queryAll(
        By.css('.usa-checkbox__input')
      ) as DebugElement[];

      checkboxes[0].nativeElement.click();
      checkboxes[0].nativeElement.dispatchEvent(new Event('click'));
      checkboxes[0].nativeElement.click();
      checkboxes[0].nativeElement.dispatchEvent(new Event('click'));
    });

    it('should check the select all when option is seleceted', () => {
      testComponentInputs.fields = [
        {
          key: 'multi-checkbox',
          type: 'multicheckbox',
          templateOptions: {
            label: 'Formly multi Select checkbox',
            selectAllOption: true,
            options: [
              {
                key: 'sports',
                value: 'Sports'
              },
              {
                key: 'movies',
                value: 'Movies'
              },
              {
                key: 'others',
                value: 'Others'
              }
            ]
          }
        }
      ];

      const fixture = createTestComponent(
        '<formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>'
      ),
        trigger = fixture.nativeElement.querySelector('usa-fieldset');
      const expectedValue = fixture.debugElement.query(By.css('.usa-fieldset'))
        .componentInstance.field;
      fixture.detectChanges();
      const checkboxes = fixture.debugElement.queryAll(
        By.css('.usa-checkbox__input')
      ) as DebugElement[];
      const labels = fixture.debugElement.queryAll(
        By.css('.usa-checkbox__label')
      ) as DebugElement[];
      checkboxes[1].nativeElement.click();
      checkboxes[1].nativeElement.dispatchEvent(new Event('click'));
      fixture.detectChanges();
      expect(labels[0].nativeElement.getAttribute('aria-checked')).toBe(
        'mixed'
      );
    });

    it('on change group check', () => {
      testComponentInputs.fields = [
        {
          key: 'multi-checkbox',
          type: 'multicheckbox',
          templateOptions: {
            label: 'Formly multi Select checkbox',
            selectAllOption: true,
            options: [
              {
                key: 'sports',
                value: 'Sports'
              },
              {
                key: 'movies',
                value: 'Movies'
              },
              {
                key: 'others',
                value: 'Others'
              }
            ]
          }
        }
      ];

      const fixture = createTestComponent(
        '<formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>'
      ),
        trigger = fixture.nativeElement.querySelector('usa-fieldset');
      const expectedValue = fixture.debugElement.query(By.css('.usa-fieldset'))
        .componentInstance.field;
      fixture.detectChanges();
      const checkboxes = fixture.debugElement.queryAll(
        By.css('.usa-checkbox__input')
      ) as DebugElement[];

      checkboxes[0].nativeElement.click();
      checkboxes[0].nativeElement.dispatchEvent(new Event('click'));
      fixture.detectChanges();
      expect(checkboxes[1].nativeElement.checked).toBe(true);
      expect(checkboxes[2].nativeElement.checked).toBe(true);
      expect(checkboxes[3].nativeElement.checked).toBe(true);
    });
  });
});

@Component({
  selector: 'formly-form-multicheckbox',
  template: '',
  entryComponents: []
})
class TestComponent {
  @ViewChild(FormlyForm, { static: false }) formlyForm: FormlyForm;

  fields = testComponentInputs.fields;
  form: FormGroup = testComponentInputs.form;
  model = testComponentInputs.model || {};
  options = testComponentInputs.options;
}
