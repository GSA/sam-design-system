import { Component, Inject } from '@angular/core';
import { SdsDialogService, SdsDialogRef, SDS_DIALOG_DATA } from '@gsa-sam/components';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html'
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

@Component({
  selector: 'dialog-overview-example-dialog-2',
  template: `
    <button (click)="openDialog()">Open another dialog</button>
  `
})
export class DialogOverviewExample2Dialog {
  animal: string;
  name: string;
  constructor(public dialog: SdsDialogService) {}
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}

@Component({
  selector: 'sds-modal-sample',
  templateUrl: 'dialog-sample.component.html'
})
export class DialogSampleComponent {
  animal: string;
  name: string;

  constructor(public dialog: SdsDialogService) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(DialogOverviewExample2Dialog);
  }
}
