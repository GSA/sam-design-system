import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SelectionMode, TabPanelComponent } from '@gsa-sam/components';
import { SdsFormlyTypes } from '@gsa-sam/sam-formly';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-button-options',
  templateUrl: './formly-button-options.component.html',
})
export class FormlyButtonOptionsComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  inpuField = {
    key: 'search',
    type: 'input',
    focus: true,
    props: {
      label: 'Search',
      placeholder: '',
    },
  };
  fields: FormlyFieldConfig[] = [
    {
     
          type: 'button',
          props: {
            enableInput: true,
            btnIcon: 'plus-circle',
            additionalField: this.inpuField,
            text: 'Search',
            btnClass: 'usa-button--unstyled margin-top-neg-1',
          },
       
    },
     
  ];
}
