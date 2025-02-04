import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldType, FieldTypeConfig, FormlyFieldConfig, FormlyFormBuilder } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-field-button',
  template: `
    <button
      *ngIf="!hideButton && !additionalField"
      class="usa-button"
      [ngClass]="props.btnClass"
      (click)="onClick($event)"
      [attr.aria-label]="props.text"
    >
      <usa-icon *ngIf="props.btnIcon" [icon]="props.btnIcon" [size]="'s'"></usa-icon>
      {{ props.text }}
    </button>

    <ng-container *ngIf="additionalField">
      <formly-field class="margin-top-0" [field]="additionalField"></formly-field>
    </ng-container>
  `,
})
export class FormlyFieldButtonComponent extends FieldType<FieldTypeConfig> {
  additionalField: FormlyFieldConfig | null = null;
  hideButton = false;

  constructor(private formBuilder: FormlyFormBuilder) {
    super();
  }

  ngOnInit() {
    if (this.props.additionalField && this.model[this.props.additionalField.key] && this.props.enableInput) {
      this.hideButton = true;
      this.additionalField = this.props.additionalField;
      this.formBuilder.buildForm(this.form as FormGroup, [this.additionalField], this.model, this.options);
    }
  }

  onClick($event) {
    if (this.props.enableInput) {
      if (this.additionalField) {
        return;
      }
      this.additionalField = this.props.additionalField;
      this.hideButton = true;
      this.formBuilder.buildForm(this.form as FormGroup, [this.additionalField], this.model, this.options);
    }

    if (this.props.onClick) {
      this.props.onClick($event);
    }
  }
}
