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
  private data = SampleAutocompleteData;
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
    this.settings.secondaryTextField = 'subtext';
    this.settings.selectionMode = SelectionMode.MULTIPLE;
    this.settings.autocompletePlaceHolderText = 'eg: Level 1';
    this.settings.useCheckBoxes = true;
  }
}
