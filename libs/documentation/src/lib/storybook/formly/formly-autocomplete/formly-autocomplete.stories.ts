import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { generateConfig, generateStackblitzLink } from 'libs/documentation/src/sandbox/sandbox-utils';
import { FormlyAutocompleteIntroductionModule } from './formly-autocomplete-introduction/formly-autocomplete-introduction.module';
import { FormlyAutocompleteCountModule } from './formly-autocomplete-count/formly-autocomplete-count.module';
import { FormlyAutocompleteBasicModule } from './formly-autocomplete-basic/formly-autocomplete-basic.module';
import { FormlyAutocompleteDisableModule } from './formly-autocomplete-disable/formly-autocomplete-disable.module';
import { FormlyAutocompleteFreetextModule } from './formly-autocomplete-free-text/formly-autocomplete-free-text.module';
import { FormlyAutocompleteInputModule } from './formly-autocomplete-input/formly-autocomplete-input.module';
import { FormlyAutocompleteTagModule } from './formly-autocomplete-tag/formly-autocomplete-tag.module';
import { FormlyAutocompleteValidationModule } from './formly-autocomplete-validation/formly-autocomplete-validation.module';

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
  title: 'Formly/Autocomplete',
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        SdsFormlyModule,
        FormsModule,
        NoopAnimationsModule,
        FormlyModule.forRoot(),
        FormlyAutocompleteIntroductionModule,
        FormlyAutocompleteBasicModule,
        FormlyAutocompleteCountModule,
        FormlyAutocompleteDisableModule,
        FormlyAutocompleteFreetextModule,
        FormlyAutocompleteInputModule,
        FormlyAutocompleteTagModule,
        FormlyAutocompleteValidationModule,
      ],
    }),
  ],
} as Meta;

export const Introduction: Story = (args) => ({
  template: '<sds-formly-autocomplete-introduction></sds-formly-autocomplete-introduction>',
  props: args,
});
Introduction.parameters = { options: { showPanel: false } };

export const Basic: Story = (args) => ({
  template: '<sds-formly-autocomplete-basic></sds-formly-autocomplete-basic>',
  props: args,
});
Basic.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/formly/formly-autocomplete/formly-autocomplete-basic',
    'FormlyAutocompleteBasicModule',
    'sds-formly-autocomplete-basic'
  ),
  stackblitzLink: generateStackblitzLink('formly-autocomplete', 'basic'),
};

export const Disable: Story = (args) => ({
  template: '<sds-formly-autocomplete-disable></sds-formly-autocomplete-disable>',
  props: args,
});
Disable.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/formly/formly-autocomplete/formly-autocomplete-disable',
    'FormlyAutocompleteDisableModule',
    'sds-formly-autocomplete-disable'
  ),
  stackblitzLink: generateStackblitzLink('formly-autocomplete', 'disable'),
};

export const Count: Story = (args) => ({
  template: '<sds-formly-autocomplete-count></sds-formly-autocomplete-count>',
  props: args,
});
Count.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/formly/formly-autocomplete/formly-autocomplete-count',
    'FormlyAutocompleteCountModule',
    'sds-formly-autocomplete-count'
  ),
  stackblitzLink: generateStackblitzLink('formly-autocomplete', 'count'),
};

export const Freetext: Story = (args) => ({
  template: '<sds-formly-autocomplete-freetext></sds-formly-autocomplete-freetext>',
  props: args,
});
Freetext.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/formly/formly-autocomplete/formly-autocomplete-free-text',
    'FormlyAutocompleteFreetextModule',
    'sds-formly-autocomplete-freetext'
  ),
  stackblitzLink: generateStackblitzLink('formly-autocomplete', 'free-text'),
};

export const Input: Story = (args) => ({
  template: '<sds-formly-autocomplete-input></sds-formly-autocomplete-input>',
  props: args,
});
Input.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/formly/formly-autocomplete/formly-autocomplete-input',
    'FormlyAutocompleteInputModule',
    'sds-formly-autocomplete-input'
  ),
  stackblitzLink: generateStackblitzLink('formly-autocomplete', 'input'),
};

export const Tag: Story = (args) => ({
  template: '<sds-formly-autocomplete-tag></sds-formly-autocomplete-tag>',
  props: args,
});
Tag.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/formly/formly-autocomplete/formly-autocomplete-tag',
    'FormlyAutocompleteTagModule',
    'sds-formly-autocomplete-tag'
  ),
  stackblitzLink: generateStackblitzLink('formly-autocomplete', 'tag'),
};

export const Validation: Story = (args) => ({
  template: '<sds-formly-autocomplete-validation></sds-formly-autocomplete-validation>',
  props: args,
});
Validation.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/formly/formly-autocomplete/formly-autocomplete-validation',
    'FormlyAutocompleteValidationModule',
    'sds-formly-autocomplete-validation'
  ),
  stackblitzLink: generateStackblitzLink('formly-autocomplete', 'validation'),
};

export const __namedExportsOrder = [
  'Introduction',
  'Basic',
  'Count',
  'Disable',
  'Freetext',
  'Input',
  'Tag',
  'Validation',
];
