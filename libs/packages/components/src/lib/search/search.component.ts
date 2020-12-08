import {
  Component,
  ViewChild,
  ElementRef,
  Input,
  AfterViewInit,
  forwardRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Output,
  EventEmitter
} from '@angular/core';
import { FocusMonitor } from '@angular/cdk/a11y';
import { ViewportRuler } from '@angular/cdk/overlay';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
export class SearchSettings {
  public placeholder = 'Search';
  public size: string;
  public inputClass: string;
  public parentSelector: string;
  public dropdown: any = {
    placeholder: '-Select-',
    options: [],
    inverse: false
  };
}
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
  @ViewChild('inputEl', { read: ElementRef, static: false })
  inputEl: ElementRef;
  @ViewChild('selectEl', { read: ElementRef, static: false })
  selectEl: ElementRef;
  @ViewChild('buttonEl', { read: ElementRef, static: false })
  buttonEl: ElementRef;

  @Input() searchSettings: SearchSettings = new SearchSettings();
  @Output() submit: EventEmitter<{ searchText: string }> = new EventEmitter(
    null
  );

  model: any = {};
  inputState = {
    initial: { visible: undefined },
    visible: undefined
  };
  private _onChange = (_: any) => {};
  private _onTouched = () => {};

  constructor(
    private cd: ChangeDetectorRef,
    private focusMonitor: FocusMonitor,
    private viewportRuler: ViewportRuler
  ) {}

  ngAfterViewInit() {
    this.inputState.initial.visible = this.isInputVisible();
    this.inputState.visible = this.inputState.initial.visible;
    this.viewportRuler.change(0).subscribe(() => {
      this.inputState.initial.visible = this.isInputVisible();
      this.inputState.visible = this.inputState.initial.visible;
    });
  }

  hasDropdown() {
    if (
      this.searchSettings &&
      this.searchSettings.dropdown &&
      this.searchSettings.dropdown.options &&
      this.searchSettings.dropdown.options.length
    ) {
      return true;
    } else {
      return false;
    }
  }
  handleClick(event) {
    event.preventDefault();
    if (!this.inputState.visible) {
      this.setInputVisibleStyles();
      this.focusMonitor.focusVia(this.inputEl, 'program');
    } else if (this.inputEl || this.selectEl) {
      this.submit.emit(this.model);
    }
  }

  writeValueToModel() {
    this.model.searchText = this.inputEl
      ? this.inputEl.nativeElement.value
      : '';
    if (this.selectEl && this.selectEl.nativeElement.value) {
      this.model.searchCategory = this.selectEl.nativeElement.value;
    }
    this._onChange(Object.assign({}, this.model));
  }

  writeValue(value: any) {
    if (value && this.model !== value) {
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
    this.inputEl.nativeElement.style.setProperty(
      'display',
      'block',
      'important'
    );
    this.inputEl.nativeElement.style.position = 'absolute';
    this.inputEl.nativeElement.style.left = `-${inputWidth}px`;
    this.inputEl.nativeElement.style.setProperty(
      'width',
      `${inputWidth}px`,
      'important'
    );
    this.inputState.visible = true;
  }

  removeInputVisibleStyles() {
    this.inputEl.nativeElement.style.display = '';
    this.inputEl.nativeElement.style.position = '';
    this.inputEl.nativeElement.style.left = '';
    this.inputEl.nativeElement.style.width = '';
    this.inputState.visible = false;
  }

  focusChange() {
    if (!this.inputState.initial.visible) {
      this.removeInputVisibleStyles();
    }
  }

  calculateInputWidth(): number {
    const leftPadding = 20;
    const buttonElement = this.buttonEl.nativeElement;
    const inputElement = this.inputEl.nativeElement;
    const rightPosition = buttonElement.getBoundingClientRect().left;
    const leftPosition = this.searchSettings.parentSelector
      ? inputElement
          .closest(this.searchSettings.parentSelector)
          .getBoundingClientRect().left
      : 0;
    return Math.floor(rightPosition - leftPosition - leftPadding);
  }
  getClass() {
    const cls =
      this.searchSettings && this.searchSettings.size === 'large'
        ? 'usa-search--big'
        : 'usa-search--small';
    return this.searchSettings.dropdown && this.searchSettings.dropdown.inverse
      ? `${cls} sds-inverse`
      : cls;
  }
}
