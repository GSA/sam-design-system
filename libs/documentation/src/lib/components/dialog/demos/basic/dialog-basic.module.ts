import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SdsDialogModule } from '@gsa-sam/components';
import { SdsDownloadModalModule } from '../../../../../../../packages/layouts/src/lib/feature/download-modal/download-modal.module'
import {
  DialogBasic,
  DialogOverviewExampleDialog,
  NestedDialogComponent,
  AlertComponent,
  OfficialComponent
} from './dialog-basic.component';
import { SdsDownloadModalComponent } from 'libs/packages/layouts/src/lib/feature/download-modal/download-modal.component';

@NgModule({
  imports: [CommonModule, FormsModule, SdsDialogModule, SdsDownloadModalModule],
  exports: [DialogBasic],
  bootstrap: [DialogBasic],
  declarations: [
    DialogBasic,
    DialogOverviewExampleDialog,
    NestedDialogComponent,
    AlertComponent,
    OfficialComponent
  ],
  entryComponents: [
    DialogOverviewExampleDialog,
    NestedDialogComponent,
    AlertComponent,
    OfficialComponent,
    SdsDownloadModalComponent
  ]
})
export class DialogBasicModule {}
