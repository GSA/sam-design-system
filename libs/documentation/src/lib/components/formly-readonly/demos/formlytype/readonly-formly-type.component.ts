import { Component } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { FormlyUtilsService, SdsFormlyTypes } from '@gsa-sam/sam-formly';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-readonly-formly-type-demo',
  templateUrl: './readonly-formly-type.component.html',
})
export class ReadonlyFormlyTypeComponent {
  isReadOnlyMode = false;

  form = new UntypedFormGroup({});
  fields: FormlyFieldConfig[] = [
    {
      template: `<span class="text-error sds-small text-italic">
        *Due to techinical difficulties, we are currently only allowing payment through credit
        </span>`,
    },
    {
      type: SdsFormlyTypes.READONLY,
      defaultValue: 'Credit',
      templateOptions: {
        label: 'Payment Type',
        hideOptional: true,
      },
    },
    {
      type: SdsFormlyTypes.INPUT,
      templateOptions: {
        label: 'Card Number',
        placeholder: '1234-5678-9012-3456',
        required: true,
        maxLength: 16,
      },
    },
    {
      type: SdsFormlyTypes.INPUT,
      templateOptions: {
        label: 'Security Code',
        placeholder: '123',
        required: true,
        maxLength: 4,
      },
    },
    {
      type: SdsFormlyTypes.INPUT,
      templateOptions: {
        label: 'Zip Code',
        placeholder: '12345',
        required: true,
        maxLength: 5,
      },
    },
  ];

  toggleReadonlyMode() {
    this.isReadOnlyMode = !this.isReadOnlyMode;
    FormlyUtilsService.setReadonlyMode(this.isReadOnlyMode, this.fields);
  }
}
