import { AfterViewInit, Component, TemplateRef, ViewChild } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  templateUrl: './checkbox-template.component.html',
  selector: `sds-formly-checkbox-template-demo`,
})
export class CheckboxTemplate implements AfterViewInit {
  constructor() {}

  @ViewChild('checkboxTemplate') checkboxTemplate: TemplateRef<any>;

  form = new UntypedFormGroup({});
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
