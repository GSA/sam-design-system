import { Component, OnInit } from '@angular/core';
import { SDSAutocompletelConfiguration, SDSSelectedItemModel, SelectionMode } from '@gsa-sam/components';

import { AutocompleteSampleDataService } from '../services/autocomplete-sample.service';

@Component({
  templateUrl: './autocomplete-inputreadonly.component.html',
  selector: `sds-autocomplete-inputreadonly-demo`,
  providers: [AutocompleteSampleDataService],
})
export class AutocompleteInputReadOnly implements OnInit {
  public inputReadOnlySettings = new SDSAutocompletelConfiguration();

  public inputReadOnlyModel = new SDSSelectedItemModel();

  constructor(public service: AutocompleteSampleDataService) {
    this.setup();
  }

  changes(value) {
    console.log(value);
  }

  ngOnInit() {}

  setup() {
    this.inputReadOnlySettings.primaryKeyField = 'id';
    this.inputReadOnlySettings.id = 'autocompleteInputReadOnly';
    this.inputReadOnlySettings.labelText = 'Autocomplete readonly';
    this.inputReadOnlySettings.primaryTextField = 'name';
    this.inputReadOnlySettings.secondaryTextField = 'subtext';
    this.inputReadOnlySettings.selectionMode = SelectionMode.SINGLE;
    this.inputReadOnlySettings.autocompletePlaceHolderText = 'eg: Level 1';
    this.inputReadOnlySettings.inputReadOnly = true;
  }
}
