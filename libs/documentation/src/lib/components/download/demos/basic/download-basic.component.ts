import { Component, Inject } from '@angular/core';
import {
  SdsDialogRef,
  SDS_DIALOG_DATA,
  SdsDialogService
} from '@gsa-sam/components';
import { SdsDownloadData } from 'libs/packages/layouts/src/lib/feature/download-modal/download-modal.component';

@Component({
  selector: 'sds-download-data',
  templateUrl: './form-download/template.html'
})
export class DownloadExampleDialog {
  constructor(
    public dialogRef: SdsDialogRef<DownloadExampleDialog>,
    @Inject(SDS_DIALOG_DATA) public data: SdsDownloadData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'gsa-sam-downloadbasic',
  templateUrl: 'download-basic.component.html'
})
export class DownloadBasic {
  name: string;
  fullRecord: boolean;
  summaryInfo: boolean;
  caseRecords: boolean;
  currentRecord: boolean;
  savedSearch: boolean;
  fileType: string;

  constructor(public dialog: SdsDialogService) {}

  openModal(): void {
    const dialogRef = this.dialog.open(DownloadExampleDialog, {
      width: 'medium',
      data: {
        name: this.name,
        fullRecord: this.fullRecord,
        summaryInfo: this.summaryInfo,
        caseRecords: this.caseRecords,
        currentRecord: this.currentRecord,
        savedSearch: this.savedSearch,
        fileType: this.fileType
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.fileType = result;
    });
  }
}
