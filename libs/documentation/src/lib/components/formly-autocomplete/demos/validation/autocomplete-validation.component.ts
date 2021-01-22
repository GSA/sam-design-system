import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { BehaviorSubject } from 'rxjs';
import { AutocompleteSampleDataService } from './autocomplete-sample.service';
import {
  SDSAutocompletelConfiguration,
  SDSSelectedItemModel,
  SelectionMode
} from '@gsa-sam/components';
@Component({
  templateUrl: './autocomplete-validation.component.html',
  selector: `sds-formly-validation-demo`,
  providers: [AutocompleteSampleDataService]
})
export class FormlyAutocompleteValidation {
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
            label: 'Auto Complete validation with single selection mode',
            service: this.service,
            required: true,
            configuration: this.settings,
            model: this.autocompleteModel
          }
        },
        {
          key: 'agency',
          type: 'autocomplete',
          templateOptions: {
            label: 'Auto Complete validation with multiple selection mode',
            service: this.service,
            required: true,
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

    this.multipleSettings.id = 'autocomplete1';
    this.multipleSettings.primaryKeyField = 'id';
    this.multipleSettings.primaryTextField = 'name';
    this.multipleSettings.secondaryTextField = 'subtext';
    this.multipleSettings.labelText = 'Autocomplete 1';
    this.multipleSettings.selectionMode = SelectionMode.MULTIPLE;
    this.multipleSettings.autocompletePlaceHolderText = 'Enter text';
  }
}
