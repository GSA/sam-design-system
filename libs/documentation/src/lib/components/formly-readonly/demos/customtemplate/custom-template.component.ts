import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyUtilsService, SdsFormlyTypes } from '@gsa-sam/sam-formly';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-custom-template-demo',
  templateUrl: './custom-template.component.html',
})
export class CustomTemplateComponent {

  isReadonlyMode = false;
  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] =  [
    {
      type: SdsFormlyTypes.READONLY,
      templateOptions: {
        readonlyTemplate: (field) => {
          return `
            <label class="usa-label">Phone Number</label>
            <span class="text-bold">
              ${field.model.countryCode ? field.model.countryCode : ''}
              ${field.model.phoneNumber}
              ${field.model.extension ? ' +' + field.model.extension : ''}
            </span>
          `;
        }
      },
      hideExpression: () => !this.isReadonlyMode
    },
    {
      fieldGroupClassName: 'grid-row grid-gap-2',
      fieldGroup: [
        {
          className: 'grid-col-3',
          key: 'countryCode',
          type: SdsFormlyTypes.INPUT,
          templateOptions: {
            label: 'Country Code',
            hideOptional: true,
          },
          hideExpression: () => this.isReadonlyMode,
        },
        {
          className: 'grid-col-5',
          key: 'phoneNumber',
          type: SdsFormlyTypes.INPUT,
          templateOptions: {
            label: 'Phone',
            hideOptional: true,
          },
          hideExpression: () => this.isReadonlyMode,
        },
        {
          className: 'grid-col-3',
          key: 'extension',
          type: SdsFormlyTypes.INPUT,
          templateOptions: {
            label: 'Extension Number',
            hideOptional: true,
          },
          hideExpression: () => this.isReadonlyMode,
        },
      ]
    }
  ];

  toggleReadonlyMode() {
    this.isReadonlyMode = !this.isReadonlyMode;
    FormlyUtilsService.setReadonlyMode(this.isReadonlyMode, this.fields);
  }
}
