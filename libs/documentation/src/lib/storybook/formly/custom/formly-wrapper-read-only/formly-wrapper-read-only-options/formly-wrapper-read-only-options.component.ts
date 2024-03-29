import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyUtilsService, SdsFormlyTypes } from '@gsa-sam/sam-formly';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-wrapper-read-only-options',
  templateUrl: './formly-wrapper-read-only-options.component.html',
})
export class FormlyWrapperReadOnlyOptionsComponent {
  isReadOnlyMode = false;

  form = new FormGroup({});
  fields: FormlyFieldConfig[] = [
    {
      template: `<span class="text-error sds-small text-italic">
        *Due to techinical difficulties, we are currently only allowing payment through credit
        </span>`,
    },
    {
      type: SdsFormlyTypes.READONLY,
      defaultValue: 'Credit',
      props: {
        label: 'Payment Type',
        hideOptional: true,
      },
    },
    {
      type: SdsFormlyTypes.INPUT,
      props: {
        label: 'Card Number',
        placeholder: '1234-5678-9012-3456',
        required: true,
        maxLength: 16,
      },
    },
    {
      type: SdsFormlyTypes.INPUT,
      props: {
        label: 'Security Code',
        placeholder: '123',
        required: true,
        maxLength: 4,
      },
    },
    {
      type: SdsFormlyTypes.INPUT,
      props: {
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
