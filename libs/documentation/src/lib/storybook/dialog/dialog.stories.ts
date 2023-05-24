import { CommonModule } from '@angular/common';
import { moduleMetadata, Meta, Story } from '@storybook/angular';
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
      ],
    }),
  ],
  argTypes: {
    width: { control: 'select', options: ['small', 'medium', 'large'] },
    alert: { control: 'select', options: ['', 'error', 'warning', 'info', 'success'] },
  },
} as Meta;

export const AlertType: Story = (args) => ({
  template: '<sds-dialog-alert-type></sds-dialog-alert-type>',
  props: args,
});
AlertType.parameters = {
  controls: {
    disabled: true,
  },
  actions: { disabled: true },
  preview: generateConfig('storybook/dialog/dialog-alert-type', 'DialogAlertTypeModule', 'sds-dialog-alert-type', [
    createCodePreviewTabData('storybook/dialog/dialog-alert-type/dialog-template.component.ts', 'ts', false),
    createCodePreviewTabData('storybook/dialog/dialog-alert-type/dialog-template.component.html', 'html', false),
  ]),
  stackblitzLink: generateStackblitzLink('dialog', 'alert-type'),
};
export const Nested: Story = (args) => ({
  template: '<sds-dialog-nested></sds-dialog-nested>',
  props: args,
});
Nested.parameters = {
  controls: {
    disabled: true,
  },
  actions: { disabled: true },
  preview: generateConfig('storybook/dialog/dialog-nested', 'DialogNestedModule', 'sds-dialog-nested', [
    createCodePreviewTabData('storybook/dialog/dialog-nested/dialog-template.component.ts', 'ts', false),
    createCodePreviewTabData('storybook/dialog/dialog-nested/dialog-template.component.html', 'html', false),
    createCodePreviewTabData('storybook/dialog/dialog-nested/second-nested-dialog.component.ts', 'ts', false),
    createCodePreviewTabData('storybook/dialog/dialog-nested/second-nested-dialog.component.html', 'html', false),
  ]),
  stackblitzLink: generateStackblitzLink('dialog', 'nested'),
};
export const Width: Story = (args) => ({
  template: '<sds-dialog-width></sds-dialog-width>',
  props: args,
});
Width.parameters = {
  controls: {
    disabled: true,
  },
  actions: { disabled: true },
  preview: generateConfig('storybook/dialog/dialog-width', 'DialogWidthModule', 'sds-dialog-width', [
    createCodePreviewTabData('storybook/dialog/dialog-width/dialog-template.component.ts', 'ts', false),
    createCodePreviewTabData('storybook/dialog/dialog-width/dialog-template.component.html', 'html', false),
  ]),
  stackblitzLink: generateStackblitzLink('dialog', 'width'),
};
export const DataReturn: Story = (args) => ({
  template: '<sds-dialog-data-return></sds-dialog-data-return>',
  props: args,
});
DataReturn.parameters = {
  controls: {
    disabled: true,
  },
  actions: { disabled: true },
  preview: generateConfig('storybook/dialog/dialog-data-return', 'DialogDataReturnModule', 'sds-dialog-data-return', [
    createCodePreviewTabData('storybook/dialog/dialog-data-return/dialog-template.component.ts', 'ts', false),
    createCodePreviewTabData('storybook/dialog/dialog-data-return/dialog-template.component.html', 'html', false),
  ]),
  stackblitzLink: generateStackblitzLink('dialog', 'data-return'),
};

export const Introduction: Story = (args) => ({
  template: '<sds-dialog-introduction></sds-dialog-introduction>',
  props: args,
});

Introduction.parameters = {
  options: { showPanel: false },
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: { disabled: true },
};

export const Configurable: Story = (args) => ({
  template: `<sds-dialog-configurable [alert]="alert" [width]="width"></sds-dialog-configurable>`,
  props: args,
});

Configurable.parameters = {
  actions: { disabled: true },
  preview: { disabled: true },
};

Configurable.args = {
  width: 'small',
};

export const __namedExportsOrder = ['Introduction', 'Configurable', 'AlertType', 'DataReturn', 'Nested', 'Width'];
