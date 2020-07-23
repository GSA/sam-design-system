import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SdsDialogModule } from '@gsa-sam/components';
import { SdsDownloadModalComponent } from './download-modal.component';
import { SdsDownloadModalTriggerComponent } from './download-modal-trigger.component';
import { FormlyModule } from '@ngx-formly/core';

@NgModule({
  imports: [
    CommonModule,
    SdsDialogModule,
    FontAwesomeModule,
    FormlyModule
  ],
  exports: [SdsDownloadModalComponent, SdsDownloadModalTriggerComponent ],
  declarations: [SdsDownloadModalComponent, SdsDownloadModalTriggerComponent],

})
export class SdsDownloadModalModule { }

