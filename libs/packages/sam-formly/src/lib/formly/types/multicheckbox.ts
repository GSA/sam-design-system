import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-field-multicheckbox',
  templateUrl: './multicheckbox.html',
})
export class FormlyFieldMultiCheckboxComponent extends FieldType
  implements OnInit {
  defaultOptions = {
    templateOptions: {
      options: [],
      expandableOptions: false,
      expandedOptions: false,
    },
  };
  allComplete: boolean;
  ariaChecked = '';

  constructor(private cdr: ChangeDetectorRef) {
    super();
  }

  ngOnInit() {
    this.formControl.valueChanges.subscribe((values) => {
      const isChecked =
        (Array.isArray(values) && values.length) > 0 ? true : false;
      this.ariaChecked = isChecked.toString();
      this.allComplete = isChecked;
      if (!this.cdr['destroyed']) {
        this.cdr.detectChanges();
      }
    });
    this.someComplete();
  }

  onChange(value: any, checked: boolean) {
    if (this.to.type === 'array') {
      this.formControl.patchValue(
        checked
          ? [...(this.formControl.value || []), value]
          : [...(this.formControl.value || [])].filter((o) => o !== value)
      );
    } else {
      this.formControl.patchValue({
        ...this.formControl.value,
        [value]: checked,
      });
    }
    this.someComplete();
    this.formControl.markAsTouched();

  }

  isChecked(option) {
    if (!this.formControl.value) {
      return false;
    }

    if (this.to.type === 'array') {
      return this.formControl.value.includes(option.value) && option.value != 'false';
    } else if (this.formControl.value[option.value]) {
      return this.formControl.value[option.value] && this.formControl.value[option.value] != 'false';
    }
  }

  someComplete() {
    let value;
    if (this.formControl && this.formControl.value) {
      if (!Array.isArray(this.formControl.value)) {
        let values = Object.keys(this.formControl.value).map(
          (item) => this.formControl.value[item]
        );
        value = values.filter((x) => x === true).length;
      } else {
        value = this.formControl.value.length;
      }
    }
    this._getAriaChecked(value);
  }

  setAll(ev) {
    this.ariaChecked = 'true';
    this.allComplete = ev.target.checked;
    if (Array.isArray(this.field.templateOptions.options)) {
      this.field.templateOptions.options.map((option) => {
        this.onChange(option.key, ev.target.checked);
      });
    }
  }

  _getAriaChecked(value) {
    if (Array.isArray(this.field.templateOptions.options)) {
      this.allComplete =
        value === this.field.templateOptions.options.length ? true : false;
    }
    if (value === 0) {
      this.ariaChecked = 'false';
    } else {
      this.ariaChecked = value > 0 && !this.allComplete ? 'mixed' : 'true';
    }
  }
}
