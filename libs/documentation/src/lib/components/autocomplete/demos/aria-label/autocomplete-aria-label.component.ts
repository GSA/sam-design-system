import { Component } from "@angular/core";
import { SDSAutocompletelConfiguration, SDSSelectedItemModel, SelectionMode } from "@gsa-sam/components";
import { AutocompleteSampleDataService } from '../services/autocomplete-sample.service';

@Component({
  selector: `sds-autocomplete-aria-label-demo`,
  templateUrl: './autocomplete-aria-label.component.html',
  providers: [AutocompleteSampleDataService],
})
export class AutocompleteAriaLabelComponent {
  public settings = new SDSAutocompletelConfiguration();
  public model = new SDSSelectedItemModel();

  constructor(public service: AutocompleteSampleDataService) {
    this.setup();
  }

  setup() {
    this.settings.id = 'autocompleteAriaLabel';
    this.settings.primaryKeyField = 'id';
    this.settings.primaryTextField = 'name';
    this.settings.secondaryTextField = 'subtext';
    this.settings.labelText = 'Autocomplete Aria';
    this.settings.selectionMode = SelectionMode.SINGLE;
    this.settings.autocompletePlaceHolderText = 'Level 1';
    this.settings.ariaLabelText = 'Aria Label Example';
  }
}