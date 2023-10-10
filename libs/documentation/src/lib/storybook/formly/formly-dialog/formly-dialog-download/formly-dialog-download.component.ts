import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  SDSAutocompletelConfiguration,
  SdsDialogService,
  SDSSelectedItemModel,
  SelectionMode,
  TabPanelComponent,
} from '@gsa-sam/components';
import { SdsFormlyDialogComponent, SdsFormlyTypes } from '@gsa-sam/sam-formly';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { AutocompleteSampleDataService } from './autocomplete-sample.service';

@Component({
  selector: 'sds-formly-dialog-download',
  templateUrl: './formly-dialog-download.component.html',
  providers: [AutocompleteSampleDataService],
})
export class FormlyDialogDownloadComponent {
  updatedModel: any = {};
  model: any = { fileType: 'CSV' };
  options: FormlyFormOptions;
  onDownloadModelChange(value) {
    this.updatedModel = value;
  }
  public settings = new SDSAutocompletelConfiguration();
  public autocompleteModel = new SDSSelectedItemModel();

  fields: FormlyFieldConfig[] = [
    {
      key: 'scheduleNotifications',
      type: 'autocomplete',
      props: {
        label: 'Select how often you would like to receive notifications.',
        description: '<a href="#" class="usa-link">When do my saved searches run?</a>',
        service: this.service,
        configuration: this.settings,
        model: this.autocompleteModel,
        modelChange: this.changes,
        required: true,
      },
    },
    {
      key: 'download',
      type: 'radio',
      props: {
        hideOptional: true,
        options: [
          {
            value: 'Single Details',
            key: 'sd',
          },
          {
            value: 'Contract Family Details',
            key: 'cfd',
          },
        ],
      },
    },
    {
      key: 'mode',
      type: 'radio',

      props: {
        hideOptional: true,
        class: 'margin-left-2',
        options: [
          {
            value: 'Modifications',
            key: 'mod',
          },
        ],
      },
     expressions:{
          hide: () => {
        return !(this.model && this.model.download && this.model.download == 'cfd');
      },
     }
    },
    {
      key: 'fileType',
      type: 'fileinfo',
      props: {
        label: 'Select file type',
        hideOptional: true,
        options: [
          { value: 'Default', key: 'CSV', description: '-Limited to 5000' },
          { value: 'Full', key: 'ZIP', description: '-Limited to 10,000' },
          { value: 'Case', key: 'PDF', description: '-Limited to 8000' },
          { value: 'All', key: 'XLS', description: '-Limited to 45000' },
        ],
      },
    },
    {
      key: 'fileName',
      type: 'input',
      props: {
        label: 'Name',
        required: true,
      },
    },
    {
      key: 'additionalOptions',
      type: 'multicheckbox',
      props: {
        options: [
          {
            value: 'Add to my saved search',
            key: 'saved',
          },
        ],
      },
    },
  ];
  constructor(public service: AutocompleteSampleDataService, public dialog: SdsDialogService) {
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
    this.settings.autocompletePlaceHolderText = 'Enter text';
    this.settings.debounceTime = 350;
  }

  openDialog() {
    const data: any = {
      fields: this.fields,
      model: this.model,
      submit: 'Download',
      title: 'Download',
      options: this.options,
      disableSubmitButtonEnabled: true,
      subtitle:
        'Choose from the following download option.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    };

    const dialogRef: any = this.dialog.open(SdsFormlyDialogComponent, {
      width: 'medium',
      data: data,
    });

    dialogRef.componentInstance.submitFn.subscribe((res) => {
      this.updatedModel = res;
      dialogRef.close();
    });

    dialogRef.componentInstance.cancelFn.subscribe((res) => {
      this.updatedModel = res;
      dialogRef.close();
    });
  }
}
