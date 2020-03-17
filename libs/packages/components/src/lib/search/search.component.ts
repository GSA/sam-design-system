import {
  Component,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
  Input,
  AfterViewInit,
  OnInit
} from '@angular/core';

import { FocusMonitor } from '@angular/cdk/a11y';
import { ViewportRuler } from '@angular/cdk/overlay';

@Component({
  selector: 'sds-search',
  templateUrl: 'search.component.html'
})
export class SdsSearchComponent implements AfterViewInit, OnInit {
  @ViewChild('inputEl', { read: ElementRef }) inputEl: ElementRef;
  @ViewChild('buttonEl', { read: ElementRef }) buttonEl: ElementRef;

  @Input() prefixOption: string;
  @Input() searchOptions = [];
  @Input() placeholder: string;
  @Input() inputClass: string;
  @Input() parentSelector: string;
  @Output() term = new EventEmitter<string>();

  inputState = {
    initial: { visible: undefined },
    visible: undefined
  };

  constructor(
    private focusMonitor: FocusMonitor,
    private viewportRuler: ViewportRuler
  ) {}

  ngOnInit() {
    // console.log(this.options);

  }

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
      this.term.emit(this.inputEl.nativeElement.value);
    }
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
