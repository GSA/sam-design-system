import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UntypedFormGroup, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormlyFieldConfig, FormlyModule, FormlyFormOptions } from '@ngx-formly/core';
import { FormlyFieldTextAreaComponent } from './textarea';

@Component({
  selector: 'formly-test-textarea',
  template: ` <formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form> `,
})
class FormlyTextAreaComponent {
  form = new UntypedFormGroup({});
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

  it('should display correct initial value for character count', () => {
    const componentInstance = fixture.componentInstance;
    componentInstance.fields = [
      {
        key: 'text',
        type: 'textarea',
        id: 'testCharacterCount',
        templateOptions: {
          label: 'Formly input type textarea',
          placeholder: 'placeholder for text area',
          maxLength: 50,
        },
      },
    ];
    fixture.detectChanges();

    // assert
    const expectedField = fixture.debugElement.query(By.css('#testCharacterCount-character-count'));
    expect((expectedField.nativeElement as HTMLSpanElement).innerText.trim()).toBe('50 characters allowed');
  });

  it('should update character count value on input', () => {
    const componentInstance = fixture.componentInstance;
    componentInstance.fields = [
      {
        key: 'text',
        type: 'textarea',
        id: 'testCharacterCount',
        templateOptions: {
          label: 'Formly input type textarea',
          placeholder: 'placeholder for text area',
          maxLength: 50,
        },
      },
    ];
    fixture.detectChanges();

    componentInstance.form.get('text').setValue('Hello');
    fixture.detectChanges();

    const characterCountText: HTMLSpanElement = fixture.debugElement.query(
      By.css('#testCharacterCount-character-count')
    ).nativeElement;
    expect(characterCountText.innerText.trim()).toBe('45 characters left');
  });

  it('should truncate value when initial value is greate than max length', () => {
    const componentInstance = fixture.componentInstance;
    componentInstance.fields = [
      {
        key: 'text',
        type: 'textarea',
        id: 'testCharacterCount',
        defaultValue: 'Hello World',
        templateOptions: {
          label: 'Formly input type textarea',
          placeholder: 'placeholder for text area',
          maxLength: 5,
        },
      },
    ];
    fixture.detectChanges();

    const characterCountText: HTMLSpanElement = fixture.debugElement.query(
      By.css('#testCharacterCount-character-count')
    ).nativeElement;
    const characterCountInput: HTMLTextAreaElement = fixture.debugElement.query(By.css('#testCharacterCount'))
      .nativeElement;
    expect(characterCountText.innerText.trim()).toBe('0 characters left');
    expect(characterCountInput.value).toBe('Hello');
  });
});
