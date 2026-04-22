import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
	standalone: false,
  selector: 'sds-formly-wrapper-template-options-hideoptional',
  templateUrl: './formly-wrapper-template-options-hideoptional.component.html',
})
export class FormlyWrapperTemplateOptionsHideoptionalComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'Keyword',
      type: 'input',
      props: {
        label: 'Entity',
        hideOptional: true,
      },
    },
  ];
}
