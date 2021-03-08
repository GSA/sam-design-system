import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  SDS_DIALOG_SCROLL_STRATEGY_PROVIDER,
  SDS_SLIDE_OUT_SCROLL_STRATEGY_PROVIDER,
  SdsDialogService
} from './dialog';
import { SdsDialogContainerComponent } from './dialog-container.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  SdsDialogActionsDirective,
  SdsDialogCloseDirective,
  SdsDialogContentDirective,
  SdsDialogTitleDirective,
  SdsDialogSubtitleDirective
} from './dialog-content.directives';

@NgModule({
  imports: [CommonModule, OverlayModule, PortalModule, FontAwesomeModule],
  exports: [
    SdsDialogContainerComponent,
    SdsDialogCloseDirective,
    SdsDialogTitleDirective,
    SdsDialogSubtitleDirective,
    SdsDialogContentDirective,
    SdsDialogActionsDirective
  ],
  declarations: [
    SdsDialogContainerComponent,
    SdsDialogCloseDirective,
    SdsDialogTitleDirective,
    SdsDialogSubtitleDirective,
    SdsDialogActionsDirective,
    SdsDialogContentDirective
  ],
  providers: [SdsDialogService, SDS_DIALOG_SCROLL_STRATEGY_PROVIDER, SDS_SLIDE_OUT_SCROLL_STRATEGY_PROVIDER],
  entryComponents: [SdsDialogContainerComponent]
})
export class SdsDialogModule {}
