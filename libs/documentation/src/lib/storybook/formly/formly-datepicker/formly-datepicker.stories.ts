import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { moduleMetadata, Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { generateConfig, generateStackblitzLink } from 'libs/documentation/src/sandbox/sandbox-utils';
import { FormlyDatepickerIntroductionModule } from './formly-datepicker-introduction/formly-datepicker-introduction.module';
import { FormlyDatepickerOptionsModule } from './formly-datepicker-options/formly-datepicker-options.module';
import { FormlyDatepickerBasicModule } from './formly-datepicker-basic/formly-datepicker-basic.module';
import { FormlyDatepickerValidationModule } from './formly-datepicker-validation/formly-datepicker-validation.module';
import { FormlyDatepickerRangeModule } from './formly-datepicker-range/formly-datepicker-range.module';
import { importProvidersFrom } from '@angular/core';

export default {
  title: 'Formly/Datepicker',
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        SdsFormlyModule,
        FormsModule,
        FormlyDatepickerIntroductionModule,
        FormlyDatepickerBasicModule,
        FormlyDatepickerOptionsModule,
        FormlyDatepickerValidationModule,
        FormlyDatepickerRangeModule,
      ],
    }),
    applicationConfig({
      providers: [provideAnimations(), importProvidersFrom(FormlyModule.forRoot())],
    }),
  ],
} as Meta;

export const Introduction: StoryObj = (args) => ({
  template: '<sds-formly-datepicker-introduction></sds-formly-datepicker-introduction>',
  props: args,
});
Introduction.parameters = { options: { showPanel: false } };

export const Basic: StoryObj = (args) => ({
  template: '<sds-formly-datepicker-basic></sds-formly-datepicker-basic>',
  props: args,
});
Basic.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-datepicker/formly-datepicker-basic',
    'FormlyDatepickerBasicModule',
    'sds-formly-datepicker-basic'
  ),
  stackblitzLink: generateStackblitzLink('formly-datepicker', 'basic'),
};

export const Options: StoryObj = (args) => ({
  template: '<sds-formly-datepicker-options></sds-formly-datepicker-options>',
  props: args,
});
Options.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-datepicker/formly-datepicker-options',
    'FormlyDatepickerOptionsModule',
    'sds-formly-datepicker-template'
  ),
  stackblitzLink: generateStackblitzLink('formly-datepicker', 'options'),
};

export const Validation: StoryObj = (args) => ({
  template: '<sds-formly-datepicker-validation></sds-formly-datepicker-validation>',
  props: args,
});
Validation.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-datepicker/formly-datepicker-validation',
    'FormlyDatepickerValidationModule',
    'sds-formly-datepicker-validation'
  ),
  stackblitzLink: generateStackblitzLink('formly-datepicker', 'validation'),
};

export const Range: StoryObj = (args) => ({
  template: '<sds-formly-datepicker-range></sds-formly-datepicker-range>',
  props: args,
});
Range.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-datepicker/formly-datepicker-range',
    'FormlyDatepickerRangeModule',
    'sds-formly-datepicker-range'
  ),
  stackblitzLink: generateStackblitzLink('formly-datepicker', 'range'),
};
