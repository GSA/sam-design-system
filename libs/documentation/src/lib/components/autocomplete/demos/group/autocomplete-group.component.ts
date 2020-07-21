import { Component, OnInit } from '@angular/core';
import {
  SDSAutocompletelConfiguration,
  SDSSelectedItemModel,
  SelectionMode
} from '@gsa-sam/components';
import { SampleAutocompleteData } from './service/autocomplete-sample.data';
import { AutocompleteSampleDataService } from './service/autocomplete-sample.service';

@Component({
  templateUrl: './autocomplete-group.component.html',
  providers: [AutocompleteSampleDataService]
})
export class AutocompleteGroup implements OnInit {
  private data = SampleAutocompleteData;
  public settings = new SDSAutocompletelConfiguration();
  public model = new SDSSelectedItemModel();

  constructor(public service: AutocompleteSampleDataService) {
    this.setup();
  }

  changes(value) {
    console.log(value);
  }

  ngOnInit() {}

  setup() {
    this.settings.id = 'autocomplete1';
    this.settings.primaryKeyField = 'code';
    this.settings.primaryTextField = 'value';
    // this.settings.secondaryTextField = 'subtext';
    this.settings.labelText = 'Autocomplete 1';
    this.settings.selectionMode = SelectionMode.MULTIPLE;
    this.settings.autocompletePlaceHolderText = 'Enter text';
  }
}
