import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { moduleMetadata, Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { generateConfig, generateStackblitzLink } from 'libs/documentation/src/sandbox/sandbox-utils';
import { FormlyWrapperTemplateOptionsBlurModule } from './formly-wrapper-template-options-blur/formly-wrapper-template-options-blur.module';
import { FormlyWrapperTemplateOptionsAnnounceLabelModule } from './formly-wrapper-template-options-announce-label/formly-wrapper-template-options-announce-label.module';
import { FormlyWrapperTemplateOptionsHideOptionalModule } from './formly-wrapper-template-options-hideoptional/formly-wrapper-template-options-hideoptional.module';
import { FormlyWrapperTemplateOptionsIntroductionModule } from './formly-wrapper-template-options-introduction/formly-wrapper-template-options-introduction.module';
import { FormlyWrapperTemplateOptionsTagsModule } from './formly-wrapper-template-options-tags/formly-wrapper-template-options-tags.module';
import { FormlyWrapperTemplateOptionsUpdateonModule } from './formly-wrapper-template-options-updateon/formly-wrapper-template-options-updateon.module';

export default {
  title: 'Formly Examples/Template Options',
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        SdsFormlyModule,
        FormsModule,
        FormlyModule.forRoot(),
        FormlyWrapperTemplateOptionsIntroductionModule,
        FormlyWrapperTemplateOptionsBlurModule,
        FormlyWrapperTemplateOptionsUpdateonModule,
        FormlyWrapperTemplateOptionsTagsModule,
        FormlyWrapperTemplateOptionsHideOptionalModule,
        FormlyWrapperTemplateOptionsAnnounceLabelModule,
      ],
    }),
    applicationConfig({
      providers: [provideAnimations()],
    }),
  ],
} as Meta;

export const Introduction: StoryObj = (args) => ({
  template: '<sds-formly-wrapper-template-options-introduction></sds-formly-wrapper-template-options-introduction>',
  props: args,
});
Introduction.parameters = { options: { showPanel: false } };

export const Blur: StoryObj = (args) => ({
  template: '<sds-formly-wrapper-template-options-blur></sds-formly-wrapper-template-options-blur>',
  props: args,
});
Blur.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/custom/formly-wrapper-template-options/formly-wrapper-template-options-blur',
    'FormlyWrapperTemplateOptionsBlurModule',
    'sds-formly-wrapper-template-options-blur'
  ),
  stackblitzLink: generateStackblitzLink('formly-wrapper-template-options', 'blur'),
};

export const UpdateOn: StoryObj = (args) => ({
  template: '<sds-formly-wrapper-template-options-updateon></sds-formly-wrapper-template-options-updateon>',
  props: args,
});
UpdateOn.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/custom/formly-wrapper-template-options/formly-wrapper-template-options-updateon',
    'FormlyWrapperTemplateOptionsUpdateonModule',
    'sds-formly-wrapper-template-options-template'
  ),
  stackblitzLink: generateStackblitzLink('formly-wrapper-template-options', 'updateon'),
};

export const Hideoptional: StoryObj = (args) => ({
  template: '<sds-formly-wrapper-template-options-hideoptional></sds-formly-wrapper-template-options-hideoptional>',
  props: args,
});
Hideoptional.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/custom/formly-wrapper-template-options/formly-wrapper-template-options-hideoptional',
    'FormlyWrapperTemplateOptionsHideoptionalModule',
    'sds-formly-wrapper-template-options-hideoptional'
  ),
  stackblitzLink: generateStackblitzLink('formly-wrapper-template-options', 'hideoptional'),
};

export const AnnounceLabel: StoryObj = (args) => ({
  template: '<sds-formly-wrapper-template-options-announce-label></sds-formly-wrapper-template-options-announce-label>',
  props: args,
});
AnnounceLabel.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/custom/formly-wrapper-template-options/formly-wrapper-template-options-announce-label',
    'FormlyWrapperTemplateOptionsAnnounceLabelModule',
    'sds-formly-wrapper-template-options-announce-label'
  ),
  stackblitzLink: generateStackblitzLink('formly-wrapper-template-options', 'announc-label'),
};
