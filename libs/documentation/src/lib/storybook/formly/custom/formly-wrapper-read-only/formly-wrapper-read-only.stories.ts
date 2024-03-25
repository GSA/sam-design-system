import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { moduleMetadata, Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { generateConfig, generateStackblitzLink } from 'libs/documentation/src/sandbox/sandbox-utils';
import { FormlyWrapperReadOnlyBasicModule } from './formly-wrapper-read-only-basic/formly-wrapper-read-only-basic.module';
import { FormlyWrapperReadOnlyContainerModule } from './formly-wrapper-read-only-container/formly-wrapper-read-only-container.module';
import { FormlyWrapperReadOnlyCustomTemplateModule } from './formly-wrapper-read-only-custom-template/formly-wrapper-read-only-custom-template.module';
import { FormlyWrapperReadOnlyIntroductionModule } from './formly-wrapper-read-only-introduction/formly-wrapper-read-only-introduction.module';
import { FormlyWrapperReadOnlyOptionsModule } from './formly-wrapper-read-only-options/formly-wrapper-read-only-options.module';
import { provideAnimations } from '@angular/platform-browser/animations';

export default {
  title: 'Formly Examples/Read Only',
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        SdsFormlyModule,
        FormsModule,
        FormlyModule.forRoot(),
        FormlyWrapperReadOnlyIntroductionModule,
        FormlyWrapperReadOnlyBasicModule,
        FormlyWrapperReadOnlyOptionsModule,
        FormlyWrapperReadOnlyCustomTemplateModule,
        FormlyWrapperReadOnlyContainerModule,
      ],
    }),
    applicationConfig({
      providers: [provideAnimations()],
    }),
  ],
} as Meta;

export const Introduction: StoryObj = (args) => ({
  template: '<sds-formly-wrapper-read-only-introduction></sds-formly-wrapper-read-only-introduction>',
  props: args,
});
Introduction.parameters = { options: { showPanel: false } };

export const Basic: StoryObj = (args) => ({
  template: '<sds-formly-wrapper-read-only-basic></sds-formly-wrapper-read-only-basic>',
  props: args,
});
Basic.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/custom/formly-wrapper-read-only/formly-wrapper-read-only-basic',
    'FormlyWrapperReadOnlyBasicModule',
    'sds-formly-wrapper-read-only-basic'
  ),
  stackblitzLink: generateStackblitzLink('formly-wrapper-read-only', 'basic'),
};

export const FormlyType: StoryObj = (args) => ({
  template: '<sds-formly-wrapper-read-only-options></sds-formly-wrapper-read-only-options>',
  props: args,
});
FormlyType.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/custom/formly-wrapper-read-only/formly-wrapper-read-only-options',
    'FormlyWrapperReadOnlyOptionsModule',
    'sds-formly-wrapper-read-only-options'
  ),
  stackblitzLink: generateStackblitzLink('formly-wrapper-read-only', 'options'),
};
export const CustomTemplate: StoryObj = (args) => ({
  template: '<sds-formly-wrapper-read-only-custom-template></sds-formly-wrapper-read-only-custom-template>',
  props: args,
});
CustomTemplate.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/custom/formly-wrapper-read-only/formly-wrapper-read-only-custom-template',
    'FormlyWrapperReadOnlyCustomTemplateModule',
    'sds-formly-wrapper-read-only-custom-template'
  ),
  stackblitzLink: generateStackblitzLink('formly-wrapper-read-only', 'custom-template'),
};

export const ContainerWithoutFormly: StoryObj = (args) => ({
  template: '<sds-formly-wrapper-read-only-container></sds-formly-wrapper-read-only-container>',
  props: args,
});
ContainerWithoutFormly.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/custom/formly-wrapper-read-only/formly-wrapper-read-only-container',
    'FormlyWrapperReadOnlyContainerModule',
    'sds-formly-wrapper-read-only-container'
  ),
  stackblitzLink: generateStackblitzLink('formly-wrapper-read-only', 'custom-template'),
};
