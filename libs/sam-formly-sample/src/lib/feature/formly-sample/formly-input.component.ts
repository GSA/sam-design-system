import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { BehaviorSubject } from 'rxjs';
import { AutocompleteSampleDataService } from './services/autocomplete-sample.service';
import { SDSAutocompletelConfiguration, SDSSelectedItemModel, SelectionMode } from '@gsa-sam/components';
import { SampleAutocompleteData } from './services/autocomplete-sample.data';


@Component({
  selector: 'formly-input',
  templateUrl: './formly-input.component.html',
  styleUrls: ['./formly-input.component.scss'],
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
      key: 'filters',
      wrappers: ['filterwrapper'],
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
      key: 'filters',
      wrappers: ['accordionwrapper'],
      templateOptions: { label: 'Search' },
      fieldGroup: [
        {
          key: 'level2',
          type: 'autocomplete',
          templateOptions: {
            label: 'Auto Complete with single',
            service: this.service,
            configuration: this.autoCompleteSingleSelectSettings,
            model: this.autoCompleteSingleSelectModel,
            modelChange: this.changes
          },
        },
     

        {
          key: 'level2',
          type: 'autocomplete',
          templateOptions: {
            label: 'Auto Complete with multiselect',
            service: this.service,
            configuration: this.autoCompleteMultiSelectSettings,
            model: this.autoCompleteMultiSelectModel,
            modelChange: this.changes
          },
        },

        {
          key: 'level3',
          type: 'autocomplete',
          templateOptions: {
            label: 'Auto Complete with disable with pre populated value',
            service: this.service,
            configuration: this.autoCompleteDisableSettings,
            model: this.autoCompleteDisableModel,
            modelChange: this.changes,
            disabled: true

           
          },
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
    this.settings.id = 'autocomplete1';
    this.settings.primaryKeyField = 'id';
    this.settings.primaryTextField = 'name';
    this.settings.secondaryTextField = 'subtext';
    this.settings.labelText = 'Autocomplete 1';
    this.settings.selectionMode = SelectionMode.MULTIPLE;
    this.settings.autocompletePlaceHolderText = 'Enter text';
    // this.settings.debounceTime = 100;


    this.autoCompleteSingleSelectSettings.id = 'autocomplete1';
    this.autoCompleteSingleSelectSettings.primaryKeyField = 'id';
    this.autoCompleteSingleSelectSettings.primaryTextField = 'name';
    this.autoCompleteSingleSelectSettings.secondaryTextField = 'subtext';
    this.autoCompleteSingleSelectSettings.labelText = 'Autocomplete 1';
    this.autoCompleteSingleSelectSettings.selectionMode = SelectionMode.SINGLE;
    this.autoCompleteSingleSelectSettings.autocompletePlaceHolderText = 'Enter text';
    this.autoCompleteSingleSelectSettings.debounceTime = 110;

    this.autoCompleteMultiSelectSettings.id = 'autocomplete1';
    this.autoCompleteMultiSelectSettings.primaryKeyField = 'id';
    this.autoCompleteMultiSelectSettings.primaryTextField = 'name';
    this.autoCompleteMultiSelectSettings.secondaryTextField = 'subtext';
    this.autoCompleteMultiSelectSettings.labelText = 'Autocomplete 1';
    this.autoCompleteMultiSelectSettings.selectionMode = SelectionMode.MULTIPLE;
    this.autoCompleteMultiSelectSettings.autocompletePlaceHolderText = 'Enter text';
    this.autoCompleteMultiSelectSettings.debounceTime = 0;


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
