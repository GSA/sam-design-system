import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SDSAutocompletelConfiguration, SelectionMode } from '@gsa-sam/components';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { BehaviorSubject } from 'rxjs';
import { AutocompleteSampleDataService } from '../../../formly-autocomplete/demos/basic/autocomplete-sample.service';

@Component({
  templateUrl: './filters-group-panel.component.html',
  selector: `sds-filters-group-panel-demo`,
  providers: [
    AutocompleteSampleDataService
  ]
})
export class FiltersGroupPanel implements OnInit {
  constructor( 
    private service: AutocompleteSampleDataService
  ) { }

  results: any = {};
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  public filterChange$ = new BehaviorSubject<object>(null);
  public settings = new SDSAutocompletelConfiguration();
  // Groups

  // Default Multiple Controls
  sdsGroupDefaultMultipleControls: FormlyFieldConfig[] = [
    {
      key: 'filters',
      templateOptions: {
        label: 'Status',
        group: 'popover',
      },
      fieldGroup: [
        {
          key: 'socioeconomic',
          type: 'multicheckbox',
          templateOptions: {
            label: 'Socio-Economic Status',
            required: true,
            options: [
              {
                key: 'vet',
                value: 'Veteran Owned'
              },
              {
                key: 'women',
                value: 'Women Owned'
              },
              {
                key: 'minority',
                value: 'Minority Owned'
              }
            ]
          },
        },
      ],
    },
    {
      key: 'filters',
      templateOptions: {
        label: 'Socio-Economic Status',
        group: 'popover',
      },
      fieldGroup: [
        {
          key: 'socioeconomic2',
          type: 'multicheckbox',
          templateOptions: {
            label: 'Socio-Economic Status',
            required: true,
            options: [
              {
                key: 'vet',
                value: 'Veteran Owned'
              },
              {
                key: 'women',
                value: 'Women Owned'
              },
              {
                key: 'minority',
                value: 'Minority Owned'
              }
            ]
          },
        },
      ],
    },
    {
      key: 'searchmodel',
      type: 'search',
      templateOptions: {
        label: 'Search',
        hideLabel: true,
        submitHandler: this.handleSubmit,
        searchSettings: {
          placeholder: 'eg: Acme Corporation',
        },
      },
    },
  ];

  // Default Single Control
  sdsGroupDefaultSingleControl: FormlyFieldConfig[] = [
    {
      key: 'single.default.entity.title',
      type: 'input',
      templateOptions: {
        label: 'Entity Name',
        group: 'panel',
        placeholder: 'eg: Acme Corporation',
        description: 'Enter the name of your entity.',
        required: true,
      },
    },
  ];


  public ngOnInit() {
    this.filterChange$.subscribe((res) => {
      this.results = res;
    });

    this.settings.id = 'autocompleteBasic';
    this.settings.primaryKeyField = 'id';
    this.settings.primaryTextField = 'name';
    this.settings.secondaryTextField = 'subtext';
    this.settings.labelText = 'Autocomplete 1';
    this.settings.selectionMode = SelectionMode.MULTIPLE;
    this.settings.autocompletePlaceHolderText = 'eg: Level 1';
    this.settings.debounceTime = 350;
    this.settings.hideChips = true;
  }

  removeItem(chip: any) {
    console.log(chip);
  }

  handleSubmit($event) {
    console.log($event);
  }
}
