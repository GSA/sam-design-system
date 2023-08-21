import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-checkbox-nested',
  templateUrl: './formly-checkbox-nested.component.html',
})
export class FormlyCheckboxNestedComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      fieldGroup: [
        {
          key: 'entity.downloadableLink',
          type: 'checkbox',
          templateOptions: {
            label: 'Send me a link to a downloadable file with updated search results',
            required: true,
          },
        },
        {
          className: 'grid-row margin-left-4 margin-top-1',
          key: 'entity.linkOptions',
          type: 'radio',
          templateOptions: {
            options: [
              {
                value: 'CSV',
                label: 'CSV',
              },
              {
                value: 'PDF',
                label: 'PDF',
              },
            ],
          },
        },
      ],
    },
  ];
}
