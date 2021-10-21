import { DOCUMENT } from '@angular/common';
import {
    Component,
    forwardRef,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Input,
    ViewChild,
    ElementRef,
    Inject
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
      (input)="!validateOnBlur && onValueChange($event.target.innerHTML)"
      (blur)="validateOnBlur && onBlur($event.target.innerHTML)"
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
    styles: [`
    ::ng-deep mark {
        background-color: red;
        color: white;
    }`
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SdsEditorComponent implements ControlValueAccessor {
    @ViewChild('searchInput', { read: ElementRef, static: true }) searchInput: ElementRef;

    @Input() id = 'searchEditor';
    @Input() regex = '';
    @Input() validateOnBlur = false;

    model = '';
    pos: number = undefined;
    length: number = 0;

    private _onChange = (_: any) => { };
    private _onTouched = () => { };

    constructor(private cd: ChangeDetectorRef, @Inject(DOCUMENT) private _document: any) {
    }

    // Helper method to programatically update a value of the model on blur
    onBlur(value) {
        this.model = value;
        if (this.regex) {
            this.validateRegex(this.model);
        }
        this.updateModel();
    }

    // Helper method that gets a new instance of the model and notifies ControlValueAccessor that we have a new model for this FormControl (our custom component)
    updateModel() {
        const model = this.getModel();
        this._onChange(model);
    }

    // Helper method to return a new instance of an value
    getModel() {
        return this.model;
    }

    // Validate regex and highlight first charecter of the failure
    validateRegex(value) {
        const rawValue = value.replaceAll('<mark>', '').replaceAll('</mark>', '').replaceAll(/<\/?span[^>]*>/g, '');
        const regex = new RegExp(this.regex, 'g');
        let res = "";
        let result = regex.exec(rawValue);
        if (result) {
            let index = result.index;
            res = rawValue.substring(0, index) +
                '<mark>' + rawValue.substring(index, index + 1) +
                '</mark>' + rawValue.substring(index + 1, index + rawValue.length);
            this.searchInput.nativeElement.innerHTML = res;
        } else {
            this.searchInput.nativeElement.innerHTML = rawValue;
        }
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

    // ControlValueAccessor hook that lets us call this._onChange(let) to let the form know our variable has changed (in this case model)
    registerOnChange(fn: any): void {
        this._onChange = fn;
    }

    // ControlValueAccessor hook (not used)
    registerOnTouched(fn: any) {
        this._onTouched = fn;
    }

    // onKeydown(event) {
    //     if (event.key === 'Backspace' || event.key === 'Delete') {
    //         this.length = this.length - 1;
    //     }
    // }

    // onKeyPressed() {
    //     this.length = this.length + 1;
    // }

    // Get the cursor current position and ma
    getCaretCharacterOffsetWithin(element) {
        let caretOffset = 0;
        if (typeof window.getSelection != 'undefined') {
            let range = window.getSelection().getRangeAt(0);
            let preCaretRange = range.cloneRange();
            preCaretRange.selectNodeContents(element);
            preCaretRange.setEnd(range.endContainer, range.endOffset);
            caretOffset = preCaretRange.toString().length;
        } else if (
            typeof this._document['selection'] != 'undefined' &&
            this._document['selection'].type != 'Control'
        ) {
            const body: any = this._document.body as any;
            let textRange = this._document['selection'].createRange();
            let preCaretTextRange = body.createTextRange();
            preCaretTextRange.moveToElementText(element);
            preCaretTextRange.setEndPoint('EndToEnd', textRange);
            caretOffset = preCaretTextRange.text.length;
        }
        return caretOffset;
    }

    onValueChange(value) {

        const rawValue = value
            .replaceAll('<mark>', '')
            .replaceAll('</mark>', '')
            .replaceAll(/<\/?span[^>]*>/g, '')
            .replaceAll(/<\/?font[^>]*>/g, '');

        this.pos = this.getCaretCharacterOffsetWithin(
            this._document.getElementById(this.id)
        );
        const regex = new RegExp(this.regex, 'g');
        let res = '';
        let result = regex.exec(rawValue);
        if (result) {
            let index = result.index;
            res =
                rawValue.substring(0, index) +
                '<mark>' +
                rawValue.substring(index, index + 1) +
                '</mark>' +
                rawValue.substring(index + 1, index + rawValue.length);
        } else {
            res = rawValue;
        }
        this.searchInput.nativeElement.innerHTML = res;
        this.model = rawValue;
        this.updateModel();
        let node = this._document.getElementById(this.id);
        this.length = node.innerText.length;
        if (this.pos < this.length) {
            let firstNodeLength = node.childNodes[0].textContent.length;
            let childNodeIndex;
            if (this.pos < firstNodeLength) {
                childNodeIndex = 0;
            } else if (this.pos > firstNodeLength) {
                childNodeIndex = 2;
            }
            let startPosition =
                childNodeIndex === 0 ? this.pos : this.pos - firstNodeLength - 1;
            let range = this._document.createRange();
            let sel = window.getSelection();
            range.setStart(
                this._document.getElementById(this.id).childNodes[childNodeIndex],
                startPosition
            );
            range.collapse(true);
            sel.removeAllRanges();
            sel.addRange(range);
            this._document.getElementById(this.id).focus();
        } else {
            this._document.execCommand('selectAll', false, null);
            this._document.getSelection().collapseToEnd();
        }

    }
}
