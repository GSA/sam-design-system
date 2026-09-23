import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, ViewChild } from '@angular/core';
import { UntypedFormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormlyModule, FormlyForm } from '@ngx-formly/core';
import { FormlyFieldSearchComponent } from './search';
import { FormlyValidationWrapperComponent } from '../wrappers/validation.wrapper';
import { SdsSearchModule, SearchSettings } from '@gsa-sam/components';
import { IconComponent } from '@gsa-sam/ngx-uswds-icons';

const createTestComponent = (html: string) =>
  createGenericTestComponent(html, TestComponent) as ComponentFixture<TestComponent>;

export function createGenericTestComponent<T>(html: string, type: { new (...args: any[]): T }): ComponentFixture<T> {
  TestBed.overrideComponent(type, { set: { template: html } });
  const fixture = TestBed.createComponent(type);
  fixture.detectChanges();
  return fixture as ComponentFixture<T>;
}

let testSearchComponent: any;

describe('Formly Field Search Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, FormlyFieldSearchComponent, FormlyValidationWrapperComponent],
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        SdsSearchModule,
        FormlyModule.forRoot({
          types: [
            {
              name: 'search',
              component: FormlyFieldSearchComponent,
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

    testSearchComponent = {
      form: new UntypedFormGroup({}),
      model: {
        searchField: {
          searchText: 'initial text',
        },
      },
    };
  });

  it('should correctly bind model and search settings to component', () => {
    const settings = new SearchSettings();
    settings.placeholder = 'Search here';
    settings.id = 'search-id-1';

    testSearchComponent.fields = [
      {
        key: 'searchField',
        type: 'search',
        props: {
          label: 'Search Test',
          searchSettings: settings,
        },
      },
    ];

    const fixture = createTestComponent('<formly-form [form]="form" [fields]="fields" [model]="model"></formly-form>');
    fixture.detectChanges();

    const searchEl = fixture.debugElement.query(By.directive(FormlyFieldSearchComponent));
    const compInstance = searchEl.componentInstance as FormlyFieldSearchComponent;

    expect(compInstance.template).toBeTruthy();
    expect(compInstance.template.searchSettings.placeholder).toBe('Search here');
    expect(compInstance.template.searchSettings.id).toBe('search-id-1');

    const input = fixture.nativeElement.querySelector('input[type="search"]') as HTMLInputElement;
    expect(input.value).toBe('initial text');
  });

  it('should trigger props.submitHandler on search submit event', () => {
    const submitSpy = vi.fn();
    testSearchComponent.fields = [
      {
        key: 'searchField',
        type: 'search',
        props: {
          label: 'Search Test',
          submitHandler: submitSpy,
        },
      },
    ];

    const fixture = createTestComponent('<formly-form [form]="form" [fields]="fields" [model]="model"></formly-form>');
    fixture.detectChanges();

    const searchEl = fixture.debugElement.query(By.directive(FormlyFieldSearchComponent));
    const compInstance = searchEl.componentInstance as FormlyFieldSearchComponent;

    compInstance.template.submit.emit({ searchText: 'executed search' });
    expect(submitSpy).toHaveBeenCalledWith({ searchText: 'executed search' });
  });

  it('should handle submit event when props.submitHandler is not defined', () => {
    testSearchComponent.fields = [
      {
        key: 'searchField',
        type: 'search',
        props: {
          label: 'Search Test',
        },
      },
    ];

    const fixture = createTestComponent('<formly-form [form]="form" [fields]="fields" [model]="model"></formly-form>');
    fixture.detectChanges();

    const searchEl = fixture.debugElement.query(By.directive(FormlyFieldSearchComponent));
    const compInstance = searchEl.componentInstance as FormlyFieldSearchComponent;

    expect(() => {
      compInstance.template.submit.emit({ searchText: 'no handler' });
    }).not.toThrow();
  });

  it('should handle user input change events through input and form control', () => {
    testSearchComponent.fields = [
      {
        key: 'searchField',
        type: 'search',
        props: {
          label: 'Search Test',
        },
      },
    ];

    const fixture = createTestComponent('<formly-form [form]="form" [fields]="fields" [model]="model"></formly-form>');
    fixture.detectChanges();

    const input = fixture.nativeElement.querySelector('input[type="search"]') as HTMLInputElement;
    input.value = 'user typed query';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(testSearchComponent.form.get('searchField').value.searchText).toBe('user typed query');

    testSearchComponent.form.get('searchField').setValue({ searchText: 'programmatic query' });
    fixture.detectChanges();

    expect(input.value).toBe('programmatic query');
  });

  it('should handle disabled state transitions', () => {
    testSearchComponent.fields = [
      {
        key: 'searchField',
        type: 'search',
        props: {
          label: 'Search Test',
        },
      },
    ];

    const fixture = createTestComponent('<formly-form [form]="form" [fields]="fields" [model]="model"></formly-form>');
    fixture.detectChanges();

    const control = testSearchComponent.form.get('searchField');
    const input = fixture.nativeElement.querySelector('input[type="search"]') as HTMLInputElement;

    expect(control.disabled).toBe(false);
    expect(input.disabled).toBe(false);

    control.disable();
    fixture.detectChanges();
    expect(control.disabled).toBe(true);
    expect(input.disabled).toBe(true);

    control.enable();
    fixture.detectChanges();
    expect(control.disabled).toBe(false);
    expect(input.disabled).toBe(false);
  });

  it('should render error state when invalid and touched, and clear error when resolved', () => {
    testSearchComponent.model = { searchField: null };
    testSearchComponent.fields = [
      {
        key: 'searchField',
        type: 'search',
        validators: {
          validation: [Validators.required],
        },
        props: {
          label: 'Search Test',
        },
      },
    ];

    const fixture = createTestComponent('<formly-form [form]="form" [fields]="fields" [model]="model"></formly-form>');
    fixture.detectChanges();

    const control = testSearchComponent.form.get('searchField');
    expect(control.invalid).toBe(true);
    expect(fixture.nativeElement.querySelector('.usa-error-message')).toBeNull();

    control.markAsTouched();
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.usa-error-message')).not.toBeNull();

    control.setValue({ searchText: 'now valid' });
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
    return testSearchComponent.fields;
  }
  get form() {
    return testSearchComponent.form;
  }
  get model() {
    return testSearchComponent.model || {};
  }
}
