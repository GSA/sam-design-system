import {
    Component,
    forwardRef,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Input,
    ViewChild,
    ElementRef
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
      (input)="valueChange($event.target.innerHTML)"
    >
    </div>
  `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SdsEditorComponent),
            multi: true,
        },
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SdsEditorComponent implements ControlValueAccessor {
    @ViewChild('searchInput', { read: ElementRef, static: true }) searchInput: ElementRef;

    @Input() id = 'searchEditor';
    @Input() regex = '';

    model = '';

    private _onChange = (_: any) => { };
    private _onTouched = () => { };

    constructor(private cd: ChangeDetectorRef) {
    }

    // Helper method to programatically add a value to the existing items array
    valueChange(value) {
        this.model = value;
        if (this.regex) {
            this.validateRegex(this.model);
        }
        this.updateModel();
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
        return this.model;
    }
    // Validate regex and highlight first charecter of the failure
    validateRegex(value) {
        const rawValue = value.replaceAll('<mark>', '').replaceAll('</mark>', '');
        const regex = new RegExp(this.regex, 'g');
        let res = "";
        let result = regex.exec(rawValue);
        if (result) {
            let index = result.index;
            res = rawValue.substring(0, index) +
                '<mark>' + rawValue.substring(index, index + 1) +
                '</mark>' + rawValue.substring(index + 1, index + rawValue.length);
        } else {
            res = value;
        }
        this.searchInput.nativeElement.innerHTML = res;
        document.execCommand('selectAll', false, null);
        document.getSelection().collapseToEnd();
    }

    // ControlValueAccessor (and Formly) is trying to update the value of the FormControl (our custom component) programatically
    // If there is a value we will just overwrite items
    // If there is no value we reset the items array to be empty
    writeValue(value: any) {
        if (value) {
            this.model = value;
            if (this.searchInput)
                this.searchInput.nativeElement.innerHTML = value;
            this.cd.markForCheck();
        } else {
            this.model = '';
            if (this.searchInput) this.searchInput.nativeElement.innerHTML = '';
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
