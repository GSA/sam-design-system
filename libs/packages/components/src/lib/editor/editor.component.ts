import { DOCUMENT } from '@angular/common';
import {
  Component,
  forwardRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Input,
  ViewChild,
  ElementRef,
  Inject,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'sds-editor',
  template: `
    <div
      #searchInput
      [attr.id]="id"
      class="minh-15 border-gray-70 border-1px margin-top-1 padding-05"
      contenteditable="true"
      (input)="!validateOnBlur && onValueChange($event.target.innerHTML)"
      (blur)="validateOnBlur && onBlur($event.target.innerHTML)"
    ></div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SdsEditorComponent),
      multi: true,
    },
  ],
  styles: [
    `
      ::ng-deep mark {
        background-color: red;
        color: white;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SdsEditorComponent implements ControlValueAccessor {
  @ViewChild('searchInput', { read: ElementRef, static: true }) searchInput: ElementRef;

  @Input() id = 'searchEditor';
  @Input() regex = '';
  @Input() validateOnBlur = false;

  model = '';

  private _onChange = (_: any) => {};
  private _onTouched = () => {};

  constructor(private cd: ChangeDetectorRef, @Inject(DOCUMENT) private _document: any) {}

  // Helper method to programatically update a value of the model on blur
  onBlur(value) {
    this.model = value;
    if (this.regex) {
      this.validateRegex(this.model);
    }
    this.updateModel();
  }

  // Helper method that gets a new instance of the model and notifies ControlValueAccessor that we have a new model for this FormControl (our custom component)
  updateModel() {
    const model = this.getModel();
    this._onChange(model);
  }

  // Helper method to return a new instance of an value
  getModel() {
    return this.model;
  }

  // Validate regex and highlight first charecter of the failure
  validateRegex(value) {
    const rawValue = value
      .replaceAll(/<\/?mark[^>]*>/g, '')
      .replaceAll(/<\/?span[^>]*>/g, '')
      .replaceAll(/<\/?font[^>]*>/g, '');
    const regex = new RegExp(this.regex, 'g');
    let res = '';
    let result = regex.exec(rawValue);
    if (result) {
      let index = result.index;
      res =
        rawValue.substring(0, index) +
        '<mark>' +
        rawValue.substring(index, index + 1) +
        '</mark>' +
        rawValue.substring(index + 1, index + rawValue.length);
      this.searchInput.nativeElement.innerHTML = res;
    } else {
      this.searchInput.nativeElement.innerHTML = rawValue;
    }
  }

  // ControlValueAccessor (and Formly) is trying to update the value of the FormControl (our custom component) programatically
  // If there is a value we will just overwrite items
  // If there is no value we reset the items array to be empty
  writeValue(value: any) {
    if (value) {
      this.model = value;
      if (this.searchInput) this.searchInput.nativeElement.innerHTML = value;
      this.cd.markForCheck();
    } else {
      this.model = '';
      if (this.searchInput) this.searchInput.nativeElement.innerHTML = '';
      this.cd.markForCheck();
    }
  }

  // ControlValueAccessor hook that lets us call this._onChange(let) to let the form know our variable has changed (in this case model)
  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  // ControlValueAccessor hook (not used)
  registerOnTouched(fn: any) {
    this._onTouched = fn;
  }

  // Get the cursor current position
  getCaretCharacterOffsetWithin(element) {
    let caretOffset = 0;
    if (typeof window.getSelection != 'undefined') {
      let range = window.getSelection().getRangeAt(0);
      let preCaretRange = range.cloneRange();
      preCaretRange.selectNodeContents(element);
      preCaretRange.setEnd(range.endContainer, range.endOffset);
      caretOffset = preCaretRange.toString().length;
    }
    return caretOffset;
  }

  onValueChange(value) {
    const pos = this.getCaretCharacterOffsetWithin(this.searchInput.nativeElement);
    if (this.regex) {
      this.validateRegex(value);
    }
    this.model = value;
    this.updateModel();

    let node = this.searchInput.nativeElement;
    if (pos < node?.innerText?.length) {
      let firstNodeLength = node.childNodes[0].textContent.length;

      let childNodeIndex = pos <= firstNodeLength ? 0 : 2;

      let startPosition = childNodeIndex === 0 ? pos : pos - firstNodeLength - 1;
      let range = this._document.createRange();
      let sel = window.getSelection();
      range.setStart(this.searchInput.nativeElement.childNodes[childNodeIndex], startPosition);
      range.collapse(true);
      sel.removeAllRanges();
      sel.addRange(range);
      this.searchInput.nativeElement.focus();
    } else {
      this._document.execCommand('selectAll', false, null);
      this._document.getSelection().collapseToEnd();
    }
  }
}
