import { AfterViewInit, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-text-area-required',
  templateUrl: './formly-text-area-required.component.html',
})
export class FormlyTextAreaRequiredComponent {
  @Input('config')
  set config(config: object) {
    const temp = this.fields[0];
    temp['templateOptions'] = config;
    this.fields = [temp];
  }

  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'entity',
      type: 'textarea',
      templateOptions: {
        label: 'Entity Description',
        required: true,
      },
    },
  ];

  onModelChange($event) {
    console.log($event);
  }
}