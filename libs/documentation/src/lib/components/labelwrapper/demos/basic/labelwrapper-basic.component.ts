import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  templateUrl: './labelwrapper-basic.component.html'
})

export class LabelWrapperBasic {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      wrappers: ['label'],
      key: 'Input',
      type: 'input',
      templateOptions: {
        label: 'Input',
        placeholder: 'Placeholder'
      },
    },
  ];
}
