import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { moduleMetadata, Meta, Story } from '@storybook/angular';
import {
  createCodePreviewTabData,
  generateConfig,
  generateStackblitzLink,
} from 'libs/documentation/src/sandbox/sandbox-utils';
import { SelectionPanelConfigurableModule } from './selection-panel-configurable/selection-panel-configurable.module';
import { SelectionPanelIntroductionModule } from './selection-panel-introduction/selection-panel-introduction.module';
import { RouterTestingModule } from '@angular/router/testing';
import { SelectionPanelSelectedModule } from './selection-panel-selected/selection-panel-selected.module';
import { SelectionPanelModeModule } from './selection-panel-mode/selection-panel-mode.module';
import { SelectionPanelChildrenModule } from './selection-panel-children/selection-panel-children.module';

export default {
  title: 'Components/Selection Panel',
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        NoopAnimationsModule,
        SelectionPanelIntroductionModule,
        SelectionPanelConfigurableModule,
        SelectionPanelSelectedModule,
        SelectionPanelModeModule,
        SelectionPanelChildrenModule,
      ],
    }),
  ],
  argTypes: {},
} as Meta;

export const Introduction: Story = (args) => ({
  template: `<sds-selection-panel-introduction></sds-selection-panel-introduction>`,
  props: {
    ...args,
  },
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
  template: `<sds-selection-panel-configurable></sds-selection-panel-configurable>`,
  props: {
    ...args,
  },
  moduleMetadata: {
    imports: [RouterTestingModule],
  },
});
Configurable.parameters = {
  actions: { disabled: true },
  preview: { disabled: true },
};

export const Mode: Story = (args) => ({
  template: `<sds-selection-panel-mode></sds-selection-panel-mode>`,
  props: {
    ...args,
  },
});
Mode.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/selection-panel/selection-panel-mode',
    'SelectionPanelModeModule',
    'sds-selection-panel-mode',
    [
      createCodePreviewTabData(
        'storybook/selection-panel/selection-panel-mode/selection-panel-mode.config.ts',
        'ts',
        false
      ),
    ]
  ),
  stackblitzLink: generateStackblitzLink('selection-panel', 'mode'),
};

export const Children: Story = (args) => ({
  template: `<sds-selection-panel-children></sds-selection-panel-children>`,
  props: {
    ...args,
  },
});
Children.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/selection-panel/selection-panel-children',
    'SelectionPanelChildrenModule',
    'sds-selection-panel-children',
    [
      createCodePreviewTabData(
        'storybook/selection-panel/selection-panel-children/selection-panel-children.config.ts',
        'ts',
        false
      ),
    ]
  ),
  stackblitzLink: generateStackblitzLink('selection-panel', 'children'),
};

export const Selected: Story = (args) => ({
  template: `<sds-selection-panel-selected></sds-selection-panel-selected>`,
  props: {
    ...args,
  },
});
Selected.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/selection-panel/selection-panel-selected',
    'SelectionPanelSelectedModule',
    'sds-selection-panel-selected',
    [
      createCodePreviewTabData(
        'storybook/selection-panel/selection-panel-selected/selection-panel-selected.config.ts',
        'ts',
        false
      ),
    ]
  ),
  stackblitzLink: generateStackblitzLink('selection-panel', 'selected'),
};
