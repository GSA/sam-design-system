import { Component } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  templateUrl: './accordionwrapper-basic.component.html',
  styleUrls: ['./accordionwrapper-basic.component.scss'],
  selector: `sds-accordionwrapper-basic-demo`,
})
export class AccordionWrapperBasic {
  form = new UntypedFormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      wrappers: ['accordionwrapper'],
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
