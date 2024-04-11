import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { moduleMetadata, Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { generateConfig, generateStackblitzLink } from 'libs/documentation/src/sandbox/sandbox-utils';
import { FormlyEditorIntroductionModule } from './formly-editor-introduction/formly-editor-introduction.module';
import { FormlyEditorRegexModule } from './formly-editor-regex/formly-editor-regex.module';
import { FormlyEditorBasicModule } from './formly-editor-basic/formly-editor-basic.module';
import { FormlyEditorUpdatesModule } from './formly-editor-updates/formly-editor-updates.module';
import { FormlyEditorLabelModule } from './formly-editor-label/formly-editor-label.module';
import { importProvidersFrom } from '@angular/core';

export default {
  title: 'Formly/Editor',
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        SdsFormlyModule,
        FormsModule,
        FormlyEditorIntroductionModule,
        FormlyEditorBasicModule,
        FormlyEditorRegexModule,
        FormlyEditorUpdatesModule,
        FormlyEditorLabelModule,
      ],
    }),
    applicationConfig({
      providers: [provideAnimations(), importProvidersFrom(FormlyModule.forRoot())],
    }),
  ],
} as Meta;

export const Introduction: StoryObj = (args) => ({
  template: '<sds-formly-editor-introduction></sds-formly-editor-introduction>',
  props: args,
});
Introduction.parameters = {
  controls: { disable: true },
  actions: { disable: true },
  sdsCodePreview: { disable: true },
};

export const Basic: StoryObj = (args) => ({
  template: '<sds-formly-editor-basic></sds-formly-editor-basic>',
  props: args,
});
Basic.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-editor/formly-editor-basic',
    'FormlyEditorBasicModule',
    'sds-formly-editor-basic'
  ),
  stackblitzLink: generateStackblitzLink('formly-editor', 'basic'),
};

export const Regex: StoryObj = (args) => ({
  template: '<sds-formly-editor-regex></sds-formly-editor-regex>',
  props: args,
});
Regex.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-editor/formly-editor-regex',
    'FormlyEditorRegexModule',
    'sds-formly-editor-regex'
  ),
  stackblitzLink: generateStackblitzLink('formly-editor', 'regex'),
};

export const Label: StoryObj = (args) => ({
  template: '<sds-formly-editor-label></sds-formly-editor-label>',
  props: args,
});
Label.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-editor/formly-editor-label',
    'FormlyEditorLabelModule',
    'sds-formly-editor-label'
  ),
  stackblitzLink: generateStackblitzLink('formly-editor', 'label'),
};

export const Updates: StoryObj = (args) => ({
  template: '<sds-formly-editor-updates></sds-formly-editor-updates>',
  props: args,
});
Updates.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-editor/formly-editor-updates',
    'FormlyEditorUpdatesModule',
    'sds-formly-editor-updates'
  ),
  stackblitzLink: generateStackblitzLink('formly-editor', 'updates'),
};
