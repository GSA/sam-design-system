import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-file-info-options',
  templateUrl: './formly-file-info-options.component.html',
})
export class FormlyFileinfoOptionsComponent {
  results: any = {};
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'fileType',
      type: 'fileinfo',
      templateOptions: {
        options: [
          { value: 'Default', key: 'CSV', description: '-Limited to 5000' },
          { value: 'Full', key: 'ZIP', description: '-Limited to 10,000' },
          { value: 'Case', key: 'PDF', description: '-Limited to 8000' },
          { value: 'All', key: 'XLS', description: '-Limited to 45000' },
        ],
      },
    },
  ];
}
