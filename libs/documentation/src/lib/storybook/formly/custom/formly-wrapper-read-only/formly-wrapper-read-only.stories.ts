import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { generateConfig, generateStackblitzLink } from 'libs/documentation/src/sandbox/sandbox-utils';
import { FormlyWrapperReadOnlyBasicModule } from './formly-wrapper-read-only-basic/formly-wrapper-read-only-basic.module';
import { FormlyWrapperReadOnlyContainerModule } from './formly-wrapper-read-only-container/formly-wrapper-read-only-container.module';
import { FormlyWrapperReadOnlyCustomTemplateModule } from './formly-wrapper-read-only-custom-template/formly-wrapper-read-only-custom-template.module';
import { FormlyWrapperReadOnlyIntroductionModule } from './formly-wrapper-read-only-introduction/formly-wrapper-read-only-introduction.module';
import { FormlyWrapperReadOnlyOptionsModule } from './formly-wrapper-read-only-options/formly-wrapper-read-only-options.module';

export default {
  title: 'Formly Examples/Read Only',
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        SdsFormlyModule,
        FormsModule,
        NoopAnimationsModule,
        FormlyModule.forRoot(),
        FormlyWrapperReadOnlyIntroductionModule,
        FormlyWrapperReadOnlyBasicModule,
        FormlyWrapperReadOnlyOptionsModule,
        FormlyWrapperReadOnlyCustomTemplateModule,
        FormlyWrapperReadOnlyContainerModule,
      ],
    }),
  ],
} as Meta;

export const Introduction: Story = (args) => ({
  template: '<sds-formly-wrapper-read-only-introduction></sds-formly-wrapper-read-only-introduction>',
  props: args,
});
Introduction.parameters = { options: { showPanel: false } };

export const Basic: Story = (args) => ({
  template: '<sds-formly-wrapper-read-only-basic></sds-formly-wrapper-read-only-basic>',
  props: args,
});
Basic.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/formly/custom/formly-wrapper-read-only/formly-wrapper-read-only-basic',
    'FormlyWrapperReadOnlyBasicModule',
    'sds-formly-wrapper-read-only-basic'
  ),
  stackblitzLink: generateStackblitzLink('formly-wrapper-read-only', 'basic'),
};

export const FormlyType: Story = (args) => ({
  template: '<sds-formly-wrapper-read-only-options></sds-formly-wrapper-read-only-options>',
  props: args,
});
FormlyType.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/formly/custom/formly-wrapper-read-only/formly-wrapper-read-only-options',
    'FormlyWrapperReadOnlyOptionsModule',
    'sds-formly-wrapper-read-only-options'
  ),
  stackblitzLink: generateStackblitzLink('formly-wrapper-read-only', 'options'),
};
export const CustomTemplate: Story = (args) => ({
  template: '<sds-formly-wrapper-read-only-custom-template></sds-formly-wrapper-read-only-custom-template>',
  props: args,
});
CustomTemplate.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/formly/custom/formly-wrapper-read-only/formly-wrapper-read-only-custom-template',
    'FormlyWrapperReadOnlyCustomTemplateModule',
    'sds-formly-wrapper-read-only-custom-template'
  ),
  stackblitzLink: generateStackblitzLink('formly-wrapper-read-only', 'custom-template'),
};

export const ContainerWithoutFormly: Story = (args) => ({
  template: '<sds-formly-wrapper-read-only-container></sds-formly-wrapper-read-only-container>',
  props: args,
});
ContainerWithoutFormly.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/formly/custom/formly-wrapper-read-only/formly-wrapper-read-only-container',
    'FormlyWrapperReadOnlyContainerModule',
    'sds-formly-wrapper-read-only-container'
  ),
  stackblitzLink: generateStackblitzLink('formly-wrapper-read-only', 'custom-template'),
};
export const __namedExportsOrder = ['Introduction', 'Basic', 'FormlyType', 'CustomTemplate', 'ContainerWithoutFormly'];