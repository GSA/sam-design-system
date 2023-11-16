import { Component } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { multiCheckboxRequired } from '@gsa-sam/sam-formly';

@Component({
  templateUrl: './multicheckbox-basic.component.html',
  styleUrls: ['./multicheckbox-basic.component.scss'],
  selector: `sds-formly-multicheckbox-basic-demo`,
})
export class MultiCheckboxBasic {
  form = new UntypedFormGroup({});
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
            value: 'vet',
            label: 'Veteran Owned',
            tagText: 'Tag',
          },
          {
            value: 'women',
            label: 'Women Owned (<a href="javascript:void(0)">HTML content for label</a>)',
          },
          {
            value: 'minority',
            label: 'Minority Owned',
          },
        ],
      },
    },
  ];
}
