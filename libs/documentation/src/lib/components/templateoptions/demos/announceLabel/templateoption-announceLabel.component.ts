import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
@Component({
  templateUrl: './templateoption-announceLabel.component.html'
})
export class TemplateOptionAnnounceLabel {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'Keyword',
      type: 'input',
      templateOptions: {
        label: 'Entity',
        announceLabel: true
     
      }
    }
  ];
}
