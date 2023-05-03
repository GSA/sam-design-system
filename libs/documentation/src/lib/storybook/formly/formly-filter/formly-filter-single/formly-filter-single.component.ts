import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-filter-single',
  templateUrl: './formly-filter-single.component.html',
})
export class FormlyFilterSingleComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'single.default.entity.title',
      type: 'input',
      templateOptions: {
        label: 'Entity Name',
        group: 'panel',
        placeholder: 'eg: Acme Corporation',
        description: 'Enter the name of your entity.',
        required: true,
      },
    },
  ];
}
