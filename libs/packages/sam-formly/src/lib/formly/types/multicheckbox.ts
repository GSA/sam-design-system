import { Component } from '@angular/core';
import { FieldType, FormlyTemplateOptions } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-field-multicheckbox',
  templateUrl: './multicheckbox.html'
})
export class FormlyFieldMultiCheckboxComponent extends FieldType {
  defaultOptions = {
    templateOptions: {
      options: [],
    },
  };
  isCollapsedContent = false;
  selectAllChecked: boolean;
  onChange(value: any, checked: boolean) {
    if (this.to.type === 'array') {
      this.formControl.patchValue(checked
        ? [...(this.formControl.value || []), value]
        : [...(this.formControl.value || [])].filter(o => o !== value),
      );
    } else {
      this.formControl.patchValue({ ...this.formControl.value, [value]: checked });
    }
    this.isSelectAllChecked();
    this.formControl.markAsTouched();
  }

  isSelectAllChecked(){
    this.selectAllChecked = Object.values(this.formControl.value).filter(x => x === true).length > 0? true: false;
  }

  onGroupChange(ev) {
    if (Array.isArray(this.field.templateOptions.options)) {
      this.field.templateOptions.options.map(option => {
        this.onChange(option.key, ev.target.checked)
      })
     
    }
  }
}
