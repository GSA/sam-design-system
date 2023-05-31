import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { generateConfig, generateStackblitzLink } from 'libs/documentation/src/sandbox/sandbox-utils';
import { FormlyRadioIntroductionModule } from './formly-radio-introduction/formly-radio-introduction.module';
import { FormlyRadioTemplateModule } from './formly-radio-template/formly-radio-template.module';
import { FormlyRadioBasicModule } from './formly-radio-basic/formly-radio-basic.module';
import { FormlyRadioAdvancedModule } from './formly-radio-advanced/formly-radio-advanced.module';
import { FormlyRadioGroupModule } from './formly-radio-group/formly-radio-group.module';
import { FormlyRadioHorizontalModule } from './formly-radio-horizontal/formly-radio-horizontal.module';

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
  title: 'Formly/Radio',
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        SdsFormlyModule,
        FormsModule,
        NoopAnimationsModule,
        FormlyModule.forRoot(),
        FormlyRadioIntroductionModule,
        FormlyRadioBasicModule,
        FormlyRadioTemplateModule,
        FormlyRadioAdvancedModule,
        FormlyRadioGroupModule,
        FormlyRadioHorizontalModule,
      ],
    }),
  ],
} as Meta;

export const Introduction: Story = (args) => ({
  template: '<sds-formly-radio-introduction></sds-formly-radio-introduction>',
  props: args,
});
Introduction.parameters = { options: { showPanel: false } };

export const Basic: Story = (args) => ({
  template: '<sds-formly-radio-basic></sds-formly-radio-basic>',
  props: args,
});
Basic.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/formly/formly-radio/formly-radio-basic',
    'FormlyRadioBasicModule',
    'sds-formly-radio-basic'
  ),
  stackblitzLink: generateStackblitzLink('formly-radio', 'basic'),
};

export const Advanced: Story = (args) => ({
  template: '<sds-formly-radio-advanced></sds-formly-radio-advanced>',
  props: args,
});
Advanced.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/formly/formly-radio/formly-radio-advanced',
    'FormlyRadioAdvancedModule',
    'sds-formly-radio-advanced'
  ),
  stackblitzLink: generateStackblitzLink('formly-radio', 'advanced'),
};

export const Template: Story = (args) => ({
  template: '<sds-formly-radio-template></sds-formly-radio-template>',
  props: args,
});
Template.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/formly/formly-radio/formly-radio-template',
    'FormlyRadioTemplateModule',
    'sds-formly-radio-template'
  ),
  stackblitzLink: generateStackblitzLink('formly-radio', 'template'),
};

export const Group: Story = (args) => ({
  template: '<sds-formly-radio-group></sds-formly-radio-group>',
  props: args,
});
Group.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/formly/formly-radio/formly-radio-group',
    'FormlyRadioGroupModule',
    'sds-formly-radio-group'
  ),
  stackblitzLink: generateStackblitzLink('formly-radio', 'group'),
};

export const Horizontal: Story = (args) => ({
  template: '<sds-formly-radio-horizontal></sds-formly-radio-horizontal>',
  props: args,
});
Horizontal.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/formly/formly-radio/formly-radio-horizontal',
    'FormlyRadioHorizontalModule',
    'sds-formly-radio-horizontal'
  ),
  stackblitzLink: generateStackblitzLink('formly-radio', 'horizontal'),
};

export const __namedExportsOrder = ['Introduction', 'Basic', 'Advanced', 'Template', 'Group', 'Horizontal'];
