import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  templateUrl: './radio-basic.component.html',
  styleUrls: ['./radio-basic.component.scss'],
  selector: `sds-formly-radio-basic-demo`,
})
export class RadioBasic {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'entity.taxFilingStatus',
      type: 'radio',

      templateOptions: {
        label: 'Tax Filing Structure',
        description:
          'Select how your business or organization is defined by the IRS.',
        required: true,
        options: [
          {
            key: 'ccorp',
            value:
              'Corporate Entity, Not Tax Exempt (Firm pays U.S. Federal Income Taxes or U.S. Possession Income Taxes)',
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
      modelOptions: {
        updateOn: 'blur',
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
