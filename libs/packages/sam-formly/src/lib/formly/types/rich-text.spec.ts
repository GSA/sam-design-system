import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule, UntypedFormGroup, Validators } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SdsRichTextModule } from '@gsa-sam/components';
import { FormlyForm, FormlyModule } from '@ngx-formly/core';
import { By } from '@angular/platform-browser';
import { FormlyFieldRichTextEditorComponent } from './rich-text';
import { FormlyValidationWrapperComponent } from '../wrappers/validation.wrapper';

const createTestComponent = (html: string) =>
  createGenericTestComponent(html, TestComponent) as ComponentFixture<TestComponent>;

export function createGenericTestComponent<T>(html: string, type: { new (...args: any[]): T }): ComponentFixture<T> {
  TestBed.overrideComponent(type, { set: { template: html } });
  const fixture = TestBed.createComponent(type);
  fixture.detectChanges();
  return fixture as ComponentFixture<T>;
}

let testRTEComponent: any;

describe('Formly Field Rich Text Editor Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, FormlyFieldRichTextEditorComponent, FormlyValidationWrapperComponent],
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

  describe('rich-text functionality', () => {
    beforeEach(() => {
      testRTEComponent = {
        form: new UntypedFormGroup({}),
        options: {},
        // Must supply a defined (string) value for the `editor` field. If it stays `undefined`,
        // CKEditorComponent#writeValue() (which only guards against `null`) stores it and later
        // hands it to DataController#set() once the async editor finishes initializing, which
        // calls Object.keys(undefined) and throws "Cannot convert undefined or null to object" —
        // asynchronously, so it can surface in a later spec or in `afterAll` and looks flaky.
        model: { editor: '' },
      };
    });

    it('should render editor in component', () => {
      testRTEComponent.fields = [
        {
          key: 'editor',
          type: 'rich-text',
          modelOptions: {
            updateOn: 'change',
          },
        },
      ];

      const fixture = createTestComponent(
        '<formly-form [form]="form" [fields]="fields" [model]="{editor:123}" [options]="options"></formly-form>',
      );
      const trigger = fixture.debugElement.nativeElement.querySelector('ckeditor');

      fixture.detectChanges();
      expect(trigger).toBeTruthy();
    });

    it('template options should apply expected classes', () => {
      testRTEComponent.fields = [
        {
          key: 'editor',
          type: 'rich-text',
          props: {
            minHeight: 10,
            maxHeight: 31,
          },
          modelOptions: {
            updateOn: 'change',
          },
        },
      ];
      const fixture = createTestComponent(
        '<formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>',
      );
      const trigger = fixture.debugElement.nativeElement.querySelector('ckeditor');

      fixture.detectChanges();
      expect(trigger.classList).toContain('min-height-10');
      expect(trigger.classList).toContain('max-height-31');
    });

    it('should bind placeholder and configuration properties to SdsRichTextComponent', () => {
      testRTEComponent.fields = [
        {
          key: 'editor',
          type: 'rich-text',
          props: {
            placeholder: 'Type something here...',
            minHeight: 15,
            maxHeight: 40,
          },
        },
      ];

      const fixture = createTestComponent(
        '<formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>',
      );
      fixture.detectChanges();

      const rteEl = fixture.debugElement.query(By.directive(FormlyFieldRichTextEditorComponent));
      const compInstance = rteEl.componentInstance as FormlyFieldRichTextEditorComponent;

      expect(compInstance.template).toBeTruthy();
      expect(compInstance.template.placeholder).toBe('Type something here...');
      expect(compInstance.template.minHeight).toBe(15);
      expect(compInstance.template.maxHeight).toBe(40);
    });

    it('should handle user input change and touch events', () => {
      testRTEComponent.fields = [
        {
          key: 'editor',
          type: 'rich-text',
        },
      ];

      const fixture = createTestComponent(
        '<formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>',
      );
      fixture.detectChanges();

      const rteEl = fixture.debugElement.query(By.directive(FormlyFieldRichTextEditorComponent));
      const compInstance = rteEl.componentInstance as FormlyFieldRichTextEditorComponent;
      const control = testRTEComponent.form.get('editor');

      // Simulate editor change event
      const fakeChangeEvent = {
        editor: {
          getData: () => '<p>Updated content</p>',
        },
      };
      compInstance.template.onChange(fakeChangeEvent as any);
      fixture.detectChanges();

      expect(control.value).toBe('<p>Updated content</p>');

      // Simulate editor blur/touch event
      expect(control.touched).toBe(false);
      const fakeBlurEvent = {
        editor: {
          getData: () => '<p>Updated content</p>',
        },
      };
      compInstance.template.onTouched(fakeBlurEvent as any);
      fixture.detectChanges();

      expect(control.touched).toBe(true);
    });

    it('should handle disabled state transitions', () => {
      testRTEComponent.fields = [
        {
          key: 'editor',
          type: 'rich-text',
        },
      ];

      const fixture = createTestComponent(
        '<formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>',
      );
      fixture.detectChanges();

      const rteEl = fixture.debugElement.query(By.directive(FormlyFieldRichTextEditorComponent));
      const compInstance = rteEl.componentInstance as FormlyFieldRichTextEditorComponent;
      const ckeditor = fixture.nativeElement.querySelector('ckeditor');
      const control = testRTEComponent.form.get('editor');

      expect(control.disabled).toBe(false);
      expect(compInstance.template.disabled).toBe(false);
      expect(ckeditor.hasAttribute('disabled')).toBe(false);

      control.disable();
      fixture.detectChanges();
      expect(control.disabled).toBe(true);
      expect(compInstance.template.disabled).toBe(true);
      expect(ckeditor.hasAttribute('disabled')).toBe(true);

      control.enable();
      fixture.detectChanges();
      expect(control.disabled).toBe(false);
      expect(compInstance.template.disabled).toBe(false);
      expect(ckeditor.hasAttribute('disabled')).toBe(false);
    });

    it('should render error state when invalid and touched, and clear error when resolved', () => {
      testRTEComponent.model = { editor: '' };
      testRTEComponent.fields = [
        {
          key: 'editor',
          type: 'rich-text',
          validators: {
            validation: [Validators.required],
          },
          props: {
            label: 'Rich Text Required',
          },
        },
      ];

      const fixture = createTestComponent(
        '<formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>',
      );
      fixture.detectChanges();

      const control = testRTEComponent.form.get('editor');
      expect(control.invalid).toBe(true);
      expect(fixture.nativeElement.querySelector('.usa-error-message')).toBeNull();

      control.markAsTouched();
      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('.usa-error-message')).not.toBeNull();

      control.setValue('<p>Valid text</p>');
      fixture.detectChanges();

      expect(control.valid).toBe(true);
      expect(fixture.nativeElement.querySelector('.usa-error-message')).toBeNull();
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
    return testRTEComponent.fields;
  }
  get form() {
    return testRTEComponent.form;
  }
  get model() {
    return testRTEComponent.model || {};
  }
  get options() {
    return testRTEComponent.options;
  }
}
