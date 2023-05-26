import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-wrapper-template-options-updateon',
  templateUrl: './formly-wrapper-template-options-updateon.component.html',
})
export class FormlyWrapperTemplateOptionsUpdateonComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'grandParent',
      modelOptions: {
        updateOn: 'blur',
      },
      fieldGroup: [
        {
          key: 'parent1',
          fieldGroup: [
            {
              key: 'parent1NoUpdateOn',
              type: 'input',
              templateOptions: {
                label: 'Parent 1 No UpdateOn Specified',
                description: 'No updateOn specified, inherits from ancestors, will update onBlur',
                required: true,
              },
            },
            {
              key: 'updateOnChange',
              type: 'input',
              modelOptions: {
                updateOn: 'change',
              },
              templateOptions: {
                label: "updateOn: 'change'",
                description: 'change specified as updateOn option, will ignore updateOn of ancestors',
                required: true,
              },
            },
          ],
        },
        {
          key: 'parent2',
          fieldGroup: [
            {
              key: 'parent2NoUpdateOn',
              type: 'input',
              templateOptions: {
                label: 'Parent 2 No UpdateOn Specified',
                description: 'No updateOn specified, inherits from ancestors, will update onBlur',
                required: true,
              },
            },
            {
              key: 'updateOnSubmit',
              type: 'input',
              modelOptions: {
                updateOn: 'submit',
              },
              templateOptions: {
                label: "updateOn: 'submit'",
                description: 'submit specified as updateOn option, will ignore updateOn of ancestors',
                required: true,
              },
            },
          ],
        },
      ],
    },
  ];

  submit() {
    console.log('form submitted');
  }
}
