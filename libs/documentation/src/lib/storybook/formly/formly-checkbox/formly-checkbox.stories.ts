import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { moduleMetadata, Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { generateConfig, generateStackblitzLink } from 'libs/documentation/src/sandbox/sandbox-utils';
import { FormlyCheckboxIntroductionModule } from './formly-checkbox-introduction/formly-checkbox-introduction.module';
import { FormlyCheckboxTemplateModule } from './formly-checkbox-template/formly-checkbox-template.module';
import { FormlyCheckboxBasicModule } from './formly-checkbox-basic/formly-checkbox-basic.module';
import { FormlyCheckboxNestedModule } from './formly-checkbox-nested/formly-checkbox-nested.module';
import { FormlyCheckboxRequiredModule } from './formly-checkbox-required/formly-checkbox-required.module';
import { FormlyCheckboxTooltipModule } from './formly-checkbox-tooltip/formly-checkbox-tooltip.module';
import { FormlyCheckboxLabelModule } from './formly-checkbox-label/formly-checkbox-label.module';
import { FormlyCheckboxDescriptionModule } from './formly-checkbox-description/formly-checkbox-description.module';

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
  title: 'Formly/Checkbox',
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        SdsFormlyModule,
        FormsModule,
        FormlyModule.forRoot(),
        FormlyCheckboxIntroductionModule,
        FormlyCheckboxBasicModule,
        FormlyCheckboxTemplateModule,
        FormlyCheckboxNestedModule,
        FormlyCheckboxRequiredModule,
        FormlyCheckboxTooltipModule,
        FormlyCheckboxLabelModule,
        FormlyCheckboxDescriptionModule,
      ],
    }),
    applicationConfig({
      providers: [provideAnimations()],
    }),
  ],
} as Meta;

export const Introduction: StoryObj = (args) => ({
  template: '<sds-formly-checkbox-introduction></sds-formly-checkbox-introduction>',
  props: args,
});
Introduction.parameters = { options: { showPanel: false } };

export const Basic: StoryObj = (args) => ({
  template: '<sds-formly-checkbox-basic></sds-formly-checkbox-basic>',
  props: args,
});
Basic.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-checkbox/formly-checkbox-basic',
    'FormlyCheckboxBasicModule',
    'sds-formly-checkbox-basic'
  ),
  stackblitzLink: generateStackblitzLink('formly-checkbox', 'basic'),
};

export const Nested: StoryObj = (args) => ({
  template: '<sds-formly-checkbox-nested></sds-formly-checkbox-nested>',
  props: args,
});
Nested.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-checkbox/formly-checkbox-nested',
    'FormlyCheckboxNestedModule',
    'sds-formly-checkbox-nested'
  ),
  stackblitzLink: generateStackblitzLink('formly-checkbox', 'nested'),
};

export const Template: StoryObj = (args) => ({
  template: '<sds-formly-checkbox-template></sds-formly-checkbox-template>',
  props: args,
});
Template.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-checkbox/formly-checkbox-template',
    'FormlyCheckboxTemplateModule',
    'sds-formly-checkbox-template'
  ),
  stackblitzLink: generateStackblitzLink('formly-checkbox', 'template'),
};

export const Required: StoryObj = (args) => ({
  template: '<sds-formly-checkbox-required></sds-formly-checkbox-required>',
  props: args,
});
Required.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-checkbox/formly-checkbox-required',
    'FormlyCheckboxRequiredModule',
    'sds-formly-checkbox-required'
  ),
  stackblitzLink: generateStackblitzLink('formly-checkbox', 'required'),
};

export const Tooltip: StoryObj = (args) => ({
  template: '<sds-formly-checkbox-tooltip></sds-formly-checkbox-tooltip>',
  props: args,
});
Tooltip.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-checkbox/formly-checkbox-tooltip',
    'FormlyCheckboxTooltipModule',
    'sds-formly-checkbox-tooltip'
  ),
  stackblitzLink: generateStackblitzLink('formly-checkbox', 'tooltip'),
};

export const Label: StoryObj = (args) => ({
  template: '<sds-formly-checkbox-label></sds-formly-checkbox-label>',
  props: args,
});
Label.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-checkbox/formly-checkbox-label',
    'FormlyCheckboxLabelModule',
    'sds-formly-checkbox-label'
  ),
  stackblitzLink: generateStackblitzLink('formly-checkbox', 'label'),
};

export const Description: StoryObj = (args) => ({
  template: '<sds-formly-checkbox-description></sds-formly-checkbox-description>',
  props: args,
});
Description.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-checkbox/formly-checkbox-description',
    'FormlyCheckboxDescriptionModule',
    'sds-formly-checkbox-description'
  ),
  stackblitzLink: generateStackblitzLink('formly-checkbox', 'description'),
};
