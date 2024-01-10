import { AfterViewInit, Component, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-input-affix',
  templateUrl: './formly-input-affix.component.html',
})
export class FormlyInputAffixComponent {
  @ViewChild('mySuffixTemplate') mySuffixTemplate: TemplateRef<any>;
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'title',
      type: 'input',
      props: {
        label: 'Entity Name',
       // prefix: '$',
        size: 'small',
        suffixIcon: 'calender',

      },
    },
  ];
}
