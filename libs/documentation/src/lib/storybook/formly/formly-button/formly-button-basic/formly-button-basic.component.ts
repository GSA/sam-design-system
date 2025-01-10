import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SelectionMode } from '@gsa-sam/components';
import { SdsFormlyTypes } from '@gsa-sam/sam-formly';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-button-basic',
  templateUrl: './formly-button-basic.component.html',
})
export class FormlyButtonBasicComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
     {
      
      fieldGroup: [
        {
          className: 'desktop:grid-col-12 tablet:grid-col-12',
          type: 'button',
          props: {
            enableInput: true,
            text: 'Button',
          },
        },
      ],
  
    },
  ];
}
