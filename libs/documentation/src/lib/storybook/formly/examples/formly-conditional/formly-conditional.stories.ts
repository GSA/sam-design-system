import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { generateConfig, generateStackblitzLink } from 'libs/documentation/src/sandbox/sandbox-utils';
import { FormlyConditionalModule } from './formly-conditional.module';

export default {
  title: 'Formly/EXAMPLES/Conditional ',
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        SdsFormlyModule,
        FormsModule,
        NoopAnimationsModule,
        FormlyModule.forRoot(),
        FormlyConditionalModule,
      ],
    }),
  ],
} as Meta;

export const Conditional: Story = (args) => ({
  template: '<sds-formly-conditional></sds-formly-conditional>',
  props: args,
});
Conditional.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/formly/examples/formly-conditional',
    'FormlyConditionalModule',
    'sds-formly-conditional'
  ),
};

export const __namedExportsOrder = ['Conditional'];
