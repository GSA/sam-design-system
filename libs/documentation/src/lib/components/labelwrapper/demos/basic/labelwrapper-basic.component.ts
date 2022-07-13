import { Component, ViewChild, TemplateRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  templateUrl: './labelwrapper-basic.component.html',
  selector: `sds-labelwrapper-basic-demo`,
})
export class LabelWrapperBasic {
  @ViewChild('labelTemplate') labelTemplate: TemplateRef<any>;
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [];

  ngAfterViewInit() {
    this.fields = [
      {
        wrappers: ['label'],
        key: 'Input',
        type: 'input',
        templateOptions: {
          label: 'Input',
          labelTemplate: this.labelTemplate,
          hideOptional: true,
          labelContentClass: 'margin-left-10',
          placeholder: 'eg: Acme Corporation',
        },
      },
    ];
  }
}
