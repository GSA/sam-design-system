import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, UntypedFormGroup, Validators } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FieldType, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyValidationWrapperComponent } from './validation.wrapper';

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

describe('FormlyValidationWrapperComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let host: TestHostComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestHostComponent, DummyInputComponent, FormlyValidationWrapperComponent],
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        FormlyModule.forRoot({
          types: [{ name: 'input', component: DummyInputComponent }],
          wrappers: [{ name: 'validation', component: FormlyValidationWrapperComponent }],
          validationMessages: [
            { name: 'required', message: 'This field is required' },
            { name: 'minlength', message: 'Minimum length not met' },
          ],
        }),
      ],
    });

    fixture = TestBed.createComponent(TestHostComponent);
    host = fixture.componentInstance;
  });

  it('should project inner component into fieldComponent', () => {
    host.fields = [
      {
        key: 'field1',
        type: 'input',
        wrappers: ['validation'],
        props: { label: 'Test Field' },
      },
    ];
    fixture.detectChanges();

    const innerInput = fixture.debugElement.query(By.css('.dummy-inner-input'));
    expect(innerInput).toBeTruthy();
  });

  it('should not display error container when field is valid or untouched', () => {
    host.fields = [
      {
        key: 'field1',
        type: 'input',
        wrappers: ['validation'],
        validators: {
          validation: [Validators.required],
        },
      },
    ];
    fixture.detectChanges();

    const errorDiv = fixture.debugElement.query(By.css('.usa-error-message'));
    expect(errorDiv).toBeNull();
  });

  it('should display error message container with accessibility attributes when showError is true', () => {
    host.fields = [
      {
        id: 'test-input-id',
        key: 'field1',
        type: 'input',
        wrappers: ['validation'],
        validators: {
          validation: [Validators.required],
        },
      },
    ];
    fixture.detectChanges();

    const control = host.form.get('field1');
    control.setValue('');
    control.markAsTouched();
    fixture.detectChanges();

    const errorDiv = fixture.debugElement.query(By.css('.usa-error-message'));
    expect(errorDiv).toBeTruthy();
    expect(errorDiv.attributes['role']).toBe('alert');
    expect(errorDiv.attributes['aria-live']).toBe('assertive');
    expect(errorDiv.attributes['id']).toBe('test-input-id-error-message');
    expect(errorDiv.nativeElement.style.display).toBe('block');

    expect(errorDiv.nativeElement.textContent).toContain('This field is required');
  });

  it('should remove error message when field becomes valid', () => {
    host.fields = [
      {
        key: 'field1',
        type: 'input',
        wrappers: ['validation'],
        validators: {
          validation: [Validators.required],
        },
      },
    ];
    fixture.detectChanges();

    const control = host.form.get('field1');
    control.setValue('');
    control.markAsTouched();
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('.usa-error-message'))).toBeTruthy();

    control.setValue('valid value');
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('.usa-error-message'))).toBeNull();
  });
});
