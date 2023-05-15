import { AfterViewInit, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-text-area-configurable',
  templateUrl: './formly-text-area-configurable.component.html',
})
export class FormlyTextAreaConfigurableComponent {
  form = new FormGroup({});
  model: any = {};
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
        maxLength: 50,
      },
    },
  ];
}
