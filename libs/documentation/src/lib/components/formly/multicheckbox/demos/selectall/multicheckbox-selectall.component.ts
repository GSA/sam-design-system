import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  templateUrl: './multicheckbox-selectall.component.html',
})

export class MultiCheckboxSelectAll {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'entity.socioeconomic',
      type: 'multicheckbox',
      templateOptions: {
        label: 'Socio-Economic Status',
        description: 'Select any socio-economic categories which reflect the current status of your entity',
        required: true,
        selectAllOption: true,
        options: [
          {
            key: 'vet',
            value: 'Veteran Owned',
          },
          {
            key: 'women',
            value: 'Women Owned',
          },
          {
            key: 'minority',
            value: 'Minority Owned'
          }
        ]
      },
    },
  ];
}
