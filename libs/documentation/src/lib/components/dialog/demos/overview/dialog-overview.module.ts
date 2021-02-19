import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SdsDialogModule } from '@gsa-sam/components';
import {
  DialogOverView,
  DialogOverviewExampleDialog,
} from './dialog-overview.component';

@NgModule({
  imports: [CommonModule, FormsModule, SdsDialogModule],
  exports: [DialogOverView],
  bootstrap: [DialogOverView],
  declarations: [DialogOverView, DialogOverviewExampleDialog],
  entryComponents: [DialogOverviewExampleDialog],
})
export class DialogOverViewModule {}
