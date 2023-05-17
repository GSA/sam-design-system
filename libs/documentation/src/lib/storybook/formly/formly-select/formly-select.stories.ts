import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import {} from '@gsa-sam/sam-material-extensions';
import { FormlyModule } from '@ngx-formly/core';
import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { generateConfig, generateStackblitzLink } from 'libs/documentation/src/sandbox/sandbox-utils';
import { FormlySelectIntroductionModule } from './formly-select-introduction/formly-select-introduction.module';
import { FormlySelectConfigurableModule } from './formly-select-configurable/formly-select-configurable.module';
import { FormlySelectLabelModule } from './formly-select-label/formly-select-label.module';
import { FormlySelectDescriptionModule } from './formly-select-description/formly-select-description.module';
import { FormlySelectRequiredModule } from './formly-select-required/formly-select-required.module';
import { FormlySelectOptionsModule } from './formly-select-options/formly-select-options.module';

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
  title: 'Formly/Select',
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        SdsFormlyModule,
        FormsModule,
        FormlyModule.forRoot(),
        FormlySelectIntroductionModule,
        FormlySelectConfigurableModule,
        NoopAnimationsModule,
        FormlySelectLabelModule,
        FormlySelectDescriptionModule,
        FormlySelectRequiredModule,
        FormlySelectOptionsModule,
      ],
    }),
  ],
  argTypes: {
    label: templateOptions,
    description: templateOptions,
    required: templateOptions,
    options: { control: { type: 'array' }, table: { category: 'template-options' } },
  },
} as Meta;

const formlyConfigFunction = (label: string, description: string, required: boolean, options: string) => {
  return {
    label: label ?? '',
    description: description ?? '',
    required: required ?? false,
    options: options ?? [],
  };
};

const Template: Story = (args) => {
  const { label, placeholder, description, options } = args;
  let config = formlyConfigFunction(label, placeholder, description, options);
  return {
    template: '<sds-formly-select-configurable [config]="configObj"></sds-formly-select-configurable>',
    props: {
      configObj: config,
      ...args,
    },
  };
};

export const Introduction: Story = (args) => ({
  template: '<sds-formly-select-introduction></sds-formly-select-introduction>',
  props: args,
});
Introduction.parameters = { options: { showPanel: false } };

export const Configurable = Template.bind({});
Configurable.args = {
  label: 'Entity Type',
  description: 'Select the entinty type.',
  required: true,
  options: [
    'Contract Opportunities',
    'Entity Information',
    'Assistance Listings',
    'Contract Data',
    'Federal Hierarchy',
    'Wage Determination',
  ],
};
Configurable.parameters = {
  preview: { disabled: true },
  actions: { disabled: true },
};

export const Label: Story = (args) => ({
  template: '<sds-formly-select-label></sds-formly-select-label>',
  props: args,
});
Label.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/formly/formly-select/formly-select-label',
    'FormlySelectLabelModule',
    'sds-formly-select-label'
  ),
  stackblitzLink: generateStackblitzLink('formly-select', 'label'),
};

export const Description: Story = (args) => ({
  template: '<sds-formly-select-description></sds-formly-select-description>',
  props: args,
});
Description.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/formly/formly-select/formly-select-description',
    'FormlySelectDescriptionModule',
    'sds-formly-select-description'
  ),
  stackblitzLink: generateStackblitzLink('formly-select', 'description'),
};

export const Required: Story = (args) => ({
  template: '<sds-formly-select-required></sds-formly-select-required>',
  props: args,
});
Required.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/formly/formly-select/formly-select-required',
    'FormlySelectRequiredModule',
    'sds-formly-select-required'
  ),
  stackblitzLink: generateStackblitzLink('formly-select', 'required'),
};

export const Options: Story = (args) => ({
  template: '<sds-formly-select-options></sds-formly-select-options>',
  props: args,
});
Options.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/formly/formly-select/formly-select-options',
    'FormlySelectOptionsModule',
    'sds-formly-select-options'
  ),
  stackblitzLink: generateStackblitzLink('formly-select', 'options'),
};

export const __namedExportsOrder = ['Introduction', 'Configurable', 'Description', 'Label', 'Required', 'Options'];
