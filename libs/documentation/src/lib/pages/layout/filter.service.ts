import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { Injectable } from "@angular/core";
 
@Injectable()
export class FilterService {

  public model = {};
  public form = new FormGroup({});
  options: FormlyFormOptions = {};
  public fields: FormlyFieldConfig[] = [
    {
      key: 'keyword',
      templateOptions: { label: 'Keyword' },
      type: 'input'
    },
    {
      key: 'searchEntity',
      templateOptions: { label: 'Entity', group: 'accordion' },
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
      key: 'purposeOfRegistration',

      type: 'multicheckbox',
      templateOptions: {
        label: 'Purpose of Registration',
        group: 'accordion',
        options: [
          {
            key: 'allawards',
            value: 'All Awards'
          },
          {
            key: 'assistance-awards',
            value: 'Federal Assistance Awards'
          },
          {
            key: 'igt-awards',
            value: 'Intragovernmental Transactions'
          }
        ]
      }
    },
    {
      key: 'entityType',
      type: 'input',
      templateOptions: {
        label: 'Entity Type',
        group: 'accordion'
      }
    },
    {
      key: 'socioEconomicStatus',
      wrappers: ['accordionwrapper'],
      type: 'input',
      templateOptions: {
        label: 'Socio-Economic Status'
      }
    },
    {
      key: 'serviceClassifications',

      templateOptions: {
        label: 'NAICS and Product Service Codes',
        group: 'accordion'
      },
      fieldGroup: [
        {
          key: 'naicsCode',
          type: 'input',
          templateOptions: {
            type: 'text',
            hideOptional: true,
            label: 'NAICS Code',
            placeholder: 'Ex: 110610'
          }
        },
        {
          key: 'productServiceCode',
          type: 'input',
          templateOptions: {
            label: 'Product Service Code',
            hideOptional: true,
            placeholder: 'Ex: 3320 or L019'
          }
        }
      ]
    },
    {
      key: 'location',
      templateOptions: { label: 'Location', group: 'accordion' },
      fieldGroup: [
        {
          key: 'country',
          type: 'input',
          templateOptions: {
            type: 'text',
            hideOptional: true,
            label: 'Country'
          }
        },
        {
          key: 'zipCode',
          type: 'input',
          templateOptions: {
            type: 'text',
            hideOptional: true,
            label: 'Zip Code'
          }
        },
        {
          key: 'state',
          type: 'input',
          templateOptions: {
            type: 'text',
            hideOptional: true,
            label: 'State / Province'
          }
        },
        {
          key: 'city',
          type: 'input',
          templateOptions: {
            type: 'text',
            hideOptional: true,
            label: 'City'
          }
        },
        {
          key: 'congressionalDistrict',
          type: 'input',
          templateOptions: {
            type: 'text',
            hideOptional: true,
            label: 'Congressional District'
          }
        }
      ]
    },
    {
      key: 'status',
      templateOptions: { label: 'Status', group: 'accordion' },
      fieldGroup: [
        {
          key: 'registrationStatus',
          type: 'multicheckbox',
          templateOptions: {
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
      ]
    }
  ];
 
  
}
