import { Component, OnInit } from '@angular/core';
import {
  SDSAutocompletelConfiguration,
  SDSSelectedItemModel,
  SelectionMode,
} from '@gsa-sam/components';
import { SampleAutocompleteData } from '../services/autocomplete-sample.data';
import { AutocompleteSampleDataService } from '../services/autocomplete-sample.service';

@Component({
  templateUrl: './autocomplete-disable.component.html',
  selector: `sds-autocomplete-disable-demo`,
  providers: [AutocompleteSampleDataService],
})
export class AutocompleteDisable implements OnInit {
  private data = SampleAutocompleteData;

  public disableMSettings = new SDSAutocompletelConfiguration();
  public multiModeDisableSettings = new SDSAutocompletelConfiguration();

  public multiModeDisableModel = new SDSSelectedItemModel();
  public disableMModel = new SDSSelectedItemModel();

  constructor(public service: AutocompleteSampleDataService) {
    this.setup();
  }

  changes(value) {
    console.log(value);
  }

  ngOnInit() {}

  setup() {
    this.multiModeDisableSettings.primaryKeyField = 'id';
    this.multiModeDisableSettings.id = 'autocompleteOptional6';
    this.multiModeDisableSettings.labelText = 'Autocomplete 6';
    this.multiModeDisableSettings.primaryTextField = 'name';
    this.multiModeDisableSettings.secondaryTextField = 'subtext';
    this.multiModeDisableSettings.selectionMode = SelectionMode.SINGLE;
    this.multiModeDisableSettings.autocompletePlaceHolderText = 'Enter text';

    this.disableMSettings.primaryKeyField = 'id';
    this.disableMSettings.id = 'autocompleteOptionalDisable';
    this.disableMSettings.labelText = 'Autocomplete Disabled';
    this.disableMSettings.primaryTextField = 'name';
    this.disableMSettings.secondaryTextField = 'subtext';
    this.disableMSettings.selectionMode = SelectionMode.MULTIPLE;
    this.disableMSettings.autocompletePlaceHolderText = 'Enter text';

    this.disableMModel.items.push(this.data[0]);
    this.disableMModel.items.push(this.data[3]);
  }
}
