import { Component } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  templateUrl: './multicheckbox-group.component.html',

  selector: `sds-formly-multicheckbox-group-demo`,
})
export class MultiCheckboxGroup {
  form = new UntypedFormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields = [
    {
      key: 'entity',
      type: 'multicheckbox',
      props: {
        label: 'Grouped multi-checkbox',
        groupOptions: {
          'Contract Opportunities': [
            {
              value: 'DE1',
              label: 'Data entry',
              tagText: 'Tag',
            },
            {
              value: 'LD',
              label: 'Listing Data',
            },
          ],
          Entities: [
            {
              value: 'POR',
              label: 'Purpose of Registration',
            },
            {
              value: 'LBN',
              label: 'Legal Business Name',
              tooltipText: '<b>Assistance Listing</b><u>Tool tip with style</u>',
            },
          ],
        },
      },
    },
  ];
}
