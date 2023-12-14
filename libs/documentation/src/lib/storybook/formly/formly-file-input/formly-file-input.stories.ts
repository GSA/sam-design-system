import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { generateConfig, generateStackblitzLink } from 'libs/documentation/src/sandbox/sandbox-utils';
import { FormlyFileinputIntroductionModule } from './formly-file-input-introduction/formly-file-input-introduction.module';
import { FormlyFileInputOptionsModule } from './formly-file-input-options/formly-file-input-options.module';
import { FormlyFileInputBasicModule } from './formly-file-input-basic/formly-file-input-basic.module';
import { FormlyFileInputTableModule } from './formly-file-input-table/formly-file-input-table.module';
import { FormlyFileInputCustomModule } from './formly-file-input-custom/formly-file-input-custom.module';

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
  title: 'Formly/Fileinput',
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        SdsFormlyModule,
        FormsModule,
        NoopAnimationsModule,
        FormlyModule.forRoot(),
        FormlyFileinputIntroductionModule,
        FormlyFileInputOptionsModule,
        FormlyFileInputBasicModule,
        FormlyFileInputTableModule,
        FormlyFileInputCustomModule,
      ],
    }),
  ],
} as Meta;

export const Introduction: Story = (args) => ({
  template: '<sds-formly-file-input-introduction></sds-formly-file-input-introduction>',
  props: args,
});
Introduction.parameters = { options: { showPanel: false } };

export const Basic: Story = (args) => ({
  template: '<sds-formly-file-input-basic></sds-formly-file-input-basic>',
  props: args,
});
Basic.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-file-input/formly-file-input-basic',
    'FormlyFileinputBasicModule',
    'sds-formly-file-input-basic'
  ),
  stackblitzLink: generateStackblitzLink('formly-file-input', 'basic'),
};

export const Options: Story = (args) => ({
  template: '<sds-formly-file-input-options></sds-formly-file-input-options>',
  props: args,
});
Options.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-file-input/formly-file-input-options',
    'FormlyFileinputOptionsModule',
    'sds-formly-file-input-template'
  ),
  stackblitzLink: generateStackblitzLink('formly-file-input', 'options'),
};

export const Table: Story = (args) => ({
  template: '<sds-formly-file-input-table></sds-formly-file-input-table>',
  props: args,
});
Table.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-file-input/formly-file-input-table',
    'FormlyFileinputTableModule',
    'sds-formly-file-input-table'
  ),
  stackblitzLink: generateStackblitzLink('formly-file-input', 'table'),
};

export const Custom: Story = (args) => ({
  template: '<sds-formly-file-input-custom></sds-formly-file-input-custom>',
  props: args,
});
Custom.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-file-input/formly-file-input-custom',
    'FormlyFileinputCustomModule',
    'sds-formly-file-input-custom'
  ),
  stackblitzLink: generateStackblitzLink('formly-file-input', 'custom'),
};

export const __namedExportsOrder = ['Introduction', 'Options', 'Basic', 'Table', 'Custom'];
