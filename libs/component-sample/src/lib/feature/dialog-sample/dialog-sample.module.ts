import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SdsDialogModule } from '@gsa-sam/components';
import {
  DialogSampleComponent,
  DialogOverviewExampleDialog,
  DialogOverviewExample2Dialog
} from './dialog-sample.component';

@NgModule({
  imports: [CommonModule, FormsModule, SdsDialogModule],
  exports: [],
  declarations: [
    DialogSampleComponent,
    DialogOverviewExampleDialog,
    DialogOverviewExample2Dialog
  ],
  entryComponents: [DialogOverviewExampleDialog, DialogOverviewExample2Dialog]
})
export class DialogSampleModule {}
