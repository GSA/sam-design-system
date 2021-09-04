import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  templateUrl: './textarea-basic.component.html',
  styleUrls: ['./textarea-basic.component.scss'],
  selector: `sds-formly-textarea-basic-demo`,
})

export class TextAreaBasic {
  form = new FormGroup({});
  model: any = { entity: '123 tesing text are highlightin5  testing hgygyybbj hvyfy' };
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'entity',
      type: 'textarea',
      templateOptions: {
        label: 'Entity Description',
        placeholder: 'eg: Acme Corporation is a federal contractor.',
        description: 'Enter the description for your entity.',
        required: true,
        maxLength: 950,
        regexPattern: /^[a-zA-Z ]*$/,

      },
    },
  ];

  onModelChange($event) {
    console.log($event);
  }
}
