import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
@Component({
  templateUrl: './templateoption-hideOptional.component.html',
  selector: `sds-templateoptions-hideoptional-demo`,
})
export class TemplateOptionHideOptional {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'Keyword',
      type: 'input',
      templateOptions: {
        label: 'Entity',
       hideOptional: true
     
      }
    }
  ];
}
