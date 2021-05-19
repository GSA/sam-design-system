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
      <span [attr.id]="id + '-character-count'" 
        class="usa-hint" 
        aria-live="polite">
        <span *ngIf="to.maxLength">
        {{charactersRemaining}} characters remaining
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
    const initialValue = this.field.formControl.value;
    this.charactersRemaining = initialValue ? this.to.maxLength - initialValue.length : this.to.maxLength;
  }

  valueChange(value) {
    if (this.to.maxLength) {
      this.charactersRemaining = this.to.maxLength - value.length;
    }
  }

}