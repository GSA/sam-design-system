import { NgModule } from '@angular/core';

import { SdsMenuModule } from '@gsa-sam/components';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SdsDownloadComponent } from './download.component';
import { SdsDownloadDialogModule } from '../download-dialog/sds-formly-dialog.module';

@NgModule({
  imports: [CommonModule, FontAwesomeModule, SdsDownloadDialogModule],
  exports: [SdsDownloadComponent],
  declarations: [SdsDownloadComponent],
  providers: []
})
export class SdsDownloadModule {}
