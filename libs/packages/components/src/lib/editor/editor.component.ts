import { Component, forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'sds-editor',
    template: `
    <div>
      <input #searchInput class="usa-input display-inline-block" [attr.aria-label]="label"/>
      <button class="usa-button margin-left-05 display-inline-block" (click)="addItem(searchInput.value);">Add Item</button>
    </div>
  `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SdsEditorComponent),
            multi: true
        }
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SdsEditorComponent implements ControlValueAccessor {

    model = '';
    multiple = true;

    @Input() label: string;

    private _onChange = (_: any) => { };
    private _onTouched = () => { };

    constructor(private cd: ChangeDetectorRef) { }

    // Helper method to programatically add a value to the existing model array
    addItem(val) {
        if (this.multiple) {
            this.model = val;
            this.updateModel();
        }
    }

    // Method that is fired when the child component event notifies us that the model array has been modified within the child component
    updateItems($event) {
        this.updateModel();
    }

    // Helper method that gets a new instance of the model and notifies ControlValueAccessor that we have a new model for this FormControl (our custom component)
    updateModel() {
        const model = this.getModel();
        this._onChange(model);
    }

    // Helper method to return a new instance of an array that contains our model
    getModel() {
        return this.model;
    }

    // ControlValueAccessor (and Formly) is trying to update the value of the FormControl (our custom component) programatically
    // If there is a value we will just overwrite model
    // If there is no value we reset the model array to be empty
    writeValue(value: any) {
        if (value && this.model !== value) {
            this.model = value;
            this.cd.markForCheck();
        } else {
            this.model = '';
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
