import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  templateUrl: './group-accordion.component.html',
  selector: `sds-groupwrappers-accordion-demo`,
})

export class GroupAccordion {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'Input',
      type: 'input',
      templateOptions: {
        label: 'Input',
        group: 'accordion',
        placeholder: 'Placeholder',
        description: 'Description',
        required: true,
      },
    },
  ];

  multipleFormGroupModel:any ={};
  multipleFormGroupFields: FormlyFieldConfig[] = [
    {
      key: 'filters',
      templateOptions: {
        label: 'Entity Information',
        group: 'accordion'
      },
      fieldGroup: [
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
              { label: 'Wage Determination', value: 'wd' }
            ]
          }
        },
        {
          key: 'multiple.default.entity.title',
          type: 'input',
          templateOptions: {
            label: 'Entity Name',
            placeholder: 'Acme Corporation',
            description: 'Enter the name of your entity.',
            required: true
          }
        }
      ]
    }
  ];
}
