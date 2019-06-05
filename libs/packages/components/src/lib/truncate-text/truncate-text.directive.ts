import {
  Directive,
  ElementRef,
  OnInit,
  Input,
  OnDestroy,
  AfterViewInit,
  HostListener
} from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { ViewportRuler } from '@angular/cdk/overlay';
import { Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Directive({ selector: '[sdsTruncateTextByLine]' })
export class SdsTruncateTextByLineDirective
  implements OnInit, OnDestroy, AfterViewInit {
  /** Maximum lines of text limit */
  @Input('sdsTruncateTextByLine')
  get textLinesLimit(): any {
    return this._textLinesLimit;
  }
  set textLinesLimit(_textLinesLimit: any) {
    _textLinesLimit = coerceNumberProperty(_textLinesLimit);
    if (this._textLinesLimit !== _textLinesLimit) {
      this._textLinesLimit = _textLinesLimit;
    }
  }
  private _textLinesLimit: number;

  /** Holds initial text */
  private initialText: string;

  /** Subscription to window resize stream */
  windowResize$: Subscription;

  /** Approximated character width of the host text */
  private approximatedCharacterWidth: number;

  @HostListener('click')
  toggle(): void {
    console.log(this.initialText);
  }

  constructor(
    private _element: ElementRef,
    private viewportRuler: ViewportRuler
  ) {}

  ngOnInit() {
    // Store initial text
    this.initialText = this._element.nativeElement.innerText.trim();

    // Clone element to facilitate calculations
    const hostCloneEl = this._element.nativeElement.cloneNode() as HTMLElement;

    // Add 1 character to calculate character width
    hostCloneEl.innerHTML = 'X';

    // Render the clone to get character width
    this._element.nativeElement.parentElement.appendChild(hostCloneEl);

    // These are close approximations that are used to better guess
    // how many words fit in X number of lines
    this.approximatedCharacterWidth = hostCloneEl.offsetWidth;

    // Remove clone after calculations
    hostCloneEl.remove();

    this._element.nativeElement.setAttribute('style', 'flex-grow: 1;');
  }

  ngAfterViewInit() {
    // Update UI on window resizing
    this.windowResize$ = this.viewportRuler
      .change(0)
      .pipe(startWith('Start'))
      .subscribe(() => this.updateUI());
  }

  ngOnDestroy() {
    this.windowResize$.unsubscribe();
  }

  getHostWidth(): number {
    return this._element.nativeElement.offsetWidth;
  }

  getWordsArray(): String[] {
    return this.initialText.split(' ');
  }

  updateUI() {
    // Turn the text in to an array of words
    // to facilitate adding '...' after the end of a word
    const wordsArray = this.getWordsArray();

    // Approximated number of characters that are visible in the container
    const approximatedVisibleCharacters = Math.floor(
      (this.getHostWidth() / this.approximatedCharacterWidth) *
        this.textLinesLimit
    );

    // console.log(
    //   'Host Width: ' +
    //     this.getHostWidth() +
    //     '\n' +
    //     'Approximated Visible Characters: ' +
    //     approximatedVisibleCharacters +
    //     '\n' +
    //     'Approximated Character Width: ' +
    //     this.approximatedCharacterWidth
    // );

    let characterCount = 0;
    for (let index = 0; index < wordsArray.length; index++) {
      // Add a space between the words (+1)
      characterCount += wordsArray[index].length + 1;
      if (this.initialText.length < approximatedVisibleCharacters) {
        break;
      }
      if (characterCount > approximatedVisibleCharacters) {
        // Update host element content
        this._element.nativeElement.innerText =
          wordsArray.slice(0, index).join(' ') + '...';
        break;
      }
    }
  }
}
