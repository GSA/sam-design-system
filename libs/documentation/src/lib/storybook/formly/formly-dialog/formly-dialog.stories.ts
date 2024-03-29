import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { moduleMetadata, Meta, Story } from '@storybook/angular';
import {
  createCodePreviewTabData,
  generateConfig,
  generateStackblitzLink,
} from 'libs/documentation/src/sandbox/sandbox-utils';

import { FormlyDialogIntroductionModule } from './formly-dialog-introduction/formly-dialog-introduction.module';

import { FormlyDialogBasicModule } from './formly-dialog-basic/formly-dialog-basic.module';
import { FormlyDialogDownloadModule } from './formly-dialog-download/formly-dialog-download.module';

const props = {
  table: {
    category: 'template-options',
  },
};

export default {
  title: 'Formly/Dialog',
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        SdsFormlyModule,
        FormsModule,
        FormlyModule.forRoot(),
        FormlyDialogIntroductionModule,
        NoopAnimationsModule,
        FormlyDialogDownloadModule,
        FormlyDialogBasicModule,
        FormlyDialogIntroductionModule,
      ],
    }),
  ],
  argTypes: {
    label: props,
    placeholder: props,
    description: props,
    required: props,
    disabled: props,
    tooltipText: props,
  },
} as Meta;

export const Introduction: Story = (args) => ({
  template: '<sds-formly-dialog-introduction></sds-formly-dialog-introduction>',
  props: args,
});
Introduction.parameters = { options: { showPanel: false } };

export const Download: Story = (args) => ({
  template: '<sds-formly-dialog-download></sds-formly-dialog-download>',
  props: args,
});
Download.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-dialog/formly-dialog-download',
    'FormlyDialogDownloadModule',
    'sds-formly-dialog-download',
    [
      createCodePreviewTabData(
        'storybook/formly/formly-dialog/formly-dialog-download/autocomplete-sample.service.ts',
        'ts',
        false
      ),
      createCodePreviewTabData(
        'storybook/formly/formly-dialog/formly-dialog-download/autocomplete-sample.data.ts',
        'ts',
        false
      ),
    ]
  ),
  stackblitzLink: generateStackblitzLink('formly-dialog', 'download'),
};

export const Basic: Story = (args) => ({
  template: '<sds-formly-dialog-basic></sds-formly-dialog-basic>',
  props: args,
});
Basic.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-dialog/formly-dialog-basic',
    'FormlyDialogBasicModule',
    'sds-formly-dialog-basic'
  ),
  stackblitzLink: generateStackblitzLink('formly-dialog', 'basic'),
};

export const __namedExportsOrder = ['Introduction', 'Basic', 'Download'];
