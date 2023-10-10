import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { generateConfig, generateStackblitzLink } from 'libs/documentation/src/sandbox/sandbox-utils';
import { FormlyMultiCheckboxIntroductionModule } from './formly-multi-checkbox-introduction/formly-multi-checkbox-introduction.module';
import { FormlyMultiCheckboxBasicModule } from './formly-multi-checkbox-basic/formly-multi-checkbox-basic.module';
import { FormlyMultiCheckboxNestedModule } from './formly-multi-checkbox-nested/formly-multi-checkbox-nested.module';
import { FormlyMultiCheckboxGroupModule } from './formly-multi-checkbox-group/formly-multi-checkbox-group.module';
import { FormlyMultiCheckboxExpandModule } from './formly-multi-checkbox-expand/formly-multi-checkbox-expand.module';

const disable = {
  table: {
    disable: true,
  },
};
const props = {
  table: {
    category: 'template-options',
  },
};

export default {
  title: 'Formly/Multi Checkbox',
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        SdsFormlyModule,
        FormsModule,
        NoopAnimationsModule,
        FormlyModule.forRoot(),
        FormlyMultiCheckboxIntroductionModule,
        FormlyMultiCheckboxBasicModule,
        FormlyMultiCheckboxNestedModule,
        FormlyMultiCheckboxGroupModule,
        FormlyMultiCheckboxExpandModule,
      ],
    }),
  ],
} as Meta;

export const Introduction: Story = (args) => ({
  template: '<sds-formly-multi-checkbox-introduction></sds-formly-multi-checkbox-introduction>',
  props: args,
});
Introduction.parameters = { options: { showPanel: false } };

export const Basic: Story = (args) => ({
  template: '<sds-formly-multi-checkbox-basic></sds-formly-multi-checkbox-basic>',
  props: args,
});
Basic.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/formly/formly-multi-checkbox/formly-multi-checkbox-basic',
    'FormlyMultiCheckboxBasicModule',
    'sds-formly-multi-checkbox-basic'
  ),
  stackblitzLink: generateStackblitzLink('formly-multi-checkbox', 'basic'),
};

export const Nested: Story = (args) => ({
  template: '<sds-formly-multi-checkbox-nested></sds-formly-multi-checkbox-nested>',
  props: args,
});
Nested.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/formly/formly-multi-checkbox/formly-multi-checkbox-nested',
    'FormlyMultiCheckboxNestedModule',
    'sds-formly-multi-checkbox-nested'
  ),
  stackblitzLink: generateStackblitzLink('formly-multi-checkbox', 'nested'),
};

export const Group: Story = (args) => ({
  template: '<sds-formly-multi-checkbox-group></sds-formly-multi-checkbox-group>',
  props: args,
});
Group.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/formly/formly-multi-checkbox/formly-multi-checkbox-group',
    'FormlyMultiCheckboxGroupModule',
    'sds-formly-multi-checkbox-group'
  ),
  stackblitzLink: generateStackblitzLink('formly-multi-checkbox', 'group'),
};

export const Expand: Story = (args) => ({
  template: '<sds-formly-multi-checkbox-expand></sds-formly-multi-checkbox-expand>',
  props: args,
});
Expand.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/formly/formly-multi-checkbox/formly-multi-checkbox-expand',
    'FormlyMultiCheckboxExpandModule',
    'sds-formly-multi-checkbox-expand'
  ),
  stackblitzLink: generateStackblitzLink('formly-multi-checkbox', 'expand'),
};

export const __namedExportsOrder = ['Introduction', 'Basic', 'Nested', 'Expand', 'Group'];
