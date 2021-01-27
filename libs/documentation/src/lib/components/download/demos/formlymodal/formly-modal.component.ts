import { Component } from '@angular/core';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import {
  SdsFormlyDialogData,
  SdsFormlyDialogComponent
} from '@gsa-sam/sam-formly';
import { SdsDialogService } from '@gsa-sam/components';

@Component({
  templateUrl: 'formly-modal.component.html',
  selector: `sds-formly-dialog-demo`,
})
export class FormlyDialog {
  updatedModel: any = {};
  model: any = {};
  options: FormlyFormOptions;
  fields: FormlyFieldConfig[] = [
    {
      key: 'entity.title',
      type: 'input',
      templateOptions: {
        label: 'Entity Name',
        placeholder: 'Acme Corporation',
        description: 'Enter the name of your entity.',
        required: true
      }
    }
  ];

  constructor(public dialog: SdsDialogService) { }
  openDialog() {
    const data: any = {
      fields: this.fields,
      model: this.model,
      submit: 'Submit',
      title: 'Formly Dialog',
      options: this.options,
      cancel: 'No thanks'
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
