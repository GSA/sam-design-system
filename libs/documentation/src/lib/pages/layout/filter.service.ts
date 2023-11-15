import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { UntypedFormGroup } from '@angular/forms';
import { AutocompleteSampleDataService } from './services/autocomplete-sample.service';
import { SelectionMode, SDSSelectedItemModel, SDSAutocompletelConfiguration } from '@gsa-sam/components';
import { Injectable } from '@angular/core';
import { SdsFormlyTypes } from '@gsa-sam/sam-formly';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  public settings = new SDSAutocompletelConfiguration();
  public autocompleteModel = new SDSSelectedItemModel();

  public model = {};
  public form = new UntypedFormGroup({});
  options: FormlyFormOptions = {};

  public keywordChangeSubject = new Subject();

  public fields: FormlyFieldConfig[] = [
       {
      key: 'keyword',
      wrappers: ['tabs'],
      props: {
        label: 'Keyword Search',
        description: `For more information on how to use our keyword search, visit our <a href="#"> help guide </a>`,
        hideOptional: true,
        tabClass: 'sds-tabs--formly',
      },
     // fieldArray: {
        fieldGroup: [
          // tab 1
          {
            props: {
              tabHeader: 'Simple Search',
              label: 'Simple Search'
            },
            id: 'Tab1',
            fieldGroup: [
              {
                key: 'keywordRadio',
                type: 'radio',
                defaultValue: 'anyWords',
                props: {
                  label: "Keyword Radio",
                  options: [
                    {
                      label: 'Any Words',
                      value: 'anyWords',
                    },
                    {
                      label: 'All Words',
                      value: 'allWords',
                    },
                    {
                      label: 'Exact Match',
                      value: 'exactMatch',
                    },
                  ],
                },
              },
              {
                key: 'keywordTags',
                type: 'autocomplete',
                props: {
                  label: 'Keyword Tags',
                  expand: false,
                  configuration: {
                    id: 'keyword',
                    primaryKeyField: 'key',
                    primaryTextField: 'text',
                    labelText: 'Search Keyword',
                    selectionMode: SelectionMode.MULTIPLE,
                    autocompletePlaceHolderText: '',
                    isTagModeEnabled: true,
                  },
                },
              },
            ],
          },
          //tab 2
          {
            id: 'Tab2',
            props: {
              tabHeader: 'Search Editor',
              label: 'Search Editor',
              submitButtonId: 'booleanSearchSubmit',
            },
            fieldGroup: [
              {
                key: 'keywordTextarea',
                type: SdsFormlyTypes.TEXTAREA,
                className: 'display-block padding-left-2 padding-right-2',
                props: {
                  label: 'Keyword TextArea',
                  placeholder: 'e.g. ((rental AND property) OR (lease and property) AND NOT ( "short term"))',
                  required: true,
                },
              },
              {
                type: SdsFormlyTypes.BUTTON,
                id: 'booleanSearchSubmit',
                className: 'display-block margin-top-1 padding-left-2 padding-right-2',
                props: {
                  label: 'Submit Button',
                  text: 'Search',
                  type: 'submit',
                },
              },
            ],
          },
        ],
     // },
    },
    {
      key: 'searchEntity',
      className: 'margin-top-0',
      props: { label: 'Entity', group: 'accordion' },
      fieldGroup: [
        {
          key: 'legalBusinessName',
          type: 'input',
          props: {
            type: 'text',
            hideOptional: true,
            label: 'Entity Name',
          },
        },
        {
          key: 'uniqueEntityIdDuns',
          type: 'input',
          props: {
            tagText: 'DUNS',
            tagClass: 'sds-tag--info-purple',
            label: 'Unique Entity ID',
            hideOptional: true,
            placeholder: '',
            min: 13,
            max: 40,
            inputType: 'number',
            inputStyle: 'error',
          },
        },
        {
          key: 'uniqueEntityIdSam',
          type: 'input',
          props: {
            tagText: 'SAM',
            label: 'Unique Entity ID',
            hideOptional: true,
            placeholder: '',
            inputType: 'text',
          },
        },
        {
          key: 'cageCode',
          type: 'input',
          props: {
            type: 'text',
            hideOptional: true,
            label: 'CAGE / NCAGE',
          },
        },
      ],
    },
    {
      key: 'purposeOfRegistration',
      hide: true,
      type: 'multicheckbox',
      props: {
        label: 'Purpose of Registration',
        group: 'accordion',
        options: [
          {
            value: 'allawards',
            label: 'All Awards',
          },
          {
            value: 'assistance-awards',
            label: 'Federal Assistance Awards',
          },
          {
            value: 'igt-awards',
            label: 'Intragovernmental Transactions',
          },
        ],
      },
    },
    {
      key: 'startDate',
      type: 'datepicker',
      props: {
        group: 'panel',
        hideOptional: true,
        label: 'Date',
      },
    },
    {
      key: 'entityType',
      type: 'input',
      props: {
        label: 'Entity Type',
        group: 'accordion',
      },
    },
    {
      key: 'socioEconomicStatus',
      type: 'select',
      props: {
        label: 'Socio-Economic Status',
        group: 'accordion',
      },
    },
    {
      key: 'serviceClassifications',
      props: {
        label: 'NAICS and Product Service Codes',
        group: 'accordion',
      },
      fieldGroup: [
        {
          key: 'naicsCode',
          type: 'input',
          props: {
            type: 'text',
            hideOptional: true,
            label: 'NAICS Code',
            placeholder: 'Ex: 110610',
          },
        },
        {
          key: 'productServiceCode',
          type: 'input',
          props: {
            label: 'Product Service Code',
            hideOptional: true,
            placeholder: 'Ex: 3320 or L019',
          },
        },
      ],
    },
    {
      key: 'location',
      props: { label: 'Location', group: 'accordion' },
      fieldGroup: [
        {
          key: 'country',
          type: 'input',
          props: {
            type: 'text',
            hideOptional: true,
            label: 'Country',
          },
        },
        {
          key: 'zipCode',
          type: 'input',
          props: {
            type: 'text',
            hideOptional: true,
            label: 'Zip Code',
          },
        },
        {
          key: 'state',
          type: 'autocomplete',
          props: {
            label: 'State / Province',
            hideOptional: true,
            service: this.service,
            configuration: this.settings,
            model: this.autocompleteModel,
            modelChange: this.changes,
          },
        },
        {
          key: 'city',
          type: 'input',
          props: {
            type: 'text',
            hideOptional: true,
            label: 'City',
          },
        },
        {
          key: 'congressionalDistrict',
          type: 'input',
          props: {
            type: 'text',
            hideOptional: true,
            label: 'Congressional District',
          },
        },
      ],
    },
    {
      key: 'status',
      props: { label: 'Status', group: 'accordion' },
      fieldGroup: [
        {
          key: 'registrationStatus',
          type: 'radio',
          props: {
            label: "Registration Status",
            options: [
              {
                value: 'Active',
                label: 'Active',
              },
              {
                value: 'Inactive',
                label: 'Inactive',
              },
            ],
          },
        },
      ],
    },
    {
      key: 'status',
      props: { label: 'Entity Status', group: 'accordion' },
      fieldGroup: [
        {
          key: 'statusId',
          id: 'status',
          type: 'multicheckbox',
          props: {
            label: 'Entity Status',
            labelClass: 'usa-sr-only',
            hideOptional: true,
            options: [
              {
                value: '1,2',
                label: 'Work in Progress Registration',
              },
              {
                value: '3',
                label: 'Submitted Registration',
              },
              {
                value: '4',
                label: 'Active Registration',
              },
              {
                value: '7',
                label: 'Inactive Registration',
              },
              {
                value: '12',
                label: 'ID Assigned',
              },
            ],
          },
        },
      ],
    },
    {
      key: 'requestTypesOptions',
      props: { group: 'panel', label: 'Request Type Options' },
      fieldGroup: [
        {
          key: 'requestType',
          id: 'requestType',
          type: 'radio',
          className: 'margin-top-0',
          defaultValue: 'myexclusions',
          props: {
            label: 'Exclusions Type',
            hideOptional: true,
            options: [
              {
                label: 'Agency Exclusions',
                value: 'myagencyexclusions',
                tooltipText: 'Search results will contain all Agency Exclusions.',
              },
              {
                label: 'My Exclusions',
                value: 'myexclusions',
                tooltipText: 'Search results will contain all your Exclusions.',
              },
            ],
          },
        },
      ],
    },
    {
      key: 'expirationDate',
      props: { label: 'Expiration Date', group: 'accordion' },
      fieldGroup: [
        {
          key: 'expirationDays',
          id: 'exp',
          type: 'radio',
          props: {
            label: 'Expiration Date',
            labelClass: 'margin-bottom-1',
            hideOptional: true,
            defaultValue: null,
            options: [
              { label: '30 Days', value: '30' },
              { label: '60 Days', value: '60' },
              { label: '90 Days', value: '90' },
              { label: 'All Registrations', value: null },
            ],
          },
        },
      ],
    },
  ];

  constructor(public service: AutocompleteSampleDataService) {
    this.setup();
  }

  changes(value) {
    console.log(value);
  }

  setup() {
    this.settings.id = 'autocomplete1';
    this.settings.primaryKeyField = 'id';
    this.settings.primaryTextField = 'name';
    this.settings.secondaryTextField = 'subtext';
    this.settings.labelText = 'Autocomplete 1';
    this.settings.selectionMode = SelectionMode.MULTIPLE;
    this.settings.autocompletePlaceHolderText = 'Alaska';
    this.settings.debounceTime = 350;
  }

  displayModifierFn(value: string, index: number) {
    if (index === 0) {
      return value;
    }

    // We can do 'this.model' because we binded this service to the function in the config.
    // So, inside this function, the context 'this' will refer to this service
    const keywordRadio = this.model['keyword']?.keywordRadio;
    if (!keywordRadio) {
      return value;
    }

    if (keywordRadio === 'allWords') {
      return `and  ${value}`;
    } else if (keywordRadio === 'anyWords') {
      return `or  ${value}`;
    } else {
      return value;
    }
  }
}