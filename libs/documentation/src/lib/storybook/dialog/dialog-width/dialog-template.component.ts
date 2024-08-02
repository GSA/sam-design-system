import { Component, Inject } from '@angular/core';
import { SdsDialogRef, SDS_DIALOG_DATA } from '@gsa-sam/components';

@Component({
  selector: 'sds-dialog-width-type-template',
  templateUrl: './dialog-template.component.html',
})
export class DialogWidthTypeTemplate {
  constructor(
    public dialogRef: SdsDialogRef<DialogWidthTypeTemplate>,
    @Inject(SDS_DIALOG_DATA) public data: string,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
