import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import {} from '@gsa-sam/sam-material-extensions';
import { FormlyModule } from '@ngx-formly/core';
import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { generateConfig, generateStackblitzLink } from 'libs/documentation/src/sandbox/sandbox-utils';
import { FormlyStepperIntroductionModule } from './formly-stepper-introduction/formly-stepper-introduction.module';
import { FormlyStepperBasicModule } from './formly-stepper-basic/formly-stepper-basic.module';
const templateOptions = {
  table: {
    category: 'template-options',
  },
};

export default {
  title: 'Formly/Stepper',
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        SdsFormlyModule,
        FormsModule,
        FormlyModule.forRoot(),
        FormlyStepperIntroductionModule,
        NoopAnimationsModule,
        FormlyStepperBasicModule,
        FormlyStepperIntroductionModule,
      ],
    }),
  ],
  argTypes: {
    label: templateOptions,
    placeholder: templateOptions,
    description: templateOptions,
    required: templateOptions,
    disabled: templateOptions,
    tooltipText: templateOptions,
  },
} as Meta;

export const Introduction: Story = (args) => ({
  template: '<sds-formly-stepper-introduction></sds-formly-stepper-introduction>',
  props: args,
});
Introduction.parameters = { options: { showPanel: false } };

export const Basic: Story = (args) => ({
  template: '<sds-formly-stepper-basic></sds-formly-stepper-basic>',
  props: args,
});
Basic.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/formly/formly-stepper/formly-stepper-basic',
    'FormlyStepperBasicModule',
    'sds-formly-stepper-basic'
  ),
  stackblitzLink: generateStackblitzLink('formly-stepper', 'basic'),
};

export const __namedExportsOrder = ['Introduction', 'Basic'];
