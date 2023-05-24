import { Component, Inject } from '@angular/core';
import { SdsDialogRef, SDS_DIALOG_DATA } from "@gsa-sam/components";

@Component({
  selector: 'sds-dialog-alert-type-template',
  templateUrl: './dialog-template.component.html',
})
export class DialogAlertTypeTemplate {
  constructor(
    public dialogRef: SdsDialogRef<DialogAlertTypeTemplate>,
    @Inject(SDS_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
