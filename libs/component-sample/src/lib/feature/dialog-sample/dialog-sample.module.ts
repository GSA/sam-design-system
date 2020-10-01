import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SdsDialogModule } from '@gsa-sam/components';
import {
  DialogSampleComponent,
  DialogOverviewExampleDialog,
  NestedDialogComponent,
  AlertComponent,
  OfficialComponent
} from './dialog-sample.component';

@NgModule({
  imports: [CommonModule, FormsModule, SdsDialogModule],
  exports: [],
  declarations: [
    DialogSampleComponent,
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
export class DialogSampleModule {}
