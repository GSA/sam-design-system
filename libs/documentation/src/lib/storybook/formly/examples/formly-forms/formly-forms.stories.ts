import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { generateConfig, generateStackblitzLink } from 'libs/documentation/src/sandbox/sandbox-utils';
import { FormlyFormsModule } from './formly-forms.module';

export default {
  title: 'Formly/EXAMPLES/Forms',
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        SdsFormlyModule,
        FormsModule,
        NoopAnimationsModule,
        FormlyModule.forRoot(),
        FormlyFormsModule,
      ],
    }),
  ],
} as Meta;

export const Forms: Story = (args) => ({
  template: '<sds-formly-forms></sds-formly-forms>',
  props: args,
});
Forms.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig('storybook/formly/examples/formly-forms', 'FormlyFormsModule', 'sds-formly-forms'),
};

export const __namedExportsOrder = ['Forms'];
