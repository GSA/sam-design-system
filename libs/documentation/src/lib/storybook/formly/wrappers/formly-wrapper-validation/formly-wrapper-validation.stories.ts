import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { generateConfig, generateStackblitzLink } from 'libs/documentation/src/sandbox/sandbox-utils';
import { FormlyWrapperValidationIntroductionModule } from './formly-wrapper-validation-introduction/formly-wrapper-validation-introduction.module';
import { FormlyWrapperValidationOptionsModule } from './formly-wrapper-validation-options/formly-wrapper-validation-options.module';
import { FormlyWrapperValidationBasicModule } from './formly-wrapper-validation-basic/formly-wrapper-validation-basic.module';

export default {
  title: 'Formly/Wrapper/Validation',
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        SdsFormlyModule,
        FormsModule,
        NoopAnimationsModule,
        FormlyModule.forRoot(),
        FormlyWrapperValidationIntroductionModule,
        FormlyWrapperValidationBasicModule,
        FormlyWrapperValidationOptionsModule,
      ],
    }),
  ],
} as Meta;

export const Introduction: Story = (args) => ({
  template: '<sds-formly-wrapper-validation-introduction></sds-formly-wrapper-validation-introduction>',
  props: args,
});
Introduction.parameters = { options: { showPanel: false } };

export const Basic: Story = (args) => ({
  template: '<sds-formly-wrapper-validation-basic></sds-formly-wrapper-validation-basic>',
  props: args,
});
Basic.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/formly/wrappers/formly-wrapper-validation/formly-wrapper-validation-basic',
    'FormlyWrapperValidationBasicModule',
    'sds-formly-wrapper-validation-basic'
  ),
  stackblitzLink: generateStackblitzLink('formly-wrapper-validation', 'basic'),
};

export const __namedExportsOrder = ['Introduction', 'Basic'];
