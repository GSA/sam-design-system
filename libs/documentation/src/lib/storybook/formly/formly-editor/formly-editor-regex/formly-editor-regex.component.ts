import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-editor-regex',
  templateUrl: './formly-editor-regex.component.html',
})
export class FormlyEditorRegexComponent {
  textModel = 'test';
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'searchkey',
      type: 'editor',
      props: {
        regex: /hello/gm,
      },
    },
  ];
}
