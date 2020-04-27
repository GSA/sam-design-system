import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { BehaviorSubject } from 'rxjs';
import { AutocompleteSampleDataService } from './services/autocomplete-sample.service';
import { SDSAutocompletelConfiguration, SDSSelectedItemModel, SelectionMode } from '@gsa-sam/components';
import { SampleAutocompleteData } from './services/autocomplete-sample.data';


@Component({
  selector: 'sds-formly-input',
  templateUrl: './formly-input.component.html',
  providers: [AutocompleteSampleDataService]
})
export class FormlyInputComponent implements OnInit {
  results: any;
  form = new FormGroup({});
  model = {};
  options: FormlyFormOptions = {};
  public settings = new SDSAutocompletelConfiguration();
  public autocompleteModel = new SDSSelectedItemModel();

  public autoCompleteSingleSelectModel= new SDSSelectedItemModel();
  public autoCompleteSingleSelectSettings = new SDSAutocompletelConfiguration();

  public autoCompleteMultiSelectSettings = new SDSAutocompletelConfiguration();
  public autoCompleteMultiSelectModel = new SDSSelectedItemModel();

  public autoCompleteDisableSettings = new SDSAutocompletelConfiguration();
  public autoCompleteDisableModel = new SDSSelectedItemModel();


  private data = SampleAutocompleteData;
  
  public filterChange$ = new BehaviorSubject<object>(null);
  fields: FormlyFieldConfig[] = [

    {
      key: 'filter.autocomplete',
      wrappers: ['accordionwrapper'],
      templateOptions: { label: 'Keyword' },
      fieldGroup: [{
        key: 'firstName',
        type: 'autocomplete',
        templateOptions: {
          label: 'Auto Complete',
          hideLabel: true,
          service: this.service,
          configuration: this.settings,
          model: this.autocompleteModel,
          modelChange: this.changes,
         
        },
      }]
    },
    {
      key: 'filter.searchKeyword',
      wrappers: ['filterwrapper'],
      templateOptions: {
        label: 'Keyword (with label)',
        ariaHidden: true
      },
      fieldGroup: [{
        key: 'keyword',
        type: 'input',
        templateOptions: {
          type: 'text',
          label: 'Keyword'
        },

      }]
    },

    {
      key: 'filter.searchEntity',
      wrappers: ['accordionwrapper'],
      templateOptions: {
        label: 'Entity',
        expand: false,
      },
      fieldGroup: [
        {
          key: 'uniqueEntityIdSam',
          type: 'input',
          templateOptions: {
            tagText: 'DUNS',
            tagClass: 'sds-tag--info-purple',
            label: 'Unique Entity ID',
            placeholder: '',
            min: 13,
            max: 40,
            inputType: 'number',
            inputStyle: 'error',
          },
        },
        {
          key: 'legalBusinessName',
          type: 'input',
          templateOptions: {
            tagText: 'SAM',
            label: 'Unique Entity ID',
            placeholder: '',
            inputType: 'text',
          },
        },
      ],
    },

    {
      key: 'filter.entityStatus',
      wrappers: ['accordionwrapper'],

      templateOptions: {
        label: 'Entity Status',
        expand: true,
      },
      fieldGroup: [
        {
          key: 'statusCheckbox',
          type: 'multicheckbox',
          templateOptions: {
            label: 'Status Select',
            options: [
              {
                key: 'Active',
                value: 'Active'
              },
              {
                key: 'Draft',
                value: 'Draft'
              },
              {
                key: 'Expired',
                value: 'Expired'
              },
              {
                key: 'InProgress',
                value: 'In Progress'
              }
            ]
          },
        },
      ]
    },
    {
      key: 'filter.expirationDate',
      wrappers: ['accordionwrapper'],
      templateOptions: { label: 'Expiration Date' },
      fieldGroup: [
        {
          key: 'expirationDateOpen',
          type: 'datepicker',
          templateOptions: {
            label: 'Expiration Date (no validation)',
          }
        },
        {
          key: 'expirationDateMin',
          type: 'datepicker',
          templateOptions: {
            label: 'Expiration Date (Min only Validation)',
            minDate: new Date(2019, 9, 5)
          }
        },
        {
          key: 'expirationDatemax',
          type: 'datepicker',
          templateOptions: {
            label: 'Expiration Date (Max only Validation)',
            maxDate: new Date(2019, 9, 25)
          }
        },
        {
          key: 'expirationDateboth',
          type: 'datepicker',
          templateOptions: {
            label: 'Expiration Date (Min and Max Validation)',
            minDate: new Date(2019, 9, 5),
            maxDate: new Date(2019, 9, 25)
          }
        },
        {
          key: 'expirationDateRangeEx',
          type: 'daterangepicker',
          templateOptions: {
            label: 'Expiration Date Range',
            minDate: new Date(2019, 9, 5),
            maxDate: new Date(2019, 9, 25)
          }
        },
        {
          key: 'expirationDateOption',
          type: 'radio',
          templateOptions: {
            label: 'Expiration Date',
            options: [
              { label: '30 Days', value: '30' },
              { label: '60 Days', value: '60' },
              { label: '90 Days', value: '90' },

            ]
          },
        },
      ]
    },
    {
      key: 'filter.entityType',
      wrappers: ['filterwrapper'],
      templateOptions: { label: 'Entity Types' },
      fieldGroup: [
        {
          key: 'entityType',
          type: 'select',
          templateOptions: {
            label: 'Type',
            multiple: false,
            options: [
              { label: 'Contract Opportunities', value: 'co' },
              { label: 'Entity Information', value: 'ei' },
              { label: 'Assitance Listings', value: 'al' },
              { label: 'Contract Data', value: 'cd' },
              { label: 'Federal Heirarchy', value: 'fh' },
              { label: 'Wage Determination', value: 'wd' },
            ],
          },
        },
    
      ]
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
    this.settings.autocompletePlaceHolderText = 'Enter text';
    this.settings.debounceTime = 350;


    this.autoCompleteSingleSelectSettings.id = 'autocomplete1';
    this.autoCompleteSingleSelectSettings.primaryKeyField = 'id';
    this.autoCompleteSingleSelectSettings.primaryTextField = 'name';
    this.autoCompleteSingleSelectSettings.secondaryTextField = 'subtext';
    this.autoCompleteSingleSelectSettings.labelText = 'Autocomplete 1';
    this.autoCompleteSingleSelectSettings.selectionMode = SelectionMode.SINGLE;
    this.autoCompleteSingleSelectSettings.autocompletePlaceHolderText = 'Enter text';
  
    this.autoCompleteMultiSelectSettings.id = 'autocomplete1';
    this.autoCompleteMultiSelectSettings.primaryKeyField = 'id';
    this.autoCompleteMultiSelectSettings.primaryTextField = 'name';
    this.autoCompleteMultiSelectSettings.secondaryTextField = 'subtext';
    this.autoCompleteMultiSelectSettings.labelText = 'Autocomplete 1';
    this.autoCompleteMultiSelectSettings.selectionMode = SelectionMode.MULTIPLE;
    this.autoCompleteMultiSelectSettings.autocompletePlaceHolderText = 'Enter text';
  

    this.autoCompleteDisableSettings.id = 'autocomplete1';
    this.autoCompleteDisableSettings.primaryKeyField = 'id';
    this.autoCompleteDisableSettings.primaryTextField = 'name';
    this.autoCompleteDisableSettings.secondaryTextField = 'subtext';
    this.autoCompleteDisableSettings.labelText = 'Autocomplete 1';
    this.autoCompleteDisableSettings.selectionMode = SelectionMode.MULTIPLE;
    this.autoCompleteDisableSettings.autocompletePlaceHolderText = 'Enter text';
    this.autoCompleteDisableSettings.debounceTime = 0;

    this.autoCompleteDisableModel.items.push(this.head(this.data))
  }

   head(array) {
    return (array && array.length) ? array[0] : undefined;
  }

  // To display the selected model values
  public ngOnInit() {
    this.filterChange$.subscribe(
      res =>
        this.results = res
    );
  }


}
