import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-input-label',
  templateUrl: './formly-input-label.component.html',
})
export class FormlyInputLabelComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'title',
      type: 'input',
      props: {
        label: 'Entity Name',
      },
    },
    {
      key: 'name',
      type: 'input',
      props: {
        tooltipText:
          'Corporate Entity, Not Tax Exempt (Firm pays U.S. Federal Income Taxes or U.S. Possession Income Taxes)',
        label: 'Are you a successor to a predecessor that help a federal contractor or grant within the last 3 years',
      },
    },
  ];
}
