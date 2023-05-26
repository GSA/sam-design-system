import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { generateConfig, generateStackblitzLink } from 'libs/documentation/src/sandbox/sandbox-utils';
import { FormlyWrapperLabelBasicModule } from './formly-wrapper-label-basic/formly-wrapper-label-basic.module';
import { FormlyWrapperLabelIntroductionModule } from './formly-wrapper-label-introduction/formly-wrapper-label-introduction.module';
import { FormlyWrapperLabelOptionsModule } from './formly-wrapper-label-options/formly-wrapper-label-options.module';

export default {
  title: 'Formly/WRAPPERS/Label',
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        SdsFormlyModule,
        FormsModule,
        NoopAnimationsModule,
        FormlyModule.forRoot(),
        FormlyWrapperLabelIntroductionModule,
        FormlyWrapperLabelBasicModule,
        FormlyWrapperLabelOptionsModule,
      ],
    }),
  ],
} as Meta;

export const Introduction: Story = (args) => ({
  template: '<sds-formly-wrapper-label-introduction></sds-formly-wrapper-label-introduction>',
  props: args,
});
Introduction.parameters = { options: { showPanel: false } };

export const Basic: Story = (args) => ({
  template: '<sds-formly-wrapper-label-basic></sds-formly-wrapper-label-basic>',
  props: args,
});
Basic.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/formly/wrappers/formly-wrapper-label/formly-wrapper-label-basic',
    'FormlyWrapperLabelBasicModule',
    'sds-formly-wrapper-label-basic'
  ),
  stackblitzLink: generateStackblitzLink('formly-wrapper-label', 'basic'),
};

export const Options: Story = (args) => ({
  template: '<sds-formly-wrapper-label-options></sds-formly-wrapper-label-options>',
  props: args,
});
Options.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/formly/wrappers/formly-wrapper-label/formly-wrapper-label-options',
    'FormlyWrapperLabelOptionsModule',
    'sds-formly-wrapper-label-template'
  ),
  stackblitzLink: generateStackblitzLink('formly-wrapper-label', 'options'),
};

export const __namedExportsOrder = ['Introduction', 'Basic', 'Options'];
