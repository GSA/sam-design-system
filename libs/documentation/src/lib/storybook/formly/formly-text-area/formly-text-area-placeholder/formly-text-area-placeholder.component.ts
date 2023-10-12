import { AfterViewInit, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-text-area-placeholder',
  templateUrl: './formly-text-area-placeholder.component.html',
})
export class FormlyTextAreaPlaceholderComponent {
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
      },
    },
  ];
}
