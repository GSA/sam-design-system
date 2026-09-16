import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { moduleMetadata, Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { generateConfig, generateStackblitzLink } from 'libs/documentation/src/sandbox/sandbox-utils';
import { FormlyFileinfoIntroductionModule } from './formly-file-info-introduction/formly-file-info-introduction.module';
import { FormlyFileinfoOptionsModule } from './formly-file-info-options/formly-file-info-options.module';
import { FormlyFileinfoBasicModule } from './formly-file-info-basic/formly-file-info-basic.module';
import { importProvidersFrom } from '@angular/core';

export default {
  title: 'Formly/Fileinfo',
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        SdsFormlyModule,
        FormsModule,
        FormlyFileinfoIntroductionModule,
        FormlyFileinfoBasicModule,
        FormlyFileinfoOptionsModule,
      ],
    }),
    applicationConfig({
      providers: [provideAnimations(), importProvidersFrom(FormlyModule.forRoot())],
    }),
  ],
} as Meta;

export const Introduction: StoryObj = (args) => ({
  template: '<sds-formly-file-info-introduction></sds-formly-file-info-introduction>',
  props: args,
});
Introduction.parameters = {
  controls: { disable: true },
  actions: { disable: true },
  sdsCodePreview: { disable: true },
};

export const Basic: StoryObj = (args) => ({
  template: '<sds-formly-file-info-basic></sds-formly-file-info-basic>',
  props: args,
});
Basic.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-file-info/formly-file-info-basic',
    'FormlyFileinfoBasicModule',
    'sds-formly-file-info-basic',
  ),
  stackblitzLink: generateStackblitzLink('formly-file-info', 'basic'),
};

export const Options: StoryObj = (args) => ({
  template: '<sds-formly-file-info-options></sds-formly-file-info-options>',
  props: args,
});
Options.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-file-info/formly-file-info-options',
    'FormlyFileinfoOptionsModule',
    'sds-formly-file-info-template',
  ),
  stackblitzLink: generateStackblitzLink('formly-file-info', 'options'),
};
