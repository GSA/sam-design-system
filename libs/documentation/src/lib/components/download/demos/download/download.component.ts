import { Component } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

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
}
