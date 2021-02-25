import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SdsDialogModule } from '@gsa-sam/components';
import { DialogAlert, AlertComponent } from './dialog-alert.component';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SdsFormlyModule,
    FormsModule,
    FormlyModule.forRoot(),
    SdsDialogModule,
  ],
  exports: [DialogAlert],
  bootstrap: [DialogAlert],
  declarations: [DialogAlert, AlertComponent],
  entryComponents: [AlertComponent],
})
export class DialogAlertModule {}
