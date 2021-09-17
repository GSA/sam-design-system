import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-field-textarea',
  template: `
    <div [ngClass]="{'usa-character-count': to.maxLength}">

    <div class="container">
    <div #backdrop class="backdrop">
      <div class="highlights" [innerHTML]="highlightedText"></div>
    </div>
    <textarea [formControl]="formControl" [cols]="to.cols"
        [rows]="to.rows" class="usa-textarea minw-15" [class.usa-input--error]="showError"
        [placeholder]="to.placeholder"
        [formlyAttributes]="field"
        [maxlength]="to.maxLength"
        (ngModelChange)="valueChange($event)"> 
      </textarea>
  </div>

      <span [attr.id]="id + '-character-count'" 
        class="usa-hint"
        aria-live="polite">
        <span *ngIf="to.maxLength">
        {{charactersRemaining}} 
        {{charactersRemaining === 1 ? 'character' : 'characters'}} 
        {{charactersRemaining === to.maxLength ? 'allowed' : 'left'}}
        </span>
      </span>
    </div>
{{highlightedText}}
    `,
  styleUrls: ['./textarea.scss']
})
export class FormlyFieldTextAreaComponent extends FieldType implements OnInit {
  defaultOptions = {
    templateOptions: {
      cols: 1,
      rows: 1,
    },
  };
  highlightIndex = 0;
  highlightedText: string;
  charactersRemaining: number;

  ngOnInit() {
    if (!this.to.maxLength) {
      return;
    }
    const initialValue: string = this.field.formControl.value;

    if (!initialValue) {
      this.charactersRemaining = this.to.maxLength;
      return;
    }

    if (initialValue && initialValue.length <= this.to.maxLength) {
      this.charactersRemaining = this.to.maxLength - initialValue.length;
      return;
    }

    // Contains initial value that is over max length limit, so we truncate text to be at max length
    const truncatedValue = initialValue.substring(0, this.to.maxLength);
    this.formControl.setValue(truncatedValue);
    this.charactersRemaining = this.to.maxLength - truncatedValue.length;
  }

  valueChange(value: string) {
    if (!this.to.maxLength) {
      return;
    }

    if (value.length > this.to.maxLength) {
      const newValue = value.substring(0, this.to.maxLength);
      this.formControl.setValue(newValue);
    } else {
      this.charactersRemaining = Math.max(0, this.to.maxLength - value.length);
    }
    let newValue;
    let regex = this.to.regexPattern;
    if (!regex.test(value)) {
      if (this.highlightIndex == 0) {
        this.highlightIndex = value.length;
        newValue = [value.slice(0, this.highlightIndex - 1), '<mark>', value.slice(value.length - 1)].join('') + '</mark>';

      }



      this.highlightedText = newValue;
      document.getElementById('textArea').innerHTML = newValue;
    }

  }

}