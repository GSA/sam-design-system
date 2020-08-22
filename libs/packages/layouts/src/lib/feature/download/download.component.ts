import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SdsDialogService } from '@gsa-sam/components';
import { SdsDownloadDialogComponent } from '../download-dialog/download-dialog.component';
import { FormlyFieldConfig } from '@ngx-formly/core';

export class DownloadConfiguration {
  title: string;
  buttonText: string;
  submitButtonText: string;
  infoMessage: string;
  cancelButtonText: string;
  dialogWidth: string;
}

@Component({
  selector: 'sds-download',
  templateUrl: './download.component.html'
})
export class SdsDownloadComponent implements OnInit {
  constructor(public dialog: SdsDialogService) {}
  @Input() configurations: DownloadConfiguration = new DownloadConfiguration();
  @Input() model: any = {};
  @Input() fields: FormlyFieldConfig[];
  @Input() options;
  @Output() onDownloadModelChange = new EventEmitter<object>();

  ngOnInit() {}
  openDialog(): void {
    const data: any = {
      fields: this.fields,
      originalModel: this.model,
      configurations: this.configurations
    };

    const dialogRef = this.dialog.open(SdsDownloadDialogComponent, {
      width: this.configurations.dialogWidth
        ? this.configurations.dialogWidth
        : 'medium',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.onDownloadModelChange.emit(result);
      }
    });
  }
}
