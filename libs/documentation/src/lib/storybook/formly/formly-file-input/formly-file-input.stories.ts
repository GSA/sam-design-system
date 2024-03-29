import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { moduleMetadata, Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { generateConfig, generateStackblitzLink } from 'libs/documentation/src/sandbox/sandbox-utils';
import { FormlyFileinputIntroductionModule } from './formly-file-input-introduction/formly-file-input-introduction.module';
import { FormlyFileInputOptionsModule } from './formly-file-input-options/formly-file-input-options.module';
import { FormlyFileInputBasicModule } from './formly-file-input-basic/formly-file-input-basic.module';
import { FormlyFileInputTableModule } from './formly-file-input-table/formly-file-input-table.module';
import { FormlyFileInputCustomModule } from './formly-file-input-custom/formly-file-input-custom.module';
import { importProvidersFrom } from '@angular/core';

export default {
  title: 'Formly/Fileinput',
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        SdsFormlyModule,
        FormsModule,
        FormlyFileinputIntroductionModule,
        FormlyFileInputOptionsModule,
        FormlyFileInputBasicModule,
        FormlyFileInputTableModule,
        FormlyFileInputCustomModule,
      ],
    }),
    applicationConfig({
      providers: [provideAnimations(), importProvidersFrom(FormlyModule.forRoot())],
    }),
  ],
} as Meta;

export const Introduction: StoryObj = (args) => ({
  template: '<sds-formly-file-input-introduction></sds-formly-file-input-introduction>',
  props: args,
});
Introduction.parameters = { options: { showPanel: false } };

export const Basic: StoryObj = (args) => ({
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

export const Options: StoryObj = (args) => ({
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

export const Table: StoryObj = (args) => ({
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

export const Custom: StoryObj = (args) => ({
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
