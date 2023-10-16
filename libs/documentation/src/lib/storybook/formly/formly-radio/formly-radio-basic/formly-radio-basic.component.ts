import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  templateUrl: './formly-radio-basic.component.html',
  selector: `sds-formly-radio-basic`,
})
export class FormlyRadioBasicComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'entity.taxFilingStatus',
      type: 'radio',

      props: {
        label: 'Tax Filing Structure',
        description: 'Select how your business or organization is defined by the IRS.',
        required: true,
        options: [
          {
            key: 'ccorp',
            tooltipText:
              'Corporate Entity, Not Tax Exempt (Firm pays U.S. Federal Income Taxes or U.S. Possession Income Taxes)',
            value: 'Corporate Entity, Not Tax Exempt ',
          },
          {
            key: 'nonprofit',
            value:
              'Corporate Entity, Tax Exempt (Firm does not pay U.S. Federal Income Taxes nor U.S. Possession Income Taxes)',
          },
          {
            key: 'partnerllc',
            value: 'Partnership or Limited Liability Partnership',
          },
          {
            key: 'soleproprietorship',
            value: 'Sole Proprietorship',
          },
          {
            key: 'international',
            value: 'International Organization',
          },
          {
            key: 'other',
            value: 'Other',
          },
        ],
      },
    },
  ];
}