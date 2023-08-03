import { Component } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
@Component({
  templateUrl: './templateoption-hideOptional.component.html',
  selector: `sds-templateoptions-hideoptional-demo`,
})
export class TemplateOptionHideOptional {
  form = new UntypedFormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'Keyword',
      type: 'input',
      templateOptions: {
        label: 'Entity',
        hideOptional: true,
      },
    },
  ];
}
