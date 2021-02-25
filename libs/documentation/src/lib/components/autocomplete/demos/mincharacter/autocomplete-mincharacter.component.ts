import { Component, OnInit } from '@angular/core';
import {
  SDSAutocompletelConfiguration,
  SDSSelectedItemModel,
  SelectionMode,
} from '@gsa-sam/components';
import { SampleAutocompleteData } from '../services/autocomplete-sample.data';
import { AutocompleteSampleDataService } from '../services/autocomplete-sample.service';

@Component({
  templateUrl: './autocomplete-mincharacter.component.html',
  selector: `sds-autocomplete-mincharacter-demo`,
  providers: [AutocompleteSampleDataService],
})
export class AutocompleteMinCharacter implements OnInit {
  private data = SampleAutocompleteData;

  public mincharacterSettings = new SDSAutocompletelConfiguration();

  public mincharacterModel = new SDSSelectedItemModel();

  constructor(public service: AutocompleteSampleDataService) {
    this.setup();
  }

  changes(value) {
    console.log(value);
  }

  ngOnInit() {}

  setup() {
    this.mincharacterSettings.primaryKeyField = 'id';
    this.mincharacterSettings.id = 'autocompleteOptional5';
    this.mincharacterSettings.labelText = 'Autocomplete 5';
    this.mincharacterSettings.primaryTextField = 'name';
    this.mincharacterSettings.secondaryTextField = 'subtext';
    this.mincharacterSettings.selectionMode = SelectionMode.MULTIPLE;
    this.mincharacterSettings.autocompletePlaceHolderText = 'Enter text';
    this.mincharacterSettings.minimumCharacterCountSearch = 3;

    this.mincharacterModel.items.push(this.data[0]);
    this.mincharacterModel.items.push(this.data[1]);
  }
}
