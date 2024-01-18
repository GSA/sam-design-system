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
  fields: FormlyFieldConfig[] = [
    {
      key: 'prefix',
      type: 'input',
      props: {
        label: 'Entity Name with prefix',
        prefix: '$',
      },
    },
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
}
