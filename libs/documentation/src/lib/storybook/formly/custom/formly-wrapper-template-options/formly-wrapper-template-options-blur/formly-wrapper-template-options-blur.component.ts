import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-wrapper-template-options-blur',
  templateUrl: './formly-wrapper-template-options-blur.component.html',
})
export class FormlyWrapperTemplateOptionsBlurComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'Keyword',
      type: 'input',
      modelOptions: {
        updateOn: 'blur',
      },
      props: {
        label: 'Keyword',
        placeholder: 'eg: Acme Corporation',
        description: 'Description',
        required: true,
      },
    },
  ];
}
