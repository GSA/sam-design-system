import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'gsa-sam-formly-rich-text-editor',
  templateUrl: './formly-rich-text-editor.component.html',
  styleUrls: ['./formly-rich-text-editor.component.scss'],
})
export class FormlyRichTextEditorComponent {
  form = new UntypedFormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'editor',
      type: 'rich-text-editor',
      templateOptions: {
        minHeight: 10,
        maxHeight: 31,
      },

      modelOptions: {
        updateOn: 'change',
      },
    },
  ];
}
