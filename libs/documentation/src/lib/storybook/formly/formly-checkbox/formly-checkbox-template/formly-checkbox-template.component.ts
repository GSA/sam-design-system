import { AfterViewInit, Component, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-checkbox-template',
  templateUrl: './formly-checkbox-template.component.html',
})
export class FormlyCheckboxTemplateComponent implements AfterViewInit {
  constructor() {}

  @ViewChild('checkboxTemplate') checkboxTemplate: TemplateRef<any>;

  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'entity.userAgreement',
      type: 'checkbox',
      props: {
        label: 'I agree',
        required: true,
      },
    },
  ];

  ngAfterViewInit() {
    this.fields[0].props.template = this.checkboxTemplate;
  }
}
