import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-checkbox-tooltip',
  templateUrl: './formly-checkbox-tooltip.component.html',
})
export class FormlyCheckboxTooltipComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'entity.userAgreement',
      type: 'checkbox',
      props: {
        tooltipText: 'By checking the box you agree to the terms and conditions',
      },
    },
  ];
}
