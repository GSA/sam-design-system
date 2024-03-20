import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { generateConfig, generateStackblitzLink } from 'libs/documentation/src/sandbox/sandbox-utils';
import { FormlySelectIntroductionModule } from './formly-select-introduction/formly-select-introduction.module';
import { FormlySelectConfigurableModule } from './formly-select-configurable/formly-select-configurable.module';
import { FormlySelectLabelModule } from './formly-select-label/formly-select-label.module';
import { FormlySelectDescriptionModule } from './formly-select-description/formly-select-description.module';
import { FormlySelectRequiredModule } from './formly-select-required/formly-select-required.module';
import { FormlySelectOptionsModule } from './formly-select-options/formly-select-options.module';

const props = {
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
        NoopAnimationsModule,
        FormlyModule.forRoot(),
        FormlySelectIntroductionModule,
        FormlySelectConfigurableModule,
        FormlySelectLabelModule,
        FormlySelectDescriptionModule,
        FormlySelectRequiredModule,
        FormlySelectOptionsModule,
      ],
    }),
  ],
  argTypes: {
    label: props,
    description: props,
    required: props,
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

export const Introduction: StoryObj = (args) => ({
  template: '<sds-formly-select-introduction></sds-formly-select-introduction>',
  props: args,
});
Introduction.parameters = { options: { showPanel: false } };

export const Configurable = (args) => {
  const { label, description, required, options } = args;
  let config = formlyConfigFunction(label, description, required, options);
  return {
    template: '<sds-formly-select-configurable [config]="configObj"></sds-formly-select-configurable>',
    props: {
      configObj: config,
      ...args,
    },
  };
};
Configurable.args = {
  label: 'Entity Type',
  description: 'Select the entity type.',
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
  sdsCodePreview: { disable: true },
  actions: { disable: true },
};

export const Label: StoryObj = (args) => ({
  template: '<sds-formly-select-label></sds-formly-select-label>',
  props: args,
});
Label.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-select/formly-select-label',
    'FormlySelectLabelModule',
    'sds-formly-select-label'
  ),
  stackblitzLink: generateStackblitzLink('formly-select', 'label'),
};

export const Description: StoryObj = (args) => ({
  template: '<sds-formly-select-description></sds-formly-select-description>',
  props: args,
});
Description.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-select/formly-select-description',
    'FormlySelectDescriptionModule',
    'sds-formly-select-description'
  ),
  stackblitzLink: generateStackblitzLink('formly-select', 'description'),
};

export const Required: StoryObj = (args) => ({
  template: '<sds-formly-select-required></sds-formly-select-required>',
  props: args,
});
Required.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-select/formly-select-required',
    'FormlySelectRequiredModule',
    'sds-formly-select-required'
  ),
  stackblitzLink: generateStackblitzLink('formly-select', 'required'),
};

export const Options: StoryObj = (args) => ({
  template: '<sds-formly-select-options></sds-formly-select-options>',
  props: args,
});
Options.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-select/formly-select-options',
    'FormlySelectOptionsModule',
    'sds-formly-select-options'
  ),
  stackblitzLink: generateStackblitzLink('formly-select', 'options'),
};

// export const __namedExportsOrder = ['Introduction', 'Configurable', 'Description', 'Label', 'Required', 'Options'];
