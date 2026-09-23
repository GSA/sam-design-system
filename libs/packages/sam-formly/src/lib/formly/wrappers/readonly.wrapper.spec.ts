import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FieldType, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { SdsFormlyTypes } from '../models/formly-types';
import { ReadonlyContainerComponent } from '../readonly/readonly-container.component';
import { SdsReadonlyModule } from '../readonly/readonly.module';
import { FormlyReadonlyWrapperComponent } from './readonly.wrapper';

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

describe('FormlyReadonlyWrapperComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let host: TestHostComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestHostComponent, DummyInputComponent, FormlyReadonlyWrapperComponent],
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        SdsReadonlyModule,
        FormlyModule.forRoot({
          types: [
            { name: 'input', component: DummyInputComponent },
            { name: SdsFormlyTypes.READONLY, component: DummyInputComponent },
          ],
          wrappers: [{ name: 'readonly', component: FormlyReadonlyWrapperComponent }],
        }),
      ],
    });

    fixture = TestBed.createComponent(TestHostComponent);
    host = fixture.componentInstance;
  });

  it('should render passThrough when neither readonly type nor readonlyMode', () => {
    host.fields = [
      {
        key: 'testField',
        type: 'input',
        wrappers: ['readonly'],
        props: { label: 'Input' },
      },
    ];
    fixture.detectChanges();

    const innerInput = fixture.debugElement.query(By.css('.dummy-inner-input'));
    expect(innerInput).toBeTruthy();

    const readonlyContainer = fixture.debugElement.query(By.directive(ReadonlyContainerComponent));
    expect(readonlyContainer).toBeNull();
  });

  it('should render sds-readonly-container when props.readonlyMode is true', () => {
    host.model = { testField: 'Sample Readonly Value' };
    host.fields = [
      {
        key: 'testField',
        type: 'input',
        wrappers: ['readonly'],
        props: {
          label: 'My Label',
          readonlyMode: true,
          readonlyClass: 'custom-readonly-class',
        },
      },
    ];
    fixture.detectChanges();

    const readonlyWrapperDiv = fixture.debugElement.query(By.css('.custom-readonly-class'));
    expect(readonlyWrapperDiv).toBeTruthy();

    const readonlyContainer = fixture.debugElement.query(By.directive(ReadonlyContainerComponent));
    expect(readonlyContainer).toBeTruthy();

    // The inner input should not be rendered when in readonly mode
    const innerInput = fixture.debugElement.query(By.css('.dummy-inner-input'));
    expect(innerInput).toBeNull();
  });

  it('should render props.readonlyTemplate when provided as a function', () => {
    host.fields = [
      {
        key: 'testField',
        type: 'input',
        wrappers: ['readonly'],
        props: {
          readonlyMode: true,
          readonlyTemplate: (field: FormlyFieldConfig) =>
            `<strong class="custom-template">${field.key} custom</strong>`,
        },
      },
    ];
    fixture.detectChanges();

    const customSpan = fixture.debugElement.query(By.css('.custom-template'));
    expect(customSpan).toBeTruthy();
    expect(customSpan.nativeElement.textContent).toBe('testField custom');

    const readonlyContainer = fixture.debugElement.query(By.directive(ReadonlyContainerComponent));
    expect(readonlyContainer).toBeNull();
  });

  it('should render sds-readonly-container when field.type is READONLY even without readonlyMode', () => {
    host.model = { testField: 'Readonly Type Value' };
    host.fields = [
      {
        key: 'testField',
        type: SdsFormlyTypes.READONLY,
        wrappers: ['readonly'],
        props: {
          label: 'Readonly Field Type',
        },
      },
    ];
    fixture.detectChanges();

    const readonlyContainer = fixture.debugElement.query(By.directive(ReadonlyContainerComponent));
    expect(readonlyContainer).toBeTruthy();
  });
});
