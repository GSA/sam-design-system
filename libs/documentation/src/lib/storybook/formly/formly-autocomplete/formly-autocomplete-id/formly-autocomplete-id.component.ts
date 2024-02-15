import { Component, OnInit } from '@angular/core';
import { AutocompleteSampleDataService } from '../services/autocomplete-sample.service';
import { UntypedFormGroup } from '@angular/forms';
import { SDSAutocompletelConfiguration, SDSSelectedItemModel, SelectionMode } from '@gsa-sam/components';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'sds-formly-autocomplete-id',
  templateUrl: './formly-autocomplete-id.component.html',
  providers: [AutocompleteSampleDataService],
})
export class FormlyAutocompleteIdComponent implements OnInit {
  results: any;
  form = new UntypedFormGroup({});
  model: any = {
    firstName: {},
    middleName: {},
    lastName: {},
  };
  options: FormlyFormOptions = {};

  public firstNameSettings = new SDSAutocompletelConfiguration();
  public middleNameSettings = new SDSAutocompletelConfiguration();
  public lastNameSettings = new SDSAutocompletelConfiguration();

  public firstNameModel = new SDSSelectedItemModel();
  public middleNameModel = new SDSSelectedItemModel();
  public lastNameModel = new SDSSelectedItemModel();

  public filterChange$ = new BehaviorSubject<object>(null);
  fields: FormlyFieldConfig[] = [
    {
      key: 'filters',
      props: { label: 'Keyword' },
      fieldGroup: [
        {
          key: 'firstName',
          type: 'autocomplete',
          props: {
            label: 'First Name',
            service: this.service,
            configuration: this.firstNameSettings,
            model: this.firstNameModel,
            modelChange: this.changes,
          },
        },
        {
          key: 'middletName',
          type: 'autocomplete',
          id: 'middleNameAutocomplete',
          props: {
            label: 'Middle Name',
            service: this.service,
            configuration: this.middleNameSettings,
            model: this.middleNameModel,
            modelChange: this.changes,
          },
        },
        {
          key: 'lastName',
          type: 'autocomplete',
          props: {
            label: 'Last Name',
            service: this.service,
            configuration: this.lastNameSettings,
            model: this.lastNameModel,
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
    // Set first name autocomplete to connect label and input
    // If setting autocomplete id programmatically, both lines must be present to avoid 508 issue
    this.firstNameSettings.id = 'firstNameAutocomplete';
    this.fields[0].fieldGroup[0].id = this.firstNameSettings.id;

    this.firstNameSettings.primaryKeyField = 'id';
    this.firstNameSettings.primaryTextField = 'name';
    this.firstNameSettings.secondaryTextField = 'subtext';
    this.firstNameSettings.labelText = 'First Name';
    this.firstNameSettings.selectionMode = SelectionMode.SINGLE;
    this.firstNameSettings.autocompletePlaceHolderText = 'eg: Level 1';
    this.firstNameSettings.debounceTime = 350;
    this.firstNameSettings.hideCloseIcon = true;

    this.middleNameSettings.primaryKeyField = 'id';
    this.middleNameSettings.primaryTextField = 'name';
    this.middleNameSettings.secondaryTextField = 'subtext';
    this.middleNameSettings.labelText = 'Middle Name';
    this.middleNameSettings.selectionMode = SelectionMode.SINGLE;
    this.middleNameSettings.autocompletePlaceHolderText = 'eg: Level 1';
    this.middleNameSettings.debounceTime = 350;
    this.middleNameSettings.hideCloseIcon = true;

    this.lastNameSettings.primaryKeyField = 'id';
    this.lastNameSettings.primaryTextField = 'name';
    this.lastNameSettings.secondaryTextField = 'subtext';
    this.lastNameSettings.labelText = 'Last Name';
    this.lastNameSettings.selectionMode = SelectionMode.SINGLE;
    this.lastNameSettings.autocompletePlaceHolderText = 'eg: Level 1';
    this.lastNameSettings.debounceTime = 350;
    this.lastNameSettings.hideCloseIcon = true;
  }

  onModelChange() {
    // To changes the close icon on modal change
    if (this.model.filters.firstName[0].id !== '1') {
      this.firstNameSettings.hideCloseIcon = false;
    } else {
      this.firstNameSettings.hideCloseIcon = true;
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
