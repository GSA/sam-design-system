import { InjectionToken } from '@angular/core';
import { CdkAccordion } from '@angular/cdk/accordion';

/** Accordion's display modes. */
export type SdsAccordionDisplayMode = 'default' | 'basic';

/**
 * Base interface for a `SdsAccordion`.
 */
export interface SdsAccordionBase extends CdkAccordion {
  /** Display mode used for all accordion items in the accordion. */
  displayMode: SdsAccordionDisplayMode;

  /** Handles keyboard events coming in from the item headers. */
  _handleHeaderKeydown: (event: KeyboardEvent) => void;

  /** Handles focus events on the item headers. */
  _handleHeaderFocus: (header: any) => void;
}

/**
 * Token used to provide a `SdsAccordion` to `SdsAccordionItem`.
 * Used primarily to avoid circular imports between `SdsAccordion` and `SdsAccordionItem`.
 */
export const SDS_ACCORDION = new InjectionToken<SdsAccordionBase>(
  'SDS_ACCORDION'
);
