import { Component, forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, OnInit, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'sds-text',
  template: `
    <div>
      <input #searchInput class="usa-input display-inline-block" [attr.aria-label]="label"/>
      <button class="usa-button margin-left-05 display-inline-block" (click)="addItem(searchInput.value); searchInput.value=''">Add Item</button>
    </div>

    <h4>Component Items</h4>
    <pre>{{ items | json }}</pre>

    <hr />

    <h4>Child Component Items <small>(click to remove)</small></h4>
    <sds-text-child [(items)]="items" (itemsChange)="updateItems($event)"></sds-text-child>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SdsTextComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SdsTextComponent implements ControlValueAccessor, OnInit {

  items = [];
  multiple = true;

  @Input() label: string;

  private _onChange = (_: any) => { };
  private _onTouched = () => { };

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    console.log(this);
  }

  // Helper method to programatically add a value to the existing items array
  addItem(val) {
    if(this.multiple){
      this.items = [...this.items, val];
      this.updateModel();
    }
  }

  // Method that is fired when the child component event notifies us that the items array has been modified within the child component
  updateItems($event) {
    this.updateModel();
  }

  // Helper method that gets a new instance of the model and notifies ControlValueAccessor that we have a new model for this FormControl (our custom component)
  updateModel() {
    const model = this.getModel();
    this._onChange(model);
  }

  // Helper method to return a new instance of an array that contains our items
  getModel() {
    return [...this.items];
  }

  // ControlValueAccessor (and Formly) is trying to update the value of the FormControl (our custom component) programatically
  // If there is a value we will just overwrite items
  // If there is no value we reset the items array to be empty
  writeValue(value: any) {
    if(value && value.length && this.items !== value) {
      this.items = value;
      this.cd.markForCheck();
    } else {
      this.items = [];
      this.cd.markForCheck();
    }
  }

  // ControlValueAccessor hook that lets us call this._onChange(var) to let the form know our variable has changed (in this case model)
  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  // ControlValueAccessor hook (not used)
  registerOnTouched(fn: any) {
    this._onTouched = fn;
  }
}
