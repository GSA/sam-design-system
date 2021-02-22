import { Component, OnInit } from '@angular/core';
import {
  SDSAutocompletelConfiguration,
  SDSSelectedItemModel,
  SelectionMode,
} from '@gsa-sam/components';
import { AutocompleteSampleDataService } from '../services/autocomplete-sample.service';

@Component({
  templateUrl: './autocomplete-freetext.component.html',
  selector: `sds-autocomplete-freetext-demo`,
  providers: [AutocompleteSampleDataService],
})
export class AutocompleteFreeText implements OnInit {
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
    this.settings.id = 'autocompleteOptional';
    this.settings.primaryKeyField = 'id';
    this.settings.primaryTextField = 'name';
    this.settings.secondaryTextField = 'subtext';
    this.settings.labelText = 'Autocomplete 1';
    this.settings.selectionMode = SelectionMode.MULTIPLE;
    this.settings.autocompletePlaceHolderText = 'Enter text';
    this.settings.isFreeTextEnabled = true;
  }
}
