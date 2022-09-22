import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-field-multicheckbox',
  templateUrl: './multicheckbox.html',
})
export class FormlyFieldMultiCheckboxComponent extends FieldType implements OnInit {
  defaultOptions = {
    templateOptions: {
      options: [],
      expandableOptions: false,
      expandedOptions: false,
    },
  };
  allComplete: boolean;
  ariaChecked = '';
  mainOptionAriaChecked: string[] = [];
  subOptionariaChecked: string[] = [];

  constructor(private cdr: ChangeDetectorRef) {
    super();
  }

  ngOnInit() {
    this.someComplete();
    this.subOptionariaChecked.fill('false');
    this.mainOptionAriaChecked.fill('false');
  }

  checkSubOption(allSubOptions, index) {
    let allKeys = allSubOptions.map((opt) => opt.key);
    const uniqValues = {};
    if (this.formControl.value) {
      this.formControl.value.forEach((i) => (uniqValues[i] = true));
      if (allKeys.every((val) => uniqValues[val])) {
        this.subOptionariaChecked[index] = 'true';
        return true;
      } else if (allKeys.some((val) => uniqValues[val])) {
        this.subOptionariaChecked[index] = 'mixed';
        return true;
      } else {
        this.subOptionariaChecked[index] = 'false';
        return false;
      }
    }
  }

  checkMainOption(id, allSubOptions) {
    let index = this.getIndex(id);
    let allKeys: string[] = [];
    allSubOptions.map((opt) => {
      allKeys.push(opt.key);
      if (opt.templateOptions && opt.templateOptions.options) {
        opt.templateOptions.options.map((subOpt) => allKeys.push(subOpt.key));
      }
    });
    const uniqValues = {};
    if (this.formControl.value) {
      this.formControl.value.forEach((i) => (uniqValues[i] = true));
      if (allKeys.every((val) => uniqValues[val])) {
        this.mainOptionAriaChecked[index] = 'true';
        return true;
      } else if (allKeys.some((val) => uniqValues[val])) {
        this.mainOptionAriaChecked[index] = 'mixed';
        return true;
      } else {
        this.mainOptionAriaChecked[index] = 'false';
        return false;
      }
    }
  }

  onSubOptionChange(subOption: any, checked: boolean, allSubOptions: any, index: number) {
    this.onChange(subOption.key, checked);
    let checkedValues = [];
    allSubOptions.forEach((subOpt) => {
      checkedValues.push(this.isChecked(subOpt));
    });
    if (checkedValues.every((val, i, arr) => val === arr[0])) {
      // this.subOptionComplete[index] = checkedValues[0] ? true : false;
      this.subOptionariaChecked[index] = checkedValues[0] ? 'true' : 'false';
    } else {
      this.subOptionariaChecked[index] = 'mixed';
    }
  }

  onMainOptionChange(value: any, checked: boolean, mainOptions: any, id: string) {
    this.onChange(value, checked);
    let checkedValues = [];
    let i = this.getIndex(id);
    mainOptions.forEach((mainOpt) => {
      checkedValues.push(this.isChecked(mainOpt));
      if (mainOpt.templateOptions) {
        mainOpt.templateOptions.options.forEach((subOpt) => {
          checkedValues.push(this.isChecked(subOpt));
        });
        if (mainOpt.key === value) this.setAllSubList(checked, mainOpt, i);
      }
    });
    if (checkedValues.every((val, _i, arr) => val === arr[0])) {
      this.mainOptionAriaChecked[i] = checkedValues[0] ? 'true' : 'false';
    } else {
      this.mainOptionAriaChecked[i] = 'mixed';
    }
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
      return this.formControl.value.includes(option.key) && option.value != 'false';
    } else if (this.formControl.value[option.value]) {
      return this.formControl.value[option.value] && this.formControl.value[option.value] != 'false';
    }
  }

  someComplete() {
    let value;
    if (this.formControl && this.formControl.value) {
      if (!Array.isArray(this.formControl.value)) {
        let values = Object.keys(this.formControl.value).map((item) => this.formControl.value[item]);
        value = values.filter((x) => x === true).length;
      } else {
        value = this.formControl.value.length;
      }
    }
    this._getAriaChecked(value);
  }

  setAllSubList(checked, subList, index) {
    // this.subOptionComplete[index] = checked;
    this.subOptionariaChecked[index] = checked ? 'true' : 'false';
    if (Array.isArray(subList.templateOptions.options)) {
      // this.formControl.setValue([]);
      this.field.templateOptions.options.forEach((subOption) => {
        if (subOption['key'] === subList.key) {
          subOption['templateOptions'].options.map((item) => {
            this.onChange(item.key, checked);
          });
        }
      });
    }
  }

  getIndex(id) {
    return id.substring(id.length - 1);
  }

  setAll(ev) {
    let id = ev.target.id;
    let i = this.getIndex(id);
    this.mainOptionAriaChecked[i] = ev.target.checked;
    if (Array.isArray(this.field.templateOptions.options)) {
      this.formControl.setValue([]);
      this.field.templateOptions.options.map((option, index) => {
        this.onChange(option.key, ev.target.checked);
        if (option.templateOptions) {
          this.setAllSubList(ev.target.checked, option, index);
        }
      });
    }
  }

  _getAriaChecked(value) {
    if (Array.isArray(this.field.templateOptions.options)) {
      this.allComplete = value === this.field.templateOptions.options.length ? true : false;
    }
    if (value === 0) {
      this.ariaChecked = 'false';
    } else {
      this.ariaChecked = value > 0 && !this.allComplete ? 'mixed' : 'true';
    }
  }
}
