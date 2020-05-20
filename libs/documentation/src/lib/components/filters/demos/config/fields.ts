import { FormlyFieldConfig } from '@ngx-formly/core';

export let formlyFieldConfig: FormlyFieldConfig[] = [
  {
    key: 'keyword',
    wrappers: ['accordionwrapper'],
    type: 'input',
    templateOptions: {
      type: 'text',
      label: 'Keyword',
      labelClass: 'usa-sr-only'
    }
  },
  {
    key: 'dateWrapper',
    wrappers: ['accordionwrapper'],
    templateOptions: { label: 'Date' },
    fieldGroup: [
      {
        key: 'modifiedDate',
        type: 'daterangepicker',
        templateOptions: {
          label: 'Modified Date'
        }
      },
      {
        key: 'signedDate',
        type: 'daterangepicker',
        templateOptions: {
          label: 'Signed Date'
        }
      },
      {
        key: 'effectiveDate',
        type: 'daterangepicker',
        templateOptions: {
          label: 'Effective Date'
        }
      }
    ]
  },
  {
    key: 'hierarchyWrapper',
    wrappers: ['accordionwrapper'],
    templateOptions: { label: 'Federal Organizations' },
    fieldGroup: [
      {
        key: 'hierarchyOrganization',
        type: 'input',
        templateOptions: {
          hideLabel: true
        }
      }
    ]
  },
  {
    key: 'contractTypeWrapper',
    wrappers: ['accordionwrapper'],
    templateOptions: { label: 'Contract Type' },
    fieldGroup: [
      {
        key: 'status',
        type: 'multicheckbox',
        templateOptions: {
          options: [
            {
              key: 'Contract',
              value: 'Contract'
            },
            {
              key: 'icd',
              value: 'Interagency Contract Directory (ICD)'
            }
          ]
        }
      },
      {
        key: 'awardIdvType',
        type: 'input',
        templateOptions: {
          label: 'Award / IDV Type'
        }
      },
      {
        key: 'contractType',
        type: 'input',
        templateOptions: {
          label: 'Contract Type'
        }
      }
    ]
  },
  {
    key: 'entityWrapper',
    wrappers: ['accordionwrapper'],
    templateOptions: { label: 'Entity' },
    fieldGroup: [
      {
        key: 'legalBusinessName',
        type: 'input',
        templateOptions: {
          type: 'text',
          label: 'Entity Name'
        }
      },
      {
        key: 'uniqueEntityIdDuns',
        type: 'input',
        templateOptions: {
          tagText: 'DUNS',
          tagClass: 'sds-tag--info-purple',
          label: 'Unique Entity ID',
          placeholder: '',
          min: 13,
          max: 40,
          inputType: 'number',
          inputStyle: 'error'
        }
      },
      {
        key: 'uniqueEntityIdSam',
        type: 'input',
        templateOptions: {
          tagText: 'SAM',
          label: 'Unique Entity ID',
          placeholder: '',
          inputType: 'text'
        }
      },
      {
        key: 'cageCode',
        type: 'input',
        templateOptions: {
          type: 'text',
          label: 'CAGE / NCAGE'
        }
      }
    ]
  },
  {
    key: 'serviceClassificationsWrapper',
    wrappers: ['accordionwrapper'],
    templateOptions: { label: 'NAICS and Product Service Codes' },
    fieldGroup: [
      {
        key: 'naicsCode',
        type: 'input',
        templateOptions: {
          label: 'NAICS Code'
        }
      },
      {
        key: 'pscCode',
        type: 'input',
        templateOptions: {
          label: 'Product Service Code'
        }
      }
    ]
  },
  {
    key: 'setAsideWrapper',
    wrappers: ['accordionwrapper'],
    templateOptions: { label: 'Set Aside' },
    fieldGroup: [
      {
        key: 'setAside',
        type: 'input',
        templateOptions: {
          hideLabel: true
        }
      }
    ]
  },
  {
    key: 'popWrapper',
    wrappers: ['accordionwrapper'],
    templateOptions: { label: 'Place of Performance' },
    fieldGroup: [
      {
        key: 'popZipCode',
        type: 'input',
        templateOptions: {
          label: 'Zip Code'
        }
      },
      {
        key: 'popState',
        type: 'input',
        templateOptions: {
          label: 'State'
        }
      }
    ]
  },
  {
    key: 'statusWrapper',
    wrappers: ['accordionwrapper'],
    type: 'multicheckbox',
    templateOptions: {
      label: 'Status',
      labelClass: 'usa-sr-only',
      options: [
        {
          key: 'Active',
          value: 'Active'
        },
        {
          key: 'Inactive',
          value: 'Inactive'
        }
      ]
    }
  }
];
