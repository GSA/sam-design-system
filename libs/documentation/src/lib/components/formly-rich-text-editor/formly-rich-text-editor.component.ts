import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'gsa-sam-formly-rich-text-editor',
  templateUrl: './formly-rich-text-editor.component.html',
  styleUrls: ['./formly-rich-text-editor.component.scss']
})
export class FormlyRichTextEditorComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'editor',
      type: 'rich-text-editor',
      templateOptions: {
        minHeight: 20
      },

      modelOptions: {
        updateOn: 'change',
      },
      lifecycle: {
        onChanges: function (form, field) {
          field.formControl.valueChanges.subscribe((v) => {
            console.log(form['controls']['entity']);
          });
        },
      },
    },
  ];
}
