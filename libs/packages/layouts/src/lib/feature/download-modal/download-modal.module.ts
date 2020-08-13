import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SdsDialogModule } from '@gsa-sam/components';
import { SdsDownloadModalComponent } from './download-modal.component';
import { FormlyModule } from '@ngx-formly/core';

@NgModule({
  imports: [CommonModule, SdsDialogModule, FontAwesomeModule, FormlyModule],
  exports: [SdsDownloadModalComponent],
  declarations: [SdsDownloadModalComponent]
})
export class SdsDownloadModalModule {}
