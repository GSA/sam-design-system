import { Component } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
@Component({
  templateUrl: './update-on-inheritance.component.html',
  selector: `sds-update-on-inheritance-demo`,
})
export class UpdateOnInheritanceComponent {
  form = new UntypedFormGroup({});
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
              props: {
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
              props: {
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
              props: {
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
              props: {
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
