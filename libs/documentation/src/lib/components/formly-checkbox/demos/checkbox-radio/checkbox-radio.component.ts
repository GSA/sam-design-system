import { Component } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'gsa-sam-checkbox-radio',
  templateUrl: './checkbox-radio.component.html',
  styleUrls: ['./checkbox-radio.component.scss'],
})
export class CheckboxRadio {
  form = new UntypedFormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      fieldGroup: [
        {
          key: 'entity.downloadableLink',
          type: 'checkbox',
          props: {
            label: 'Send me a link to a downloadable file with updated search results',
            required: true,
          },
        },
        {
          className: 'grid-row margin-left-4 margin-top-1',
          key: 'entity.linkOptions',
          type: 'radio',
          props: {
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
