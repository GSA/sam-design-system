import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { moduleMetadata, Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { generateConfig, generateStackblitzLink } from 'libs/documentation/src/sandbox/sandbox-utils';
import { FormlyTextAreaIntroductionModule } from './formly-text-area-introduction/formly-text-area-introduction.module';
import { FormlyTextAreaConfigurableModule } from './formly-text-area-configurable/formly-text-area-configurable.module';
import { FormlyTextAreaDescriptionModule } from './formly-text-area-description/formly-text-area-description.module';
import { FormlyTextAreaLabelModule } from './formly-text-area-label/formly-text-area-label.module';
import { FormlyTextAreaPlaceholderModule } from './formly-text-area-placeholder/formly-text-area-placeholder.module';
import { FormlyTextAreaRequiredModule } from './formly-text-area-required/formly-text-area-required.module';
import { FormlyTextAreaSizesModule } from './formly-text-area-sizes/formly-text-area-sizes.module';
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
  title: 'Formly/Text Area',
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        SdsFormlyModule,
        FormsModule,
        FormlyTextAreaIntroductionModule,
        FormlyTextAreaConfigurableModule,
        FormlyTextAreaLabelModule,
        FormlyTextAreaDescriptionModule,
        FormlyTextAreaSizesModule,
        FormlyTextAreaRequiredModule,
        FormlyTextAreaPlaceholderModule,
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
    maxLength: props,
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
  },
} as Meta;

const formlyConfigFunction = (
  label: string,
  placeholder: string,
  description: string,
  required: boolean,
  maxLength: number,
  size: string,
) => {
  return {
    label: label ?? '',
    placeholder: placeholder ?? '',
    description: description ?? '',
    required: required ?? false,
    maxLength: maxLength ?? '',
    size: size ?? '',
  };
};

export const Introduction: StoryObj = (args) => ({
  template: '<sds-formly-text-area-introduction></sds-formly-text-area-introduction>',
  props: args,
});
Introduction.parameters = {
  controls: { disable: true },
  actions: { disable: true },
  sdsCodePreview: { disable: true },
};

export const Configurable = (args) => {
  const { label, placeholder, description, required, maxLength, size } = args;
  let config = formlyConfigFunction(label, placeholder, description, required, maxLength, size);
  return {
    template: '<sds-formly-text-area-configurable [config]="configObj"></sds-formly-text-area-configurable>',
    props: {
      configObj: config,
      ...args,
    },
  };
};
Configurable.args = {
  label: 'Entity Description',
  placeholder: 'eg: Acme Corporation is a federal contractor.',
  description: 'Enter the description for your entity.',
  required: true,
  maxLength: 50,
  size: 'small',
};
Configurable.parameters = {
  sdsCodePreview: { disable: true },
  actions: { disable: true },
};

export const Description: StoryObj = (args) => ({
  template: '<sds-formly-text-area-description></sds-formly-text-area-description>',
  props: args,
});
Description.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-text-area/formly-text-area-description',
    'FormlyTextAreaDescriptionModule',
    'sds-formly-text-area-description',
  ),
  stackblitzLink: generateStackblitzLink('formly-text-area', 'description'),
};

export const Label: StoryObj = (args) => ({
  template: '<sds-formly-text-area-label></sds-formly-text-area-label>',
  props: args,
});
Label.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-text-area/formly-text-area-label',
    'FormlyTextAreaLabelModule',
    'sds-formly-text-area-label',
  ),
  stackblitzLink: generateStackblitzLink('formly-text-area', 'label'),
};

export const Placeholder: StoryObj = (args) => ({
  template: '<sds-formly-text-area-placeholder></sds-formly-text-area-placeholder>',
  props: args,
});
Placeholder.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-text-area/formly-text-area-placeholder',
    'FormlyTextAreaPlaceholderModule',
    'sds-formly-text-area-placeholder',
  ),
  stackblitzLink: generateStackblitzLink('formly-text-area', 'placeholder'),
};

export const Required: StoryObj = (args) => ({
  template: '<sds-formly-text-area-required></sds-formly-text-area-required>',
  props: args,
});
Required.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-text-area/formly-text-area-required',
    'FormlyTextAreaRequiredModule',
    'sds-formly-text-area-required',
  ),
  stackblitzLink: generateStackblitzLink('formly-text-area', 'required'),
};

export const Sizes: StoryObj = (args) => ({
  template: '<sds-formly-text-area-sizes></sds-formly-text-area-sizes>',
  props: args,
});
Sizes.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-text-area/formly-text-area-sizes',
    'FormlyTextAreaSizesModule',
    'sds-formly-text-area-sizes',
  ),
  stackblitzLink: generateStackblitzLink('formly-text-area', 'sizes'),
};
