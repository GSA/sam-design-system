import { Component } from '@angular/core';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import {
  SDSAutocompletelConfiguration,
  SdsDialogService,
  SDSSelectedItemModel,
  SearchSettings,
  SelectionMode,
} from '@gsa-sam/components';
import {
  SdsFormlyDialogComponent,
  SdsFormlyDialogData,
} from '@gsa-sam/sam-formly';
import { AutocompleteSampleDataService } from './services/autocomplete-sample.service';

@Component({
  templateUrl: './subheader-search-autocomplete.component.html',
  styleUrls: ['./subheader-search-autocomplete.component.scss'],
  selector: `sds-subheader-search-autocomplete-demo`,
  providers: [AutocompleteSampleDataService],
})
export class SubheaderSearchAutocompleteComponent {
  public autocompletesettings = new SDSAutocompletelConfiguration();

  public autocompletemodel = new SDSSelectedItemModel();

  subheader = {
    buttons: [
      { id: 'FirstButton', text: 'Button', class: 'usa-button--secondary' },
      { id: 'SecondButton', text: 'Button', class: 'usa-button--primary' },
    ],
    actions: [
      { id: 'DownloadBtn', icon: 'bars', text: 'Download' },
      { id: 'FollowBtn', icon: 'bars', text: 'Follow' },
      { id: 'ShareBtn', icon: 'bars', text: 'Share' },
    ],
  };

  // Code begin for download
  fields: FormlyFieldConfig[] = [
    {
      key: 'options',
      type: 'radio',
      templateOptions: {
        label: 'Choose options',
        options: [
          {
            value: 'Download Full record',
            key: 'dfr',
          },
          {
            value: 'Download summary information only',
            key: 'dsi',
          },
          {
            value: 'Download FDPS case record',
            key: 'dfc',
          },
          {
            value: 'Download current record and all of its modifications',
            key: 'dcr',
          },
        ],
      },
    },
    {
      key: 'fileType',
      type: 'fileinfo',
      templateOptions: {
        label: 'Select file type',
        options: [
          { value: 'Search Results', key: 'CSV' },
          { value: 'Search Results', key: 'PDF' },
          { value: 'WD Decision', key: 'ZIP' },
        ],
      },
    },
    {
      key: 'fileName',
      type: 'input',
      templateOptions: {
        label: 'Name',
      },
    },
    {
      key: 'additionalOptions',
      type: 'multicheckbox',
      templateOptions: {
        options: [
          {
            value: 'Add to my saved search',
            key: 'saved',
          },
        ],
      },
    },
  ];
  model: any = { fileType: 'CSV' };
  form: FormGroup;
  options: FormlyFormOptions;
  downloadResponse = {};

  searchSettings: SearchSettings = {
    placeholder: 'Enter an entity ID, name, or keyword',
    parentSelector: '.grid-row',
    inputClass:
      'width-card-lg widescreen:width-mobile display-none desktop-lg:display-inline-block',
    size: 'small',
    ariaLabel: 'Search Entity',
    dropdown: {},
  };
  searchModel = {};

  constructor(
    public dialog: SdsDialogService,
    public service: AutocompleteSampleDataService
  ) {
    this.setup();
  }
  setup() {
    this.autocompletesettings.id = 'autocompleteBasic';
    this.autocompletesettings.primaryKeyField = 'id';
    this.autocompletesettings.primaryTextField = 'name';
    this.autocompletesettings.secondaryTextField = 'subtext';
    this.autocompletesettings.labelText = 'Autocomplete 1';
    this.autocompletesettings.selectionMode = SelectionMode.SINGLE;
    this.autocompletesettings.autocompletePlaceHolderText = 'Enter text';
  }
  onActionMenuItem(btnId) {
    if (btnId == 'DownloadBtn') {
      const data: any = {
        fields: this.fields,
        model: this.model,
        submit: 'Download',
        title: 'Download',
        options: this.options,
      };

      const dialogRef = this.dialog.open(SdsFormlyDialogComponent, {
        width: 'medium',
        data: data,
      });

      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.downloadResponse = result;
        }
      });
    }

    console.log('down', btnId);
  }

  searchSubmit(model) {
    console.log('Search Submitted', model);
  }
}
