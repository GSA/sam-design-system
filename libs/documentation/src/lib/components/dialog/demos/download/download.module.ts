import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownloadComponent } from './download.component';
import { SdsDownloadModule } from '../../../../../../../packages/layouts/src/lib/feature/download/download.module';
@NgModule({
  declarations: [DownloadComponent],
  imports: [CommonModule, SdsDownloadModule],
  exports: [DownloadComponent],
  bootstrap: [DownloadComponent]
})
export class DownloadModule {}
