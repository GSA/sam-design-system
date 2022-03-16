import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'gsa-sam-radio-horizontal',
  templateUrl: './radio-horizontal.component.html',
  styleUrls: ['./radio-horizontal.component.scss']
})
export class RadioHorizontalComponent{


  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'entity.taxFilingStatus',
      type: 'radio',

      templateOptions: {
        label: 'Are you registering an entity?',
        description:
          'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
        required: true,
        options: [
          {
            key: 'yes',
            value: 'Yes',
          },
          {
            key: 'no',
            value: 'No',
          }
        ],
        horizontal: true
      },
      modelOptions: {
        updateOn: 'blur',
      },
      lifecycle: {
        onChanges: function (form, field) {
          field.formControl.valueChanges.subscribe((v) => {
            console.log(form['controls']['entity']);
          });
        },
      },
    },
  ];

  onModelChange($event) {
    console.log($event);
  }
}
