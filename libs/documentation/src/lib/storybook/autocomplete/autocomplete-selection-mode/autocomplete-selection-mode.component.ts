import { Component, OnInit } from '@angular/core';
import { SDSAutocompletelConfiguration, SDSSelectedItemModel, SelectionMode } from '@gsa-sam/components';
import { SampleAutocompleteData } from '../services/autocomplete-sample.data';
import { AutocompleteSampleDataService } from '../services/autocomplete-sample.service';

@Component({
  templateUrl: './autocomplete-selection-mode.component.html',
  selector: `sds-autocomplete-selection-mode-demo`,
  providers: [AutocompleteSampleDataService],
})
export class AutocompleteSelectionMode implements OnInit {
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
    this.settings.id = 'autocompleteBasic';
    this.settings.primaryKeyField = 'id';
    this.settings.primaryTextField = 'name';
    this.settings.secondaryTextField = 'subtext';
    this.settings.labelText = 'Autocomplete 1';
    this.settings.selectionMode = SelectionMode.SINGLE;
    this.settings.autocompletePlaceHolderText = 'eg: Level 1';

    this.settings3.primaryKeyField = 'id';
    this.settings3.id = 'autocompleteBasic3';
    this.settings3.labelText = 'Autocomplete 3';
    this.settings3.primaryTextField = 'name';
    this.settings3.secondaryTextField = 'subtext';
    this.settings3.selectionMode = SelectionMode.MULTIPLE;
    this.settings3.autocompletePlaceHolderText = 'eg: Level 1';
  }
}
