import {
    Component,
    forwardRef,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Input
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'sds-editor',
    template: `
    <div
      #searchInput
      [attr.id]="id"
      style="min-height:100px; border:black solid 2px"
      contenteditable="true"
      (input)="valueChange($event.target.innerHTML)"
    >
{{contentText}}
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
    contentText = '';
    @Input() id = 'searchEditor';
    @Input() regex = /^[a-zA-Z ]*$/;
    model = '';
    highlightIndex = 0;

    private _onChange = (_: any) => { };
    private _onTouched = () => { };

    constructor(private cd: ChangeDetectorRef) {
    }

    // Helper method to programatically add a value to the existing items array
    valueChange(value) {
        this.model = value;
        this.validateRegex(this.model);
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

    validateRegex(value) {

        let newValue;

        if (!this.regex.test(value)) {
            newValue = `<mark>${value}</mark>`;
            console.log(newValue)

        }


        this.contentText = newValue;
    }

    // ControlValueAccessor (and Formly) is trying to update the value of the FormControl (our custom component) programatically
    // If there is a value we will just overwrite items
    // If there is no value we reset the items array to be empty
    writeValue(value: any) {
        if (value) {
            this.model = value;
            this.contentText = value;
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
