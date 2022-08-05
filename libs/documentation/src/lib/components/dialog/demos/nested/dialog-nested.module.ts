import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SdsDialogModule } from '@gsa-sam/components';
import { DialogNested, DialogOverviewExampleDialog, NestedDialogComponent } from './dialog-nested.component';

@NgModule({
  imports: [CommonModule, FormsModule, SdsDialogModule],
  exports: [DialogNested],
  bootstrap: [DialogNested],
  declarations: [DialogNested, DialogOverviewExampleDialog, NestedDialogComponent],
  entryComponents: [DialogOverviewExampleDialog, NestedDialogComponent],
})
export class DialogNestedModule {}
