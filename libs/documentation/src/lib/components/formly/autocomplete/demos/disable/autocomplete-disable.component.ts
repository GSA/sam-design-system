import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { BehaviorSubject } from 'rxjs';
import { AutocompleteSampleDataService } from '../../services/autocomplete-sample.service';
import {
  SDSAutocompletelConfiguration,
  SDSSelectedItemModel,
  SelectionMode
} from '@gsa-sam/components';
import { SampleAutocompleteData } from '../../services/autocomplete-sample.data';

@Component({
  templateUrl: './autocomplete-disable.component.html',
  providers: [AutocompleteSampleDataService]
})
export class FormlyAutocompleteDisable {
  results: any;
  form = new FormGroup({});
  model = {
    filters: {
      agency: [],
      items: []
    }
  };
  options: FormlyFormOptions = {};
  public settings = new SDSAutocompletelConfiguration();
  public autocompleteModel = new SDSSelectedItemModel();
  private data = SampleAutocompleteData;
  public filterChange$ = new BehaviorSubject<object>(null);
  public multipleSettings = new SDSAutocompletelConfiguration();
  fields: FormlyFieldConfig[] = [
    {
      key: 'filters',
      wrappers: ['filterwrapper'],
      templateOptions: { label: 'Keyword' },
      fieldGroup: [
        {
          key: 'items',
          type: 'autocomplete',

          templateOptions: {
            label: 'Auto Complete disable with single selection mode',
            disabled: true,

            service: this.service,
            configuration: this.settings,
            model: this.autocompleteModel
          }
        },
        {
          key: 'agency',
          type: 'autocomplete',
          templateOptions: {
            label: 'Auto Complete disable with multiple selection mode',
            disabled: true,
            service: this.service,
            configuration: this.multipleSettings,
            model: this.autocompleteModel
          }
        }
      ]
    }
  ];

  constructor(public service: AutocompleteSampleDataService) {
    this.setup();
  }

  setup() {
    this.settings.id = 'autocomplete1';
    this.settings.primaryKeyField = 'id';
    this.settings.primaryTextField = 'name';
    this.settings.secondaryTextField = 'subtext';
    this.settings.labelText = 'Autocomplete 1';
    this.settings.selectionMode = SelectionMode.SINGLE;
    this.settings.autocompletePlaceHolderText = 'Enter text';

    this.model.filters.items.push(this.data[0]);

    this.multipleSettings.id = 'autocomplete1';
    this.multipleSettings.primaryKeyField = 'id';
    this.multipleSettings.primaryTextField = 'name';
    this.multipleSettings.secondaryTextField = 'subtext';
    this.multipleSettings.labelText = 'Autocomplete 1';
    this.multipleSettings.selectionMode = SelectionMode.MULTIPLE;
    this.multipleSettings.autocompletePlaceHolderText = 'Enter text';

    this.model.filters.agency.push(this.data[0]);
    this.model.filters.agency.push(this.data[1]);
  }
}
