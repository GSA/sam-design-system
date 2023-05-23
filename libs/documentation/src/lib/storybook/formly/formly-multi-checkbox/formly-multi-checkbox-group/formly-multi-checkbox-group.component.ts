import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  templateUrl: './formly-multi-checkbox-group.component.html',
  selector: 'sds-formly-multi-checkbox-group',
})
export class FormlyMultiCheckboxGroupComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields = [
    {
      key: 'entity',
      type: 'multicheckbox',
      templateOptions: {
        label: 'Grouped multi-checkbox',
        groupOptions: {
          'Contract Opportunities': [
            {
              key: 'DE1',
              value: 'Data entry',
              tagText: 'Tag',
            },
            {
              key: 'LD',
              value: 'Listing Data',
            },
          ],
          Entities: [
            {
              key: 'POR',
              value: 'Purpose of Registration',
            },
            {
              key: 'LBN',
              value: 'Legal Business Name',
              tooltipText: '<b>Assistance Listing</b><u>Tool tip with style</u>',
            },
          ],
        },
      },
    },
  ];
}
