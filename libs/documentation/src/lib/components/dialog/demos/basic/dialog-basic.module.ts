import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SdsDialogModule } from '@gsa-sam/components';
import {
  DialogBasic,
  DialogOverviewExampleDialog,
  NestedDialogComponent,
  AlertComponent,
  OfficialComponent
} from './dialog-basic.component';

@NgModule({
  imports: [CommonModule, FormsModule, SdsDialogModule],
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
    OfficialComponent
  ]
})
export class DialogBasicModule {}
