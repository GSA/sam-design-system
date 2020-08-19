import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DownloadBasic,
  DownloadExampleDialog
} from './download-basic.component';
import { FormsModule } from '@angular/forms';
import { SdsDownloadModalModule } from 'libs/packages/layouts/src/lib/feature/download-modal/download-modal.module';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [DownloadBasic, DownloadExampleDialog],
  imports: [CommonModule, FormsModule, SdsDownloadModalModule, MatDialogModule],
  exports: [DownloadBasic],
  entryComponents: [DownloadBasic, DownloadExampleDialog]
})
export class DownloadBasicModule {}
