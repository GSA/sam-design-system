import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'gsa-sam-checkbox-radio',
  templateUrl: './checkbox-radio.component.html',
  styleUrls: ['./checkbox-radio.component.scss']
})
export class CheckboxRadio {

  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      wrappers: ['panel'],
      fieldGroupClassName: 'grid-row',
      fieldGroup: [{
        className: 'margin-left-4',
        key: 'entity.file',
        type: 'radio',
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
