import { FormlyFieldConfig } from '@ngx-formly/core';

export let formlyFieldConfig: FormlyFieldConfig[] = [
  {
    key: 'keyword',
    type: 'input',
    defaultValue: 10,
    templateOptions: {
      type: 'text',
      label: 'Keyword',
      expand: false,
      group: 'accordion'
    }
  },
  {
    key: 'dateWrapper',
    templateOptions: {
      label: 'Date',
      group: 'accordion',
      expand: true
    },
    fieldGroup: [
      {
        key: 'modifiedDate',
        type: 'datepicker',

        templateOptions: {
          label: 'Modified Date'
        }
      },
      {
        key: 'signedDate',
        type: 'datepicker',
        templateOptions: {
          label: 'Signed Date'
        }
      },
      {
        key: 'effectiveDate',
        type: 'datepicker',
        templateOptions: {
          label: 'Effective Date'
        }
      }
    ]
  },
  {
    key: 'hierarchyWrapper',
    templateOptions: { label: 'Federal Organizations',
    group: 'accordion'
   },
    fieldGroup: [
      {
        key: 'hierarchyOrganization',
        type: 'input',
        defaultValue:'test',
        templateOptions: {
          hideLabel: true
        }
      }
    ]
  },
  {
    key: 'contractTypeWrapper',
    templateOptions: { label: 'Contract Type',
    group: 'accordion'
   },
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
    templateOptions: { label: 'Entity',
    group: 'accordion' },
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
          min: 13,
          max: 40,
          inputType: 'number',
        }
      },
      {
        key: 'uniqueEntityIdSam',
        type: 'input',
        templateOptions: {
          tagText: 'SAM',
          label: 'Unique Entity ID',
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
    templateOptions: { label: 'NAICS and Product Service Codes',
    group: 'accordion' },
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
    templateOptions: { label: 'Set Aside' ,
    group: 'accordion'},
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
    templateOptions: { label: 'Place of Performance',
    group: 'accordion' },
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
    type: 'multicheckbox',
    templateOptions: {
      label: 'Status',
      group: 'panel',
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
