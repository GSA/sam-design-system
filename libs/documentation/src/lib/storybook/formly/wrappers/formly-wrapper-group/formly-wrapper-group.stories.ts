import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { generateConfig, generateStackblitzLink } from 'libs/documentation/src/sandbox/sandbox-utils';
import { FormlyWrapperGroupBasicModule } from './formly-wrapper-group-basic/formly-wrapper-group-basic.module';
import { FormlyWrapperGroupIntroductionModule } from './formly-wrapper-group-introduction/formly-wrapper-group-introduction.module';
import { FormlyWrapperGroupOptionsModule } from './formly-wrapper-group-options/formly-wrapper-group-options.module';

export default {
  title: 'Formly/WRAPPERS/Group',
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        SdsFormlyModule,
        FormsModule,
        NoopAnimationsModule,
        FormlyModule.forRoot(),
        FormlyWrapperGroupIntroductionModule,
        FormlyWrapperGroupBasicModule,
        FormlyWrapperGroupOptionsModule,
      ],
    }),
  ],
} as Meta;

export const Introduction: Story = (args) => ({
  template: '<sds-formly-wrapper-group-introduction></sds-formly-wrapper-group-introduction>',
  props: args,
});
Introduction.parameters = { options: { showPanel: false } };

export const Basic: Story = (args) => ({
  template: '<sds-formly-wrapper-group-basic></sds-formly-wrapper-group-basic>',
  props: args,
});
Basic.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/formly/wrappers/formly-wrapper-group/formly-wrapper-group-basic',
    'FormlyWrapperGroupBasicModule',
    'sds-formly-wrapper-group-basic'
  ),
  stackblitzLink: generateStackblitzLink('formly-wrapper-group', 'basic'),
};

export const Options: Story = (args) => ({
  template: '<sds-formly-wrapper-group-options></sds-formly-wrapper-group-options>',
  props: args,
});
Options.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/formly/wrappers/formly-wrapper-group/formly-wrapper-group-options',
    'FormlyWrapperGroupOptionsModule',
    'sds-formly-wrapper-group-template'
  ),
  stackblitzLink: generateStackblitzLink('formly-wrapper-group', 'options'),
};

export const __namedExportsOrder = ['Introduction', 'Basic', 'Options'];
