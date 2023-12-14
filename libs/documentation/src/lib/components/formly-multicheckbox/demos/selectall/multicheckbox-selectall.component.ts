import { Component } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  templateUrl: './multicheckbox-selectall.component.html',
  selector: `sds-formly-multicheckbox-selectall-demo`,
})
export class MultiCheckboxSelectAll {
  form = new UntypedFormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'domains',
      type: 'multicheckbox',
      defaultValue: { cfda: true, opp: true, fh: false },
      props: {
        label: 'Domains',
        description: 'Select any socio-economic categories which reflect the current status of your entity',
        required: true,
        selectAllOption: true,
        selectTooltipText: ' you agree to the terms and conditions ',
        options: [
          {
            value: 'cfda',
            label: 'Assistance Listing',
            tooltipPosition: 'bottom',
            tooltipText: '<b>Assistance Listing</b><u>Tool tip with style</u>',
          },
          {
            value: 'opp',
            label: 'Contract Opportunities',
            tooltipPosition: 'bottom',
            tooltipText: 'Contract Opportunities',
          },
          {
            value: 'ei',
            label: 'Entity Information',
          },
          {
            value: 'fh',
            label: 'Federal Hierarchy',
          },
          {
            value: 'wd',
            label: 'Wage Determinations',
          },
        ],
      },
    },
  ];
}
