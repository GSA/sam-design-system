import {
  Component,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
  Input,
  AfterViewInit,
  forwardRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';

import { FocusMonitor } from '@angular/cdk/a11y';
import { ViewportRuler } from '@angular/cdk/overlay';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'sds-search',
  templateUrl: 'search.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SdsSearchComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class SdsSearchComponent implements AfterViewInit, ControlValueAccessor {
  @ViewChild('inputEl', { read: ElementRef }) inputEl: ElementRef;
  @ViewChild('buttonEl', { read: ElementRef }) buttonEl: ElementRef;

  @Input() placeholder: string;
  @Input() inputClass: string;
  @Input() parentSelector: string;

  model = {};
  inputState = {
    initial: { visible: undefined },
    visible: undefined
  };
  private _onChange = (_: any) => { };
  private _onTouched = () => { };

  constructor(private cd: ChangeDetectorRef,
    private focusMonitor: FocusMonitor,
    private viewportRuler: ViewportRuler
  ) { }

  ngAfterViewInit() {
    this.inputState.initial.visible = this.isInputVisible();
    this.inputState.visible = this.inputState.initial.visible;
    this.viewportRuler.change(0).subscribe(() => {
      this.inputState.initial.visible = this.isInputVisible();
      this.inputState.visible = this.inputState.initial.visible;
    });
  }

  handleClick(event) {
    event.preventDefault();
    if (!this.inputState.visible) {
      this.setInputVisibleStyles();
      this.focusMonitor.focusVia(this.inputEl, 'program');
    } else if (this.inputEl.nativeElement.value) {
      this.model = { searchText: this.inputEl.nativeElement.value };
      this._onChange(this.model);
    }
  }

  writeValue(value: any) {

    if (value && this.model !== value) {
      console.log(value, 'val')
      this.model = value;
      this.cd.markForCheck();
    } else {
      this.model = {};
      this.cd.markForCheck();
    }
  }
  registerOnTouched(fn: any) {
    this._onTouched = fn;
  }
  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  isInputVisible(): boolean {
    return this.inputEl.nativeElement.getBoundingClientRect().width
      ? true
      : false;
  }

  setInputVisibleStyles() {
    const inputWidth = this.calculateInputWidth();
    this.inputEl.nativeElement.style.display = 'block';
    this.inputEl.nativeElement.style.position = 'absolute';
    this.inputEl.nativeElement.style.left = `-${inputWidth}px`;
    this.inputEl.nativeElement.style.width = `${inputWidth}px`;
    this.inputState.visible = true;
  }

  removeInputVisibleStyles() {
    this.inputEl.nativeElement.style.display = '';
    this.inputEl.nativeElement.style.position = '';
    this.inputEl.nativeElement.style.left = '';
    this.inputEl.nativeElement.style.width = '';
    this.inputState.visible = false;
  }

  focusChange(event) {
    if (event === null && !this.inputState.initial.visible) {
      this.removeInputVisibleStyles();
    }
  }

  calculateInputWidth(): number {
    const buttonElement = this.buttonEl.nativeElement;
    const inputElement = this.inputEl.nativeElement;
    const rightPosition = buttonElement.getBoundingClientRect().left;
    const leftPosition = this.parentSelector
      ? inputElement.closest(this.parentSelector).getBoundingClientRect().left
      : 0;
    return Math.floor(rightPosition - leftPosition);
  }
}
