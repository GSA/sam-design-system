import {
  Component,
  ViewChild,
  ElementRef,
  OnDestroy,
  ChangeDetectorRef,
  Output,
  EventEmitter,
  Input,
  HostBinding
} from '@angular/core';
import { Subject, merge, combineLatest, BehaviorSubject } from 'rxjs';
import {
  startWith,
  scan,
  pluck,
  map,
  tap,
  distinctUntilChanged,
  debounceTime,
  filter,
  shareReplay
} from 'rxjs/operators';
import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { AnimationEvent } from '@angular/animations';

import { sdsSearchAnimations } from './search-animations';

@Component({
  selector: 'sds-search',
  templateUrl: 'search.component.html',
  animations: [sdsSearchAnimations.searchInput]
})
export class SdsSearchComponent implements OnDestroy {
  @ViewChild('inputEl', { read: ElementRef }) inputEl: ElementRef;
  @ViewChild('buttonEl', { read: ElementRef }) buttonEl: ElementRef;
  @ViewChild('containerEl', { read: ElementRef }) containerEl: ElementRef;

  @HostBinding('style.flex-grow') flexGrow = 1;

  @Input('debug')
  get debug() {
    return this._debug;
  }
  set debug(value: boolean) {
    this._debug = coerceBooleanProperty(value);
  }
  private _debug = false;

  @Input() parentSelector: string;

  @Output() term = new EventEmitter<string>();

  inputWidth: string;
  inputContainer: boolean;
  minimumInputWidth = 200;
  mode = 'collapsed';

  get animationState(): any {
    return this._animationState;
  }
  set animationState(_animationState: any) {
    if (this._animationState !== _animationState) {
      this._animationState = _animationState;
    }
    this.changeDetectorRef.detectChanges();
  }
  _animationState;

  onButtonClick$ = new Subject();
  onTermChange$ = new Subject<any>();
  onFocusChange$ = new Subject();
  onKeyDownChange$ = new Subject<KeyboardEvent>();
  onContainerWithChange$ = new BehaviorSubject<any>(undefined);
  onAnimationDone$ = new Subject<AnimationEvent>();

  programmaticCommandSubject = new Subject();
  actions$ = merge(
    this.onButtonClick$.pipe(map(value => ({ mode: value }))),
    this.onTermChange$.pipe(
      // Filter 'Enter' and 'Escape' because these are handled by onKeyDownChange$
      filter(event => event.key !== 'Enter' && event.key !== 'Escape'),
      map(event => ({ term: event.target.value }))
    ),
    this.onFocusChange$.pipe(map(value => ({ focus: value }))),
    this.onKeyDownChange$.pipe(map(value => ({ keywordCommand: value.key }))),
    this.onContainerWithChange$.pipe(map(width => ({ containerWidth: width }))),
    this.programmaticCommandSubject.asObservable()
  );

  state$ = this.actions$.pipe(
    scan((searchState, action) => ({
      ...searchState,
      ...action
    })),
    tap(value => {
      if (this.debug) {
        console.log(`%c--> sds-search state:`, 'font-weight: bold');
        console.log(value);
      }
    }),
    shareReplay(1)
  );

  mode$ = this.state$.pipe(
    debounceTime(10),
    pluck('mode'),
    filter(value => value !== undefined),
    distinctUntilChanged()
  );

  term$ = this.state$.pipe(
    pluck('term'),
    filter(value => value !== undefined),
    distinctUntilChanged()
  );

  focus$ = this.state$.pipe(
    pluck('focus'),
    distinctUntilChanged()
  );

  keywordCommand$ = this.state$.pipe(
    pluck('keywordCommand'),
    distinctUntilChanged()
  );

  containerWidth$ = this.state$.pipe(
    pluck('containerWidth'),
    filter(width => width !== undefined),
    distinctUntilChanged(),
    map((width: number) => ({
      width: width,
      hasSpace: this.calculateSpaceAvailable(width)
    }))
  );

  animationDoneChange$ = combineLatest(
    this.onAnimationDone$,
    this.containerWidth$
  ).pipe(
    tap(([event, container]) => {
      if (event.toState === 'enter' && !container.hasSpace) {
        this.focusMonitor.focusVia(this.inputEl, 'program');
      }
      if (event.toState === 'exit') {
        this.inputContainer = false;
        this.focusMonitor.focusVia(this.buttonEl, 'program');
      }
    })
  );

  focusChange$ = combineLatest(this.focus$, this.containerWidth$).pipe(
    tap(([focus, container]) => {
      if (focus === null && !container.hasSpace) {
        this.programmaticCommandSubject.next({ mode: 'collapsed' });
      }
    })
  );

  keywordCommandPressed$ = combineLatest(
    this.keywordCommand$,
    this.containerWidth$
  ).pipe(
    tap(([key, container]) => {
      switch (key) {
        case 'Enter':
          this.programmaticCommandSubject.next({
            mode: 'sending',
            keywordCommand: null
          });
          break;
        case 'Escape':
          if (!container.hasSpace) {
            this.programmaticCommandSubject.next({
              mode: 'collapsed',
              keywordCommand: null
            });
          } else {
            this.programmaticCommandSubject.next({ keywordCommand: null });
          }
          break;
      }
    })
  );

  modeChange$ = combineLatest(
    this.mode$.pipe(startWith(this.mode)),
    this.containerWidth$,
    this.term$.pipe(startWith(''))
  ).pipe(
    tap(([mode, container, searchTerm]) => {
      this.mode =
        mode === 'collapsed' && container.hasSpace ? 'search' : <string>mode;
      switch (this.mode) {
        case 'search':
          this.calculateInputWidth(container.hasSpace);
          this.inputContainer = true;
          this.animationState = 'enter';
          break;
        case 'collapsed':
          this.animationState = 'exit';
          break;
        case 'sending':
          if (searchTerm !== '') {
            this.term.emit(<string>searchTerm);
          }
          this.programmaticCommandSubject.next({
            mode: container.hasSpace ? 'search' : 'collapsed'
          });
          break;
        default:
          break;
      }
    })
  );

  mainSubscription = merge(
    this.modeChange$,
    this.focusChange$,
    this.animationDoneChange$,
    this.keywordCommandPressed$
  ).subscribe();

  constructor(
    private focusMonitor: FocusMonitor,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnDestroy() {
    this.mainSubscription.unsubscribe();
  }

  handleButtonClick(event) {
    event.preventDefault();
    switch (this.mode) {
      case 'collapsed':
        this.onButtonClick$.next('search');
        break;
      case 'search':
        this.onButtonClick$.next('sending');
        break;
      default:
        break;
    }
  }

  calculateSpaceAvailable(containerWidth: number): boolean {
    return containerWidth >= this.minimumInputWidth;
  }

  calculateInputWidth(hasSpace): void {
    // Padding to the left of the search bar
    let padding = 0;

    // Maximun input width
    const maximumInputWidth = 500;

    // Width of search button
    const buttonWidth = this.buttonEl.nativeElement.offsetWidth;

    // Search Component HTML Element
    const nativeElement = this.containerEl.nativeElement;

    // Search Container HTML Element
    const nativeElementParent = this.parentSelector
      ? nativeElement.closest(this.parentSelector)
      : nativeElement.parentElement.parentElement;

    // Use element's position relative to the viewport
    // to calculate input width
    //                _______________________
    // Left Pos. -->  |            | Button |<-- Right Pos.
    // Input Width -> ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯

    let leftPosition: number;
    // If there is enough space then use the search COMPONENT SPACE
    // else use the search CONTAINER SPACE
    if (hasSpace === true) {
      // Search component Left Position
      leftPosition = nativeElement.getBoundingClientRect().left;
    } else {
      padding = 20;
      // Search container Left Position
      leftPosition = nativeElementParent.getBoundingClientRect().left;
    }

    // Because the search expands to the left,
    // we use search component right position
    const rightPosition = nativeElement.getBoundingClientRect().right;

    // Calculation start with right position because its always a higher number
    const calculation = rightPosition - leftPosition - buttonWidth - padding;
    // Round width
    const inputWidth = Math.floor(calculation);

    // Add pixel unit because this variable its a parameter
    // for the search input animation
    this.inputWidth =
      inputWidth > maximumInputWidth
        ? maximumInputWidth + 'px'
        : inputWidth + 'px';
  }
}
