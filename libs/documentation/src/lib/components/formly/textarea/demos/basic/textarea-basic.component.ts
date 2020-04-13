import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  templateUrl: './textarea-basic.component.html',
  styleUrls: ['./textarea-basic.component.scss']
})

export class TextAreaBasic {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'entity.description',
      type: 'textarea',
      templateOptions: {
        label: 'Entity Description',
        placeholder: 'Acme Corporation is a federal contractor.',
        description: 'Enter the description for your entity.',
        required: true,
      },
    },
  ];
}
