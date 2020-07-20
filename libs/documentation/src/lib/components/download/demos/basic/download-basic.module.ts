import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SdsDownloadModule } from '@gsa-sam/components';
import {
  DownloadBasic,
  DownloadOverviewExampleDownload,
  NestedDownloadComponent,
  AlertComponent,
  OfficialComponent
} from './download-basic.component';

@NgModule({
  imports: [CommonModule, FormsModule, SdsDownloadModule],
  exports: [DownloadBasic],
  bootstrap: [DownloadBasic],
  declarations: [
    DownloadBasic,
    DownloadOverviewExampleDownload,
    NestedDownloadComponent,
    AlertComponent,
    OfficialComponent
  ],
  entryComponents: [
    DownloadOverviewExampleDownload,
    NestedDownloadComponent,
    AlertComponent,
    OfficialComponent
  ]
})
export class DownloadBasicModule {}
