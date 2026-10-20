import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule, Optional } from '@angular/core';
import {
  NgxBootstrapIconsModule,
  x,
  infoCircle,
  exclamationTriangle,
  exclamationCircle,
  checkCircle,
  slashCircle,
} from 'ngx-bootstrap-icons';
import {
  SDS_DIALOG_SCROLL_STRATEGY_PROVIDER,
  SDS_SLIDE_OUT_SCROLL_STRATEGY_PROVIDER,
  SdsDialogService,
} from './dialog';
import { SdsDialogContainerComponent } from './dialog-container.component';
import { SdsDialogRef } from './dialog-ref';
import { SDS_DIALOG_REF, SDS_DIALOG_REGISTRY } from './dialog-tokens';
import { IconModule, alertError } from '@gsa-sam/ngx-uswds-icons';

import {
  SdsDialogActionsDirective,
  SdsDialogCloseDirective,
  SdsDialogContentDirective,
  SdsDialogTitleDirective,
  SdsDialogSubtitleDirective,
} from './dialog-content.directives';

@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
    PortalModule,
    IconModule,
    NgxBootstrapIconsModule.pick({
      x,
      alertError,
      infoCircle,
      exclamationTriangle,
      exclamationCircle,
      checkCircle,
      slashCircle,
    }),
  ],
  exports: [
    SdsDialogContainerComponent,
    SdsDialogCloseDirective,
    SdsDialogTitleDirective,
    SdsDialogSubtitleDirective,
    SdsDialogContentDirective,
    SdsDialogActionsDirective,
  ],
  declarations: [
    SdsDialogContainerComponent,
    SdsDialogCloseDirective,
    SdsDialogTitleDirective,
    SdsDialogSubtitleDirective,
    SdsDialogActionsDirective,
    SdsDialogContentDirective,
  ],
  providers: [
    SdsDialogService,
    {
      provide: SDS_DIALOG_REF,
      useFactory: (dialogRef: SdsDialogRef<unknown> | null) => dialogRef,
      deps: [[new Optional(), SdsDialogRef]],
    },
    { provide: SDS_DIALOG_REGISTRY, useExisting: SdsDialogService },
    SDS_DIALOG_SCROLL_STRATEGY_PROVIDER,
    SDS_SLIDE_OUT_SCROLL_STRATEGY_PROVIDER,
  ],
})
export class SdsDialogModule {}
