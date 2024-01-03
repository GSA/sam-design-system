import { Component, OnInit } from '@angular/core';
import { SDSAutocompletelConfiguration, SDSSelectedItemModel, SelectionMode } from '@gsa-sam/components';
import { SampleAutocompleteData } from '../services/autocomplete-sample.data';
import { AutocompleteSampleDataService } from '../services/autocomplete-sample.service';

@Component({
  templateUrl: './autocomplete-checkbox.component.html',
  selector: `sds-autocomplete-checkbox-demo`,
  providers: [AutocompleteSampleDataService],
})
export class AutocompleteCheckbox implements OnInit {
  public settings = new SDSAutocompletelConfiguration();
  public settings3 = new SDSAutocompletelConfiguration();

  public model = new SDSSelectedItemModel();
  public model3 = new SDSSelectedItemModel();

  constructor(public service: AutocompleteSampleDataService) {
    this.setup();
  }

  changes(value) {
    console.log(value);
  }

  ngOnInit() {}

  setup() {
    this.settings.primaryKeyField = 'id';
    this.settings.id = 'autocompleteBasic';
    this.settings.labelText = 'Autocomplete';
    this.settings.primaryTextField = 'name';
    this.settings.selectionMode = SelectionMode.MULTIPLE;
    this.settings.autocompletePlaceHolderText = 'eg: Level 1';
    this.settings.useCheckBoxes = true;
    this.settings.isTagModeEnabled = false;

    this.settings3.primaryKeyField = 'id';
    this.settings3.id = 'autocompleteBasic3';
    this.settings3.labelText = 'Autocomplete 3';
    this.settings3.primaryTextField = 'name';
    this.settings3.secondaryTextField = 'subtext';
    this.settings3.selectionMode = SelectionMode.MULTIPLE;
    this.settings3.autocompletePlaceHolderText = 'eg: Level 1';
    this.settings3.useCheckBoxes = true;
  }
}
