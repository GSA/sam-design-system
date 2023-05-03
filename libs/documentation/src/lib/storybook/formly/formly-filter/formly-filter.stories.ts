import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import {} from '@gsa-sam/sam-material-extensions';
import { FormlyModule } from '@ngx-formly/core';
import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { generateConfig, generateStackblitzLink } from 'libs/documentation/src/sandbox/sandbox-utils';
import { FormlyFilterConfigurableModule } from './formly-filter-configurable/formly-filter-configurable.module';
import { FormlyFilterDescriptionModule } from './formly-filter-description/formly-filter-description.module';
import { FormlyFilterDisabledModule } from './formly-filter-disabled/formly-filter-disabled.module';
import { FormlyFilterIntroductionModule } from './formly-filter-introduction/formly-filter-introduction.module';
import { FormlyFilterLabelModule } from './formly-filter-label/formly-filter-label.module';
import { FormlyFilterPlaceholderModule } from './formly-filter-placeholder/formly-filter-placeholder.module';
import { FormlyFilterRequiredModule } from './formly-filter-required/formly-filter-required.module';
import { FormlyFilterTooltipTextModule } from './formly-filter-tooltip-text/formly-filter-tooltip-text.module';
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
  title: 'Formly/Filter',
  // component: SdsButtonGroupComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        SdsFormlyModule,
        FormsModule,
        FormlyModule.forRoot(),
        FormlyFilterIntroductionModule,
        FormlyFilterConfigurableModule,
        NoopAnimationsModule,
        FormlyFilterLabelModule,
        FormlyFilterDescriptionModule,
        FormlyFilterDisabledModule,
        FormlyFilterTooltipTextModule,
        FormlyFilterRequiredModule,
        FormlyFilterPlaceholderModule,
        FormlyFilterIntroductionModule,
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

const formlyConfigFunction = (
  label: string,
  placeholder: string,
  description: string,
  required: boolean,
  disabled: boolean,
  tooltipText: string
) => {
  return {
    label: label ?? '',
    placeholder: placeholder ?? '',
    description: description ?? '',
    required: required ?? false,
    disabled: disabled ?? false,
    tooltipText: tooltipText ?? '',
  };
};
const Template: Story = (args) => {
  const { label, placeholder, description, required, disabled, tooltipText } = args;
  let config = formlyConfigFunction(label, placeholder, description, required, disabled, tooltipText);
  return {
    template: '<sds-formly-filter-configurable [config]="configObj"></sds-formly-filter-configurable>',
    props: {
      configObj: config,
      ...args,
    },
  };
};

export const Introduction: Story = (args) => ({
  template: '<sds-formly-filter-introduction></sds-formly-filter-introduction>',
  props: args,
});
Introduction.parameters = { options: { showPanel: false } };

export const Configurable = Template.bind({});
Configurable.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  description: 'Description',
  required: false,
  disabled: false,
  tooltipText: '',
};
Configurable.parameters = {
  preview: { disabled: true },
};

export const Label: Story = (args) => ({
  template: '<sds-formly-filter-label></sds-formly-filter-label>',
  props: args,
});
Label.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/formly/formly-filter/formly-filter-label',
    'FormlyFilterLabelModule',
    'sds-formly-filter-label'
  ),
  stackblitzLink: generateStackblitzLink('formly-filter', 'filter-label'),
};
export const TooltipText: Story = (args) => ({
  template: '<sds-formly-filter-tooltip-text></sds-formly-filter-tooltip-text>',
  props: args,
});
TooltipText.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/formly/formly-filter/formly-filter-tooltip-text',
    'FormlyFilterTooltipTextModule',
    'sds-formly-filter-tooltip-text'
  ),
  stackblitzLink: generateStackblitzLink('formly-filter', 'tooltip-text'),
};
export const Description: Story = (args) => ({
  template: '<sds-formly-filter-description></sds-formly-filter-description>',
  props: args,
});
Description.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/formly/formly-filter/formly-filter-description',
    'FormlyFilterDescriptionModule',
    'sds-formly-filter-description'
  ),
  stackblitzLink: generateStackblitzLink('formly-filter', 'description'),
};

export const Disabled: Story = (args) => ({
  template: '<sds-formly-filter-disabled></sds-formly-filter-disabled>',
  props: args,
});
Disabled.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/formly/formly-filter/formly-filter-disabled',
    'FormlyFilterDisabledModule',
    'sds-formly-filter-disabled'
  ),
  stackblitzLink: generateStackblitzLink('formly-filter', 'disabled'),
};

export const Required: Story = (args) => ({
  template: '<sds-formly-filter-required></sds-formly-filter-required>',
  props: args,
});
Required.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/formly/formly-filter/formly-filter-required',
    'FormlyFilterRequiredModule',
    'sds-formly-filter-required'
  ),
  stackblitzLink: generateStackblitzLink('formly-filter', 'required'),
};

export const Placeholder: Story = (args) => ({
  template: '<sds-formly-filter-placeholder></sds-formly-filter-placeholder>',
  props: args,
});
Placeholder.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/formly/formly-filter/formly-filter-placeholder',
    'FormlyFilterPlaceholderModule',
    'sds-formly-filter-placeholder'
  ),
  stackblitzLink: generateStackblitzLink('formly-filter', 'placeholder'),
};

export const __namedExportsOrder = [
  'Introduction',
  'Configurable',
  'Description',
  'Disabled',
  'Label',
  'Placeholder',
  'Required',
  'TooltipText',
];
