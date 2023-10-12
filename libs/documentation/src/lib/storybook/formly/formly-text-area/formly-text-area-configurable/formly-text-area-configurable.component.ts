import { AfterViewInit, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-text-area-configurable',
  templateUrl: './formly-text-area-configurable.component.html',
})
export class FormlyTextAreaConfigurableComponent {
  @Input('config')
  set config(config: object) {
    const temp = this.fields[0];
    temp['props'] = config;
    this.fields = [temp];
  }

  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'entity',
      type: 'textarea',
      props: {
        label: 'Entity Description',
        placeholder: 'eg: Acme Corporation is a federal contractor.',
        description: 'Enter the description for your entity.',
        required: true,
        maxlength: 50,
      },
    },
  ];
}
