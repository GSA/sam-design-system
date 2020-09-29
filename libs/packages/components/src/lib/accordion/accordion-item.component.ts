import { AnimationEvent } from '@angular/animations';
import { CdkAccordionItem } from "@angular/cdk/accordion";
import { UniqueSelectionDispatcher } from '@angular/cdk/collections';
import { TemplatePortal } from '@angular/cdk/portal';
import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  EventEmitter,
  ElementRef,
  Inject,
  OnChanges,
  OnDestroy,
  Optional,
  Output,
  SimpleChanges,
  SkipSelf,
  ViewContainerRef,
  ViewEncapsulation,
  ViewChild
} from "@angular/core";
import { DOCUMENT } from '@angular/common';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
import { Subject } from 'rxjs';
import { filter, startWith, take, distinctUntilChanged } from 'rxjs/operators';
import { sdsExpansionAnimations } from './accordion-animations';
import { SdsAccordionItemContentDirective } from './accordion-item-content.directive';
import { SDS_ACCORDION, SdsAccordionBase } from './accordion-base';

/** Accordion Item's states. */
export type SdsAccordionItemState = 'expanded' | 'collapsed';

/** Counter for generating unique element ids. */
let uniqueId = 0;

@Component({
  selector: "sds-accordion-item",
  exportAs: "sdsAccordionItem",
  templateUrl: "accordion-item.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  inputs: ['disabled', 'expanded'],
  outputs: ['opened', 'closed', 'expandedChange'],
  animations: [sdsExpansionAnimations.bodyExpansion],
  host: {
    'class': 'sds-accordion__item',
    '[class.sds-accordion__item--expanded]': 'expanded',
    '[class._sds-animation-noopable]': '_animationMode === "NoopAnimations"'
  }
})
export class SdsAccordionItemComponent extends CdkAccordionItem
  implements AfterContentInit, OnChanges, OnDestroy {
  private _document: Document;

  /** An event emitted after the body's expansion animation happens. */
  @Output() afterExpand = new EventEmitter<void>();

  /** An event emitted after the body's collapse animation happens. */
  @Output() afterCollapse = new EventEmitter<void>();

  /** Stream that emits for changes in `@Input` properties. */
  readonly _inputChanges = new Subject<SimpleChanges>();

  /** Optionally defined accordion the accordion item belongs to. */
  accordion: SdsAccordionBase;

  /** Content that will be rendered lazily. */
  @ContentChild(SdsAccordionItemContentDirective) _lazyContent: SdsAccordionItemContentDirective;

  /** Element containing the accordion item's user-provided content. */
  // @ViewChild('body') _body: ElementRef<HTMLElement>;
  @ViewChild('body', { static: false }) _body: ElementRef<HTMLElement>;

  /** Portal holding the user's content. */
  _portal: TemplatePortal;

  /** ID for the associated header element. Used for a11y labelling. */
  _headerId = `sds-accordion-item-header-${uniqueId++}`;

  /** Stream of body animation done events. */
  _bodyAnimationDone = new Subject<AnimationEvent>();

  constructor(@Optional() @SkipSelf() @Inject(SDS_ACCORDION) accordion: SdsAccordionBase,
    _changeDetectorRef: ChangeDetectorRef,
    _uniqueSelectionDispatcher: UniqueSelectionDispatcher,
    private _viewContainerRef: ViewContainerRef,
    @Inject(DOCUMENT) _document: any,
    @Optional() @Inject(ANIMATION_MODULE_TYPE) public _animationMode: string) {
    super(accordion, _changeDetectorRef, _uniqueSelectionDispatcher);
    this.accordion = accordion;
    this._document = _document;

    // We need a Subject with distinctUntilChanged, because the `done` event
    // fires twice on some browsers. See https://github.com/angular/angular/issues/24084
    this._bodyAnimationDone.pipe(distinctUntilChanged((x, y) => {
      return x.fromState === y.fromState && x.toState === y.toState;
    })).subscribe(event => {
      if (event.fromState !== 'void') {
        if (event.toState === 'expanded') {
          this.afterExpand.emit();
        } else if (event.toState === 'collapsed') {
          this.afterCollapse.emit();
        }
      }
    });
  }

  /** Gets the expanded state string. */
  _getExpandedState(): SdsAccordionItemState {
    return this.expanded ? 'expanded' : 'collapsed';
  }

  ngAfterContentInit() {
    if (this._lazyContent) {
      // Render the content as soon as the accordion item becomes open.
      this.opened.pipe(
        startWith(null!),
        filter(() => this.expanded && !this._portal),
        take(1)
      ).subscribe(() => {
        this._portal = new TemplatePortal(this._lazyContent._template, this._viewContainerRef);
      });
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    this._inputChanges.next(changes);
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    this._bodyAnimationDone.complete();
    this._inputChanges.complete();
  }

  /** Checks whether the accordion item's content contains the currently-focused element. */
  _containsFocus(): boolean {
    if (this._body) {
      const focusedElement = this._document.activeElement;
      const bodyElement = this._body.nativeElement;
      return focusedElement === bodyElement || bodyElement.contains(focusedElement);
    }

    return false;
  }
}
