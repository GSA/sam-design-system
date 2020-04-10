import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { BehaviorSubject } from 'rxjs';
import { AutocompleteSampleDataService } from './services/autocomplete-sample.service';
import { SDSAutocompletelConfiguration, SDSSelectedItemModel, SelectionMode } from '@gsa-sam/components';
import { SampleAutocompleteData } from './services/autocomplete-sample.data';

@Component({
  templateUrl: './autocomplete-basic.component.html',
  styleUrls: ['./autocomplete-basic.component.scss'],
  providers: [AutocompleteSampleDataService]
})

export class FormlyAutocompleteBasic implements OnInit {
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
          modelChange: this.changes
        },
      }]
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
