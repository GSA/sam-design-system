import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-wrapper-description-options',
  templateUrl: './formly-wrapper-description-options.component.html',
})
export class FormlyWrapperDescriptionOptionsComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      wrappers: ['description'],
      key: 'Description',
      type: 'input',
      templateOptions: {
        description:
          'Please describe your specific situation. <ul><li>my current registration</li><li>My legal business name has been changed</li></ul>',
        placeholder: 'eg: Acme Corporation',
      },
    },
  ];
}
