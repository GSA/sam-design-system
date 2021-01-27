import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
@Component({
  templateUrl: './templateoption-expand.component.html',
  selector: `sds-templateoptions-expand-demo`,
})
export class TemplateOptionExpand {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'entity',
      type: 'input',
      templateOptions: {
        label: 'Entity',
        expand: true,
        group:'accordion'
      
      }
    }
  ];
}
