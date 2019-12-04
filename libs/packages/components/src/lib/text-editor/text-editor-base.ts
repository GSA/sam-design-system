
import {InjectionToken} from '@angular/core';
//import {CdkTextEditor} from '@angular/cdk/TextEditor';

/** TextEditor's display modes. */
export type SdsTextEditorDisplayMode = 'default' | 'basic';

/**
 * Base interface for a `SdsTextEditor`.
 */
export interface SdsTextEditorBase extends CdkTextEditor {
  /** Display mode used for all TextEditor items in the TextEditor. */
  displayMode: SdsTextEditorDisplayMode;

  /** Handles keyboard events coming in from the item headers. */
  _handleHeaderKeydown: (event: KeyboardEvent) => void;

  /** Handles focus events on the item headers. */
  _handleHeaderFocus: (header: any) => void;
}


/**
 * Token used to provide a `SdsTextEditor` to `SdsTextEditorItem`.
 * Used primarily to avoid circular imports between `SdsTextEditor` and `SdsTextEditorItem`.
 */
export const SDS_TEXTEDITOR = new InjectionToken<SdsTextEditorBase>('SDS_TEXTEDITOR');
