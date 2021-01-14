import { Component, OnInit } from '@angular/core';
import {
  SDSAutocompletelConfiguration,
  SDSSelectedItemModel,
  SelectionMode
} from '@gsa-sam/components';
import { SampleAutocompleteData } from './autocomplete-sample.data';
import { AutocompleteSampleDataService } from './autocomplete-sample.service';

@Component({
  templateUrl: './autocomplete-optional.component.html',
  styleUrls: ['./autocomplete-optional.component.scss'],
  selector: `sds-autocomplete-optional-demo`,
  providers: [AutocompleteSampleDataService]
})
export class AutocompleteOptional implements OnInit {
  private data = SampleAutocompleteData;
  public settings = new SDSAutocompletelConfiguration();
  public settings2 = new SDSAutocompletelConfiguration();
  public settings3 = new SDSAutocompletelConfiguration();
  public settings4 = new SDSAutocompletelConfiguration();
  public settings5 = new SDSAutocompletelConfiguration();
  public settings6 = new SDSAutocompletelConfiguration();
  public disableMSettings = new SDSAutocompletelConfiguration();
  public model = new SDSSelectedItemModel();
  public model2 = new SDSSelectedItemModel();
  public model3 = new SDSSelectedItemModel();
  public model4 = new SDSSelectedItemModel();
  public model5 = new SDSSelectedItemModel();
  public model6 = new SDSSelectedItemModel();
  public disableMModel = new SDSSelectedItemModel();

  constructor(public service: AutocompleteSampleDataService) {
    this.setup();
  }

  changes(value) {
    console.log(value);
  }

  ngOnInit() {}

  setup() {
    this.settings.id = 'autocomplete1';
    this.settings.primaryKeyField = 'id';
    this.settings.primaryTextField = 'name';
    this.settings.secondaryTextField = 'subtext';
    this.settings.labelText = 'Autocomplete 1';
    this.settings.selectionMode = SelectionMode.MULTIPLE;
    this.settings.autocompletePlaceHolderText = 'Enter text';
    this.settings.isFreeTextEnabled = true;

    this.settings2.primaryKeyField = 'id';
    this.settings2.id = 'autocomplete2';
    this.settings2.labelText = 'Autocomplete 2';
    this.settings2.primaryTextField = 'name';
    this.settings2.secondaryTextField = 'subtext';
    this.settings2.selectionMode = SelectionMode.SINGLE;
    this.settings2.autocompletePlaceHolderText = 'Enter text';
    this.settings2.inputReadOnly = true;

    this.settings3.primaryKeyField = 'id';
    this.settings3.id = 'autocomplete3';
    this.settings3.labelText = 'Autocomplete 3';
    this.settings3.primaryTextField = 'name';
    this.settings3.secondaryTextField = 'subtext';
    this.settings3.selectionMode = SelectionMode.MULTIPLE;
    this.settings3.autocompletePlaceHolderText = 'Enter text';
    this.settings3.isTagModeEnabled = true;

    this.settings4.primaryKeyField = 'id';
    this.settings4.id = 'autocomplete4';
    this.settings4.labelText = 'Autocomplete 4';
    this.settings4.primaryTextField = 'name';
    this.settings4.secondaryTextField = 'subtext';
    this.settings4.autocompletePlaceHolderText = 'Enter text';
    this.settings4.selectionMode = SelectionMode.MULTIPLE;

    this.settings5.primaryKeyField = 'id';
    this.settings5.id = 'autocomplete5';
    this.settings5.labelText = 'Autocomplete 5';
    this.settings5.primaryTextField = 'name';
    this.settings5.secondaryTextField = 'subtext';
    this.settings5.selectionMode = SelectionMode.MULTIPLE;
    this.settings5.autocompletePlaceHolderText = 'Enter text';
    this.settings5.minimumCharacterCountSearch = 3;

    this.settings6.primaryKeyField = 'id';
    this.settings6.id = 'autocomplete6';
    this.settings6.labelText = 'Autocomplete 6 Disabled';
    this.settings6.primaryTextField = 'name';
    this.settings6.secondaryTextField = 'subtext';
    this.settings6.selectionMode = SelectionMode.SINGLE;
    this.settings6.autocompletePlaceHolderText = 'Enter text';

    this.disableMSettings.primaryKeyField = 'id';
    this.disableMSettings.id = 'autocomplete6';
    this.disableMSettings.labelText = 'Autocomplete 6 Disabled';
    this.disableMSettings.primaryTextField = 'name';
    this.disableMSettings.secondaryTextField = 'subtext';
    this.disableMSettings.selectionMode = SelectionMode.MULTIPLE;
    this.disableMSettings.autocompletePlaceHolderText = 'Enter text';

    this.model6.items.push(this.data[0]);
    this.disableMModel.items.push(this.data[0]);
    this.disableMModel.items.push(this.data[3]);

    this.model5.items.push(this.data[0]);
    this.model5.items.push(this.data[1]);
  }
}
