import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-wrapper-group-basic',
  templateUrl: './formly-wrapper-group-basic.component.html',
})
export class FormlyWrapperGroupBasicComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      wrappers: ['group', 'description'],
      key: 'Input',
      type: 'input',
      templateOptions: {
        group: 'Input',
        description: 'testing desc',

        hideOptional: true,
        groupContentClass: 'margin-left-10',
        placeholder: 'eg: Acme Corporation',
      },
    },
  ];
}
