import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SdsDialogModule } from '@gsa-sam/components';
import { SdsDownloadModalComponent } from './download-modal.component';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [CommonModule, SdsDialogModule, FontAwesomeModule, FormlyModule, ReactiveFormsModule, MatDialogModule],
  exports: [SdsDownloadModalComponent],
  declarations: [SdsDownloadModalComponent],
  entryComponents: [SdsDownloadModalComponent]
})
export class SdsDownloadModalModule {}
