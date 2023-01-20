import { Component, } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-input-tooltip-text',
  templateUrl: './formly-input-tooltip-text.component.html',
})
export class FormlyInputTooltipTextComponent {

  orm = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'title',
      type: 'input',
      templateOptions: {
        label: 'Entity Name',
        tooltipText: 'Tooltip Text',
      },
    },
  ];

}
