import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FieldType, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyFormFieldFilterWrapperComponent } from './form-field.filterwrapper';

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

describe('FormlyFormFieldFilterWrapperComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let host: TestHostComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestHostComponent, DummyInputComponent, FormlyFormFieldFilterWrapperComponent],
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        FormlyModule.forRoot({
          types: [{ name: 'input', component: DummyInputComponent }],
          wrappers: [{ name: 'filterwrapper', component: FormlyFormFieldFilterWrapperComponent }],
        }),
      ],
    });

    fixture = TestBed.createComponent(TestHostComponent);
    host = fixture.componentInstance;
  });

  it('should render header-label with label text, default aria-hidden="true", and project inner component', () => {
    host.fields = [
      {
        key: 'filterField',
        type: 'input',
        wrappers: ['filterwrapper'],
        props: {
          label: 'Filter Header Text',
        },
      },
    ];
    fixture.detectChanges();

    const labelEl = fixture.debugElement.query(By.css('.sds-accordion__trigger.header-label'));
    expect(labelEl).toBeTruthy();
    expect(labelEl.nativeElement.textContent.trim()).toBe('Filter Header Text');
    expect(labelEl.attributes['aria-hidden']).toBe('true');

    const innerInput = fixture.debugElement.query(By.css('.dummy-inner-input'));
    expect(innerInput).toBeTruthy();
  });

  it('should set aria-hidden="false" when props.ariaHidden is true', () => {
    host.fields = [
      {
        key: 'filterField',
        type: 'input',
        wrappers: ['filterwrapper'],
        props: {
          label: 'Filter Header Text',
          ariaHidden: true,
        },
      },
    ];
    fixture.detectChanges();

    const labelEl = fixture.debugElement.query(By.css('.sds-accordion__trigger.header-label'));
    expect(labelEl.attributes['aria-hidden']).toBe('false');
  });
});
