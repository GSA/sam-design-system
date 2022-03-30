import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule, FormsModule, FormGroup } from "@angular/forms";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { SdsRichTextModule } from '@gsa-sam/components';
import { FormlyForm, FormlyModule } from "@ngx-formly/core";
import { FormlyFieldRichTextEditorComponent } from "./rich-text";

const createTestComponent = (html: string) =>
  createGenericTestComponent(html, TestComponent) as ComponentFixture<TestComponent>;

export function createGenericTestComponent<T>(html: string, type: { new(...args: any[]): T }): ComponentFixture<T> {
  TestBed.overrideComponent(type, { set: { template: html } });
  const fixture = TestBed.createComponent(type);
  fixture.detectChanges();
  return fixture as ComponentFixture<T>;
}

let testRTEComponent;

describe('Formly Field Rich Text Editor Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, FormlyFieldRichTextEditorComponent],
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        SdsRichTextModule,
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
      testRTEComponent = {
        form: new FormGroup({}),
        options: {},
        model: {},
      };
    })

    it('should render editor in component', () => {
      testRTEComponent.fields = [
        {
          key: 'editor',
          type: 'rich-text',

          modelOptions: {
            updateOn: 'change',
          }
        },
      ];
      const fixture = createTestComponent('<formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>'),
      trigger = fixture.debugElement.nativeElement.querySelector('ckeditor')


      fixture.detectChanges()
      expect(trigger).toBeTruthy();
    });
    it('template options should apply expected classes', () => {
      testRTEComponent.fields = [
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


      fixture.detectChanges()
      expect(trigger.classList).toContain('min-height-10');
      expect(trigger.classList).toContain('max-height-31');
    });
  })




})

@Component({ selector: 'formly-form-test', template: '', entryComponents: [] })
class TestComponent {
  @ViewChild(FormlyForm, { static: false }) formlyForm: FormlyForm;

  fields = testRTEComponent.fields;
  form: FormGroup = testRTEComponent.form;
  model = testRTEComponent.model || {};
  options = testRTEComponent.options;
}
