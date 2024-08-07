import { CommonModule } from '@angular/common';
import { provideAnimations } from '@angular/platform-browser/animations';
import { moduleMetadata, Meta, StoryObj, applicationConfig } from '@storybook/angular';
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
import { NavigationMode } from '@gsa-sam/components';

export default {
  title: 'Components/Selection Panel',
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        SelectionPanelIntroductionModule,
        SelectionPanelConfigurableModule,
        SelectionPanelSelectedModule,
        SelectionPanelModeModule,
        SelectionPanelChildrenModule,
      ],
    }),
    applicationConfig({
      providers: [provideAnimations()],
    }),
  ],
  argTypes: {},
} as Meta;

export const Introduction: StoryObj = (args) => ({
  template: `<sds-selection-panel-introduction></sds-selection-panel-introduction>`,
  props: {
    ...args,
  },
});
Introduction.parameters = {
  controls: { disable: true },
  actions: { disable: true },
  sdsCodePreview: { disable: true },
};

export const Configurable: StoryObj = (args) => ({
  template: `<sds-selection-panel-configurable [config]=model></sds-selection-panel-configurable>`,
  props: {
    ...args,
  },
  moduleMetadata: {
    imports: [RouterTestingModule],
  },
});
Configurable.args = {
  model: [
    {
      text: 'Contract Opportunities',
      route: '/',
      id: 'linkc1p1',
      mode: NavigationMode.INTERNAL,
    },
    {
      text: 'Contract Data',
      route: '/',
      id: 'linkc2p1',
      mode: NavigationMode.INTERNAL,
      selected: true,
    },
    {
      text: 'Federal Assistance',
      route: '/',
      queryParams: { item: 'Federal Assistance' },
      id: 'linkc3p1',
      mode: NavigationMode.INTERNAL,
    },
  ],
};
Configurable.parameters = {
  actions: { disable: true },
  sdsCodePreview: { disable: true },
};

export const Mode: StoryObj = (args) => ({
  template: `<sds-selection-panel-mode></sds-selection-panel-mode>`,
  props: {
    ...args,
  },
});
Mode.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
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

export const Children: StoryObj = (args) => ({
  template: `<sds-selection-panel-children></sds-selection-panel-children>`,
  props: {
    ...args,
  },
});
Children.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
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

export const Selected: StoryObj = (args) => ({
  template: `<sds-selection-panel-selected></sds-selection-panel-selected>`,
  props: {
    ...args,
  },
});
Selected.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
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
