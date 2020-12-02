import { Component, Inject } from '@angular/core';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import {
  SdsDialogService,
  SdsDialogRef,
  SDS_DIALOG_DATA
} from '@gsa-sam/components';
import {
  SdsFormlyDialogComponent,
  SdsFormlyDialogData
} from '@gsa-sam/sam-formly';

@Component({
  templateUrl: './subheader-basic-display.component.html',
  styleUrls: ['./subheader-basic-display.component.scss']
})
export class SubheaderBasicDisplayComponent {
  subheader = {
    buttons: [
      { id: 'FirstButton', text: 'Button', class: 'usa-button--secondary' },
      { id: 'SecondButton', text: 'Button', class: 'usa-button--primary' }
    ],
    actions: [
      { id: 'DownloadBtn', icon: 'bars', text: 'Download' },
      { id: 'FollowBtn', icon: 'bars', text: 'Follow' },
      { id: 'ShareBtn', icon: 'bars', text: 'Share' }
    ]
  };
  log(value) {
    console.log(`%cLog: ${value}`, 'color: blue; font-weight: bold');
  }
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
  model: any = { fileType: 'CSV' };
  form: FormGroup;
  options: FormlyFormOptions;
  downloadResponse = {};

  constructor(public dialog: SdsDialogService) {}
  onActionMenuItem(btnId) {
    if (btnId == 'DownloadBtn') {
      const data: SdsFormlyDialogData = {
        fields: this.fields,
        model: this.model,
        submit: 'Download',
        title: 'Download',
        options: this.options
      };

      const dialogRef = this.dialog.open(SdsFormlyDialogComponent, {
        width: 'medium',
        data: data
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.downloadResponse = result;
        }
      });
    }

    console.log('down', btnId);
  }
}
