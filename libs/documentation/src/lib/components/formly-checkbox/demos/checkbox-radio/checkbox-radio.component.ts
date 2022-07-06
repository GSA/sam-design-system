import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'gsa-sam-checkbox-radio',
  templateUrl: './checkbox-radio.component.html',
  styleUrls: ['./checkbox-radio.component.css']
})
export class CheckboxRadio {

  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'entity.linkDownload',
      wrappers: ['panel'],
      templateOptions: {
        label: 'Send me a link to a downloadable file with updated search results',
      },
      fieldGroup: [{
        key: 'entity.file',
        type: 'radio',
        className: 'margin-left-auto',
        templateOptions: {
          required: true,
          options: [
            {
              key: 'CSV',
              tooltipText: 'CSV',
              value: 'CSV',
            },
            {
              key: 'PDF',
              tooltipText: 'PDF',
              value: 'PDF',
            }
          ],
        },
      }]
    }
  ]
}
