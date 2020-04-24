import { Component, forwardRef, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const noop = () => {};

@Component({
  selector: 'sds-text',
  template: `
    <div>
      <input #searchInput class="usa-input display-inline-block" />
      <button class="usa-button margin-left-05 display-inline-block" (click)="addItem(searchInput.value); searchInput.value=''">Add Item</button>
    </div>

    <h4>Items Array</h4>
    <pre>{{ items | json }}</pre>

    <hr />

    <h4>Child Component</h4>
    <sds-text-child [(items)]="items" (itemsChange)="updateItems($event)"></sds-text-child>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SdsTextComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SdsTextComponent implements ControlValueAccessor {

  items = [];
  multiple = true;

  private _onChange = (_: any) => { };
  private _onTouched = () => { };

  addItem(val) {
    if(this.multiple){
      this.items = [...this.items, val];
      this.updateModel();
    }
  }

  updateItems($event) {
    this.updateModel();
  }

  updateModel() {
    const model = [...this.items];
    this._onChange(model);
  }

  writeValue(value: any) {}

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any) {
    this._onTouched = fn;
  }
}
