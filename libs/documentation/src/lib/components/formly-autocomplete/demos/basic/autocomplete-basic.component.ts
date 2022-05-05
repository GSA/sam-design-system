import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { BehaviorSubject } from 'rxjs';
import { AutocompleteSampleDataService } from './autocomplete-sample.service';
import { SDSAutocompletelConfiguration, SDSSelectedItemModel, SelectionMode } from '@gsa-sam/components';

@Component({
  templateUrl: './autocomplete-basic.component.html',
  styleUrls: ['./autocomplete-basic.component.scss'],
  selector: `sds-formly-autocomplete-basic-demo`,
  providers: [AutocompleteSampleDataService],
})
export class FormlyAutocompleteBasic implements OnInit {
  results: any;
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  public settings = new SDSAutocompletelConfiguration();
  public autocompleteModel = new SDSSelectedItemModel();
  public filterChange$ = new BehaviorSubject<object>(null);
  fields: FormlyFieldConfig[] = [
    {
      key: 'filters',
      wrappers: ['filterwrapper'],
      templateOptions: { label: 'Keyword' },
      fieldGroup: [
        {
          key: 'firstName',
          type: 'autocomplete',
          templateOptions: {
            label: 'Auto Complete',
            hideLabel: true,
            service: this.service,
            configuration: this.settings,
            model: this.autocompleteModel,
            modelChange: this.changes,
          },
        },
      ],
    },
  ];

  constructor(public service: AutocompleteSampleDataService) {
    this.setup();
  }

  changes(value) {
    console.log(value);
  }

  setup() {
    this.settings.id = 'autocompleteBasic';
    this.settings.primaryKeyField = 'id';
    this.settings.primaryTextField = 'name';
    this.settings.secondaryTextField = 'subtext';
    this.settings.labelText = 'Autocomplete 1';
    this.settings.selectionMode = SelectionMode.SINGLE;
    this.settings.autocompletePlaceHolderText = 'eg: Level 1';
    this.settings.debounceTime = 350;
    this.settings.hideCloseIcon = true;
  }

  onModelChange() {
    // To changes the close icon on modal change
    if (this.model.filters.firstName[0].id !== '1') {
      this.settings.hideCloseIcon = false;
    } else {
      this.settings.hideCloseIcon = true;
    }
  }

  head(array) {
    return array && array.length ? array[0] : undefined;
  }

  // To display the selected model values
  public ngOnInit() {
    this.filterChange$.subscribe((res) => (this.results = res));
  }

  // Method to programatically set the FormControl value which gets converted to the items array through the writeValue method
  setModelVal() {
    this.form.get('filters.firstName').patchValue([
      {
        id: '3',
        parentId: '2',
        name: 'Level 3',
        subtext: 'id 3',
        type: 'Level 3',
        childCount: 2,
        highlighted: true,
      },
    ]);
  }

  // Method to programatically set the FormControl value which gets converted to the items array through the writeValue method
  setModelObj() {
    const newModel = [
      {
        id: '3',
        parentId: '2',
        name: 'Level 3',
        subtext: 'id 3',
        type: 'Level 3',
        childCount: 2,
        highlighted: true,
      },
      {
        id: '42',
        parentId: '41',
        name: 'Level 6',
        subtext: 'id 42',
        type: 'Level 6',
        childCount: 3,
        highlighted: true,
      },
    ];

    const newObjModel = new SDSSelectedItemModel(newModel);
    this.form.get('filters.firstName').patchValue(newObjModel.items);
  }
}
