import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-wrapper-group-options',
  templateUrl: './formly-wrapper-group-options.component.html',
})
export class FormlyWrapperGroupOptionsComponent {
  @ViewChild('groupTemplate') groupTemplate: TemplateRef<any>;
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [];

  ngAfterViewInit() {
    this.fields = [
      {
        wrappers: ['group', 'description'],
        key: 'Input',
        type: 'input',
        templateOptions: {
          group: 'Input',
          description: 'testing desc',
          groupTemplate: this.groupTemplate,
          hideOptional: true,
          groupContentClass: 'margin-left-10',
          placeholder: 'eg: Acme Corporation',
        },
      },
    ];
  }
}
