import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SdsDialogService } from '@gsa-sam/components';
import { SdsDownloadDialogComponent } from '../download-dialog/download-dialog.component';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-download',
  templateUrl: './download.component.html'
})
export class SdsDownloadComponent implements OnInit {
  constructor(public dialog: SdsDialogService) {}
  @Input() configurations: any = {};
  model: any = {};
  @Input() fields: FormlyFieldConfig[];
  @Output() onDownloadModelChange = new EventEmitter<object>();

  ngOnInit() {}
  openDialog(): void {
    const data: any = {
      fields: this.fields,
      model: this.model,
      configurations: this.configurations
    };

    const dialogRef = this.dialog.open(SdsDownloadDialogComponent, {
      width: 'medium',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.onDownloadModelChange.emit(result);
      }
    });
  }
}
