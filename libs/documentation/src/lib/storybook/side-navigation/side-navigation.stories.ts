import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { moduleMetadata, Meta, Story } from '@storybook/angular';
import {
  createCodePreviewTabData,
  generateConfig,
  generateStackblitzLink,
} from 'libs/documentation/src/sandbox/sandbox-utils';
import { RouterTestingModule } from '@angular/router/testing';
import { NavigationMode } from '@gsa-sam/components';
import { SideNavigationIntroductionModule } from './side-navigation-introduction/side-navigation-introduction.module';
import { SideNavigationFiltersModule } from './side-navigation-filters/side-navigation-filters.module';

export default {
  title: 'Components/Side Navigation',
  decorators: [
    moduleMetadata({
      imports: [CommonModule, NoopAnimationsModule, SideNavigationIntroductionModule, SideNavigationFiltersModule],
    }),
  ],
  argTypes: {},
} as Meta;

export const Introduction: Story = (args) => ({
  template: `<sds-side-navigation-introduction></sds-side-navigation-introduction>`,
  props: {
    ...args,
  },
});
Introduction.parameters = {
  options: { showPanel: false },
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: { disable: true },
};

export const Filters: Story = (args) => ({
  template: `<sds-side-navigation-filters></sds-side-navigation-filters>`,
  props: {
    ...args,
  },
});
Filters.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/side-navigation/side-navigation-filters',
    'SideNavigationFiltersModule',
    'side-navigation-filters',
    [
      createCodePreviewTabData(
        'storybook/side-navigation/side-navigation-filters/side-navigation-filters.config.ts',
        'ts',
        false
      ),
    ]
  ),
  stackblitzLink: generateStackblitzLink('sds-side-navigation', 'filters'),
};

export const __namedExportsOrder = ['Introduction', 'Filters'];
