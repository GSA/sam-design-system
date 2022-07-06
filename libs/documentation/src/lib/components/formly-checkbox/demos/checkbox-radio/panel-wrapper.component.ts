import { Component } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-panel',
  template: `
   <form [formGroup]="form">
    <!-- <input type="checkbox" id="vehicle1" name="vehicle1" value="vehicle1">
    <label for="vehicle1">{{ to.label }}</label> -->
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


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */