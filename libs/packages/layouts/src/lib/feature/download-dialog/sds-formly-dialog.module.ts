import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { SdsDialogModule } from '@gsa-sam/components';

import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { SdsDownloadDialogComponent } from './download-dialog.component';

@NgModule({
  declarations: [SdsDownloadDialogComponent],
  imports: [
    CommonModule,
    SdsDialogModule,
    ReactiveFormsModule,
    SdsFormlyModule,
    FormlyModule,
    FormsModule
  ],
  entryComponents: [SdsDownloadDialogComponent],
  exports: [SdsDownloadDialogComponent]
})
export class SdsDownloadDialogModule {}
