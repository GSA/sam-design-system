import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { BehaviorSubject } from 'rxjs';
import { AutocompleteSampleDataService } from '../services/autocomplete-sample.service';
import { SDSAutocompletelConfiguration, SDSSelectedItemModel, SelectionMode } from '@gsa-sam/components';
import { SampleAutocompleteData } from '../services/autocomplete-sample.data';

@Component({
  templateUrl: './formly-autocomplete-disable.component.html',
  selector: `sds-formly-autocomplete-disable`,
  providers: [AutocompleteSampleDataService],
})
export class FormlyAutocompleteDisableComponent {
  results: any;
  form = new FormGroup({});
  model = {
    filters: {
      agency: [],
      items1: [],
      items2: [],
    },
  };
  options: FormlyFormOptions = {};
  public settings = new SDSAutocompletelConfiguration();
  public settings2 = new SDSAutocompletelConfiguration();

  public autocompleteMultipleModel = new SDSSelectedItemModel();
  private data = SampleAutocompleteData;
  public filterChange$ = new BehaviorSubject<object>(null);
  public multipleSettings = new SDSAutocompletelConfiguration();
  fields: FormlyFieldConfig[] = [
    {
      key: 'filters',
      props: { label: 'Keyword' },
      fieldGroup: [
        {
          key: 'items1',
          type: 'autocomplete',
          props: {
            label: 'Generic Autocomplete',
            service: this.service,
            configuration: this.settings,
          },
          hooks: {
            onChanges: (field) => {
              field.form.controls['items1'].valueChanges.subscribe((value: any[]) => {
                if (!value || !value.length) {
                  field.form.controls['items2'].reset();
                }
              });
            },
          },
        },
        {
          key: 'items2',
          type: 'autocomplete',

          props: {
            label: 'Auto Complete disabled using Expression properties until Previous Autocomplete is selected',
            service: this.service,
            configuration: this.settings2,
          },
          expressionProperties: {
            'props.disabled': () => !this.model.filters.items1 || this.model.filters.items1.length === 0,
          },
        },
        {
          key: 'agency',
          type: 'autocomplete',
          props: {
            label: 'Auto Complete disable with multiple selection mode',
            disabled: true,
            service: this.service,
            configuration: this.multipleSettings,
            model: this.autocompleteMultipleModel,
          },
        },
      ],
    },
  ];

  constructor(public service: AutocompleteSampleDataService) {
    this.setup();
  }

  setup() {
    this.settings.id = 'autocompleteDisableSingle';
    this.fields[0].fieldGroup[0].id = this.settings.id;
    this.settings.primaryKeyField = 'id';
    this.settings.primaryTextField = 'name';
    this.settings.secondaryTextField = 'subtext';
    this.settings.labelText = 'Autocomplete 1';
    this.settings.selectionMode = SelectionMode.SINGLE;
    this.settings.autocompletePlaceHolderText = 'eg: Level 1';

    this.settings2.id = 'autocompleteDisable2Single';
    this.fields[0].fieldGroup[1].id = this.settings2.id;
    this.settings2.primaryKeyField = 'id';
    this.settings2.primaryTextField = 'name';
    this.settings2.secondaryTextField = 'subtext';
    this.settings2.labelText = 'Autocomplete 2';
    this.settings2.selectionMode = SelectionMode.SINGLE;
    this.settings2.autocompletePlaceHolderText = 'eg: Level 1';

    this.multipleSettings.id = 'autocompleteDisableMultiple';
    this.fields[0].fieldGroup[2].id = this.multipleSettings.id;
    this.multipleSettings.primaryKeyField = 'id';
    this.multipleSettings.primaryTextField = 'name';
    this.multipleSettings.secondaryTextField = 'subtext';
    this.multipleSettings.labelText = 'Autocomplete 1';
    this.multipleSettings.selectionMode = SelectionMode.MULTIPLE;
    this.multipleSettings.autocompletePlaceHolderText = 'eg: Level 1';

    this.model.filters.agency.push(this.data[0]);
    this.model.filters.agency.push(this.data[1]);
  }
}
