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
            },
          ],
        },
      },
    },
  ];
}
