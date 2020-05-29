import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { BehaviorSubject } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { CdkAccordionItem } from '@angular/cdk/accordion';
import { DataService } from './data.service';
import { SideNavigationModel } from '@gsa-sam/components';
import { navigationConfig } from './navigate.config';
import {
  SearchListConfiguration,
  SearchParameters
} from '@sam-design-system/layouts';

@Component({
  templateUrl: './layout.component.html'
})
export class ResultsLayoutComponent implements AfterViewInit {
  public navigationModel: SideNavigationModel = navigationConfig;
  @ViewChild('resultList') resultList;
  form = new FormGroup({});
  filterModel = {};
  filtersExpanded: boolean = true;
  searchParameters: SearchParameters; // = new SearchParameters();
  public filterChange$ = new BehaviorSubject<object>(null);
  allDomainsListConfig: SearchListConfiguration = {
    defaultSortValue: 'relevanceDescending',
    pageSize: 25,
    sortList: [
      { text: 'Relevance', value: 'relevanceDescending' },
      { text: 'Entity Name', value: 'legalBusinessName' },
      { text: 'Status', value: 'registrationStatus' }
    ]
  };

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
  constructor(public service: DataService) { }

  ngAfterViewInit() {
    this.filterChange$.subscribe(res => {
      this.resultList.updateFilter(res);
    });
  }
}
