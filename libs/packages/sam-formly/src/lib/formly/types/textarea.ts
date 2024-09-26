import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-field-textarea',
  template: `
    <div
      [ngClass]="{
        'sds-textarea-small': props.maxLength && props.size === 'small',
        'sds-textarea-medium': props.maxLength && props.size === 'medium',
        'sds-textarea-large': props.maxLength && props.size === 'large'
      }"
    >
      <textarea
        #textarea
        [formControl]="formControl"
        [cols]="props.cols"
        [rows]="props.rows"
        class="usa-textarea minw-15"
        [class.usa-input--error]="showError"
        [placeholder]="props.placeholder"
        [formlyAttributes]="field"
        (ngModelChange)="valueChange($event)"
      >
      </textarea>
      <span [attr.id]="id + '-character-count'" class="usa-hint" aria-live="polite">
        <span *ngIf="props.maxLength">
          {{ charactersRemaining }}
          {{ charactersRemaining === 1 ? 'character' : 'characters' }}
          {{ charactersRemaining === props.maxLength ? 'allowed' : 'left' }}
        </span>
      </span>
    </div>
  `,
})
export class FormlyFieldTextAreaComponent extends FieldType<FieldTypeConfig> implements OnInit {
  @ViewChild('textarea', { static: true }) textareaRef: ElementRef;

  defaultOptions = {
    props: {
      cols: 1,
      rows: 1,
      width: 'small', // default to small if not specified
    },
  };

  charactersRemaining: number;

  ngOnInit() {
    if (!this.props.maxLength) {
      return;
    }
    if (this.props.maxLength) {
      this.textareaRef.nativeElement.setAttribute('maxLength', this.props.maxLength);
    }
    const initialValue: string = this.field.formControl.value;

    if (!initialValue) {
      this.charactersRemaining = this.props.maxLength;
      return;
    }

    if (initialValue && initialValue.length <= this.props.maxLength) {
      this.charactersRemaining = this.props.maxLength - initialValue.length;
      return;
    }

    // Contains initial value that is over max length limit, so we truncate text to be at max length
    const truncatedValue = initialValue.substring(0, this.props.maxLength);
    this.formControl.setValue(truncatedValue);
    this.charactersRemaining = this.props.maxLength - truncatedValue.length;
  }

  valueChange(value: string) {
    if (!this.props.maxLength) {
      return;
    }

    if (value != null && value != undefined) {
      if (value.length > this.props.maxLength) {
        const newValue = value.substring(0, this.props.maxLength);
        this.formControl.setValue(newValue);
      } else {
        this.charactersRemaining = Math.max(0, this.props.maxLength - value.length);
      }
    }
  }
}
