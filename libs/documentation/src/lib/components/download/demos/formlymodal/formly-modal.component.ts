import { Component } from '@angular/core';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import {
  SdsFormlyDialogData,
  SdsFormlyDialogComponent,
} from '@gsa-sam/sam-formly';
import {
  SDSAutocompletelConfiguration,
  SdsDialogService,
  SDSSelectedItemModel,
  SelectionMode,
} from '@gsa-sam/components';
import { AutocompleteSampleDataService } from './autocomplete-sample.service';

@Component({
  templateUrl: 'formly-modal.component.html',
  selector: `sds-formly-dialog-demo`,
  providers: [AutocompleteSampleDataService],
})
export class FormlyDialog {
  updatedModel: any = {};
  model: any = {};
  public settings = new SDSAutocompletelConfiguration();
  public settings1 = new SDSAutocompletelConfiguration();
  public autocompleteModel = new SDSSelectedItemModel();
  options: FormlyFormOptions;
  fields: FormlyFieldConfig[] = [
    {
      key: 'ytes',
      wrappers: ['filterwrapper'],
      templateOptions: { label: 'yegyusgu' },
      fieldGroup: [
        {
          key: 'lastname',
          type: 'autocomplete',
          templateOptions: {
            label: 'Auto Complete',
            hideLabel: true,
            service: this.service,
            configuration: this.settings1,
            model: this.autocompleteModel,
            modelChange: this.changes,
          },
        },
      ],
    },
    {
      key: 'entity.title',
      type: 'input',
      templateOptions: {
        label: 'Entity Name',
        placeholder: 'eg: Acme Corporation',
        description: 'Enter the name of your entity.',
        required: true,
      },
    },
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
  constructor(
    public service: AutocompleteSampleDataService,
    public dialog: SdsDialogService
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

    this.settings1.id = 'autocompleteBasic1';
    this.settings1.primaryKeyField = 'id';
    this.settings1.primaryTextField = 'name';
    this.settings1.secondaryTextField = 'subtext';
    this.settings1.labelText = 'Autocomplete 1';
    this.settings1.selectionMode = SelectionMode.SINGLE;
    this.settings1.autocompletePlaceHolderText = 'Enter text';
    this.settings1.debounceTime = 350;
  }

  openDialog() {
    const data: any = {
      fields: this.fields,
      model: this.model,
      submit: 'Submit',
      title: 'Formly Dialog',
      options: this.options,
      cancel: 'No thanks',
    };

    const dialogRef: any = this.dialog.open(SdsFormlyDialogComponent, {
      width: 'large',
      data: data,
    });

    dialogRef.componentInstance.submitFn.subscribe((res) => {
      this.updatedModel = res;
      dialogRef.close();
    }
    );

    dialogRef.componentInstance.cancelFn.subscribe((res) => {
      this.updatedModel = res;
      dialogRef.close();
    });
  }
}
