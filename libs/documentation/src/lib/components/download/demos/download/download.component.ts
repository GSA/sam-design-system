import { Component } from '@angular/core';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { SdsFormlyDialogData, SdsFormlyDialogComponent } from '@gsa-sam/sam-formly';
import { SdsDialogService } from '@gsa-sam/components';

@Component({
  templateUrl: 'download.component.html',
  selector: `sds-download-demo`,
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
  constructor(public dialog: SdsDialogService) {}
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

    dialogRef.componentInstance.onChangeFn.subscribe((res) => {
      dialogRef.componentInstance.disableSubmitButton = !res.additionalOptions.saved;
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
