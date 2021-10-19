import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { AutocompleteSampleDataService } from './services/autocomplete-sample.service';
import {
  SelectionMode,
  SDSSelectedItemModel,
  SDSAutocompletelConfiguration,
} from '@gsa-sam/components';
import { Injectable } from '@angular/core';
import { SdsFormlyTypes } from '@gsa-sam/sam-formly';
import { Subject } from 'rxjs';

@Injectable()
export class FilterService {
  public settings = new SDSAutocompletelConfiguration();
  public autocompleteModel = new SDSSelectedItemModel();

  public model = {};
  public form = new FormGroup({});
  options: FormlyFormOptions = {};

  public keywordChangeSubject = new Subject();

  public fields: FormlyFieldConfig[] = [
    {
      key: 'keyword',
      wrappers: ['tabs'],
      templateOptions: {
        label: 'Keyword Search',
        description: `For more information on how to use our keyword search, visit our <a href="#"> help guide </a>`,
        hideOptional: true,
      },
      fieldArray: {
        fieldGroup: [
          // tab 1
          {
            templateOptions: {
              tabHeader: 'Simple Search'
            },
            fieldGroupClassName: 'grid-row',
            fieldGroup: [
              {
                key: 'keywordRadio',
                className: 'grid-col-5',
                type: 'radio',
                defaultValue: 'anyWords',
                templateOptions: {
                  options: [
                    {
                      label: 'Any Words',
                      value: 'anyWords'
                    },
                    {
                      label: 'All Words',
                      value: 'allWords'
                    },
                  ],
                },
              },
              {
                className: 'grid-col-6 margin-top-auto margin-left-auto',
                key: 'keywordExactPhrase',
                type: 'checkbox',
                templateOptions: {
                  label: 'Exact Phrase',
                  hideOptional: true,
                }
              },
              {
                key: 'keywordTags',
                type: 'autocomplete',
                className: 'grid-col-12',
                templateOptions: {
                  expand: false,
                  configuration: {
                    id: "keyword",
                    primaryKeyField: "key",
                    primaryTextField: "text",
                    labelText: "Search Keyword",
                    selectionMode: SelectionMode.MULTIPLE,
                    autocompletePlaceHolderText: "",
                    isTagModeEnabled: true,
                    // Bind context of this service so we have access to radio button value
                    displayModifierFn: this.displayModifierFn.bind(this),
                    // Add observable so that we can tell autocomplete to run change detection later when radio option changes
                    registerChanges$: this.keywordChangeSubject.asObservable(),
                  }
                }
              }]
          },
          //tab 2
          {
            templateOptions: {
              tabHeader: 'Search Editor',
              submitButtonId: 'booleanSearchSubmit',
            },
            fieldGroup: [
              {
                key: 'keywordTextarea',
                type: SdsFormlyTypes.TEXTAREA,
                className: 'display-block padding-left-2 padding-right-2',
                templateOptions: {
                  placeholder: 'e.g. ((rental AND property) OR (lease and property) AND NOT ( "short term"))',
                  required: true,
                }
              },
              {
                type: SdsFormlyTypes.BUTTON,
                id: 'booleanSearchSubmit',
                className: 'display-block margin-top-1 padding-left-2 padding-right-2',
                templateOptions: {
                  text: 'Search',
                  type: 'submit',
                }
              }
            ]
          }
        ]
      },
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
            hideOptional: true,
            label: 'Entity Name',
          },
        },
        {
          key: 'uniqueEntityIdDuns',
          type: 'input',
          templateOptions: {
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
          templateOptions: {
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
          templateOptions: {
            type: 'text',
            hideOptional: true,
            label: 'CAGE / NCAGE',
          },
        },
      ],
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
            value: 'All Awards',
          },
          {
            key: 'assistance-awards',
            value: 'Federal Assistance Awards',
          },
          {
            key: 'igt-awards',
            value: 'Intragovernmental Transactions',
          },
        ],
      },
    },
    {
      key: 'startDate',
      type: 'datepicker',
      templateOptions: {
        group: 'accordion',
        hideOptional: true,
        label: 'Date',
      },
    },
    {
      key: 'entityType',
      type: 'input',
      templateOptions: {
        label: 'Entity Type',
        group: 'accordion',
      },
    },
    {
      key: 'socioEconomicStatus',
      type: 'input',
      templateOptions: {
        label: 'Socio-Economic Status',
        group: 'accordion'
      },
    },
    {
      key: 'serviceClassifications',

      templateOptions: {
        label: 'NAICS and Product Service Codes',
        group: 'accordion',
      },
      fieldGroup: [
        {
          key: 'naicsCode',
          type: 'input',
          templateOptions: {
            type: 'text',
            hideOptional: true,
            label: 'NAICS Code',
            placeholder: 'Ex: 110610',
          },
        },
        {
          key: 'productServiceCode',
          type: 'input',
          templateOptions: {
            label: 'Product Service Code',
            hideOptional: true,
            placeholder: 'Ex: 3320 or L019',
          },
        },
      ],
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
            label: 'Country',
          },
        },
        {
          key: 'zipCode',
          type: 'input',
          templateOptions: {
            type: 'text',
            hideOptional: true,
            label: 'Zip Code',
          },
        },
        {
          key: 'state',
          type: 'autocomplete',
          templateOptions: {
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
          templateOptions: {
            type: 'text',
            hideOptional: true,
            label: 'City',
          },
        },
        {
          key: 'congressionalDistrict',
          type: 'input',
          templateOptions: {
            type: 'text',
            hideOptional: true,
            label: 'Congressional District',
          },
        },
      ],
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
                value: 'Active',
              },
              {
                key: 'Inactive',
                value: 'Inactive',
              },
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
