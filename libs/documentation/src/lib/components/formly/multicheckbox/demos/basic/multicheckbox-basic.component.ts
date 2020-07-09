import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  templateUrl: './multicheckbox-basic.component.html',
  styleUrls: ['./multicheckbox-basic.component.scss']
})

export class MultiCheckboxBasic {
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
        hideSelectAll: true,
        options: [
          {
            key: 'vet',
            value: 'Veteran Owned',
            disabled: true
          },
          {
            key: 'women',
            value: 'Women Owned',
            disabled: true
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
