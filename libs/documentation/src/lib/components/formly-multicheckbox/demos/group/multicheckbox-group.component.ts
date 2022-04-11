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
            key: 'AL1',
            value: 'Alabama1',
            group: 'Entities',
          },

          {
            key: 'AL3',
            value: 'Alabama3',
            group: 'Contract Opportunities',
          },
          {
            key: 'AL4',
            value: 'Alabama4',
            group: 'Contract Opportunities',
          },
          {
            key: 'AL5',
            value: 'Alabama5',
            group: 'Assistance Listings',
          },
          {
            key: 'AL2',
            value: 'Alabama2',
            group: 'Entities',
          },
          {
            key: 'AL6',
            value: 'Alabama6',
            group: 'Assistance Listings',
          },
        ],
      },
    },
  ];
}
