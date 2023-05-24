import { Component } from '@angular/core';
import { SdsDialogService } from '@gsa-sam/components';
import { DialogAlertTypeTemplate } from './dialog-template.component';

@Component({
  selector: 'sds-dialog-alert-type',
  templateUrl: './dialog-alert-type.component.html',
})
export class DialogAlertTypeComponent  {

  constructor(public dialog: SdsDialogService) {}

  openWarningDialog(): void {
    this.dialog.open(DialogAlertTypeTemplate, {
      width: 'medium',
      alert: 'warning',
    });
  }
  openInfoDialog(): void {
    this.dialog.open(DialogAlertTypeTemplate, {
      width: 'medium',
      alert: 'info',
    });
  }
  openSuccessDialog(): void {
    this.dialog.open(DialogAlertTypeTemplate, {
      width: 'medium',
      alert: 'success',
    });
  }
  openErrorDialog(): void {
    this.dialog.open(DialogAlertTypeTemplate, {
      width: 'medium',
      alert: 'error',
    });
  }

}
