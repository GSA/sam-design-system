import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { UntypedFormGroup } from '@angular/forms';

export interface SdsFormlyDialogData {
  fields: FormlyFieldConfig[];
  cancel?: string;
  form?: UntypedFormGroup;
  model?: object;
  options?: FormlyFormOptions;
  submit?: string;
  subtitle?: string;
  title?: string;
  disableSubmitButtonEnabled?: boolean;
}
