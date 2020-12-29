import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  FormlyModule,
  FormlyFormOptions,
  FormlyForm,
  FormlyFieldConfig
} from '@ngx-formly/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SdsFormlyModule } from '../formly/formly.module';
import { SdsFormlyResetComponent } from './formly-reset.component';

let resetEl: HTMLElement;
let model: any;
let fields: FormlyFieldConfig[];
let form: FormGroup;
let options: FormlyFormOptions;

describe('SDS Formly Reset', () => {
  let testComp: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SdsFormlyResetComponent, TestComponent],
      imports: [
        FontAwesomeModule,
        NoopAnimationsModule,
        SdsFormlyModule,
        ReactiveFormsModule,
        FormlyModule.forRoot({})
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    form = new FormGroup({});
    options = {};
  });

  it('should reset form values to null if no values were set in model when clicked', () => {
    fixture = TestBed.createComponent(TestComponent);
    testComp = fixture.componentInstance;
    fixture.detectChanges();

    testComp.form.controls.flat.setValue('edit flat input');
    testComp.form.get('nested.nestedInput').setValue('edit nested input');

    expect(testComp.model).toEqual({
      flat: 'edit flat input',
      nested: { nestedInput: 'edit nested input' }
    });

    resetEl = fixture.nativeElement.querySelector('.usa-button');
    resetEl.click()

    expect(testComp.model).toEqual({ flat: null, nested: { nestedInput: null } });
  });

  it("should reset fields with defaultValue provided to that defaultValue when clicked", () => {
    fields = [
      {
        key: 'flat',
        type: 'input',
        defaultValue: 'flat defaultValue'
      },
      {
        key: 'nested',
        fieldGroup: [
          {
            key: 'nestedInput',
            type: 'input',
            defaultValue: 'nested defaultValue'
          }
        ]
      }
    ];

    fixture = TestBed.createComponent(TestComponent);
    testComp = fixture.componentInstance;
    fixture.detectChanges();

    expect(testComp.model).toEqual({
      flat: 'flat defaultValue',
      nested: { nestedInput: 'nested defaultValue' }
    });

    resetEl = fixture.nativeElement.querySelector('.usa-button');
    resetEl.click()

    expect(testComp.model).toEqual({
      flat: 'flat defaultValue',
      nested: { nestedInput: 'nested defaultValue' }
    });
  });

  it('should clone both flat and nested values from initial model during resetModel if values were set when clicked', () => {
    model = {
      flat: 'flat value set',
      nested: { nestedInput: 'nested value set' }
    };

    fixture = TestBed.createComponent(TestComponent);
    testComp = fixture.componentInstance;
    fixture.detectChanges();

    form.get('flat').setValue('edit flat input');
    form.get('nested.nestedInput').setValue('edit nested input');

    expect(testComp.model).toEqual({
      flat: 'edit flat input',
      nested: { nestedInput: 'edit nested input' }
    });

    resetEl = fixture.nativeElement.querySelector('.usa-button');
    resetEl.click();

    expect(testComp.model).toEqual({
      flat: 'flat value set',
      nested: { nestedInput: 'nested value set' }
    });
  });
});

@Component({
  template: `
  <form [formGroup]="form">
    <formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>
    <sds-formly-reset [options]="options"></sds-formly-reset>
  </form>`
})

class TestComponent {
  @ViewChild(FormlyForm, { static: false }) formlyForm: FormlyForm;
  form = form;
  options = options;
  fields = fields || [
    {
      key: 'flat',
      type: 'input'
    },
    {
      key: 'nested',
      fieldGroup: [
        {
          key: 'nestedInput',
          type: 'input'
        }
      ]
    }
  ];
  model = model || {};
}
