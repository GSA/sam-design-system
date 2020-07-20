import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  SDS_DOWNLOAD_SCROLL_STRATEGY_PROVIDER,
  SdsDownloadService
} from './download';
import { SdsDownloadContainerComponent } from './download-container.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  SdsDownloadActionsDirective,
  SdsDownloadCloseDirective,
  SdsDownloadContentDirective,
  SdsDownloadTitleDirective,
  SdsDownloadSubtitleDirective
} from './download-content.directives';

@NgModule({
  imports: [CommonModule, OverlayModule, PortalModule, FontAwesomeModule],
  exports: [
    SdsDownloadContainerComponent,
    SdsDownloadCloseDirective,
    SdsDownloadTitleDirective,
    SdsDownloadSubtitleDirective,
    SdsDownloadContentDirective,
    SdsDownloadActionsDirective
  ],
  declarations: [
    SdsDownloadContainerComponent,
    SdsDownloadCloseDirective,
    SdsDownloadTitleDirective,
    SdsDownloadSubtitleDirective,
    SdsDownloadActionsDirective,
    SdsDownloadContentDirective
  ],
  providers: [SdsDownloadService, SDS_DOWNLOAD_SCROLL_STRATEGY_PROVIDER],
  entryComponents: [SdsDownloadContainerComponent]
})
export class SdsDownloadModule {}
