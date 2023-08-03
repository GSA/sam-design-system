import { Component } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  templateUrl: './input-basic.component.html',
  styleUrls: ['./input-basic.component.scss'],
  selector: `sds-formly-input-basic-demo`,
})
export class InputBasic {
  form = new UntypedFormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'entity.title',
      type: 'input',
      templateOptions: {
        label: 'Entity Name',
        placeholder: 'eg: Acme Corporation',
        description: 'Enter the name of your entity.',
        required: true,
      },
    },
    {
      key: 'entity.id',
      type: 'input',
      templateOptions: {
        label: 'Profit',
        placeholder: 'eg: 1234',
        description: 'nonprofit.',
        tooltipText:
          '<b>Corporate Entity,</b> Tax Exempt (Firm does not pay U.S. Federal Income Taxes nor U.S. Possession Income Taxes) ',
      },
    },
  ];
}
