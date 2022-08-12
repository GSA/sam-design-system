import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownloadComponent } from './download.component';
import { FormlyModule } from '@ngx-formly/core';
import { SdsFormlyModule, SdsFormlyDialogModule } from '@gsa-sam/sam-formly';
import { ReactiveFormsModule } from '@angular/forms';
import { SdsDialogModule } from '@gsa-sam/components';
import { IconModule } from '@gsa-sam/ngx-uswds-icons';

@NgModule({
  declarations: [DownloadComponent],
  imports: [
    CommonModule,
    IconModule,
    SdsFormlyDialogModule,
    SdsDialogModule,
    ReactiveFormsModule,
    SdsFormlyModule,
    FormlyModule,
  ],
  exports: [DownloadComponent],
  bootstrap: [DownloadComponent],
})
export class DownloadBasicModule {}
