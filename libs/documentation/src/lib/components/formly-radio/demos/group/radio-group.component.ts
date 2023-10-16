import { Component } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  templateUrl: './radio-group.component.html',
  selector: `sds-formly-radio-group-demo`,
})
export class RadioGroupComponent {
  form = new UntypedFormGroup({});
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
        groupOptions: {
          Entity: [
            {
              value: 'ccorp',
              tooltipText:
                'Corporate Entity, Not Tax Exempt (Firm pays U.S. Federal Income Taxes or U.S. Possession Income Taxes)',
              label: 'Corporate Entity, Not Tax Exempt ',
            },
            {
              value: 'nonprofit',
              label:
                'Corporate Entity, Tax Exempt (Firm does not pay U.S. Federal Income Taxes nor U.S. Possession Income Taxes)',
            },
            {
              value: 'partnerllc',
              label: 'Partnership or Limited Liability Partnership',
            },
          ],
          Partner: [
            {
              value: 'soleproprietorship',
              label: 'Sole Proprietorship',
            },
            {
              value: 'international',
              label: 'International Organization',
              tooltipText: 'International Organization',
            },
          ],
          Other: [
            {
              value: 'other',
              label: 'Other',
            },
          ],
        },
      },
      modelOptions: {
        updateOn: 'blur',
      },
      hooks: {
        onChanges: (field) => {
          field.formControl.valueChanges.subscribe((v) => {
            console.log(field.form['controls']['entity']);
          });
        },
      },
    },
  ];
}
