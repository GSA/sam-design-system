import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'gsa-sam-radio-advanced',
  templateUrl: './radio-advanced.component.html',
})
export class RadioAdvancedComponent {

  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'taxFilingStatus',
      type: 'radio',
      templateOptions: {
        label: 'Tax Filing Structure',
        tile: true,
        description:
          'Select how your business or organization is defined by the IRS.',
        required: true,
        optionsClass: `text-secondary-darker text-bold`,
        options: [
          {
            value: 'ccorp',
            label:
              'Corporate Entity, Not Tax Exempt (Firm pays U.S. Federal Income Taxes or U.S. Possession Income Taxes)',
            description: [
              '13240 GREENBURY CIRCUIT SUITE 200',
              'Sterling, VA 20165 United States'
            ]
          },
          {
            value: 'nonprofit',
            label:
              'Corporate Entity, Tax Exempt (Firm does not pay U.S. Federal Income Taxes nor U.S. Possession Income Taxes)',
            description: [
              '13240 GREENBURY CIRCUIT SUITE 200',
              'Sterling, VA 20165 United States'
            ]
          },
          {
            value: 'partnerllc',
            label: 'Partnership or Limited Liability Partnership',
            description: [
              '13240 GREENBURY CIRCUIT SUITE 200',
              'Sterling, VA 20165 United States',
            ],
          },
          {
            value: 'soleproprietorship',
            label: 'Sole Proprietorship',
            description: [
              '13240 GREENBURY CIRCUIT SUITE 200',
              'Sterling, VA 20165 United States'
            ]
          },
          {
            value: 'international',
            label: 'International Organization',
            description: [
              '13240 GREENBURY CIRCUIT SUITE 200',
              'Sterling, VA 20165 United States'
            ]
          },
          {
            value: 'other',
            label: 'Other',
            description: [
              '13240 GREENBURY CIRCUIT SUITE 200',
              'Sterling, VA 20165 United States'
            ]
          },
        ],
      },
    },
  ];

  onModelChange($event) {
    console.log($event);
  }
}
