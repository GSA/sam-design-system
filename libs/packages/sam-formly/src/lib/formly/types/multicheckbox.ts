import { Component } from '@angular/core';
import { FieldType, FormlyTemplateOptions } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-field-multicheckbox',
  templateUrl: './multicheckbox.html'
//   template: `
//   <div class="usa-checkbox">
//     <div *ngFor="let option of to.options | formlySelectOptions:field | async; let i = index;">
//     <input type="checkbox"
//      [id]="id + '_' + i"
//      class="usa-checkbox__input"
//       [value]="option.value"
//       [checked]="formControl.value && (this.to.type === 'array' ? formControl.value.includes(option.value) : formControl.value[option.value])"
//       [formlyAttributes]="field"
//       (change)="onChange(option.value, $event.target.checked)">
//     <label
//     class="usa-checkbox__label"
//     [for]="id + '_' + i">
//         {{ option.label }}
//     </label>
//   </div>
// </div>
//   `,
})
export class FormlyFieldMultiCheckboxComponent extends FieldType {
  defaultOptions = {
    templateOptions: {
      options: [],
    },
  };
  isCollapsedContent = false;
  selectAllOption: boolean;
  onChange(value: any, checked: boolean) {
    if (this.to.type === 'array') {
      this.formControl.patchValue(checked
        ? [...(this.formControl.value || []), value]
        : [...(this.formControl.value || [])].filter(o => o !== value),
      );
    } else {
      this.formControl.patchValue({ ...this.formControl.value, [value]: checked });
    }
    this.hasChecked();
    this.formControl.markAsTouched();
  }

  hasChecked(){
     console.log(this.form)
  }

  onGroupChange(ev) {
    if (Array.isArray(this.field.templateOptions.options)) {
      this.field.templateOptions.options.map(option => {
        console.log(option)
        this.onChange(option.key, ev.target.checked)
      })
     
    }
  }
  
}
