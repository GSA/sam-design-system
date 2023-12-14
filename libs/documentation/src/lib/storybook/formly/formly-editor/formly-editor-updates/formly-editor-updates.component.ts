import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-editor-updates',
  templateUrl: './formly-editor-updates.component.html',
})
export class FormlyEditorUpdatesComponent {
  form = new FormGroup({});
  modelOnBlur = {};
  blurFields: FormlyFieldConfig[] = [
    {
      key: 'searchText',
      type: 'editor',
      props: {
        label: 'Search Text',
        hideOptional: true,
        placeholder: 'eg: type text..',
        regex: /hello/gm,
        validateOnBlur: true,
      },
    },
  ];
}
