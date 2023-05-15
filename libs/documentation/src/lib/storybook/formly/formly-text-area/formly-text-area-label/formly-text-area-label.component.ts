import { AfterViewInit, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-text-area-label',
  templateUrl: './formly-text-area-label.component.html',
})
export class FormlyTextAreaLabelComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'entity',
      type: 'textarea',
      templateOptions: {
        label: 'Entity Description',
      },
    },
  ];
}
