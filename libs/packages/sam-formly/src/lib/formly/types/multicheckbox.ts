import { Component, OnChanges, OnInit } from '@angular/core';
import { FieldType, FormlyTemplateOptions } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-field-multicheckbox',
  templateUrl: './multicheckbox.html',
  styleUrls: ['./multicheckbox.scss']
})
export class FormlyFieldMultiCheckboxComponent extends FieldType
  implements OnInit {
  defaultOptions = {
    templateOptions: {
      options: [],
      expandableOptions: false,
      collapseContent: false
    }
  };
  allComplete: boolean;
  ariaChecked = '';
  ngOnInit() {
    this.someComplete();
  }
  onChange(value: any, checked: boolean) {
    if (this.to.type === 'array') {
      this.formControl.patchValue(
        checked
          ? [...(this.formControl.value || []), value]
          : [...(this.formControl.value || [])].filter(o => o !== value)
      );
    } else {
      this.formControl.patchValue({
        ...this.formControl.value,
        [value]: checked
      });
    }
    this.someComplete();
    this.formControl.markAsTouched();
  }

  someComplete() {
    let value;
    if (this.formControl && this.formControl.value) {
      if (!Array.isArray(this.formControl.value)) {
        value = Object.values(this.formControl.value).filter(x => x === true)
          .length;
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
      this.field.templateOptions.options.map(option => {
        this.onChange(option.key, ev.target.checked);
      });
    }
  }

  _getAriaChecked(value) {
    this.allComplete =
      value === this.field.templateOptions.options.length ? true : false;

    if (value === 0) {
      this.ariaChecked = 'true';
    } else {
      this.ariaChecked = value > 0 && !this.allComplete ? 'mixed' : 'false';
    }
  }
}
