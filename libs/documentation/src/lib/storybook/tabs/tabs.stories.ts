import { CommonModule } from '@angular/common';
import { QueryList } from '@angular/core';
import { TabsComponent } from '@gsa-sam/components';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { generateConfig, generateStackblitzLink } from 'libs/documentation/src/sandbox/sandbox-utils';
import { TabsAutomaticActivationModule } from './tabs-automatic-activation/tabs-automatic-activation.module';
import { TabsConfigurableModule } from './tabs-configurable/tabs-configurable.module';
import { TabsCustomClassesModule } from './tabs-custom-classes/tabs-custom-classes.module';
import { TabsCustomHeaderModule } from './tabs-custom-header/tabs-custom-header.module';
import { TabsDisabledModule } from './tabs-disabled/tabs-disabled.module';
import { TabsIntroductionModule } from './tabs-introduction/tabs-introduction.module';
import { TabsPreChangeEventModule } from './tabs-pre-change-event/tabs-pre-change-event.module';
import { TabsSelectedTabModule } from './tabs-selected-tab/tabs-selected-tab.module';
const disable = {
  table: {
    disable: true,
  },
};
export default {
  title: 'Components/Tabs',
  component: TabsComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        TabsConfigurableModule,
        TabsIntroductionModule,
        TabsPreChangeEventModule,
        TabsDisabledModule,
        TabsCustomHeaderModule,
        TabsAutomaticActivationModule,
        TabsCustomClassesModule,
        TabsSelectedTabModule,
      ],
    }),
  ],
  argTypes: {
    preTabChange: disable,
    selectedTabChange: disable,
    changeSelectedTabPanel: disable,
    getNextTabLeft: disable,
    getNextTabRight: disable,
    isObj: disable,
    ngAfterContentInit: disable,
    ngOnChanges: disable,
    ngOnInit: disable,
    onKeyDown: disable,
    onTabClicked: disable,
    tabPanels: disable,
    focusedTab: disable,
    selectedTab: {
      options: ['Tab 1', 'Tab 2'],
      control: { type: 'select' },
    },
  },
} as Meta;

export const Introduction: Story = (args) => ({
  template: `<sds-tabs-introduction></sds-tabs-introduction>`,
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
  template: `<sds-tabs-configurable
    [automaticActivation]=automaticActivation
    [tabClass]=tabClass
    [interceptTabChange]=interceptTabChange
    [selectedTab]=selectedTab
  ></sds-tabs-configurable>`,
  props: {
    ...args,
  },
});
Configurable.parameters = {
  preview: { disabled: true },
  actions: { disabled: true },
};

export const AutomaticActivation: Story = (args) => ({
  template: `<sds-tabs-automatic-activation></sds-tabs-automatic-activation>`,
  props: {
    ...args,
  },
});
AutomaticActivation.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/tabs/tabs-automatic-activation',
    'TabsAutomaticActivationModule',
    'sds-tabs-automatic-activation'
  ),
  stackblitzLink: generateStackblitzLink('tabs', 'automatic-activation'),
};

export const CustomHeader: Story = (args) => ({
  template: `<sds-tabs-custom-header></sds-tabs-custom-header>`,
  props: {
    ...args,
  },
});
CustomHeader.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig('storybook/tabs/tabs-custom-header', 'TabsCustomHeaderModule', 'sds-tabs-custom-header'),
  stackblitzLink: generateStackblitzLink('tabs', 'custom-header'),
};

export const Disabled: Story = (args) => ({
  template: `<sds-tabs-disabled></sds-tabs-disabled>`,
  props: {
    ...args,
  },
});
Disabled.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig('storybook/tabs/tabs-disabled', 'TabsDisabledModule', 'sds-tabs-disabled'),
  stackblitzLink: generateStackblitzLink('tabs', 'disabled'),
};

export const PreChangeEvent: Story = (args) => ({
  template: `<sds-tabs-pre-change-event></sds-tabs-pre-change-event>`,
  props: {
    ...args,
  },
});
PreChangeEvent.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/tabs/tabs-pre-change-event',
    'TabsPreChangeEventModule',
    'sds-tabs-pre-change-event'
  ),
  stackblitzLink: generateStackblitzLink('tabs', 'pre-change-event'),
};

export const CustomClasses: Story = (args) => ({
  template: `<sds-tabs-custom-classes></sds-tabs-custom-classes>`,
  props: {
    ...args,
  },
});
CustomClasses.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig('storybook/tabs/tabs-custom-classes', 'TabsCustomClassesModule', 'sds-tabs-custom-classes'),
  stackblitzLink: generateStackblitzLink('tabs', 'custom-classes'),
};

export const SelectedTab: Story = (args) => ({
  template: `<sds-tabs-selected-tab></sds-tabs-selected-tab>`,
  props: {
    ...args,
  },
});
SelectedTab.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig('storybook/tabs/tabs-selected-tab', 'TabsSelectedTabModule', 'sds-tabs-selected-tab'),
  stackblitzLink: generateStackblitzLink('tabs', 'selected-tab'),
};

export const __namedExportsOrder = [
  'Introduction',
  'Configurable',
  'AutomaticActivation',
  'CustomClasses',
  'CustomHeader',
  'Disabled',
  'PreChangeEvent',
  'SelectedTab',
];
