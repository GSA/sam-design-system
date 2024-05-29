import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-file-info-basic',
  templateUrl: './formly-file-info-basic.component.html',
})
export class FormlyFileinfoBasicComponent {
  results: any = {};
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'fileType',
      type: 'fileinfo',
      props: {
        label: 'Select file type',
        hideOptional: true,
        options: [
          { label: 'Default', value: 'CSV', description: '-Limited to 5000' },
          { label: 'Full', value: 'ZIP', description: '-Limited to 10,000' },
          { label: 'Case', value: 'PDF', description: '-Limited to 8000' },
          { label: 'All', value: 'XLS', description: '-Limited to 45000' },
        ],
      },
    },
  ];
}
