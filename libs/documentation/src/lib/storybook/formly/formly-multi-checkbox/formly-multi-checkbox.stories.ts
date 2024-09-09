import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { moduleMetadata, Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { generateConfig, generateStackblitzLink } from 'libs/documentation/src/sandbox/sandbox-utils';
import { FormlyMultiCheckboxIntroductionModule } from './formly-multi-checkbox-introduction/formly-multi-checkbox-introduction.module';
import { FormlyMultiCheckboxBasicModule } from './formly-multi-checkbox-basic/formly-multi-checkbox-basic.module';
import { FormlyMultiCheckboxNestedModule } from './formly-multi-checkbox-nested/formly-multi-checkbox-nested.module';
import { FormlyMultiCheckboxGroupModule } from './formly-multi-checkbox-group/formly-multi-checkbox-group.module';
import { FormlyMultiCheckboxExpandModule } from './formly-multi-checkbox-expand/formly-multi-checkbox-expand.module';
import { importProvidersFrom } from '@angular/core';

export default {
  title: 'Formly/Multi Checkbox',
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        SdsFormlyModule,
        FormsModule,
        FormlyMultiCheckboxIntroductionModule,
        FormlyMultiCheckboxBasicModule,
        FormlyMultiCheckboxNestedModule,
        FormlyMultiCheckboxGroupModule,
        FormlyMultiCheckboxExpandModule,
      ],
    }),
    applicationConfig({
      providers: [provideAnimations(), importProvidersFrom(FormlyModule.forRoot())],
    }),
  ],
} as Meta;

export const Introduction: StoryObj = (args) => ({
  template: '<sds-formly-multi-checkbox-introduction></sds-formly-multi-checkbox-introduction>',
  props: args,
});
Introduction.parameters = {
  controls: { disable: true },
  actions: { disable: true },
  sdsCodePreview: { disable: true },
};

export const Basic: StoryObj = (args) => ({
  template: '<sds-formly-multi-checkbox-basic></sds-formly-multi-checkbox-basic>',
  props: args,
});
Basic.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-multi-checkbox/formly-multi-checkbox-basic',
    'FormlyMultiCheckboxBasicModule',
    'sds-formly-multi-checkbox-basic'
  ),
  stackblitzLink: generateStackblitzLink('formly-multi-checkbox', 'basic'),
};

export const Nested: StoryObj = (args) => ({
  template: '<sds-formly-multi-checkbox-nested></sds-formly-multi-checkbox-nested>',
  props: args,
});
Nested.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-multi-checkbox/formly-multi-checkbox-nested',
    'FormlyMultiCheckboxNestedModule',
    'sds-formly-multi-checkbox-nested'
  ),
  stackblitzLink: generateStackblitzLink('formly-multi-checkbox', 'nested'),
};

export const Group: StoryObj = (args) => ({
  template: '<sds-formly-multi-checkbox-group></sds-formly-multi-checkbox-group>',
  props: args,
});
Group.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-multi-checkbox/formly-multi-checkbox-group',
    'FormlyMultiCheckboxGroupModule',
    'sds-formly-multi-checkbox-group'
  ),
  stackblitzLink: generateStackblitzLink('formly-multi-checkbox', 'group'),
};

export const Expand: StoryObj = (args) => ({
  template: '<sds-formly-multi-checkbox-expand></sds-formly-multi-checkbox-expand>',
  props: args,
});
Expand.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-multi-checkbox/formly-multi-checkbox-expand',
    'FormlyMultiCheckboxExpandModule',
    'sds-formly-multi-checkbox-expand'
  ),
  stackblitzLink: generateStackblitzLink('formly-multi-checkbox', 'expand'),
};
