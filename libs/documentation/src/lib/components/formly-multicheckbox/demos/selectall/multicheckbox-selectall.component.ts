import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  templateUrl: './multicheckbox-selectall.component.html',
  selector: `sds-formly-multicheckbox-selectall-demo`,
})

export class MultiCheckboxSelectAll {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'domains',
      type: 'multicheckbox',
      defaultValue: { cfda: true, opp: true, fh: false },
      templateOptions: {
        label: 'Domains',
        description: 'Select any socio-economic categories which reflect the current status of your entity',
        required: true,
        selectAllOption: true,
        options: [
          {
            key: 'cfda',
            value: 'Assistance Listing',
          },
          {
            key: 'opp',
            value: 'Contract Opportunities',
          },
          {
            key: 'ei',
            value: 'Entity Information'
          }, {
            key: 'fh',
            value: 'Federal Hierarchy'
          },
          {
            key: 'wd',
            value: 'Wage Determinations'
          }
        ]
      },
    },
  ];
}
