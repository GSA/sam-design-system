import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';

export interface SdsFormlyModalData {
  fields: FormlyFieldConfig[];
  // originalFields: FormlyFieldConfig[];
  // originalModel: any;
  cancel?: string;
  form?: FormGroup;
  model: any;
  options?: FormlyFormOptions;
  submit?: string;
  subtitle?: string;
  title?: string;
}
