import { Component, OnInit } from '@angular/core';
import {
  SDSAutocompletelConfiguration,
  SDSSelectedItemModel,
  SelectionMode,
} from '@gsa-sam/components';
import { SampleAutocompleteData } from '../services/autocomplete-sample.data';
import { AutocompleteSampleDataService } from '../services/autocomplete-sample.service';

@Component({
  templateUrl: './autocomplete-tagmode.component.html',
  selector: `sds-autocomplete-tagmode-demo`,
  providers: [AutocompleteSampleDataService],
})
export class AutocompleteTagmode implements OnInit {
  private data = SampleAutocompleteData;

  public tagmodeSettings = new SDSAutocompletelConfiguration();

  public tagmodeModel = new SDSSelectedItemModel();

  constructor(public service: AutocompleteSampleDataService) {
    this.setup();
  }

  changes(value) {
    console.log(value);
  }

  ngOnInit() {}

  setup() {
    this.tagmodeSettings.primaryKeyField = 'id';
    this.tagmodeSettings.id = 'autocompleteOptional3';
    this.tagmodeSettings.labelText = 'Autocomplete 3';
    this.tagmodeSettings.primaryTextField = 'name';
    this.tagmodeSettings.secondaryTextField = 'subtext';
    this.tagmodeSettings.selectionMode = SelectionMode.MULTIPLE;
    this.tagmodeSettings.autocompletePlaceHolderText = 'Enter text';
    this.tagmodeSettings.isTagModeEnabled = true;
  }
}
