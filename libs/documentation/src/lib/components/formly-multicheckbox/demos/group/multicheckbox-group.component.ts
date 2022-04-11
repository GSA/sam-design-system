import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  templateUrl: './multicheckbox-group.component.html',

  selector: `sds-formly-multicheckbox-group-demo`,
})
export class MultiCheckboxGroup {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields = [
    {
      key: 'group',
      type: 'multicheckbox',
      templateOptions: {
        label: 'Grouped multi-checkbox',
        options: [
          {
            key: 'POR',
            value: 'Purpose of Registration',
            group: 'Entities',
          },

          {
            key: 'RD',
            value: 'Report Data',
            group: 'Contract Opportunities',
          },
          {
            key: 'DE1',
            value: 'Data entry',
            group: 'Contract Opportunities',
          },
          {
            key: 'LD',
            value: 'Listing Data',
            group: 'Assistance Listings',
          },
          {
            key: 'LBN',
            value: 'Legal Business Name',
            group: 'Entities',
          },
          {
            key: 'LF',
            value: 'Listing File',
            group: 'Assistance Listings',
          },
        ],
      },
    },
  ];
}
