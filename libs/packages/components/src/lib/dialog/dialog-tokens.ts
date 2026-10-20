import { InjectionToken } from '@angular/core';

/** The dialog container state used by dialog content directives. */
export interface SdsDialogContainerLike {
  _ariaLabelledBy: string | null;
}

/** The dialog reference behavior used by dialog content directives. */
export interface SdsDialogRefLike<R = unknown> {
  id: string;
  _containerInstance: SdsDialogContainerLike;
  close(dialogResult?: R): void;
}

/** The open-dialog registry used by dialog content directives. */
export interface SdsDialogRegistry {
  openDialogs: SdsDialogRefLike<unknown>[];
}

/** Provides the current dialog reference to dynamically attached dialog content. */
export const SDS_DIALOG_REF = new InjectionToken<SdsDialogRefLike<unknown>>('SdsDialogRef');

/** Provides the service-level registry of currently open dialogs. */
export const SDS_DIALOG_REGISTRY = new InjectionToken<SdsDialogRegistry>('SdsDialogRegistry');
