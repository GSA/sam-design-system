import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  templateUrl: './templateoptions-basic.component.html'
})

export class TemplateOptionsBasic {
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
      templateOptions: {
        label: 'Keyword',
        placeholder: 'Placeholder',
        description: 'Description',
        required: true,
      },
    },
  ];
}
