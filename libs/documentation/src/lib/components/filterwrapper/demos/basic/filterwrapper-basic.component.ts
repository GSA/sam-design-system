import { Component } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  templateUrl: './filterwrapper-basic.component.html',
  styleUrls: ['./filterwrapper-basic.component.scss'],
  selector: `sds-filter-wrapper-demo`,
})
export class FilterWrapperBasic {
  form = new UntypedFormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      wrappers: ['filterwrapper'],
      key: 'Input',
      type: 'input',
      templateOptions: {
        label: 'Input',
        placeholder: 'eg: Acme Corporation',
        description: 'Description',
        required: true,
      },
    },
  ];
}
