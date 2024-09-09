import { Component, Inject } from '@angular/core';
import { SdsDialogService, SdsDialogRef, SDS_DIALOG_DATA } from '@gsa-sam/components';

export interface DialogData {
  animal: string;
  name: string;
}

export interface AlertData {
  title: string;
  content: string;
}

@Component({
  selector: 'sds-dialog-sample-data',
  templateUrl: './overview-template.html',
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: SdsDialogRef<DialogOverviewExampleDialog>,
    @Inject(SDS_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

/*
 * MAIN COMPONENT
 * ================================================
 */
@Component({
  selector: 'sds-modal-sample',
  templateUrl: './dialog-overview.component.html',
})
export class DialogOverView {
  animal: string;
  name: string;

  constructor(public dialog: SdsDialogService) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: 'medium',
      data: { name: this.name, animal: this.animal },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.animal = result;
    });
  }
}
