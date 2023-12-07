import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import {} from '@gsa-sam/sam-material-extensions';
import { FormlyModule } from '@ngx-formly/core';
import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { generateConfig, generateStackblitzLink } from 'libs/documentation/src/sandbox/sandbox-utils';
import { FormlyTextAreaIntroductionModule } from './formly-text-area-introduction/formly-text-area-introduction.module';
import { FormlyTextAreaConfigurableModule } from './formly-text-area-configurable/formly-text-area-configurable.module';
import { FormlyTextAreaDescriptionModule } from './formly-text-area-description/formly-text-area-description.module';
import { FormlyTextAreaLabelModule } from './formly-text-area-label/formly-text-area-label.module';
import { FormlyTextAreaPlaceholderModule } from './formly-text-area-placeholder/formly-text-area-placeholder.module';
import { FormlyTextAreaRequiredModule } from './formly-text-area-required/formly-text-area-required.module';
import { FormlyTextAreaMaxlengthModule } from './formly-text-area-maxlength/formly-text-area-maxlength.module';

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
  title: 'Formly/Text Area',
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        SdsFormlyModule,
        FormsModule,
        FormlyModule.forRoot(),
        FormlyTextAreaIntroductionModule,
        FormlyTextAreaConfigurableModule,
        NoopAnimationsModule,
        FormlyTextAreaLabelModule,
        FormlyTextAreaDescriptionModule,
        FormlyTextAreaMaxlengthModule,
        FormlyTextAreaRequiredModule,
        FormlyTextAreaPlaceholderModule,
      ],
    }),
  ],
  argTypes: {
    label: props,
    placeholder: props,
    description: props,
    required: props,
    maxLength: props,
  },
} as Meta;

const formlyConfigFunction = (
  label: string,
  placeholder: string,
  description: string,
  required: boolean,
  maxLength: number
) => {
  return {
    label: label ?? '',
    placeholder: placeholder ?? '',
    description: description ?? '',
    required: required ?? false,
    maxLength: maxLength ?? '',
  };
};
const Template: Story = (args) => {
  const { label, placeholder, description, required, maxLength } = args;
  let config = formlyConfigFunction(label, placeholder, description, required, maxLength);
  return {
    template: '<sds-formly-text-area-configurable [config]="configObj"></sds-formly-text-area-configurable>',
    props: {
      configObj: config,
      ...args,
    },
  };
};

export const Introduction: Story = (args) => ({
  template: '<sds-formly-text-area-introduction></sds-formly-text-area-introduction>',
  props: args,
});
Introduction.parameters = { options: { showPanel: false } };

export const Configurable = Template.bind({});
Configurable.args = {
  label: 'Entity Description',
  placeholder: 'eg: Acme Corporation is a federal contractor.',
  description: 'Enter the description for your entity.',
  required: true,
  maxLength: 50,
};
Configurable.parameters = {
  preview: { disabled: true },
  actions: { disabled: true },
};

export const Description: Story = (args) => ({
  template: '<sds-formly-text-area-description></sds-formly-text-area-description>',
  props: args,
});
Description.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/formly/formly-text-area/formly-text-area-description',
    'FormlyTextAreaDescriptionModule',
    'sds-formly-text-area-description'
  ),
  stackblitzLink: generateStackblitzLink('formly-text-area', 'description'),
};

export const Label: Story = (args) => ({
  template: '<sds-formly-text-area-label></sds-formly-text-area-label>',
  props: args,
});
Label.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/formly/formly-text-area/formly-text-area-label',
    'FormlyTextAreaLabelModule',
    'sds-formly-text-area-label'
  ),
  stackblitzLink: generateStackblitzLink('formly-text-area', 'label'),
};

export const Placeholder: Story = (args) => ({
  template: '<sds-formly-text-area-placeholder></sds-formly-text-area-placeholder>',
  props: args,
});
Placeholder.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/formly/formly-text-area/formly-text-area-placeholder',
    'FormlyTextAreaPlaceholderModule',
    'sds-formly-text-area-placeholder'
  ),
  stackblitzLink: generateStackblitzLink('formly-text-area', 'placeholder'),
};

export const Required: Story = (args) => ({
  template: '<sds-formly-text-area-required></sds-formly-text-area-required>',
  props: args,
});
Required.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/formly/formly-text-area/formly-text-area-required',
    'FormlyTextAreaRequiredModule',
    'sds-formly-text-area-required'
  ),
  stackblitzLink: generateStackblitzLink('formly-text-area', 'required'),
};

export const MaxLength: Story = (args) => ({
  template: '<sds-formly-text-area-maxlength></sds-formly-text-area-maxlength>',
  props: args,
});
MaxLength.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/formly/formly-text-area/formly-text-area-maxlength',
    'FormlyTextAreaMaxlengthModule',
    'sds-formly-text-area-maxlength'
  ),
  stackblitzLink: generateStackblitzLink('formly-text-area', 'maxlength'),
};

export const __namedExportsOrder = [
  'Introduction',
  'Configurable',
  'Description',
  'MaxLength',
  'Label',
  'Placeholder',
  'Required',
];
