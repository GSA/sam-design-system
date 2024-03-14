import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import {} from '@gsa-sam/sam-material-extensions';
import { FormlyModule } from '@ngx-formly/core';
import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { generateConfig, generateStackblitzLink } from 'libs/documentation/src/sandbox/sandbox-utils';
import { FormlyInputAffixModule } from './formly-input-affix/formly-input-affix.module';
import { FormlyInputConfigurableModule } from './formly-input-configurable/formly-input-configurable.module';
import { FormlyInputDescriptionModule } from './formly-input-description/formly-input-description.module';
import { FormlyInputDisabledModule } from './formly-input-disabled/formly-input-disabled.module';
import { FormlyInputIntroductionModule } from './formly-input-introduction/formly-input-introduction.module';
import { FormlyInputLabelModule } from './formly-input-label/formly-input-label.module';
import { FormlyInputPlaceholderModule } from './formly-input-placeholder/formly-input-placeholder.module';
import { FormlyInputRequiredModule } from './formly-input-required/formly-input-required.module';
import { FormlyInputTooltipTextModule } from './formly-input-tooltip-text/formly-input-tooltip-text.module';
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
  title: 'Formly/Input',
  // component: SdsButtonGroupComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        SdsFormlyModule,
        FormsModule,
        FormlyModule.forRoot(),
        FormlyInputIntroductionModule,
        FormlyInputConfigurableModule,
        NoopAnimationsModule,
        FormlyInputLabelModule,
        FormlyInputDescriptionModule,
        FormlyInputDisabledModule,
        FormlyInputTooltipTextModule,
        FormlyInputRequiredModule,
        FormlyInputPlaceholderModule,
        FormlyInputIntroductionModule,
        FormlyInputAffixModule,
      ],
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
// const Template: StoryObj = (args) => {
//   const { label, placeholder, description, required, disabled, tooltipText } = args;
//   let config = formlyConfigFunction(label, placeholder, description, required, disabled, tooltipText);
//   return {
//     template: '<sds-formly-input-configurable [config]="configObj"></sds-formly-input-configurable>',
//     props: {
//       configObj: config,
//       ...args,
//     },
//   };
// };

export const Introduction: StoryObj = (args) => ({
  template: '<sds-formly-input-introduction></sds-formly-input-introduction>',
  props: args,
});
Introduction.parameters = { options: { showPanel: false } };

// export const Configurable = Template.bind({});
// Configurable.args = {
//   label: 'Label',
//   placeholder: 'Placeholder',
//   description: 'Description',
//   required: false,
//   disabled: false,
//   tooltipText: '',
// };
// Configurable.parameters = {
//   sdsCodePreview: { disable: true },
// };

export const Label: StoryObj = (args) => ({
  template: '<sds-formly-input-label></sds-formly-input-label>',
  props: args,
});
Label.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-input/formly-input-label',
    'FormlyInputLabelModule',
    'sds-formly-input-label'
  ),
  stackblitzLink: generateStackblitzLink('formly-input', 'input-label'),
};
export const TooltipText: StoryObj = (args) => ({
  template: '<sds-formly-input-tooltip-text></sds-formly-input-tooltip-text>',
  props: args,
});
TooltipText.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-input/formly-input-tooltip-text',
    'FormlyInputTooltipTextModule',
    'sds-formly-input-tooltip-text'
  ),
  stackblitzLink: generateStackblitzLink('formly-input', 'tooltip-text'),
};
export const Description: StoryObj = (args) => ({
  template: '<sds-formly-input-description></sds-formly-input-description>',
  props: args,
});
Description.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-input/formly-input-description',
    'FormlyInputDescriptionModule',
    'sds-formly-input-description'
  ),
  stackblitzLink: generateStackblitzLink('formly-input', 'description'),
};

export const Disabled: StoryObj = (args) => ({
  template: '<sds-formly-input-disabled></sds-formly-input-disabled>',
  props: args,
});
Disabled.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-input/formly-input-disabled',
    'FormlyInputDisabledModule',
    'sds-formly-input-disabled'
  ),
  stackblitzLink: generateStackblitzLink('formly-input', 'disabled'),
};

export const Required: StoryObj = (args) => ({
  template: '<sds-formly-input-required></sds-formly-input-required>',
  props: args,
});
Required.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-input/formly-input-required',
    'FormlyInputRequiredModule',
    'sds-formly-input-required'
  ),
  stackblitzLink: generateStackblitzLink('formly-input', 'required'),
};

export const Placeholder: StoryObj = (args) => ({
  template: '<sds-formly-input-placeholder></sds-formly-input-placeholder>',
  props: args,
});
Placeholder.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-input/formly-input-placeholder',
    'FormlyInputPlaceholderModule',
    'sds-formly-input-placeholder'
  ),
  stackblitzLink: generateStackblitzLink('formly-input', 'placeholder'),
};

export const Affix: StoryObj = (args) => ({
  template: '<sds-formly-input-affix></sds-formly-input-affix>',
  props: args,
});
Affix.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-input/formly-input-affix',
    'FormlyInputAffixModule',
    'sds-formly-input-affix'
  ),
  stackblitzLink: generateStackblitzLink('formly-input', 'affix'),
};

// export const __namedExportsOrder = [
//   'Introduction',
//   'Configurable',
//   'Affix',
//   'Description',
//   'Disabled',
//   'Label',
//   'Placeholder',
//   'Required',
//   'TooltipText',
// ];
