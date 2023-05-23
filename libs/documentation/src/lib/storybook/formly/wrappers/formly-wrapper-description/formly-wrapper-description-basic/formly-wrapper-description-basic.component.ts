import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-wrapper-description-basic',
  templateUrl: './formly-wrapper-description-basic.component.html',
})
export class FormlyWrapperDescriptionBasicComponent {
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
        placeholder: 'eg: Acme Corporation',
      },
    },
  ];
}
