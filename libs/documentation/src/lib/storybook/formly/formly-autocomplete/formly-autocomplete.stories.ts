import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { moduleMetadata, Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { generateConfig, generateStackblitzLink } from 'libs/documentation/src/sandbox/sandbox-utils';
import { FormlyAutocompleteIntroductionModule } from './formly-autocomplete-introduction/formly-autocomplete-introduction.module';
import { FormlyAutocompleteCountModule } from './formly-autocomplete-count/formly-autocomplete-count.module';
import { FormlyAutocompleteBasicModule } from './formly-autocomplete-basic/formly-autocomplete-basic.module';
import { FormlyAutocompleteDisableModule } from './formly-autocomplete-disable/formly-autocomplete-disable.module';
import { FormlyAutocompleteFreetextModule } from './formly-autocomplete-free-text/formly-autocomplete-free-text.module';
import { FormlyAutocompleteInputModule } from './formly-autocomplete-input/formly-autocomplete-input.module';
import { FormlyAutocompleteTagModule } from './formly-autocomplete-tag/formly-autocomplete-tag.module';
import { FormlyAutocompleteValidationModule } from './formly-autocomplete-validation/formly-autocomplete-validation.module';
import { FormlyAutocompleteIdModule } from './formly-autocomplete-id/formly-autocomplete-id.module';
import { importProvidersFrom } from '@angular/core';

export default {
  title: 'Formly/Autocomplete',
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        SdsFormlyModule,
        FormsModule,
        FormlyAutocompleteIntroductionModule,
        FormlyAutocompleteBasicModule,
        FormlyAutocompleteCountModule,
        FormlyAutocompleteDisableModule,
        FormlyAutocompleteFreetextModule,
        FormlyAutocompleteInputModule,
        FormlyAutocompleteTagModule,
        FormlyAutocompleteValidationModule,
        FormlyAutocompleteIdModule,
      ],
    }),
    applicationConfig({
      providers: [provideAnimations(), importProvidersFrom(FormlyModule.forRoot())],
    }),
  ],
} as Meta;

export const Introduction: StoryObj = (args) => ({
  template: '<sds-formly-autocomplete-introduction></sds-formly-autocomplete-introduction>',
  props: args,
});
Introduction.parameters = {
  controls: { disable: true },
  actions: { disable: true },
  sdsCodePreview: { disable: true },
};

export const Basic: StoryObj = (args) => ({
  template: '<sds-formly-autocomplete-basic></sds-formly-autocomplete-basic>',
  props: args,
});
Basic.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-autocomplete/formly-autocomplete-basic',
    'FormlyAutocompleteBasicModule',
    'sds-formly-autocomplete-basic'
  ),
  stackblitzLink: generateStackblitzLink('formly-autocomplete', 'basic'),
};

export const Disable: StoryObj = (args) => ({
  template: '<sds-formly-autocomplete-disable></sds-formly-autocomplete-disable>',
  props: args,
});
Disable.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-autocomplete/formly-autocomplete-disable',
    'FormlyAutocompleteDisableModule',
    'sds-formly-autocomplete-disable'
  ),
  stackblitzLink: generateStackblitzLink('formly-autocomplete', 'disable'),
};

export const Count: StoryObj = (args) => ({
  template: '<sds-formly-autocomplete-count></sds-formly-autocomplete-count>',
  props: args,
});
Count.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-autocomplete/formly-autocomplete-count',
    'FormlyAutocompleteCountModule',
    'sds-formly-autocomplete-count'
  ),
  stackblitzLink: generateStackblitzLink('formly-autocomplete', 'count'),
};

export const Freetext: StoryObj = (args) => ({
  template: '<sds-formly-autocomplete-freetext></sds-formly-autocomplete-freetext>',
  props: args,
});
Freetext.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-autocomplete/formly-autocomplete-free-text',
    'FormlyAutocompleteFreetextModule',
    'sds-formly-autocomplete-freetext'
  ),
  stackblitzLink: generateStackblitzLink('formly-autocomplete', 'free-text'),
};

export const Input: StoryObj = (args) => ({
  template: '<sds-formly-autocomplete-input></sds-formly-autocomplete-input>',
  props: args,
});
Input.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-autocomplete/formly-autocomplete-input',
    'FormlyAutocompleteInputModule',
    'sds-formly-autocomplete-input'
  ),
  stackblitzLink: generateStackblitzLink('formly-autocomplete', 'input'),
};

export const Tag: StoryObj = (args) => ({
  template: '<sds-formly-autocomplete-tag></sds-formly-autocomplete-tag>',
  props: args,
});
Tag.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-autocomplete/formly-autocomplete-tag',
    'FormlyAutocompleteTagModule',
    'sds-formly-autocomplete-tag'
  ),
  stackblitzLink: generateStackblitzLink('formly-autocomplete', 'tag'),
};

export const Validation: StoryObj = (args) => ({
  template: '<sds-formly-autocomplete-validation></sds-formly-autocomplete-validation>',
  props: args,
});
Validation.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-autocomplete/formly-autocomplete-validation',
    'FormlyAutocompleteValidationModule',
    'sds-formly-autocomplete-validation'
  ),
  stackblitzLink: generateStackblitzLink('formly-autocomplete', 'validation'),
};

export const ID: StoryObj = (args) => ({
  template: '<sds-formly-autocomplete-id></sds-formly-autocomplete-id>',
  props: args,
});
ID.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-autocomplete/formly-autocomplete-id',
    'FormlyAutocompleteIdModule',
    'sds-formly-autocomplete-id'
  ),
  stackblitzLink: generateStackblitzLink('formly-autocomplete', 'id'),
};
