import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormlyFieldConfig, FormlyModule, FormlyFormOptions } from '@ngx-formly/core';
import { FormlyFieldTextAreaComponent } from './textarea';

@Component({
  selector: 'formly-test-textarea',
  template: `
    <formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>
  `,
})
class FormlyTextAreaComponent {
  form = new FormGroup({});
  fields: FormlyFieldConfig[];
  model: any;
  options: FormlyFormOptions;
}

describe('Formly Input Component', () => {
  let fixture: ComponentFixture<FormlyTextAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormlyTextAreaComponent, FormlyFieldTextAreaComponent],
      imports: [
        NoopAnimationsModule,
        
        ReactiveFormsModule,
        FormlyModule.forRoot({
          types: [
            {
              name: 'textarea',
              component: FormlyFieldTextAreaComponent,
            },
          ],
        }),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormlyTextAreaComponent);
  });

  it('should properly set the readonly value on text inputs', () => {
    const componentInstance = fixture.componentInstance;
    componentInstance.fields = [
        {
            key: 'text',
            type: 'textarea',
            templateOptions: {
              label: 'Formly input type textarea',
              placeholder: 'placeholder for text area',
             },
          },
    ];
    fixture.detectChanges();

    // assert
    const expectedField = fixture.debugElement.query(By.css('.usa-textarea'));
    expect(expectedField.nativeElement.placeholder).toBe('placeholder for text area');
  });
});
