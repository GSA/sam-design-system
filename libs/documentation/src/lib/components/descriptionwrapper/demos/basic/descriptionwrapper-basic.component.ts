import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  templateUrl: './descriptionwrapper-basic.component.html'
})

export class DescriptionWrapperBasic {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      wrappers: ['description'],
      key: 'Description',
      type: 'input',
      templateOptions: {
        description: 'Input description',
        placeholder: 'Placeholder'
      },
    },

    {
      wrappers: ['label','description'],
      key: 'InputDescription',
      type: 'input',
      templateOptions: {
        label: 'Input',
        description: 'Input description',
        placeholder: 'Placeholder'
      },
    },
  ];
}
