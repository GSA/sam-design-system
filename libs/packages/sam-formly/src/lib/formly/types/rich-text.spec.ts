import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule, FormsModule, FormGroup } from "@angular/forms";
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { FormlyForm, FormlyModule } from "@ngx-formly/core";
import { FormlySelectModule } from "@ngx-formly/core/select";
import { FormlyFieldRichTextEditorComponent } from "./rich-text";

const createTestComponent = (html: string) =>
  createGenericTestComponent(html, TestComponent) as ComponentFixture<TestComponent>;

export function createGenericTestComponent<T>(html: string, type: { new(...args: any[]): T }): ComponentFixture<T> {
  TestBed.overrideComponent(type, { set: { template: html } });
  const fixture = TestBed.createComponent(type);
  fixture.detectChanges();
  return fixture as ComponentFixture<T>;
}

let testComponentInputs;

@Component({ selector: 'formly-form-test', template: '', entryComponents: [] })
class TestComponent {
  @ViewChild(FormlyForm, { static: false }) formlyForm: FormlyForm;

  fields = testComponentInputs.fields;
  form: FormGroup = testComponentInputs.form;
  model = testComponentInputs.model || {};
  options = testComponentInputs.options;
}

describe('Formly Field Rich Text Editor Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, FormlyFieldRichTextEditorComponent],
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        FormlySelectModule,
        FormsModule,
        FormlyModule.forRoot({
          types: [
            {
              name: 'rich-text',
              component: FormlyFieldRichTextEditorComponent,
            },
          ],
        }),
      ],
    });
  });

  describe('', () => {
    beforeEach(() => {
      testComponentInputs = {
        form: new FormGroup({}),
        options: {},
        model: {},
      };
    })

    fit('should render editor in component', () => {
      testComponentInputs.fields = [
        {
          key: 'editor',
          type: 'rich-text',
          templateOptions: {
            minHeight: 10,
            maxHeight: 31
          },

          modelOptions: {
            updateOn: 'change',
          }
        },
      ];
      const fixture = createTestComponent('<formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>'),
      trigger = fixture.debugElement.nativeElement.querySelector('ckeditor')


      fixture.detectChanges();
      const expectedValue = fixture.debugElement.query(By.css('.usa-radio')).componentInstance.field;

      expect(expectedValue.templateOptions.options.length).toEqual(4);
    });
    it('editor should be hooked into formly model', () => {});
  })




})
