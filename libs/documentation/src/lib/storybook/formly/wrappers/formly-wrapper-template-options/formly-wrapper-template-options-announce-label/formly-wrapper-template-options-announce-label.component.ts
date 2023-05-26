import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-wrapper-template-options-announce-label',
  templateUrl: './formly-wrapper-template-options-announce-label.component.html',
})
export class FormlyWrapperTemplateOptionsAnnounceLabelComponent {
   form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'Keyword',
      type: 'input',
      templateOptions: {
        label: 'Entity',
        announceLabel: true,
      },
    },
  ];
}