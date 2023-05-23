import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { generateConfig, generateStackblitzLink } from 'libs/documentation/src/sandbox/sandbox-utils';
import { FormlyWrapperDescriptionIntroductionModule } from './formly-wrapper-description-introduction/formly-wrapper-description-introduction.module';
import { FormlyWrapperDescriptionOptionsModule } from './formly-wrapper-description-options/formly-wrapper-description-options.module';
import { FormlyWrapperDescriptionBasicModule } from './formly-wrapper-description-basic/formly-wrapper-description-basic.module';

export default {
  title: 'Formly/Wrapper/Description Wrapper',
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        SdsFormlyModule,
        FormsModule,
        NoopAnimationsModule,
        FormlyModule.forRoot(),
        FormlyWrapperDescriptionIntroductionModule,
        FormlyWrapperDescriptionBasicModule,
        FormlyWrapperDescriptionOptionsModule,
      ],
    }),
  ],
} as Meta;

export const Introduction: Story = (args) => ({
  template: '<sds-formly-wrapper-description-introduction></sds-formly-wrapper-description-introduction>',
  props: args,
});
Introduction.parameters = { options: { showPanel: false } };

export const Basic: Story = (args) => ({
  template: '<sds-formly-wrapper-description-basic></sds-formly-wrapper-description-basic>',
  props: args,
});
Basic.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/formly/wrappers/formly-wrapper-description/formly-wrapper-description-basic',
    'FormlyWrapperDescriptionBasicModule',
    'sds-formly-wrapper-description-basic'
  ),
  stackblitzLink: generateStackblitzLink('formly-wrapper-description', 'basic'),
};

export const Options: Story = (args) => ({
  template: '<sds-formly-wrapper-description-options></sds-formly-wrapper-description-options>',
  props: args,
});
Options.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/formly/wrappers/formly-wrapper-description/formly-wrapper-description-options',
    'FormlyWrapperDescriptionOptionsModule',
    'sds-formly-wrapper-description-template'
  ),
  stackblitzLink: generateStackblitzLink('formly-wrapper-description', 'options'),
};

export const __namedExportsOrder = ['Introduction', 'Basic', 'Options'];
