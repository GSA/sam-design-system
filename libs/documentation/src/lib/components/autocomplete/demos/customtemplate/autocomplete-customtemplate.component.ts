import { Component, OnInit } from '@angular/core';
import {
  SDSAutocompletelConfiguration,
  SDSSelectedItemModel,
  SelectionMode,
} from '@gsa-sam/components';
import { SampleAutocompleteData } from '../services/autocomplete-sample.data';
import { AutocompleteSampleDataService } from '../services/autocomplete-sample.service';

@Component({
  templateUrl: './autocomplete-customtemplate.component.html',

  selector: `sds-autocomplete-customtemplate-demo`,
  providers: [AutocompleteSampleDataService],
})
export class AutocompleteCustomTemplate {
  private data = SampleAutocompleteData;

  public customTemplateSettings = new SDSAutocompletelConfiguration();

  public customTemplateModel = new SDSSelectedItemModel();

  constructor(public service: AutocompleteSampleDataService) {
    this.setup();
  }

  changes(value) {
    console.log(value);
  }

  setup() {
    this.customTemplateSettings.primaryKeyField = 'id';
    this.customTemplateSettings.id = 'autocompleteOptional4';
    this.customTemplateSettings.labelText = 'Autocomplete 4';
    this.customTemplateSettings.primaryTextField = 'name';
    this.customTemplateSettings.secondaryTextField = 'subtext';
    this.customTemplateSettings.autocompletePlaceHolderText = 'eg: Level 1';
    this.customTemplateSettings.selectionMode = SelectionMode.MULTIPLE;
  }
}
