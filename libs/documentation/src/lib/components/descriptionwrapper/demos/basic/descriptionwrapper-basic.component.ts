import { Component } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  templateUrl: './descriptionwrapper-basic.component.html',
  selector: `sds-descriptionwrapper-demo`,
})
export class DescriptionWrapperBasic {
  form = new UntypedFormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      wrappers: ['description'],
      key: 'Description',
      type: 'input',
      templateOptions: {
        description: 'Input description',
        placeholder: 'eg: Acme Corporation',
      },
    },
  ];
}
