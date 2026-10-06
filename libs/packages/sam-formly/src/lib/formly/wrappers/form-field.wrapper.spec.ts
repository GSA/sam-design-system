import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, UntypedFormGroup, Validators } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FieldType, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyWrapperFormFieldComponent } from './form-field.wrapper';

@Component({
  selector: 'sam-dummy-input',
  template: '<input class="dummy-inner-input" [formControl]="formControl" [id]="id" />',
  standalone: false,
})
class DummyInputComponent extends FieldType {}

@Component({
  template: '<formly-form [form]="form" [fields]="fields" [model]="model"></formly-form>',
  standalone: false,
})
class TestHostComponent {
  form = new UntypedFormGroup({});
  fields: FormlyFieldConfig[] = [];
  model: any = {};
}

describe('FormlyWrapperFormFieldComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let host: TestHostComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestHostComponent, DummyInputComponent, FormlyWrapperFormFieldComponent],
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        FormlyModule.forRoot({
          types: [{ name: 'input', component: DummyInputComponent }],
          wrappers: [{ name: 'form-field', component: FormlyWrapperFormFieldComponent }],
          validationMessages: [{ name: 'required', message: 'Field is required' }],
        }),
      ],
    });

    fixture = TestBed.createComponent(TestHostComponent);
    host = fixture.componentInstance;
  });

  it('should render label, optional text, description, and project inner component', () => {
    host.fields = [
      {
        id: 'field-1',
        key: 'field1',
        type: 'input',
        wrappers: ['form-field'],
        props: {
          label: 'Field Label',
          labelClass: 'custom-field-label',
          description: 'Help text description',
        },
      },
    ];
    fixture.detectChanges();

    const labelEl = fixture.debugElement.query(By.css('label.usa-label'));
    expect(labelEl).toBeTruthy();
    expect(labelEl.nativeElement.textContent).toContain('Field Label');
    expect(labelEl.nativeElement.textContent).toContain('(Optional)');
    expect(labelEl.attributes['for']).toBe('field-1');
    expect(labelEl.nativeElement.classList.contains('custom-field-label')).toBe(true);

    const descEl = fixture.debugElement.query(By.css('.usa-label--description'));
    expect(descEl).toBeTruthy();
    expect(descEl.nativeElement.textContent.trim()).toBe('Help text description');

    const innerInput = fixture.debugElement.query(By.css('.dummy-inner-input'));
    expect(innerInput).toBeTruthy();
  });

  it('should omit optional text when required or hideOptional is set', () => {
    host.fields = [
      {
        key: 'field1',
        type: 'input',
        wrappers: ['form-field'],
        props: {
          label: 'Required Field',
          required: true,
        },
      },
      {
        key: 'field2',
        type: 'input',
        wrappers: ['form-field'],
        props: {
          label: 'No Optional Text',
          hideOptional: true,
        },
      },
    ];
    fixture.detectChanges();

    const labels = fixture.debugElement.queryAll(By.css('label.usa-label'));
    expect(labels[0].nativeElement.textContent).not.toContain('(Optional)');
    expect(labels[1].nativeElement.textContent).not.toContain('(Optional)');
  });

  it('should hide label when hideLabel is true', () => {
    host.fields = [
      {
        key: 'field1',
        type: 'input',
        wrappers: ['form-field'],
        props: {
          label: 'Hidden Label',
          hideLabel: true,
        },
      },
    ];
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('label.usa-label'))).toBeNull();
  });

  it('should render tag with default and custom class', () => {
    host.fields = [
      {
        key: 'field1',
        type: 'input',
        wrappers: ['form-field'],
        props: {
          label: 'Field 1',
          tagText: 'Tag 1',
        },
      },
      {
        key: 'field2',
        type: 'input',
        wrappers: ['form-field'],
        props: {
          label: 'Field 2',
          tagText: 'Tag 2',
          tagClass: 'custom-tag-class',
        },
      },
    ];
    fixture.detectChanges();

    const tags = fixture.debugElement.queryAll(By.css('.usa-tag'));
    expect(tags[0].nativeElement.classList.contains('sds-tag--info-white')).toBe(true);
    expect(tags[1].nativeElement.classList.contains('custom-tag-class')).toBe(true);
  });

  it('should display error message and class when showError is true', () => {
    host.fields = [
      {
        key: 'field1',
        type: 'input',
        wrappers: ['form-field'],
        validators: {
          validation: [Validators.required],
        },
      },
    ];
    fixture.detectChanges();

    const formGroup = fixture.debugElement.query(By.css('.usa-form-group'));
    expect(formGroup.nativeElement.classList.contains('usa-form-group--error')).toBe(false);
    expect(fixture.debugElement.query(By.css('.usa-error-message'))).toBeNull();

    const control = host.form.get('field1');
    control.setValue('');
    control.markAsTouched();
    fixture.detectChanges();

    expect(formGroup.nativeElement.classList.contains('usa-form-group--error')).toBe(true);
    const errorDiv = fixture.debugElement.query(By.css('.usa-error-message'));
    expect(errorDiv).toBeTruthy();
    expect(errorDiv.nativeElement.textContent).toContain('Field is required');
  });
});
