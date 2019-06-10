import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormlyFieldConfig, FormlyModule, FormlyFormOptions } from '@ngx-formly/core';
import { FormlyFieldInputComponent } from './input';

@Component({
  selector: 'formly-test',
  template: `
    <formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>
  `,
})
class FormlyTestComponent {
  form = new FormGroup({});
  fields: FormlyFieldConfig[];
  model: any;
  options: FormlyFormOptions;
}

describe('Formly Input Component', () => {
  let fixture: ComponentFixture<FormlyTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormlyTestComponent, FormlyFieldInputComponent],
      imports: [
        NoopAnimationsModule,
        
        ReactiveFormsModule,
        FormlyModule.forRoot({
          types: [
            {
              name: 'input',
              component: FormlyFieldInputComponent,
            },
          ],
        }),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormlyTestComponent);
  });

  it('should properly set the readonly value on text inputs', () => {
    const componentInstance = fixture.componentInstance;
    componentInstance.fields = [
      {
        key: 'name',
        type: 'input',
        templateOptions: {
          required: true,
        },
      },
    ];
    fixture.detectChanges();

    // assert
    const inputField = fixture.debugElement.query(By.css('.usa-input'));
    expect(inputField.componentInstance.field.templateOptions.required).toBe(true);
  });

  it('should properly set the readonly value on number inputs', () => {
    const componentInstance = fixture.componentInstance;
    componentInstance.fields = [
      {
        key: 'name',
        type: 'input',
        templateOptions: {
          type: 'number',
          readonly: true,
        },
      },
    ];
    fixture.detectChanges();

    // assert
    const inputField = fixture.debugElement.query(By.css('.usa-input'));
   
    expect(inputField.componentInstance.field.templateOptions.readonly).toBe(true);
  });
});
