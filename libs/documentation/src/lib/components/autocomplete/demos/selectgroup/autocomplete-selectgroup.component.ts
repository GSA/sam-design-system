import { Component } from '@angular/core';
import { SDSAutocompletelConfiguration, SDSSelectedItemModel, SelectionMode } from '@gsa-sam/components';
import { AutocompleteSampleDataService } from './autocomplete-sample.service';

@Component({
  templateUrl: './autocomplete-selectgroup.component.html',
  selector: `sds-autocomplete-selectgroup-demo`,
  providers: [AutocompleteSampleDataService],
})
export class AutocompleteSelectGroup {
  public settings = new SDSAutocompletelConfiguration();
  public model = new SDSSelectedItemModel();

  constructor(public service: AutocompleteSampleDataService) {
    this.setup();
  }

  setup() {
    this.settings.id = 'autocompleteSelectGroup';
    this.settings.primaryKeyField = 'element_id';
    this.settings.primaryTextField = 'value';
    this.settings.labelText = 'Autocomplete 1';
    this.settings.selectionMode = SelectionMode.MULTIPLE;
    this.settings.autocompletePlaceHolderText = 'eg: Formula Grants';
    this.settings.isGroupingEnabled = true;
    this.settings.groupByChild = 'elements';
    this.settings.isSelectableGroup = false;
  }
}
