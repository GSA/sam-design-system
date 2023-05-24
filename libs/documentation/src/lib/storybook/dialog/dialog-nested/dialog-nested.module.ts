import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogNestedBaseComponent } from './dialog-nested.component';
import { DialogNestedComponent } from './dialog-template.component';
import { SecondNestedDialogComponent } from './second-nested-dialog.component';
import { SdsDialogModule } from '@gsa-sam/components';

@NgModule({
  imports: [
    CommonModule,
    SdsDialogModule
  ],
  declarations: [
    DialogNestedBaseComponent,
    DialogNestedComponent,
    SecondNestedDialogComponent
  ],
  exports: [DialogNestedBaseComponent,],
  bootstrap: [DialogNestedBaseComponent,]
})
export class DialogNestedModule { }
