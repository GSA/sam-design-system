import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { multiCheckboxRequired } from '@gsa-sam/sam-formly';

@Component({
  templateUrl: './formly-multi-checkbox-basic.component.html',
  selector: 'sds-formly-multi-checkbox-basic',
})
export class FormlyMultiCheckboxBasicComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'entity.socioeconomic',
      type: 'multicheckbox',
      validators: {
        required: multiCheckboxRequired,
      },
      props: {
        label: 'Socio-Economic Status',
        description: 'Select any socio-economic categories which reflect the current status of your entity',
        required: true,
        options: [
          {
            key: 'vet',
            value: 'Veteran Owned',
            tagText: 'Tag',
          },
          {
            key: 'women',
            value: 'Women Owned (<a href="javascript:void(0)">HTML content for label</a>)',
          },
          {
            key: 'minority',
            value: 'Minority Owned',
          },
        ],
      },
    },
  ];
}