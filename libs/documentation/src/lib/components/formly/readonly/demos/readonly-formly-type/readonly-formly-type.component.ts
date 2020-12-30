import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyUtilsService, SdsFormlyTypes } from '@gsa-sam/sam-formly';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'gsa-sam-readonly-formly-type',
  templateUrl: './readonly-formly-type.component.html',
})
export class ReadonlyFormlyTypeComponent {

  isReadOnlyMode = false;

  form = new FormGroup({});
  fields: FormlyFieldConfig[] = [
    {
      template: `<span class="text-error sds-small text-italic">
        *Due to techinical difficulties, we are currently only allowing payment through credit
        </span>`
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
        placeholder: '16-digit Credit Card Number',
        required: true,
        maxLength: 16,
      },
    },
    {
      type: SdsFormlyTypes.INPUT,
      templateOptions: {
        label: 'Security Code',
        placeholder: '3 or 4 digit CVV',
        required: true,
        maxLength: 4,
      },
    },
    {
      type: SdsFormlyTypes.INPUT,
      templateOptions: {
        label: 'Zip Code',
        placeholder: '5 digit Zip Code',
        required: true,
        maxLength: 5
      },
    },
  ]

  toggleReadonlyMode() {
    this.isReadOnlyMode = !this.isReadOnlyMode
    FormlyUtilsService.setReadonlyMode(this.isReadOnlyMode, this.fields);
  }
}
