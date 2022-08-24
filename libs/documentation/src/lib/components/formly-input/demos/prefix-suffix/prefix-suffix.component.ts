import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-input-prefix-suffix-demo',
  templateUrl: './prefix-suffix.component.html',
  styleUrls: ['./prefix-suffix.component.css']
})
export class InputPrefixSuffix {
  prefix: string = '$';
  suffix: string = 'lbs.';
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'entity.title',
      type: 'input',
      templateOptions: {
        label: 'Input',
        required: true,
        prefix: this.prefix,
        suffix: this.suffix,
      },
    },
  ];

}
