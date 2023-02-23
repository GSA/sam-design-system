import { Component } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  templateUrl: './input-optional.component.html',
  styleUrls: ['./input-optional.component.scss'],
  selector: `sds-formly-input-optional-demo`,
})
export class InputOptional {
  form = new UntypedFormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'referenceNumber',
      type: 'input',
      templateOptions: {
        label: 'Reference Number',
        placeholder: 'A123456',
        description: 'If you have your own reference number you can add it here.',
      },
    },
    {
      key: 'search',
      type: 'input',
      templateOptions: {
        label: 'Search',
        placeholder: 'A123456',
        disabled: true,
        description: 'Type here to search',
      },
    },
  ];
}
