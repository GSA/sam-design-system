import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, ViewChild } from '@angular/core';
import { UntypedFormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormlyModule, FormlyForm } from '@ngx-formly/core';
import { FormlyFieldAutoCompleteComponent } from './autocomplete';
import { FormlyValidationWrapperComponent } from '../wrappers/validation.wrapper';
import {
  SDSAutocompletelConfiguration,
  SDSSelectedItemModel,
  SelectionMode,
  SdsAutocompleteModule,
} from '@gsa-sam/components';
import { IconComponent } from '@gsa-sam/ngx-uswds-icons';
import { AutocompleteSampleDataService } from '../services/autocomplete-sample.service';

const createTestComponent = (html: string) =>
  createGenericTestComponent(html, TestComponent) as ComponentFixture<TestComponent>;

export function createGenericTestComponent<T>(html: string, type: { new (...args: any[]): T }): ComponentFixture<T> {
  TestBed.overrideComponent(type, { set: { template: html } });
  const fixture = TestBed.createComponent(type);
  fixture.detectChanges();
  return fixture as ComponentFixture<T>;
}

let testAutocompleteComponent: any;

describe('Formly Field Autocomplete Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, FormlyFieldAutoCompleteComponent, FormlyValidationWrapperComponent],
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        SdsAutocompleteModule,
        FormlyModule.forRoot({
          types: [
            {
              name: 'autocomplete',
              component: FormlyFieldAutoCompleteComponent,
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

    TestBed.overrideComponent(IconComponent, {
      set: { template: '<span></span>' },
    });

    testAutocompleteComponent = {
      form: new UntypedFormGroup({}),
      model: {
        firstName: {
          items: [
            {
              id: '1',
              parentId: null,
              name: 'Level 1',
              subtext: 'id 1',
              type: 'Level 1',
              childCount: 2,
              highlighted: true,
            },
          ],
        },
      },
      settings: new SDSAutocompletelConfiguration(),
      autocompleteModel: new SDSSelectedItemModel(),
      service: new AutocompleteSampleDataService(),
    };
    testAutocompleteComponent.settings.id = 'autocomplete1';
    testAutocompleteComponent.settings.primaryKeyField = 'id';
    testAutocompleteComponent.settings.primaryTextField = 'name';
    testAutocompleteComponent.settings.secondaryTextField = 'subtext';
    testAutocompleteComponent.settings.labelText = 'Autocomplete 1';
    testAutocompleteComponent.settings.selectionMode = SelectionMode.MULTIPLE;
    testAutocompleteComponent.settings.autocompletePlaceHolderText = 'Enter text';
    testAutocompleteComponent.settings.debounceTime = 0;
  });

  it('should correctly bind configuration and service to autocomplete component', () => {
    testAutocompleteComponent.fields = [
      {
        key: 'firstName',
        type: 'autocomplete',
        id: 'autocomplete1',
        props: {
          label: 'Auto Complete Test',
          service: testAutocompleteComponent.service,
          configuration: testAutocompleteComponent.settings,
          model: testAutocompleteComponent.autocompleteModel,
        },
      },
    ];
    const fixture = createTestComponent('<formly-form [form]="form" [fields]="fields" [model]="model"></formly-form>');
    fixture.detectChanges();
    expect(fixture).toBeTruthy();

    const autocompleteEl = fixture.debugElement.query(By.directive(FormlyFieldAutoCompleteComponent));
    const compInstance = autocompleteEl.componentInstance as FormlyFieldAutoCompleteComponent;
    expect(compInstance.template).toBeTruthy();
    expect(compInstance.template.configuration).toBe(testAutocompleteComponent.settings);
    expect(compInstance.template.service).toBe(testAutocompleteComponent.service);
    expect(compInstance.defaultOptions.props.essentialModelFields).toBe(true);
  });

  it('should warn when configuration ID does not match Formly field ID', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    testAutocompleteComponent.settings.id = 'config-id-mismatch';

    testAutocompleteComponent.fields = [
      {
        key: 'firstName',
        type: 'autocomplete',
        id: 'field-id-test',
        props: {
          label: 'Auto Complete Test',
          service: testAutocompleteComponent.service,
          configuration: testAutocompleteComponent.settings,
        },
      },
    ];

    const fixture = createTestComponent('<formly-form [form]="form" [fields]="fields" [model]="model"></formly-form>');
    fixture.detectChanges();

    expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining('Formly Autocomplete ID mismatch'));
    warnSpy.mockRestore();
  });

  it('should set configuration.id to field id when configuration.id is empty or undefined', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    testAutocompleteComponent.settings.id = undefined;

    testAutocompleteComponent.fields = [
      {
        key: 'firstName',
        type: 'autocomplete',
        id: 'auto-assigned-id',
        props: {
          label: 'Auto Complete Test',
          service: testAutocompleteComponent.service,
          configuration: testAutocompleteComponent.settings,
        },
      },
    ];

    const fixture = createTestComponent('<formly-form [form]="form" [fields]="fields" [model]="model"></formly-form>');
    fixture.detectChanges();

    const autocompleteEl = fixture.debugElement.query(By.directive(FormlyFieldAutoCompleteComponent));
    const compInstance = autocompleteEl.componentInstance as FormlyFieldAutoCompleteComponent;
    expect(compInstance.template.configuration.id).toBe('auto-assigned-id');
    expect(warnSpy).not.toHaveBeenCalled();
    warnSpy.mockRestore();
  });

  it('should handle disabled state transitions', () => {
    testAutocompleteComponent.fields = [
      {
        key: 'firstName',
        type: 'autocomplete',
        id: 'autocomplete1',
        props: {
          label: 'Auto Complete Test',
          service: testAutocompleteComponent.service,
          configuration: testAutocompleteComponent.settings,
        },
      },
    ];

    const fixture = createTestComponent('<formly-form [form]="form" [fields]="fields" [model]="model"></formly-form>');
    fixture.detectChanges();

    const autocompleteEl = fixture.debugElement.query(By.directive(FormlyFieldAutoCompleteComponent));
    const compInstance = autocompleteEl.componentInstance as FormlyFieldAutoCompleteComponent;

    expect(compInstance.template.disabled).toBeFalsy();

    testAutocompleteComponent.form.get('firstName').disable();
    fixture.detectChanges();
    expect(compInstance.template.disabled).toBe(true);

    testAutocompleteComponent.form.get('firstName').enable();
    fixture.detectChanges();
    expect(compInstance.template.disabled).toBe(false);
  });

  it('should handle user input change events through form control', () => {
    let changedValue: any = null;
    testAutocompleteComponent.fields = [
      {
        key: 'firstName',
        type: 'autocomplete',
        id: 'autocomplete1',
        props: {
          label: 'Auto Complete Test',
          service: testAutocompleteComponent.service,
          configuration: testAutocompleteComponent.settings,
          change: (field) => {
            changedValue = field.formControl.value;
          },
        },
      },
    ];

    const fixture = createTestComponent('<formly-form [form]="form" [fields]="fields" [model]="model"></formly-form>');
    fixture.detectChanges();

    const newSelection = {
      items: [
        {
          id: '2',
          parentId: null,
          name: 'Level 2',
          subtext: 'id 2',
          type: 'Level 2',
          childCount: 0,
        },
      ],
    };

    testAutocompleteComponent.form.get('firstName').setValue(newSelection);
    fixture.detectChanges();

    expect(changedValue).toEqual(newSelection);
    expect(testAutocompleteComponent.model.firstName).toEqual(newSelection);
  });

  it('should render error state when invalid and touched, and clear error when resolved', () => {
    testAutocompleteComponent.model = { firstName: null };
    testAutocompleteComponent.fields = [
      {
        key: 'firstName',
        type: 'autocomplete',
        id: 'autocomplete1',
        validators: {
          validation: [Validators.required],
        },
        props: {
          label: 'Auto Complete Test',
          service: testAutocompleteComponent.service,
          configuration: testAutocompleteComponent.settings,
        },
      },
    ];

    const fixture = createTestComponent('<formly-form [form]="form" [fields]="fields" [model]="model"></formly-form>');
    fixture.detectChanges();

    const control = testAutocompleteComponent.form.get('firstName');
    expect(control.invalid).toBe(true);
    expect(fixture.nativeElement.querySelector('.usa-error-message')).toBeNull();

    control.markAsTouched();
    fixture.detectChanges();

    const errorEl = fixture.nativeElement.querySelector('.usa-error-message');
    expect(errorEl).not.toBeNull();

    control.setValue({
      items: [{ id: '1', name: 'Item 1' }],
    });
    fixture.detectChanges();

    expect(control.valid).toBe(true);
    expect(fixture.nativeElement.querySelector('.usa-error-message')).toBeNull();
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
    return testAutocompleteComponent.fields;
  }
  get form() {
    return testAutocompleteComponent.form;
  }
  get model() {
    return testAutocompleteComponent.model || {};
  }
}
