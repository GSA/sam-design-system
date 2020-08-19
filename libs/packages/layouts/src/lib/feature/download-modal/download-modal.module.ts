import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SdsDownloadModalComponent } from './download-modal.component';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FontAwesomeModule, FormlyModule, ReactiveFormsModule, FormsModule],
  exports: [SdsDownloadModalComponent],
  declarations: [SdsDownloadModalComponent],
  entryComponents: [SdsDownloadModalComponent]
})
export class SdsDownloadModalModule {}
