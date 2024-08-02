import { Component } from '@angular/core';
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
            label: 'Single Details',
            value: 'sd',
          },
          {
            label: 'Contract Family Details',
            value: 'cfd',
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
            label: 'Modifications',
            value: 'mod',
          },
        ],
      },
      hideExpression: () => {
        return !(this.model && this.model.download && this.model.download == 'cfd');
      },
    },
    {
      key: 'fileType',
      type: 'fileinfo',
      props: {
        label: 'Select file type',
        hideOptional: true,
        options: [
          { label: 'Default', value: 'CSV', description: '-Limited to 5000' },
          { label: 'Full', value: 'ZIP', description: '-Limited to 10,000' },
          { label: 'Case', value: 'PDF', description: '-Limited to 8000' },
          { label: 'All', value: 'XLS', description: '-Limited to 45000' },
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
            label: 'Add to my saved search',
            value: 'saved',
          },
        ],
      },
    },
  ];
  constructor(
    public service: AutocompleteSampleDataService,
    public dialog: SdsDialogService,
  ) {
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

    dialogRef.componentInstance.onChangeFn.subscribe((res) => {
      dialogRef.componentInstance.disableSubmitButton = !res.additionalOptions.saved;
    });

    dialogRef.componentInstance.cancelFn.subscribe((res) => {
      this.updatedModel = res;
      dialogRef.close();
    });
  }
}
