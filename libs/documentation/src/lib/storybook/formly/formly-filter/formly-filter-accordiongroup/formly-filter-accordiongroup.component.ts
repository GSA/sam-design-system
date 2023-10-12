import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-filter-accordiongroup',
  templateUrl: './formly-filter-accordiongroup.component.html',
})
export class FormlyFilterAccordionGroupComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  sdsGroupAccordionMultipleControls: FormlyFieldConfig[] = [
    {
      key: 'filters',
      props: {
        label: 'Entity Information',
        group: 'accordion',
      },
      fieldGroup: [
        {
          key: 'keyword',
          type: 'input',
          props: {
            type: 'text',
            label: 'Unique Entity ID',
            tagText: 'DUNS',
            tagClass: 'sds-tag--info-purple',
            placeholder: 'A123456',
          },
        },
        {
          key: 'multiple.accordion.entity.title',
          type: 'input',
          props: {
            label: 'Entity Name',
            placeholder: 'eg: Acme Corporation',
            description: 'Enter the name of your entity.',
            required: true,
          },
        },
      ],
    },
  ];

  // Accordion Single Control
  sdsGroupAccordionSingleControl: FormlyFieldConfig[] = [
    {
      key: 'single.accordion.entity.title',
      type: 'input',
      props: {
        label: 'Entity Name',
        group: 'accordion',
        placeholder: 'eg: Acme Corporation',
        description: 'Enter the name of your entity.',
        required: true,
      },
    },
  ];
}
