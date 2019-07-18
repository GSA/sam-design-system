import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SDS_DIALOG_SCROLL_STRATEGY_PROVIDER, SdsDialogService } from './dialog';
import { SdsDialogContainerComponent } from './dialog-container.component';
import {
  SdsDialogActionsDirective,
  SdsDialogCloseDirective,
  SdsDialogContentDirective,
  SdsDialogTitleDirective
} from './dialog-content.directives';

@NgModule({
  imports: [CommonModule, OverlayModule, PortalModule],
  exports: [
    SdsDialogContainerComponent,
    SdsDialogCloseDirective,
    SdsDialogTitleDirective,
    SdsDialogContentDirective,
    SdsDialogActionsDirective
  ],
  declarations: [
    SdsDialogContainerComponent,
    SdsDialogCloseDirective,
    SdsDialogTitleDirective,
    SdsDialogActionsDirective,
    SdsDialogContentDirective
  ],
  providers: [SdsDialogService, SDS_DIALOG_SCROLL_STRATEGY_PROVIDER],
  entryComponents: [SdsDialogContainerComponent]
})
export class SdsDialogModule {}
