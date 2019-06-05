import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  HostBinding,
  HostListener,
  ElementRef,
  OnDestroy,
  ViewChild
} from '@angular/core';
import { FocusOrigin, FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Subject, BehaviorSubject, merge, Observable } from 'rxjs';
import {
  debounceTime,
  filter,
  startWith,
  scan,
  map,
  distinctUntilChanged,
  tap,
  pluck,
  withLatestFrom,
  shareReplay
} from 'rxjs/operators';
import { sdsSearchAnimations } from './search-animations';
import { AnimationEvent } from '@angular/animations';
import { ENTER, ESCAPE } from '@angular/cdk/keycodes';

/** Minimum search width  */
const SEARCH_WIDTH = 250;

export interface SearchState {
  expanded: boolean;
  autoExpand: boolean;
  focusElement: string | null;
  focusOrigin: string | null;
  containerWidth: number;
}

@Component({
  selector: 'sds-search',
  templateUrl: 'search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [sdsSearchAnimations.searchInput]
})
export class SdsSearchComponent implements OnDestroy {
  /** State of the search animation. */
  private _state: 'void' | 'enter' | 'exit';

  /** Width of input */
  private _inputWidth: string;

  /** Stream of container width */
  private _containerWidth$ = new BehaviorSubject<number>(0);
  
  /** Is there sufficent space for the search to expand */
  private _hasSpace: boolean;
  
  /** Stream of expanded events */
  private expanded$ = new Subject<boolean>();
  
  /** Stream of auto expanded events */
  private autoExpand$ = new Subject<boolean>();
  
  /** Stream of text from input */
  private searchTerm$ = new Subject<string>();
  
  private searchTermValue = '';
  
  /** Initial Search State */
  private _initialSearchState: SearchState = {
    expanded: false,
    autoExpand: false,
    focusElement: null,
    focusOrigin: null,
    containerWidth: 0
  };
  
  /** Stream of input focus events  */
  _focusInput$ = new Subject<FocusOrigin>();

  /** Stream of button focus events  */
  _focusButton$ = new Subject<FocusOrigin>();

  /** Show/Hide Input and Label container */
  _showContainer = false;

  /** Grab buttton element to set focus */
  @ViewChild('buttonEl', { read: ElementRef }) buttonEl: ElementRef;

  /** Event emitted every time the search is expanded. */
  @Output() expanded: EventEmitter<void> = new EventEmitter<void>();

  /** Event emitted every time the Search is collapsed. */
  @Output() collapsed: EventEmitter<void> = new EventEmitter<void>();

  @HostBinding('style.flex-grow') _expandStyle: string;

  /** Whether the Search is expanded. */
  @Input()
  get expand(): any {
    return this._expand;
  }
  set expand(_expand: any) {
    _expand = coerceBooleanProperty(_expand);
    if (this._expand !== _expand) {
      this._expand = _expand;
      this.expanded$.next(_expand);
    }
  }
  private _expand: boolean;

  /** Whether expand search if there is space available */
  @Input()
  get autoexpand(): any {
    return this._autoexpand;
  }
  set autoexpand(autoexpand: any) {
    autoexpand = coerceBooleanProperty(autoexpand);
    if (this._autoexpand !== autoexpand) {
      this._autoexpand = autoexpand;
      this.autoExpand$.next(autoexpand);
    }
  }
  private _autoexpand: boolean;

  // === STATE OBSERVABLES ==================================================
  private programmaticActionSubject = new Subject<any>();

  private searchActions$ = merge(
    this.autoExpand$.pipe(map(val => ({ autoExpand: val }))),
    this.expanded$.pipe(map(val => ({ expanded: val }))),
    this._focusInput$.pipe(
      map(val => ({ focusElement: 'input', focusOrigin: val }))
    ),
    this._focusButton$.pipe(
      map(val => ({ focusElement: 'button', focusOrigin: val }))
    ),
    this._containerWidth$.pipe(map(val => ({ containerWidth: val }))),
    this.programmaticActionSubject.asObservable()
  );

  private searchState$: Observable<SearchState> = this.searchActions$.pipe(
    startWith(this._initialSearchState),
    scan(
      (searchState: SearchState, action): SearchState => ({
        ...searchState,
        ...action
      })
    )
  );

  // == INTERMEDIATE OBSERVABLES ============================================

  private expandedStream$ = this.searchState$.pipe(
    pluck('expanded'),
    distinctUntilChanged()
  );

  private autoExpandStream$ = this.searchState$.pipe(
    pluck('autoExpand'),
    distinctUntilChanged()
  );

  private focusOrigin$ = this.searchState$.pipe(
    pluck('focusOrigin'),
    distinctUntilChanged()
  );

  private containerWidth$ = this.searchState$.pipe(
    pluck('containerWidth'),
    distinctUntilChanged()
  );

  private expandedEvents$ = this.expandedStream$.pipe(
    filter(val => val === true)
  );

  private collapsedEvents$ = this.expandedStream$.pipe(
    filter(val => val === false)
  );

  // = SIDE EFFECTS =========================================================

  // Search term value
  private searchTermStream$ = this.searchTerm$.pipe(
    filter(text => text.length > 2),
    debounceTime(10),
    distinctUntilChanged(),
    tap(text => (this.searchTermValue = text))
  );

  // Expanded Events Side Effects
  private expandedEventsSideEffects$ = this.expandedEvents$.pipe(
    tap(() => {
      this._showContainer = true;
      this._state = 'enter';
      this.expanded.emit();
    })
  );

  // Collapsed Events Side Effects
  private collapsedEventsSideEffects$ = this.collapsedEvents$.pipe(
    tap(() => {
      this._state = 'exit';
      this.collapsed.emit();
    })
  );

  // Make container use all available space (flex-grow: '1')
  private autoExpandSideEffects$ = this.autoExpandStream$.pipe(
    tap(autoExpand => (this._expandStyle = autoExpand ? '1' : '0'))
  );

  // Blur search when none of the search input elements its focused
  private blur$ = this.focusOrigin$.pipe(
    debounceTime(200), // check if current active item is not part of search inputs
    filter(focusOrigin => focusOrigin === null),
    map(focusOrigin => ({ focusElement: focusOrigin })),
    tap(() => this.programmaticActionSubject.next({ focusElement: null })),
    distinctUntilChanged()
  );

  // If there is a new container width or the search its expanded
  // we need to set the text input to use all space available to the left
  private setInputWidth$ = merge(
    this.containerWidth$,
    this.expandedEvents$
  ).pipe(tap(() => this._setInputWidth()));

  // Collapse or Expand if its blur, autoexpand its set to true and there is
  // appropiate space for the search component
  private autoCollapse$ = merge(this.containerWidth$, this.blur$).pipe(
    withLatestFrom(this.searchState$, (_, searchState) => ({
      autoExpand: searchState.autoExpand,
      containerWidth: searchState.containerWidth,
      focusElement: searchState.focusElement
    })),
    filter(
      ({ autoExpand, focusElement }) => autoExpand && focusElement === null
    ),
    tap(({ containerWidth }) => {
      this.expand = containerWidth < SEARCH_WIDTH ? false : true;
    })
  );

  // == SUBSCRIPTION ========================================================

  searchSubscription = merge(
    this.searchTermStream$,
    this.expandedEventsSideEffects$,
    this.collapsedEventsSideEffects$,
    this.autoExpandSideEffects$,
    this.blur$,
    this.autoCollapse$,
    this.setInputWidth$
  ).subscribe();

  // =========================================================================

  constructor(
    private _elementRef: ElementRef,
    private _focusMonitor: FocusMonitor
  ) {}

  ngOnDestroy() {
    this.searchSubscription.unsubscribe();
  }

  @HostListener('keydown', ['$event'])
  _handleKeydown(event: KeyboardEvent) {
    // tslint:disable-next-line: deprecation
    const keyCode = event.keyCode;
    switch (keyCode) {
      case ENTER:
        if (this.expand) {
          this._sendSearchTerm();
          event.preventDefault();
        }
      // tslint:disable-next-line: no-switch-case-fall-through
      case ESCAPE:
        if (this.expand && !this._hasSpace) {
          this.expand = false;
          this._focusMonitor.focusVia(this.buttonEl, 'program');
        }
        break;
      default:
    }
  }

  _handleClick() {
    this.expand ? this._sendSearchTerm() : (this.expand = true);
  }

  _setInputWidth(): void {
    const padding = 20;
    // TODO: Get button width from this.buttonEl
    const buttonWidth = 43;
    const nativeElement = this._elementRef.nativeElement;
    const nativeElementParent = nativeElement.parentElement;
    const rightPosition = nativeElement.getBoundingClientRect().right;
    const leftPosition = nativeElementParent.getBoundingClientRect().left;
    const inputWidth = Math.floor(
      rightPosition - leftPosition - buttonWidth - padding
    );
    this._inputWidth = inputWidth + 'px';
  }

  _sendSearchTerm() {
    console.log('Search for: ' + this.searchTermValue);
  }

  _containerWidthChanged(containerWidth) {
    this._hasSpace = containerWidth > SEARCH_WIDTH ? true : false;
    this._containerWidth$.next(containerWidth);
  }

  /** Callback when input animation its done */
  _onAnimationDone(event: AnimationEvent) {
    if (event.toState === 'enter' && !this._hasSpace) {
      this._focusMonitor.focusVia(
        // TODO: @ViewChild('inputEl') not working for hidden elments
        // nativeElement > div[0] > div[0] > input[1]
        this._elementRef.nativeElement.childNodes[0].childNodes[1]
          .childNodes[1],
        'program'
      );
    }
    if (event.toState === 'exit') {
      this._showContainer = false;
    }
  }
}
