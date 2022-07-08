import { Component } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-panel',
  template: `
    <form [formGroup]="form">
      <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>
      <div class="card-body">
        <ng-container #fieldComponent></ng-container>
      </div>
    </form>
  `,
})
export class PanelWrapperComponent extends FieldWrapper {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'entity.downloadableLink',
      type: 'checkbox',
      templateOptions: {
        label: 'Send me a link to a downloadable file with updated search results',
        required: true,
      },
    },
  ];
}
