import { Component } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  templateUrl: './group-panel.component.html',
  selector: `sds-groupwrappers-panel-demo`,
})
export class GroupPanel {
  form = new UntypedFormGroup({});
  panelModel: any = {};
  options: FormlyFormOptions = {};
  panelFields: FormlyFieldConfig[] = [
    {
      key: 'PanelInput',
      type: 'input',
      props: {
        label: 'Input',
        group: 'panel',
        placeholder: 'eg: Acme Corporation',
        description: 'Description',
        required: true,
      },
    },
  ];

  multipleFormGroupModel: any = {};
  multipleFormGroupFields: FormlyFieldConfig[] = [
    {
      key: 'filters',
      props: {
        label: 'Entity Information',
        group: 'panel',
      },
      fieldGroup: [
        {
          key: 'entity.type',
          type: 'select',
          props: {
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
        {
          key: 'multiple.default.entity.title',
          type: 'input',
          props: {
            label: 'Entity Name',
            placeholder: 'eg: Acme Corporation',
            description: 'Enter the name of your entity.',
            required: true,
          },
        },
      ],
    },
  ];
}
