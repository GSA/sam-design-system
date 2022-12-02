import { Component, OnInit } from '@angular/core';
import { SDSAutocompletelConfiguration, SDSSelectedItemModel, SelectionMode } from '@gsa-sam/components';
import { SampleAutocompleteData } from '../services/autocomplete-sample.data';
import { AutocompleteSampleDataService } from './autocomplete-sample.service';

@Component({
  templateUrl: './autocomplete-grouping.component.html',
  selector: `sds-autocomplete-grouping-demo`,
  providers: [AutocompleteSampleDataService],
})
export class AutocompleteGrouping implements OnInit {
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
    this.settings.id = 'autocompleteGroup';
    this.settings.primaryKeyField = 'element_id';
    this.settings.primaryTextField = 'value';
    this.settings.labelText = 'Autocomplete 1';
    this.settings.selectionMode = SelectionMode.MULTIPLE;
    this.settings.autocompletePlaceHolderText = 'eg: Formula Grants';
    this.settings.isGroupingEnabled = true;
    this.settings.groupByChild = 'elements'

    this.settings2.id = 'autocompleteSelectGroup';
    this.settings2.primaryKeyField = 'element_id';
    this.settings2.primaryTextField = 'value';
    this.settings2.labelText = 'Autocomplete 1';
    this.settings2.selectionMode = SelectionMode.MULTIPLE;
    this.settings2.autocompletePlaceHolderText = 'eg: Formula Grants';
    this.settings2.isGroupingEnabled = true;
    this.settings2.groupByChild = 'elements';
    this.settings2.isSelectableGroup = false;
  }
}
