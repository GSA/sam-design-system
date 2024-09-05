import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-text-area-maxlength',
  templateUrl: './formly-text-area-maxlength.component.html',
})
export class FormlyTextAreaMaxlengthComponent {
  formSmall = new FormGroup({});
  formMedium = new FormGroup({});
  formLarge = new FormGroup({});
  
  modelSmall: any = {};
  modelMedium: any = {};
  modelLarge: any = {};

  optionsSmall: FormlyFormOptions = {};
  optionsMedium: FormlyFormOptions = {};
  optionsLarge: FormlyFormOptions = {};

  fieldsSmall: FormlyFieldConfig[] = [
    {
      key: 'entity',
      type: 'textarea',
      props: {
        label: 'Small',
        maxLength: 50,
        size: 'small',
        required: true,
      },
    },
  ];

  fieldsMedium: FormlyFieldConfig[] = [
    {
      key: 'entity',
      type: 'textarea',
      props: {
        label: 'Medium',
        maxLength: 100,
        size: 'medium',
        required: true,
      },
    },
  ];

  fieldsLarge: FormlyFieldConfig[] = [
    {
      key: 'entity',
      type: 'textarea',
      props: {
        label: 'Large',
        maxLength: 200,
        size: 'large',
        required: true,
      },
    },
  ];
}
