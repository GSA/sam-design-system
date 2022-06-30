import { Component } from '@angular/core';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { SdsFormlyDialogData, SdsFormlyDialogComponent } from '@gsa-sam/sam-formly';
import {
  SDSAutocompletelConfiguration,
  SdsDialogService,
  SDSSelectedItemModel,
  SelectionMode,
} from '@gsa-sam/components';
import { AutocompleteSampleDataService } from '../formlymodal/autocomplete-sample.service';

@Component({
  selector: 'gsa-sam-formlymodal-curvy',
  templateUrl: './formlymodal-curvy.component.html',
  styleUrls: ['./formlymodal-curvy.component.css'],
  providers: [AutocompleteSampleDataService],
})
export class FormlyCurvyDialog {
  updatedModel: any = {};
  model: any = {};
  public settings = new SDSAutocompletelConfiguration();
  public autocompleteModel = new SDSSelectedItemModel();
  options: FormlyFormOptions;
  fields: FormlyFieldConfig[] = [
    {
      key: 'filters',

      templateOptions: { label: 'Keyword' },
      fieldGroup: [
        {
          key: 'scheduleNotifications',
          type: 'autocomplete',
          templateOptions: {
            label: 'Select how often you would like to receive notifications.',
            description: '<a href="usa-link">When do my saved searches run?</a>',
            hideDescription: true,
            service: this.service,
            configuration: this.settings,
            model: this.autocompleteModel,
            modelChange: this.changes,
            required: true,
          },
        },
      ],
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
      submit: 'Submit',
      title: 'Formly Dialog',
      options: this.options,
      cancel: 'No thanks',
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
