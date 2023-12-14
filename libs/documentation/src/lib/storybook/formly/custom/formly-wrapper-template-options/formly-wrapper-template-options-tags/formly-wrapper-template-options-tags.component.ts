import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-wrapper-template-options-tags',
  templateUrl: './formly-wrapper-template-options-tags.component.html',
})
export class FormlyWrapperTemplateOptionsTagsComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'entity',
      type: 'input',
      props: {
        label: 'Entity',
        tagText: 'SAM',
      },
    },
  ];

  fieldsTagsColor: FormlyFieldConfig[] = [
    {
      key: 'entitytag',
      type: 'input',
      props: {
        label: 'Entity',
        tagText: 'DUNS',
        tagClass: 'sds-tag--info-purple',
      },
    },
  ];
}
