import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import {} from '@gsa-sam/sam-material-extensions';
import { FormlyModule } from '@ngx-formly/core';
import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { generateConfig, generateStackblitzLink } from 'libs/documentation/src/sandbox/sandbox-utils';

import { FormlyTabsIntroductionModule } from './formly-tabs-introduction/formly-tabs-introduction.module';

import { FormlyTabsBasicModule } from './formly-tabs-basic/formly-tabs-basic.module';
import { FormlyTabsInterceptModule } from './formly-tabs-intercept/formly-tabs-intercept.module';
const disable = {
  table: {
    disable: true,
  },
};
const templateOptions = {
  table: {
    category: 'template-options',
  },
};

export default {
  title: 'Formly/Tabs',
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        SdsFormlyModule,
        FormsModule,
        FormlyModule.forRoot(),
        FormlyTabsIntroductionModule,

        NoopAnimationsModule,

        FormlyTabsInterceptModule,
        FormlyTabsBasicModule,
        FormlyTabsIntroductionModule,
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
  template: '<sds-formly-tabs-introduction></sds-formly-tabs-introduction>',
  props: args,
});
Introduction.parameters = { options: { showPanel: false } };

export const Intercept: Story = (args) => ({
  template: '<sds-formly-tabs-intercept></sds-formly-tabs-intercept>',
  props: args,
});
Intercept.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/formly/formly-tabs/formly-tabs-intercept',
    'FormlyTabsInterceptModule',
    'sds-formly-tabs-intercept'
  ),
  stackblitzLink: generateStackblitzLink('formly-tabs', 'intercept'),
};

export const Basic: Story = (args) => ({
  template: '<sds-formly-tabs-basic></sds-formly-tabs-basic>',
  props: args,
});
Basic.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/formly/formly-tabs/formly-tabs-basic',
    'FormlyTabsBasicModule',
    'sds-formly-tabs-basic'
  ),
  stackblitzLink: generateStackblitzLink('formly-tabs', 'basic'),
};

export const __namedExportsOrder = ['Introduction', 'Basic', 'Intercept'];
