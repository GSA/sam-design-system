import { Component, Input, OnInit } from '@angular/core';
import { SDSAutocompletelConfiguration, SDSSelectedItemModel, SelectionMode } from '@gsa-sam/components';
import { SampleAutocompleteData } from '../services/autocomplete-sample.data';
import { AutocompleteSampleDataService } from '../services/autocomplete-sample.service';

@Component({
  templateUrl: './autocomplete-configurable.component.html',
  selector: `sds-autocomplete-configurable-demo`,
  providers: [AutocompleteSampleDataService],
})
export class AutocompleteConfigurable implements OnInit {
  @Input('settings')
  settings: SDSAutocompletelConfiguration;

  @Input('disabled')
  disabled: boolean = false;

  private data = SampleAutocompleteData;

  public model = new SDSSelectedItemModel();

  constructor(public service: AutocompleteSampleDataService) {}

  changes(value) {
    console.log(value);
  }

  ngOnInit() {}
}
