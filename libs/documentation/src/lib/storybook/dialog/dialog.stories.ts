import { CommonModule } from '@angular/common';
import { moduleMetadata, Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { DialogAlertTypeModule } from './dialog-alert-type/dialog-alert-type.module';
import { DialogWidthModule } from './dialog-width/dialog-width.module';
import { DialogNestedModule } from './dialog-nested/dialog-nested.module';
import { DialogDataReturnModule } from './dialog-data-return/dialog-data-return.module';
import {
  createCodePreviewTabData,
  generateConfig,
  generateStackblitzLink,
} from 'libs/documentation/src/sandbox/sandbox-utils';
import { DialogIntroductionModule } from './dialog-introduction/dialog-introduction.module';
import { DialogConfigurableModule } from './dialog-configurable/dialog-configurable.module';
import { DialogPolicyModule } from './dialog-policy/dialog-policy.module';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
  title: 'Components/Dialog',

  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        DialogAlertTypeModule,
        DialogWidthModule,
        DialogNestedModule,
        DialogDataReturnModule,
        DialogIntroductionModule,
        DialogConfigurableModule,
        DialogPolicyModule,
      ],
    }),
    applicationConfig({
      providers: [importProvidersFrom(BrowserAnimationsModule)],
    }),
  ],
  argTypes: {
    width: { control: 'select', options: ['small', 'medium', 'large'] },
    alert: { control: 'select', options: ['', 'error', 'warning', 'info', 'success'] },
  },
} as Meta;

export const AlertType: StoryObj = (args) => ({
  template: '<sds-dialog-alert-type></sds-dialog-alert-type>',
  props: args,
});
AlertType.parameters = {
  controls: {
    disable: true,
  },
  actions: { disable: true },
  preview: generateConfig('storybook/dialog/dialog-alert-type', 'DialogAlertTypeModule', 'sds-dialog-alert-type', [
    createCodePreviewTabData('storybook/dialog/dialog-alert-type/dialog-template.component.ts', 'ts', false),
    createCodePreviewTabData('storybook/dialog/dialog-alert-type/dialog-template.component.html', 'html', false),
  ]),
  stackblitzLink: generateStackblitzLink('dialog', 'alert-type'),
};
export const Nested: StoryObj = (args) => ({
  template: '<sds-dialog-nested></sds-dialog-nested>',
  props: args,
});
Nested.parameters = {
  controls: {
    disable: true,
  },
  actions: { disable: true },
  preview: generateConfig('storybook/dialog/dialog-nested', 'DialogNestedModule', 'sds-dialog-nested', [
    createCodePreviewTabData('storybook/dialog/dialog-nested/dialog-template.component.ts', 'ts', false),
    createCodePreviewTabData('storybook/dialog/dialog-nested/dialog-template.component.html', 'html', false),
    createCodePreviewTabData('storybook/dialog/dialog-nested/second-nested-dialog.component.ts', 'ts', false),
    createCodePreviewTabData('storybook/dialog/dialog-nested/second-nested-dialog.component.html', 'html', false),
  ]),
  stackblitzLink: generateStackblitzLink('dialog', 'nested'),
};
export const Width: StoryObj = (args) => ({
  template: '<sds-dialog-width></sds-dialog-width>',
  props: args,
});
Width.parameters = {
  controls: {
    disable: true,
  },
  actions: { disable: true },
  preview: generateConfig('storybook/dialog/dialog-width', 'DialogWidthModule', 'sds-dialog-width', [
    createCodePreviewTabData('storybook/dialog/dialog-width/dialog-template.component.ts', 'ts', false),
    createCodePreviewTabData('storybook/dialog/dialog-width/dialog-template.component.html', 'html', false),
  ]),
  stackblitzLink: generateStackblitzLink('dialog', 'width'),
};
export const DataReturn: StoryObj = (args) => ({
  template: '<sds-dialog-data-return></sds-dialog-data-return>',
  props: args,
});
DataReturn.parameters = {
  controls: {
    disable: true,
  },
  actions: { disable: true },
  preview: generateConfig('storybook/dialog/dialog-data-return', 'DialogDataReturnModule', 'sds-dialog-data-return', [
    createCodePreviewTabData('storybook/dialog/dialog-data-return/dialog-template.component.ts', 'ts', false),
    createCodePreviewTabData('storybook/dialog/dialog-data-return/dialog-template.component.html', 'html', false),
  ]),
  stackblitzLink: generateStackblitzLink('dialog', 'data-return'),
};
export const Policy: StoryObj = (args) => ({
  template: '<sds-dialog-policy></sds-dialog-policy>',
  props: args,
});
Policy.parameters = {
  controls: {
    disable: true,
  },
  actions: { disable: true },
  preview: generateConfig('storybook/dialog/dialog-policy', 'DialogDataReturnModule', 'sds-dialog-policy', [
    createCodePreviewTabData('storybook/dialog/dialog-policy/official-template.component.ts', 'ts', false),
    createCodePreviewTabData('storybook/dialog/dialog-policy/official-template.component.html', 'html', false),
  ]),
  stackblitzLink: generateStackblitzLink('dialog', 'policy'),
};

export const Introduction: StoryObj = (args) => ({
  template: '<sds-dialog-introduction></sds-dialog-introduction>',
  props: args,
});

Introduction.parameters = {
  options: { showPanel: false },
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  sdsCodePreview: { disable: true },
};

export const Configurable: StoryObj = (args) => ({
  template: `<sds-dialog-configurable [alert]="alert" [width]="width"></sds-dialog-configurable>`,
  props: args,
});

Configurable.parameters = {
  actions: { disable: true },
  sdsCodePreview: { disable: true },
};

Configurable.args = {
  width: 'small',
};

// export const __namedExportsOrder = [
//   'Introduction',
//   'Configurable',
//   'AlertType',
//   'DataReturn',
//   'Nested',
//   'Policy',
//   'Width',
// ];
