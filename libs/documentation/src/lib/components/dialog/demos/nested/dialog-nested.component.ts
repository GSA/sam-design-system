import { Component, Inject } from '@angular/core';
import { SdsDialogService, SdsDialogRef, SDS_DIALOG_DATA } from '@gsa-sam/components';

export interface DialogData {
  animal: string;
  name: string;
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

/**
 * NESTED
 * ================================================
 */
@Component({
  selector: 'sds-dialog-sample-nested',
  template: `
    <button class="usa-button" (click)="openDialog()">
      Open another dialog
    </button>
  `,
})
export class NestedDialogComponent {
  animal: string;
  name: string;
  constructor(public dialog: SdsDialogService) {}
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: 'small',
      data: { name: this.name, animal: this.animal },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.animal = result;
    });
  }
}

/*
 * MAIN COMPONENT
 * ================================================
 */
@Component({
  selector: 'sds-modal-sample',
  templateUrl: './dialog-nested.component.html',
})
export class DialogNested {
  constructor(public dialog: SdsDialogService) {}

  openNestedDialog() {
    this.dialog.open(NestedDialogComponent);
  }
}
