import { InjectionToken } from '@angular/core';

/**
 * Used primarily to avoid circular imports between `SdsAccordion` and `SdsAccordionItem`.
 */
export const SDS_TRUNCATED_TEXT_DATA = new InjectionToken<any>('SdsTruncatedTextData');
