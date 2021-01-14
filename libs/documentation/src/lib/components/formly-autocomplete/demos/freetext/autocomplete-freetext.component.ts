import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { AutocompleteSampleDataService } from './autocomplete-sample.service';
import {
  SDSAutocompletelConfiguration,
  SDSSelectedItemModel,
  SelectionMode
} from '@gsa-sam/components';

@Component({
  templateUrl: './autocomplete-freetext.component.html',
  selector: `sds-formly-autocomplete-freetext-demo`,
  providers: [AutocompleteSampleDataService]
})
export class FormlyAutocompleteFreetext {
  results: any;
  form = new FormGroup({});
  model = {};
  options: FormlyFormOptions = {};
  public settings = new SDSAutocompletelConfiguration();
  public autocompleteModel = new SDSSelectedItemModel();
  fields: FormlyFieldConfig[] = [
    {
      key: 'filters',
      wrappers: ['filterwrapper'],
      templateOptions: { label: 'Keyword' },
      fieldGroup: [
        {
          key: 'firstName',
          type: 'autocomplete',
          templateOptions: {
            label: 'Auto Complete',
            hideLabel: true,
            service: this.service,
            configuration: this.settings,
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
    this.settings.selectionMode = SelectionMode.MULTIPLE;
    this.settings.autocompletePlaceHolderText = 'Enter text';
    this.settings.isFreeTextEnabled = true;
  }
}
