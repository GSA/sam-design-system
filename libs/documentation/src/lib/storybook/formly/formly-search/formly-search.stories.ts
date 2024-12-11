import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { moduleMetadata, Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { generateConfig, generateStackblitzLink } from 'libs/documentation/src/sandbox/sandbox-utils';
import { FormlySearchIntroductionModule } from './formly-search-introduction/formly-search-introduction.module';
import { FormlySearchAdvancedModule } from './formly-search-advanced/formly-search-advanced.module';
import { FormlySearchBasicModule } from './formly-search-basic/formly-search-basic.module';
import { FormlySearchHandlingSubmitModule } from './formly-search-handling-submit/formly-search-handling-submit.module';
import { FormlySearchOptionalModule } from './formly-search-optional/formly-search-optional.module';
import { FormlySearchBigModule } from './formly-search-big/formly-search-big.module';
import { FormlySearchDropdownModule } from './formly-search-dropdown/formly-search-dropdown.module';
import { FormlySearchLabelModule } from './formly-search-label/formly-search-label.module';
import { FormlySearchPlaceholderModule } from './formly-search-placeholder/formly-search-placeholder.module';
import { importProvidersFrom } from '@angular/core';

export default {
  title: 'Formly/Search',
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        SdsFormlyModule,
        FormsModule,
        FormlySearchIntroductionModule,
        FormlySearchAdvancedModule,
        FormlySearchBasicModule,
        FormlySearchHandlingSubmitModule,
        FormlySearchOptionalModule,
        FormlySearchBigModule,
        FormlySearchDropdownModule,
        FormlySearchLabelModule,
        FormlySearchPlaceholderModule,
      ],
    }),
    applicationConfig({
      providers: [provideAnimations(), importProvidersFrom(FormlyModule.forRoot())],
    }),
  ],
} as Meta;

export const Introduction: StoryObj = (args) => ({
  template: '<sds-formly-search-introduction></sds-formly-search-introduction>',
  props: args,
});
Introduction.parameters = {
  controls: { disable: true },
  actions: { disable: true },
  sdsCodePreview: { disable: true },
};

export const Basic: StoryObj = (args) => ({
  template: '<sds-formly-search-basic></sds-formly-search-basic>',
  props: args,
});
Basic.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-search/formly-search-basic',
    'FormlySearchBasicModule',
    'sds-formly-search-basic',
  ),
  stackblitzLink: generateStackblitzLink('formly-search', 'basic'),
};

export const HandlingSubmit: StoryObj = (args) => ({
  template: '<sds-formly-search-handling-submit></sds-formly-search-handling-submit>',
  props: args,
});
HandlingSubmit.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-search/formly-search-handling-submit',
    'FormlySearchHandlingSubmitModule',
    'sds-formly-search-handling-submit',
  ),
  stackblitzLink: generateStackblitzLink('formly-search', 'handling-submit'),
};

export const Advanced: StoryObj = (args) => ({
  template: '<sds-formly-search-advanced></sds-formly-search-advanced>',
  props: args,
});
Advanced.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-search/formly-search-advanced',
    'FormlySearchAdvancedModule',
    'sds-formly-search-advanced',
  ),
  stackblitzLink: generateStackblitzLink('formly-search', 'advanced'),
};

export const Big: StoryObj = (args) => ({
  template: '<sds-formly-search-big></sds-formly-search-big>',
  props: args,
});
Big.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-search/formly-search-big',
    'FormlySearchBigModule',
    'sds-formly-search-big',
  ),
  stackblitzLink: generateStackblitzLink('formly-search', 'big'),
};

export const Optional: StoryObj = (args) => ({
  template: '<sds-formly-search-optional></sds-formly-search-optional>',
  props: args,
});
Optional.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-search/formly-search-optional',
    'FormlySearchOptionalModule',
    'sds-formly-search-optional',
  ),
  stackblitzLink: generateStackblitzLink('formly-search', 'optional'),
};

export const Dropdown: StoryObj = (args) => ({
  template: '<sds-formly-search-dropdown></sds-formly-search-dropdown>',
  props: args,
});
Dropdown.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-search/formly-search-dropdown',
    'FormlySearchDropdownModule',
    'sds-formly-search-dropdown',
  ),
  stackblitzLink: generateStackblitzLink('formly-search', 'dropdown'),
};

export const Label: StoryObj = (args) => ({
  template: '<sds-formly-search-label></sds-formly-search-label>',
  props: args,
});
Label.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-search/formly-search-label',
    'FormlySearchLabelModule',
    'sds-formly-search-label',
  ),
  stackblitzLink: generateStackblitzLink('formly-search', 'label'),
};

export const Placeholder: StoryObj = (args) => ({
  template: '<sds-formly-search-placeholder></sds-formly-search-placeholder>',
  props: args,
});
Placeholder.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-search/formly-search-placeholder',
    'FormlySearchPlaceholderModule',
    'sds-formly-search-placeholder',
  ),
  stackblitzLink: generateStackblitzLink('formly-search', 'placeholder'),
};
