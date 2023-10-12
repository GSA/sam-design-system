import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-editor-label',
  templateUrl: './formly-editor-label.component.html',
})
export class FormlyEditorLabelComponent {
  textModel = 'test';
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'searchkey',
      type: 'editor',
      props: {
        label: 'Search',
      },
    },
  ];
}
