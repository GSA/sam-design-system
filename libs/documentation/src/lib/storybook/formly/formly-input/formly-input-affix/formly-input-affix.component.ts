import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-input-affix',
  templateUrl: './formly-input-affix.component.html',
})
export class FormlyInputAffixComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields1: FormlyFieldConfig[] = [
    {
      key: 'suffix',
      type: 'input',
      props: {
        label: 'Entity Name with suffix',
        suffix: 'lbs',
      },
    },
    {
      key: 'prefixIcon',
      type: 'input',
      props: {
        label: 'Entity Name with prefix icon',
        prefixIcon: 'calendar',
      },
    },
    {
      key: 'suffixIcon',
      type: 'input',
      props: {
        label: 'Entity Name with suffix Icon',
        onSuffixClick: (ev) => {
          this.fields[3].props.suffixIcon = 'calendar';
          console.log(ev, 'test');
        },
        suffixIcon: 'arrow-repeat',
      },
    },
  ];

  fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      props: {
        label: 'Name (required)',
        required: true,
      },
    },
    {
      key: 'age',
      type: 'input',
      props: {
        label: 'Age (min= 18, max= 40)',
        type: 'number',
        min: 18,
        max: 40,
        required: true,
      },
    },
    {
      key: 'password',
      type: 'input',
      props: {
        label: 'Password (minLength = 6)',
        type: 'password',
        required: true,
        minLength: 6,
      },
    },
    {
      key: 'comment',
      type: 'textarea',
      props: {
        label: 'Comment (maxLength = 100)',
        required: true,
        maxLength: 100,
        rows: 5,
      },
    },
    {
      key: 'ip',
      type: 'input',
      props: {
        label: 'IP Address (pattern = /(d{1,3}.){3}d{1,3}/)',
        pattern: /(\d{1,3}\.){3}\d{1,3}/,
        required: true,
      },
      validation: {
        messages: {
          pattern: (error: any, field: FormlyFieldConfig) => `"${field.formControl.value}" is not a valid IP Address`,
        },
      },
    },
  ];

  submit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }
}
