import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'sds-rich-text',
  templateUrl: './rich-text.component.html',
  styleUrls: ['./rich-text.component.scss'],
  providers: [
    {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => SdsRichTextComponent),
        multi: true,
    },
  ],
})
export class SdsRichTextComponent{

  @Input() minHeight: number;
  @Input() maxHeight: number;

  get minHeightClass(): string{
    return this.minHeight ? `min-height-${this.minHeight}`: '';
  }
  get maxHeightClass(): string{
    return this.maxHeight ? `max-height-${this.maxHeight}`: '';
  }

  _onChange = (_: any) => { };
  _onTouched = (_: any) => { };

  writeValue(value: any): void {
    this.model = value;
  }
  registerOnChange(fn: any): void {
    this._onChange = fn;
  }
  registerOnTouched(fn: any) {
    this._onTouched = fn;
  }
  public editor = ClassicEditor;

  model = "";
}

