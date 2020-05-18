import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  templateUrl: './accordiongroup-basic.component.html'
})

export class AccordionGroupBasic {
  form = new FormGroup({});
  panelModel: any = {};
  options: FormlyFormOptions = {};
  panelFields: FormlyFieldConfig[] = [
    {
      key: 'PanelInput',
      type: 'input',
      templateOptions: {
        label: 'Input',
        group: 'panel',
        placeholder: 'Placeholder',
        description: 'Description',
        required: true,
      },
    },
  ];

  accordionModel:any ={};
  accordionFields: FormlyFieldConfig[] = [
    {
      key: 'AccordionInput',
      type: 'input',
      templateOptions: {
        label: 'Accordion Input',
        group: 'accordion',
        placeholder: 'Placeholder',
        description: 'Description',
      },
    },
  ];
}
