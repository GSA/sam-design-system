import { Component, OnInit } from '@angular/core';
import { SDSAutocompletelConfiguration, SDSSelectedItemModel, SelectionMode } from '@gsa-sam/components';
import { SampleAutocompleteData } from '../services/autocomplete-sample.data';
import { AutocompleteSampleDataService } from '../services/autocomplete-sample.service';

@Component({
  templateUrl: './autocomplete-free-text.component.html',
  selector: `sds-autocomplete-free-text-demo`,
  providers: [AutocompleteSampleDataService],
})
export class AutocompleteFreeText implements OnInit {
  private data = SampleAutocompleteData;
  public settings = new SDSAutocompletelConfiguration();
  public settings2 = new SDSAutocompletelConfiguration();

  public model = new SDSSelectedItemModel();
  public model2 = new SDSSelectedItemModel();

  constructor(public service: AutocompleteSampleDataService) {
    this.setup();
  }

  changes(value) {
    console.log(value);
  }

  ngOnInit() {}

  setup() {
    this.settings.id = 'autocompleteOptional';
    this.settings.primaryKeyField = 'id';
    this.settings.primaryTextField = 'name';
    this.settings.secondaryTextField = 'subtext';
    this.settings.labelText = 'Autocomplete 1';
    this.settings.selectionMode = SelectionMode.MULTIPLE;
    this.settings.autocompletePlaceHolderText = 'eg: Level 1';
    this.settings.isFreeTextEnabled = true;
    this.settings.isTagModeEnabled = true

    this.settings2.id = 'autocompleteOptional';
    this.settings2.primaryKeyField = 'id';
    this.settings2.primaryTextField = 'name';
    this.settings2.secondaryTextField = 'subtext';
    this.settings2.labelText = 'Autocomplete 1';
    this.settings2.selectionMode = SelectionMode.MULTIPLE;
    this.settings2.autocompletePlaceHolderText = 'eg: Level 1';
    this.settings2.isFreeTextEnabled = true;
  }
}
