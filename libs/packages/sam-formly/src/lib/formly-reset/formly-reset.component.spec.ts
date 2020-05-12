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

let model: any;
let fields: FormlyFieldConfig[];
let form: FormGroup;
let options: FormlyFormOptions;

describe('SDS Formly Reset', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent],
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

  it('should reset flat and nested form values to null if no values were set in model', () => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.form.controls.flat.setValue('edit flat input');
    component.form.get('nested.nestedInput').setValue('edit nested input');

    expect(component.model).toEqual({
      flat: 'edit flat input',
      nested: { nestedInput: 'edit nested input' }
    });

    component.options.resetModel();
    expect(component.model).toEqual({ flat: null, nested: { nestedInput: null } });
  });

  it("should reset fields with defaultValue to null if value isn't set in model", () => {
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
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.model).toEqual({
      flat: 'flat defaultValue',
      nested: { nestedInput: 'nested defaultValue' }
    });

    options.resetModel();
    expect(component.model).toEqual({ flat: null, nested: { nestedInput: null } });
  });

  it('should clone both flat and nested values from initial model during resetModel if values were set', () => {
    model = {
      flat: 'flat value set',
      nested: { nestedInput: 'nested value set' }
    };

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    form.get('flat').setValue('edit flat input');
    form.get('nested.nestedInput').setValue('edit nested input');

    expect(component.model).toEqual({
      flat: 'edit flat input',
      nested: { nestedInput: 'edit nested input' }
    });

    options.resetModel();
    expect(component.model).toEqual({
      flat: 'flat value set',
      nested: { nestedInput: 'nested value set' }
    });
  });
});

@Component({
  template: '<formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>',
})

class TestComponent {
  @ViewChild(FormlyForm) formlyForm: FormlyForm;
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

// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// import { SdsFormlyResetComponent } from './formly-reset.component';
// import { DebugElement, Component } from '@angular/core';
// import { FormlyFormOptions } from '@ngx-formly/core';

// describe('SdsFormlyResetComponent', () => {
//   // let component: SdsFormlyResetComponent;
//   // let buttonDe: DebugElement;
//   // let options: { "_initialModel": { "searchEntity": { "uniqueEntityIdSam": 20 } }, "formState": {}, "_hiddenFieldsForCheck": [] }

//   let testHost: TestHostComponent;
//   let fixture: ComponentFixture<TestHostComponent>;
//   let resetEl: HTMLElement;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ SdsFormlyResetComponent, TestHostComponent ],
//       // imports: [FontAwesomeModule]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(TestHostComponent);
//     testHost = fixture.componentInstance;
//     // buttonDe = fixture.debugElement;
//     resetEl = fixture.nativeElement.querySelector('.usa-button');
//     fixture.detectChanges();
//   });

//   // it('should create', () => {
//   //   expect(component).toBeTruthy();
//   // });

//   it('should contain Reset All button', () => {
//     expect(resetEl.textContent).toContain('Reset All');
//   });

//   it('should reset to original options when clicked', () => {
//     // buttonDe.triggerEventHandler('click', null);
//     // fixture.detectChanges();
//     resetEl.click()
//     // expect(component.options).toBe(options);
//     expect(testHost.model).toBe(null);
//   })
// });
