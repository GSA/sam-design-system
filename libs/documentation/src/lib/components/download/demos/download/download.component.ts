import { Component } from '@angular/core';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import {
  SdsFormlyDialogData,
  SdsFormlyDialogComponent
} from '@sam-design-system/sam-formly';
import { SdsDialogService } from '@gsa-sam/components';

@Component({
  templateUrl: 'download.component.html'
})
export class DownloadComponent {
  configurations = {
    title: 'Download Dialog',
    buttonText: 'Download',
    submitButtonText: 'Download',
    infoMessage: ``
  };

  updatedModel: any = {};
  model: any = { fileType: 'CSV' };
  options: FormlyFormOptions;
  onDownloadModelChange(value) {
    this.updatedModel = value;
  }

  fields: FormlyFieldConfig[] = [
    {
      key: 'options',
      type: 'multicheckbox',
      templateOptions: {
        label: 'Choose options',
        selectAllOption: true,
        options: [
          {
            value: 'Download Full record',
            key: 'dfr'
          },
          {
            value: 'Download summary information only',
            key: 'dsi'
          },
          {
            value: 'Download FDPS case record',
            key: 'dfc'
          },
          {
            value: 'Download current record and all of its modifications',
            key: 'dcr'
          }
        ]
      }
    },
    {
      key: 'fileType',
      type: 'fileinfo',
      templateOptions: {
        label: 'Select file type',
        options: [
          { value: 'Search Results', key: 'CSV' },
          { value: 'Search Results', key: 'PDF' },
          { value: 'WD Decision', key: 'ZIP' }
        ]
      }
    },
    {
      key: 'fileName',
      type: 'input',
      templateOptions: {
        label: 'Name'
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
  constructor(public dialog: SdsDialogService) {}
  openDialog() {
    const data: SdsFormlyDialogData = {
      fields: this.fields,
      model: this.model,
      submit: 'Download',
      title: 'Download',
      options: this.options
      // originalFields: this.fields,
      // originalModel: this.model
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
