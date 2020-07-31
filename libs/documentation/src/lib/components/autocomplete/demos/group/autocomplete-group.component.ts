import { Component } from '@angular/core';
import {
  SDSAutocompletelConfiguration,
  SDSSelectedItemModel,
  SelectionMode
} from '@gsa-sam/components';
import { AutocompleteSampleDataService } from './service/autocomplete-sample.service';

@Component({
  templateUrl: './autocomplete-group.component.html',
  providers: [AutocompleteSampleDataService]
})
export class AutocompleteGroup {
  public settings = new SDSAutocompletelConfiguration();
  public model = new SDSSelectedItemModel();

  constructor(public service: AutocompleteSampleDataService) {
    this.setup();
  }

  setup() {
    this.settings.id = 'autocomplete1';
    this.settings.primaryKeyField = 'element_id';
    this.settings.primaryTextField = 'value';
    this.settings.labelText = 'Autocomplete 1';
    this.settings.selectionMode = SelectionMode.MULTIPLE;
    this.settings.autocompletePlaceHolderText = 'Enter text';
    this.settings.isGroupingEnabled = true;
    this.settings.groupByChild = 'elements';
  }
}
