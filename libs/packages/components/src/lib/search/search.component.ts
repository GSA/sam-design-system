import {
  Component,
  ViewChild,
  ElementRef,
  Input,
  AfterViewInit,
  forwardRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { FocusMonitor } from '@angular/cdk/a11y';
import { ViewportRuler } from '@angular/cdk/overlay';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
export class SearchSettings {
  public placeholder = 'Search';
  public size: string;
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
  @ViewChild('inputEl', { read: ElementRef }) inputEl: ElementRef;
  @ViewChild('selectEl', { read: ElementRef }) selectEl: ElementRef;
  @ViewChild('buttonEl', { read: ElementRef }) buttonEl: ElementRef;

  @Input() inputClass: string;
  @Input() parentSelector: string;
  @Input() searchSettings: SearchSettings = new SearchSettings();

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
      this.model.searchText = this.inputEl? this.inputEl.nativeElement.value : '';
      if (this.selectEl && this.selectEl.nativeElement.value) {
        this.model.searchCatergory = this.selectEl.nativeElement.value;
      }
      this._onChange(this.model);
    }
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
