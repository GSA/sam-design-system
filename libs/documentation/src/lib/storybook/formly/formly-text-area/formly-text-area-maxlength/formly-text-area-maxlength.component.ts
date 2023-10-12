import { AfterViewInit, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-text-area-maxlength',
  templateUrl: './formly-text-area-maxlength.component.html',
})
export class FormlyTextAreaMaxlengthComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'entity',
      type: 'textarea',
      props: {
        label: 'Entity Description',
        maxlength: 50,
      },
    },
  ];
}
