import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownloadComponent } from './download.component';
import { FormlyModule } from '@ngx-formly/core';
import {
  SdsFormlyModule,
  SdsFormlyDialogModule
} from '@gsa-sam/sam-formly';
import { ReactiveFormsModule } from '@angular/forms';
import { SdsDialogModule } from '@gsa-sam/components';
import {SdsIconModule } from '@gsa-sam/components';

@NgModule({
  declarations: [DownloadComponent],
  imports: [
    CommonModule,
    SdsIconModule,
    SdsFormlyDialogModule,
    SdsDialogModule,
    ReactiveFormsModule,
    SdsFormlyModule,
    FormlyModule
  ],
  exports: [DownloadComponent],
  bootstrap: [DownloadComponent]
})
export class DownloadBasicModule {}
