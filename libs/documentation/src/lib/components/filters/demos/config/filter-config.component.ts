import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { BehaviorSubject } from 'rxjs';
import { AutocompleteSampleDataService } from './services/autocomplete-sample.service';
import {
  SDSAutocompletelConfiguration,
  SDSSelectedItemModel,
  SelectionMode
} from '@gsa-sam/components';
import { SampleAutocompleteData } from './services/autocomplete-sample.data';

@Component({
  templateUrl: './filter-config.component.html',
  providers: [AutocompleteSampleDataService]
})
export class FiltersConfig implements OnInit {
  results: any;
  form = new FormGroup({});
  model = {};
  options: FormlyFormOptions = {};
  public settings = new SDSAutocompletelConfiguration();
  public autocompleteModel = new SDSSelectedItemModel();
  private data = SampleAutocompleteData;
  public filterChange$ = new BehaviorSubject<object>(null);
  fields: FormlyFieldConfig[] = [
    {
      key: 'entity.title',
      type: 'autocomplete',
      templateOptions: {
        label: 'Entity Name',
        group: 'accordion',
        placeholder: 'Acme Corporation',
        description: 'Enter the name of your entity.',
        service: this.service,
        configuration: this.settings,
        model: this.autocompleteModel,
        modelChange: this.changes
      }
    }
  ];

  public opportunitiesFilters: FormlyFieldConfig[] = [
    {
      key: 'opportunitySearch',
      templateOptions: { label: 'Opportunity Search...' ,},
      fieldGroup: [
        {
          key: 'Authority',
          wrappers: ['accordionwrapper'],
          type: 'autocomplete',
          templateOptions: {
            label: ' authorityDictionaryService.authorityConfig.labelText',
            type: 'autocomplete',
            service: this.service,
            configuration: this.settings,
            model: this.changes
          }
        },
        {
          key: 'locationWrapper',
          wrappers: ['accordionwrapper'],
          templateOptions: { label: 'Location' },
          fieldGroup: [
            {
              key: 'popZipCode',
              type: 'input',
              templateOptions: {
                hideOptional: true,
                type: 'autocomplete',
                label: 'Place of Performance Zip Code',
                placeholder: 'ex: 39059'
              }
            },
            {
              key: 'officeZipCode',
              type: 'input',
              templateOptions: {
                hideOptional: true,
                label: 'Office Zip Code',
                placeholder: 'ex: 39059'
              }
            }
          ]
        },
        {
          key: 'typeOfNotice',
          wrappers: ['accordionwrapper'],
          type: 'autocomplete',
          templateOptions: {
            label: 'typeOfNoticeService.noticeTypeConfig.labelText',
            type: 'autocomplete',
            service: this.service,
            configuration: this.settings,
            model: this.changes
          }
        },
        {
          key: 'FederalOrgs',
          wrappers: ['accordionwrapper'],
          type: 'autocomplete',
          templateOptions: {
            label: 'FederalOrganizations',
            type: 'autocomplete',
            service: this.service,
            configuration: this.settings,
            model: this.changes
          }
        },
      
        {
          key: 'setAsideFilter',
          wrappers: ['accordionwrapper'],
          type: 'autocomplete',
          templateOptions: {
            label: 'setAsideNoticeFilterService.setAsideFilterConfig.labelText',
            type: 'autocomplete',
            service: this.service,
            configuration: this.settings,
            model: this.changes
          }
        },
        {
          key: 'initiative',
          wrappers: ['accordionwrapper'],
          type: 'autocomplete',
          templateOptions: {
            label: 'this.initativeFilterService.config.labelText',
            type: 'autocomplete',
            service: this.service,
            configuration: this.settings,
            model: this.changes
          }
        }
      ]
    }
  ];

  constructor(public service: AutocompleteSampleDataService) {
    this.setup();
  }

  changes(value) {
    console.log(value);
  }

  setup() {
    this.settings.id = 'autocomplete';
    this.settings.primaryKeyField = 'id';
    this.settings.primaryTextField = 'name';
    this.settings.secondaryTextField = 'subtext';
    this.settings.labelText = 'Autocomplete';
    this.settings.selectionMode = SelectionMode.MULTIPLE;
    this.settings.autocompletePlaceHolderText = 'Enter text';
    this.settings.debounceTime = 350;
  }

  head(array) {
    return array && array.length ? array[0] : undefined;
  }

  // To display the selected model values
  public ngOnInit() {
    this.filterChange$.subscribe(res => (this.results = res));
  }
}
