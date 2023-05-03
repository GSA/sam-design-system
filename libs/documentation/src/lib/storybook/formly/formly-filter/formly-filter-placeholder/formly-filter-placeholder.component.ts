import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-filter-placeholder',
  templateUrl: './formly-filter-placeholder.component.html',
})
export class FormlyFilterPlaceholderComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'title',
      type: 'input',
      templateOptions: {
        label: 'Entity Name',
        placeholder: 'Placeholder',
      },
    },
  ];
}
