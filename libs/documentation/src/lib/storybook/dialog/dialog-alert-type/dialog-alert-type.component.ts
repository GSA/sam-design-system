import { Component } from '@angular/core';
import { SdsDialogService } from '@gsa-sam/components';
import { DialogAlertTypeTemplate } from './dialog-template.component';

@Component({
  selector: 'sds-dialog-alert-type',
  templateUrl: './dialog-alert-type.component.html',
})
export class DialogAlertTypeComponent {
  constructor(public dialog: SdsDialogService) {}

  openWarningDialog(): void {
    this.dialog.open(DialogAlertTypeTemplate, {
      width: 'medium',
      alert: 'warning',
      data: {
        type: 'Warning',
      },
    });
  }
  openInfoDialog(): void {
    this.dialog.open(DialogAlertTypeTemplate, {
      width: 'medium',
      alert: 'info',
      data: {
        type: 'Info',
      },
    });
  }
  openSuccessDialog(): void {
    this.dialog.open(DialogAlertTypeTemplate, {
      width: 'medium',
      alert: 'success',
      data: {
        type: 'Success',
      },
    });
  }
  openErrorDialog(): void {
    this.dialog.open(DialogAlertTypeTemplate, {
      width: 'medium',
      alert: 'error',
      data: {
        type: 'Error',
      },
    });
  }
}
