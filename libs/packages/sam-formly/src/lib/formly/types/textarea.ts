import { Component, OnInit } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-field-textarea',
  template: `
    <div [ngClass]="{ 'usa-character-count': props.maxlength }">
      <textarea
        [formControl]="formControl"
        [cols]="props.cols"
        [rows]="props.rows"
        class="usa-textarea minw-15"
        [class.usa-input--error]="showError"
        [placeholder]="props.placeholder"
        [formlyAttributes]="field"
        [maxlength]="props.maxlength"
        (ngModelChange)="valueChange($event)"
      >
      </textarea>
      <span [attr.id]="id + '-character-count'" class="usa-hint" aria-live="polite">
        <span *ngIf="props.maxlength">
          {{ charactersRemaining }}
          {{ charactersRemaining === 1 ? 'character' : 'characters' }}
          {{ charactersRemaining === props.maxlength ? 'allowed' : 'left' }}
        </span>
      </span>
    </div>
  `,
})
export class FormlyFieldTextAreaComponent extends FieldType<FieldTypeConfig> implements OnInit {
  defaultOptions = {
    props: {
      cols: 1,
      rows: 1,
    },
  };

  charactersRemaining: number;

  ngOnInit() {
    if (!this.props.maxlength) {
      return;
    }
    const initialValue: string = this.field.formControl.value;

    if (!initialValue) {
      this.charactersRemaining = this.props.maxlength;
      return;
    }

    if (initialValue && initialValue.length <= this.props.maxlength) {
      this.charactersRemaining = this.props.maxlength - initialValue.length;
      return;
    }

    // Contains initial value that is over max length limit, so we truncate text to be at max length
    const truncatedValue = initialValue.substring(0, this.props.maxlength);
    this.formControl.setValue(truncatedValue);
    this.charactersRemaining = this.props.maxlength - truncatedValue.length;
  }

  valueChange(value: string) {
    if (!this.props.maxlength) {
      return;
    }

    if (value.length > this.props.maxlength) {
      const newValue = value.substring(0, this.props.maxlength);
      this.formControl.setValue(newValue);
    } else {
      this.charactersRemaining = Math.max(0, this.props.maxlength - value.length);
    }
  }
}
