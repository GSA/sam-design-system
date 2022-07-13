import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'gsa-sam-checkbox-radio',
  templateUrl: './checkbox-radio.component.html',
  styleUrls: ['./checkbox-radio.component.scss'],
})
export class CheckboxRadio {
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
          wrappers: ['panel'], 
          key: 'entity.linkOptions',
          type: 'radio',
          templateOptions: {
            options: [
              {
                value: 'CSV',
                label: 'CSV'
              },
              {
                value: 'PDF',
                label: 'PDF'
              }
            ]
          }
        }
      ]
    }, 
  ] 
}
