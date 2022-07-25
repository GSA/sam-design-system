import {
  Directive,
  Output,
  EventEmitter,
  ElementRef,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { ViewportRuler } from '@angular/cdk/overlay';
import { startWith } from 'rxjs/operators';
import { Subscription } from 'rxjs';

/**
 * Directive that triggers a callback whenever the width of
 * its associated element has changed.
 */
@Directive({ selector: '[sdsObserveWidth]' })
export class SdsObserveWidthDirective implements OnInit, OnDestroy {
  /** Event emitted for each change in the element's width. */
  @Output('sdsObserveWidth') elementWidth = new EventEmitter<number>();

  /** Subscription to window resize stream */
  windowResize$: Subscription;

  constructor(
    private _elementRef: ElementRef<HTMLElement>,
    private viewportRuler: ViewportRuler
  ) {}

  ngOnInit() {
    this.windowResize$ = this.viewportRuler
      .change(0)
      .pipe(startWith(this._getElementWidth()))
      .subscribe(() => this._emitEvent());
  }

  ngOnDestroy() {
    this.windowResize$.unsubscribe();
  }

  _emitEvent() {
    const width = this._getElementWidth();
    this.elementWidth.emit(width);
  }

  _getElementWidth(): number {
    return this._elementRef.nativeElement.offsetWidth;
  }
}
