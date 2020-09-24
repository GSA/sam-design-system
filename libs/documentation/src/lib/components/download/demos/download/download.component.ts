import { Component } from '@angular/core';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import {
  SdsFormlyDialogData,
  SdsFormlyDialogComponent
} from '@gsa-sam/sam-formly';
import { SdsDialogService } from '@gsa-sam/components';

@Component({
  templateUrl: 'download.component.html'
})
export class DownloadComponent {
  updatedModel: any = {};
  model: any = { fileType: 'CSV' };
  options: FormlyFormOptions;
  onDownloadModelChange(value) {
    this.updatedModel = value;
  }

  fields: FormlyFieldConfig[] = [
    {
      key: 'download',
      type: 'radio',
      templateOptions: {
        hideOptional: true,
        options: [
          {
            value: 'Single Details',
            key: 'sd'
          },
          {
            value: 'Contract Family Details',
            key: 'cfd'
          }
        ]
      }
    },
    {
      key: 'mode',
      type: 'radio',

      templateOptions: {
        hideOptional: true,
        class: 'margin-left-2',
        options: [
          {
            value: 'Modifications',
            key: 'mod'
          }
        ]
      },
      hideExpression: () => {
        return !(
          this.model &&
          this.model.download &&
          this.model.download == 'cfd'
        );
      }
    },
    {
      key: 'fileType',
      type: 'fileinfo',
      templateOptions: {
        label: 'Select file type',
        hideOptional: true,
        options: [
          { value: 'Default', key: 'CSV', description: '-Limited to 5000' },
          { value: 'Full', key: 'ZIP', description: '-Limited to 10,000' },
          { value: 'Case', key: 'PDF', description: '-Limited to 8000' },
          { value: 'All', key: 'XLS', description: '-Limited to 45000' }
        ]
      }
    },
    {
      key: 'fileName',
      type: 'input',
      templateOptions: {
        label: 'Name',
        required: true
      }
    },
    {
      key: 'additionalOptions',
      type: 'multicheckbox',
      templateOptions: {
        options: [
          {
            value: 'Add to my saved search',
            key: 'saved'
          }
        ]
      }
    }
  ];
  constructor(public dialog: SdsDialogService) { }
  openDialog() {
    const data: SdsFormlyDialogData = {
      fields: this.fields,
      model: this.model,
      submit: 'Download',
      title: 'Download',
      options: this.options,
      disableSubmitButtonEnabled: true,
      subtitle:
        'Choose from the following download option.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
    };

    const dialogRef = this.dialog.open(SdsFormlyDialogComponent, {
      width: 'medium',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.updatedModel = result;
      }
    });
  }
}
