import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  templateUrl: './descriptionwrapper-basic.component.html',
  selector: `sds-descriptionwrapper-demo`,
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
    }
  ];
}
