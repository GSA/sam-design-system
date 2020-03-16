import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'sds-filter-align',
  templateUrl: './filter-align.component.html'
})
export class FilterAlignComponent implements OnInit {
  constructor() {}

  results: any = {};
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  public filterChange$ = new BehaviorSubject<object>(null);

  // Input
  sdsInput: FormlyFieldConfig[] = [
    {
      key: 'entity.title',
      type: 'input',
      templateOptions: {
        label: 'Entity Name',
        placeholder: 'Acme Corporation',
        description: 'Enter the name of your entity.',
        required: true
      }
    }
  ];

  // Select
  sdsSelect: FormlyFieldConfig[] = [
    {
      key: 'entity.type',
      type: 'select',
      templateOptions: {
        label: 'Entity Type',
        description: 'Select the entity type.',
        required: true,
        options: [
          { label: 'Contract Opportunities', value: 'co' },
          { label: 'Entity Information', value: 'ei' },
          { label: 'Assistance Listings', value: 'al' },
          { label: 'Contract Data', value: 'cd' },
          { label: 'Federal Hierarchy', value: 'fh' },
          { label: 'Wage Determination', value: 'wd' }
        ]
      }
    }
  ];

  // Checkbox
  sdsCheckbox: FormlyFieldConfig[] = [
    {
      key: 'entity.userAgreement',
      type: 'checkbox',
      templateOptions: {
        label: 'I agree.',
        description:
          'By checking the box below you agree to the terms and conditions of the site.',
        required: true
      }
    }
  ];

  // Multi Checkbox
  sdsMultiCheckbox: FormlyFieldConfig[] = [
    {
      key: 'entity.socioeconomic',
      type: 'multicheckbox',
      templateOptions: {
        label: 'Socio-Economic Status',
        description:
          'Select any socio-economic categories which reflect the current status of your entity',
        required: true,
        options: [
          {
            key: 'vet',
            value: 'Veteran Owned'
          },
          {
            key: 'women',
            value: 'Women Owned'
          },
          {
            key: 'minority',
            value: 'Minority Owned'
          }
        ]
      }
    }
  ];

  // Radio
  sdsRadio: FormlyFieldConfig[] = [
    {
      key: 'entity.taxFilingStatus',
      type: 'radio',
      templateOptions: {
        label: 'Tax Filing Structure',
        description:
          'Select how your business or organization is defined by the IRS.',
        required: true,
        options: [
          {
            key: 'ccorp',
            value:
              'Corporate Entity, Not Tax Exempt (Firm pays U.S. Federal Income Taxes or U.S. Possession Income Taxes)'
          },
          {
            key: 'nonprofit',
            value:
              'Corporate Entity, Tax Exempt (Firm does not pay U.S. Federal Income Taxes nor U.S. Possession Income Taxes)'
          },
          {
            key: 'partnerllc',
            value: 'Partnership or Limited Liability Partnership'
          },
          {
            key: 'soleproprietorship',
            value: 'Sole Proprietorship'
          },
          {
            key: 'international',
            value: 'International Organization'
          },
          {
            key: 'other',
            value: 'Other'
          }
        ]
      }
    }
  ];

  // Textarea
  sdsTextarea: FormlyFieldConfig[] = [
    {
      key: 'entity.description',
      type: 'textarea',
      templateOptions: {
        label: 'Entity Description',
        placeholder: 'Acme Corporation is a federal contractor.',
        description: 'Enter the description for your entity.',
        required: true
      }
    }
  ];

  // Groups

  // Default Multiple Controls
  sdsGroupDefaultMultipleControls: FormlyFieldConfig[] = [
    {
      key: 'filters',
      templateOptions: {
        label: 'Entity Information',
        group: 'panel'
      },
      fieldGroup: [
        {
          key: 'entity.type',
          type: 'select',
          templateOptions: {
            label: 'Entity Type',
            description: 'Select the entity type.',
            required: true,
            options: [
              { label: 'Contract Opportunities', value: 'co' },
              { label: 'Entity Information', value: 'ei' },
              { label: 'Assistance Listings', value: 'al' },
              { label: 'Contract Data', value: 'cd' },
              { label: 'Federal Hierarchy', value: 'fh' },
              { label: 'Wage Determination', value: 'wd' }
            ]
          }
        },
        {
          key: 'multiple.default.entity.title',
          type: 'input',
          templateOptions: {
            label: 'Entity Name',
            placeholder: 'Acme Corporation',
            description: 'Enter the name of your entity.',
            required: true
          }
        }
      ]
    }
  ];

  // Accordion Multiple Controls
  sdsGroupAccordionMultipleControls: FormlyFieldConfig[] = [
    {
      key: 'filters',
      templateOptions: {
        label: 'Entity Information',
        group: 'accordion',
      },
      fieldGroup: [
        {
          key: 'keyword',
          type: 'input',
          templateOptions: {
            type: 'text',
            label: 'Unique Entity ID',
            tagText: 'DUNS',
            tagClass: 'sds-tag--info-purple'
          }
        },
        {
          key: 'multiple.accordion.entity.title',
          type: 'input',
          templateOptions: {
            label: 'Entity Name',
            placeholder: 'Acme Corporation',
            description: 'Enter the name of your entity.',
            required: true
          }
        }
      ]
    }
  ];

  // Default Single Control
  sdsGroupDefaultSingleControl: FormlyFieldConfig[] = [
    {
      key: 'single.default.entity.title',
      type: 'input',
      templateOptions: {
        label: 'Entity Name',
        group: 'panel',
        placeholder: 'Acme Corporation',
        description: 'Enter the name of your entity.',
        required: true
      }
    }
  ];

  // Accordion Single Control
  sdsGroupAccordionSingleControl: FormlyFieldConfig[] = [
    {
      key: 'single.accordion.entity.title',
      type: 'input',
      templateOptions: {
        label: 'Entity Name',
        group: 'accordion',
        placeholder: 'Acme Corporation',
        description: 'Enter the name of your entity.',
        required: true
      }
    }
  ];

  public ngOnInit() {
    this.filterChange$.subscribe(res => {
      this.results = res;
    });
  }
}
