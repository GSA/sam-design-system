import { Directive, Input, OnChanges, OnDestroy, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

/**
 * Define expiration date for a given element. If current date is
 * past expiration date, the given element will not be displayed
 * to the user
 * usage:
 * <div *expires="'2021-01-13T22:30:59">
 * </div>
 * The element above expires after January 13 2021 10:30:59pm at user's local timezone.
 *
 * You may also define desired timezone in following format:
 * YYYY-MM-DDThh:mm:ss.sssZ
 * example: 2021:01013T22:30:59.000+5:00 // Eastern time
 */
@Directive({
  selector: '[expires]',
})
export class SdsExpiresDirective {
  /**
   * Expiration date string. This string should be parsable
   * through native Date object
   * */
  @Input() set expires(date: string) {
    const expirationDate = new Date(date);
    const today = new Date();

    const isExpired = expirationDate.valueOf() < today.valueOf();

    if (this.initialized) {
      this.viewContainer.clear();
    }
    if (isExpired) {
      this.viewContainer.clear();
    } else {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
    this.initialized = true;
  }
  // Track to allow expires to be updated without creating multiple instances of expiring element
  private initialized = false;

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {}
}
