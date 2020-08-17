import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownloadBasic } from './download-basic.component';
import { FormsModule } from '@angular/forms';
import { SdsDownloadModalModule } from 'libs/packages/layouts/src/lib/feature/download-modal/download-modal.module';
import { SdsDownloadDisplayComponent } from './download-modal-display.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    DownloadBasic,
    SdsDownloadDisplayComponent
  ],
  imports: [
    CommonModule, FormsModule, SdsDownloadModalModule, MatDialogModule
  ],
  exports: [DownloadBasic, SdsDownloadDisplayComponent],
  entryComponents: [
    DownloadBasic,
    SdsDownloadDisplayComponent
  ]
})
export class DownloadBasicModule { }
