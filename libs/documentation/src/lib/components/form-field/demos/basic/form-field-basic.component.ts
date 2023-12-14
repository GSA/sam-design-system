import { Component } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  templateUrl: './form-field-basic.component.html',
  styleUrls: ['./form-field-basic.component.scss'],
  selector: `sds-form-field-basic-demo`,
})
export class FormFieldBasic {
  form = new UntypedFormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      wrappers: ['form-field'],
      key: 'Input',
      type: 'input',
      props: {
        label: 'Input',
        placeholder: 'eg: Acme Corporation',
        description: 'Description',
        required: true,
      },
    },
  ];
}
