import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  templateUrl: './select-basic.component.html',
  styleUrls: ['./select-basic.component.scss'],
  selector: `sds-formly-select-demo`,
})

export class SelectBasic {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'entity.type',
      type: 'select',
      templateOptions: {
        label: 'Entity Type',
        description: 'Select the entity type.',
        required: true,
        options: [
          { label: 'Contract Opportunities', value: 'co' },
          { label: 'Entity Information', value: 'ei' },
          { label: 'Assistance Listings', value: 'al' },
          { label: 'Contract Data', value: 'cd' },
          { label: 'Federal Hierarchy', value: 'fh' },
          { label: 'Wage Determination', value: 'wd' },
        ],
      },
    },
  ];
}
