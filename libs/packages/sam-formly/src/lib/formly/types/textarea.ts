import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-field-textarea',
  template: `
    <div [ngClass]="{'usa-character-count': to.maxLength}">
      <textarea [formControl]="formControl" [cols]="to.cols"
        [rows]="to.rows" class="usa-textarea minw-15" [class.usa-input--error]="showError"
        [placeholder]="to.placeholder"
        [formlyAttributes]="field"
        [maxlength]="to.maxLength"
        (ngModelChange)="valueChange($event)"
        
      >

      </textarea>
      <p id="textArea"></p>
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
  `,
})
export class FormlyFieldTextAreaComponent extends FieldType implements OnInit {
  defaultOptions = {
    templateOptions: {
      cols: 1,
      rows: 1,
    },
  };

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
    let regex = this.to.regexPattern;
    if (!regex.test(value)) {
      let words = value.split(' ');
      for (let i in words) {
        if (!regex.test(words[i])) {
          console.log(words[i]);
          words[i] = '<mark>' + words[i] + '</mark>';
        }
      }
      let newValue = words.join(' ');

      document.getElementById('textArea').innerHTML = newValue;
    }

  }

}