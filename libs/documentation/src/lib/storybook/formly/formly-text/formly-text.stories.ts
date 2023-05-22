import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { generateConfig, generateStackblitzLink } from 'libs/documentation/src/sandbox/sandbox-utils';
import { FormlyTextIntroductionModule } from './formly-text-introduction/formly-text-introduction.module';
import { FormlyTextDescriptionModule } from './formly-text-description/formly-text-description.module';
import { FormlyTextBasicModule } from './formly-text-basic/formly-text-basic.module';
import { FormlyTextChildModule } from './formly-text-child/formly-text-child.module';
import { FormlyTextLabelModule } from './formly-text-label/formly-text-label.module';

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
  title: 'Formly/Text',
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        SdsFormlyModule,
        FormsModule,
        NoopAnimationsModule,
        FormlyModule.forRoot(),
        FormlyTextIntroductionModule,
        FormlyTextBasicModule,
        FormlyTextDescriptionModule,
        FormlyTextChildModule,
        FormlyTextLabelModule,
      ],
    }),
  ],
} as Meta;

export const Introduction: Story = (args) => ({
  template: '<sds-formly-text-introduction></sds-formly-text-introduction>',
  props: args,
});
Introduction.parameters = { options: { showPanel: false } };

export const Basic: Story = (args) => ({
  template: '<sds-formly-text-basic></sds-formly-text-basic>',
  props: args,
});
Basic.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/formly/formly-text/formly-text-basic',
    'FormlyTextBasicModule',
    'sds-formly-text-basic'
  ),
  stackblitzLink: generateStackblitzLink('formly-text', 'basic'),
};

export const Description: Story = (args) => ({
  template: '<sds-formly-text-description></sds-formly-text-description>',
  props: args,
});
Description.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/formly/formly-text/formly-text-description',
    'FormlyTextDescriptionModule',
    'sds-formly-text-description'
  ),
  stackblitzLink: generateStackblitzLink('formly-text', 'description'),
};

export const Label: Story = (args) => ({
  template: '<sds-formly-text-label></sds-formly-text-label>',
  props: args,
});
Label.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/formly/formly-text/formly-text-label',
    'FormlyTextLabelModule',
    'sds-formly-text-label'
  ),
  stackblitzLink: generateStackblitzLink('formly-text', 'label'),
};

export const Child: Story = (args) => ({
  template: '<sds-formly-text-child></sds-formly-text-child>',
  props: args,
});
Child.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/formly/formly-text/formly-text-child',
    'FormlyTextChildModule',
    'sds-formly-text-child'
  ),
  stackblitzLink: generateStackblitzLink('formly-text', 'child'),
};

export const __namedExportsOrder = ['Introduction', 'Basic', 'Label', 'Description', 'Child'];
