import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-wrapper-label-basic',
  templateUrl: './formly-wrapper-label-basic.component.html',
})
export class FormlyWrapperLabelBasicComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      wrappers: ['label', 'description'],
      key: 'Input',
      type: 'input',
      templateOptions: {
        label: 'Input',
        description: 'testing desc',

        hideOptional: true,
        labelContentClass: 'margin-left-10',
        placeholder: 'eg: Acme Corporation',
      },
    },
  ];
}
