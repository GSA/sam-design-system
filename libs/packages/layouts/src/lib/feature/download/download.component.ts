import { Component, OnInit } from '@angular/core';
import { SdsDialogService } from '@gsa-sam/components';
import { SdsDownloadDialogComponent } from '../download-dialog/download-dialog.component';

@Component({
  selector: 'sds-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class SdsDownloadComponent implements OnInit {
  constructor(public dialog: SdsDialogService) {}
  modalFields: any;
  fields;
  model;

  ngOnInit() {}
  openDialog(): void {
    const data: any = {
      fields: this.modalFields,
      originalFields: this.fields,
      originalModel: this.model,
      submit: 'Update',
      title: 'More Filters'
    };

    const dialogRef = this.dialog.open(SdsDownloadDialogComponent, {
      width: 'medium',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.fields = result.fields;
        this.model = result.model;
      }
    });
  }
}
