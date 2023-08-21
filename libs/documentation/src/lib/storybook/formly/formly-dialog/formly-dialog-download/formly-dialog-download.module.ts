import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyDialogModule, SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyDialogDownloadComponent } from './formly-dialog-download.component';
import { IconModule } from '@gsa-sam/ngx-uswds-icons';
import { SdsDialogModule } from '@gsa-sam/components';

@NgModule({
  imports: [
    IconModule,
    SdsFormlyDialogModule,
    SdsDialogModule,
    CommonModule,
    ReactiveFormsModule,
    SdsFormlyModule,
    FormsModule,
    FormlyModule.forRoot(),
  ],
  declarations: [FormlyDialogDownloadComponent],
  exports: [FormlyDialogDownloadComponent],
  bootstrap: [FormlyDialogDownloadComponent],
})
export class FormlyDialogDownloadModule {}
