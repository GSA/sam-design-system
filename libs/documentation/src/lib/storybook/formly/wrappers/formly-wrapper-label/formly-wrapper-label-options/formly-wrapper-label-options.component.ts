import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-wrapper-label-options',
  templateUrl: './formly-wrapper-label-options.component.html',
})
export class FormlyWrapperLabelOptionsComponent {
  @ViewChild('labelTemplate') labelTemplate: TemplateRef<any>;
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [];

  ngAfterViewInit() {
    this.fields = [
      {
        wrappers: ['label', 'description'],
        key: 'Input',
        type: 'input',
        templateOptions: {
          label: 'Input',
          description: 'testing desc',
          labelTemplate: this.labelTemplate,
          hideOptional: true,
          labelContentClass: 'margin-left-10',
          placeholder: 'eg: Acme Corporation',
        },
      },
    ];
  }
}
