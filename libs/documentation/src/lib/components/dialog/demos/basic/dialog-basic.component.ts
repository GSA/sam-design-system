import { Component, Inject } from '@angular/core';
import {
  SdsDialogService,
  SdsDialogRef,
  SDS_DIALOG_DATA
} from '@gsa-sam/components';

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
  templateUrl: './overview-template.html'
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
  `
})
export class NestedDialogComponent {
  animal: string;
  name: string;
  constructor(public dialog: SdsDialogService) {}
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: 'small',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.animal = result;
    });
  }
}

/**
 * ALERTS
 * ================================================
 */
// Error
@Component({
  selector: 'sds-dialog-sample-alert',
  templateUrl: './alert-template.html'
})
export class AlertComponent {
  constructor(@Inject(SDS_DIALOG_DATA) public data: AlertData) {}
}

/**
 * OFFICIAL
 * ================================================
 */
@Component({
  selector: 'sds-dialog-sample-official',
  templateUrl: './official-template.html'
})
export class OfficialComponent {}

/*
 * MAIN COMPONENT
 * ================================================
 */
@Component({
  selector: 'sds-modal-sample',
  templateUrl: './dialog-basic.component.html'
})
export class DialogBasic {
  animal: string;
  name: string;

  constructor(public dialog: SdsDialogService) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: 'medium',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.animal = result;
    });
  }

  openNestedDialog() {
    const dialogRef = this.dialog.open(NestedDialogComponent);
  }

  openAlert(title, content, alert, size) {
    const dialogRef = this.dialog.open(AlertComponent, {
      alert: alert,
      width: size,
      data: { title: title, content: content }
    });
  }

  openOfficial() {
    const dialogRef = this.dialog.open(OfficialComponent, {
      width: 'large'
    });
  }
}
