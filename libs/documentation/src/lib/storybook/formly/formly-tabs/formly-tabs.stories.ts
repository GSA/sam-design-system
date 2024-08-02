import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { moduleMetadata, Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { generateConfig, generateStackblitzLink } from 'libs/documentation/src/sandbox/sandbox-utils';

import { FormlyTabsIntroductionModule } from './formly-tabs-introduction/formly-tabs-introduction.module';

import { FormlyTabsBasicModule } from './formly-tabs-basic/formly-tabs-basic.module';
import { FormlyTabsInterceptModule } from './formly-tabs-intercept/formly-tabs-intercept.module';
import { importProvidersFrom } from '@angular/core';
const disable = {
  table: {
    disable: true,
  },
};
const props = {
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
        FormlyTabsIntroductionModule,
        FormlyTabsInterceptModule,
        FormlyTabsBasicModule,
        FormlyTabsIntroductionModule,
      ],
    }),
    applicationConfig({
      providers: [provideAnimations(), importProvidersFrom(FormlyModule.forRoot())],
    }),
  ],
  argTypes: {
    label: props,
    placeholder: props,
    description: props,
    required: props,
    disabled: props,
    tooltipText: props,
  },
} as Meta;

export const Introduction: StoryObj = (args) => ({
  template: '<sds-formly-tabs-introduction></sds-formly-tabs-introduction>',
  props: args,
});
Introduction.parameters = {
  controls: { disable: true },
  actions: { disable: true },
  sdsCodePreview: { disable: true },
};

export const Intercept: StoryObj = (args) => ({
  template: '<sds-formly-tabs-intercept></sds-formly-tabs-intercept>',
  props: args,
});
Intercept.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-tabs/formly-tabs-intercept',
    'FormlyTabsInterceptModule',
    'sds-formly-tabs-intercept',
  ),
  stackblitzLink: generateStackblitzLink('formly-tabs', 'intercept'),
};

export const Basic: StoryObj = (args) => ({
  template: '<sds-formly-tabs-basic></sds-formly-tabs-basic>',
  props: args,
});
Basic.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-tabs/formly-tabs-basic',
    'FormlyTabsBasicModule',
    'sds-formly-tabs-basic',
  ),
  stackblitzLink: generateStackblitzLink('formly-tabs', 'basic'),
};
