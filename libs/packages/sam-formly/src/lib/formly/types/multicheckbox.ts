import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-field-multicheckbox',
  templateUrl: './multicheckbox.html',
})
export class FormlyFieldMultiCheckboxComponent extends FieldType<FieldTypeConfig> implements OnInit {
  defaultOptions = {
    props: {
      options: [],
      expandableOptions: false,
      expandedOptions: false,
    },
  };
  allComplete: boolean;
  ariaChecked = '';
  mainOptionAriaChecked: string[] = [];
  subOptionAriaChecked: string[] = [];

  constructor(private cdr: ChangeDetectorRef) {
    super();
  }

  ngOnInit() {
    this.subOptionAriaChecked.fill('false');
    this.mainOptionAriaChecked.fill('false');
  }

  checkSubOption(allSubOptions, index) {
    let allKeys = allSubOptions.map((opt) => opt.value);
    const uniqValues = {};
    if (this.formControl.value) {
      this.formControl.value.forEach((i) => (uniqValues[i] = true));
      if (allKeys.every((val) => uniqValues[val])) {
        this.subOptionAriaChecked[index] = 'true';
        return true;
      } else if (allKeys.some((val) => uniqValues[val])) {
        this.subOptionAriaChecked[index] = 'mixed';
        return true;
      } else {
        this.subOptionAriaChecked[index] = 'false';
        return false;
      }
    }
  }

  checkMainOption(id, allSubOptions) {
    let index = this.getIndex(id);
    let allKeys: string[] = [];
    allSubOptions.map((opt) => {
      allKeys.push(opt.value);
      if (opt.props && opt.props.options) {
        opt.props.options.map((subOpt) => allKeys.push(subOpt.value));
      }
    });
    let uniqValues = {};
    if (this.formControl.value && Array.isArray(this.formControl.value)) {
      this.formControl.value.forEach((i) => (uniqValues[i] = true));
    } else if (this.formControl.value && typeof this.formControl.value === 'object') {
      uniqValues = this.formControl.value;
    }
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

  onSubOptionChange(subOption: any, checked: boolean, allSubOptions: any, index: number) {
    this.onChange(subOption.value, checked);
    let checkedValues = [];
    allSubOptions.forEach((subOpt) => {
      checkedValues.push(this.isChecked(subOpt));
    });
    if (checkedValues.every((val, i, arr) => val === arr[0])) {
      this.subOptionAriaChecked[index] = checkedValues[0] ? 'true' : 'false';
    } else {
      this.subOptionAriaChecked[index] = 'mixed';
    }
  }

  onMainOptionChange(value: any, checked: boolean, mainOptions: any, id: string) {
    this.onChange(value, checked);
    let checkedValues = [];
    let i = this.getIndex(id);
    mainOptions.forEach((mainOpt) => {
      checkedValues.push(this.isChecked(mainOpt));
      if (mainOpt.props) {
        mainOpt.props.options.forEach((subOpt) => {
          checkedValues.push(this.isChecked(subOpt));
        });
        if (mainOpt.value === value) this.setAllSubList(checked, mainOpt, i);
      }
    });
    if (checkedValues.every((val, _i, arr) => val === arr[0])) {
      this.mainOptionAriaChecked[i] = checkedValues[0] ? 'true' : 'false';
    } else {
      this.mainOptionAriaChecked[i] = 'mixed';
    }
  }

  onChange(value: any, checked: boolean) {
    if (this.props.type === 'array') {
      this.formControl.patchValue(
        checked
          ? [...(this.formControl.value || []), value]
          : [...(this.formControl.value || [])].filter((o) => o !== value),
      );
    } else {
      this.formControl.patchValue({
        ...this.formControl.value,
        [value]: checked,
      });
    }

    this.formControl.markAsTouched();
    this.cdr.detectChanges();
  }

  isChecked(option) {
    if (!this.formControl.value) {
      return false;
    }

    if (this.props.type === 'array') {
      return this.formControl.value.includes(option.value) && option.value != 'false';
    } else if (this.props.groupOptions && this.formControl.value[option.value]) {
      return this.formControl.value[option.value] && this.formControl.value[option.value] != 'false';
    } else if (this.formControl.value[option.value]) {
      return this.formControl.value[option.value] && this.formControl.value[option.value] != 'false';
    }
  }

  setAllSubList(checked, subList, index) {
    this.subOptionAriaChecked[index] = checked ? 'true' : 'false';
    if (Array.isArray(subList.props.options)) {
      this.field.props.options.forEach((subOption) => {
        if (subOption['value'] === subList.value) {
          subOption['props'].options.map((item) => {
            this.onChange(item.value, checked);
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
    if (Array.isArray(this.field.props.options)) {
      this.formControl.setValue([]);
      this.field.props.options.map((option, index) => {
        this.onChange(option.value, ev.target.checked);
        if (option.props) {
          this.setAllSubList(ev.target.checked, option, index);
        }
      });
    }
  }

  _getAriaChecked(value) {
    let i = this.getIndex(this.id);
    if (Array.isArray(this.field.props.options)) {
      this.allComplete = value === this.field.props.options.length ? true : false;
    }
    if (value === 0) {
      this.mainOptionAriaChecked[i] = 'false';
    } else {
      this.mainOptionAriaChecked[i] = value > 0 && !this.allComplete ? 'mixed' : 'true';
    }
  }
}
