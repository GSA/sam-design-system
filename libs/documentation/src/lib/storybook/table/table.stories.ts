import { CommonModule } from '@angular/common';
import { moduleMetadata, Meta, StoryObj, applicationConfig } from '@storybook/angular';
import {
  createCodePreviewTabData,
  generateConfig,
  generateStackblitzLink,
} from 'libs/documentation/src/sandbox/sandbox-utils';
import { TableBasicModule } from './table-basic/table-basic.module';
import { RouterTestingModule } from '@angular/router/testing';
import { provideAnimations } from '@angular/platform-browser/animations';
import { TableSortingModule } from './table-sorting/table-sorting.module';
import { TablePaginationModule } from './table-pagination/table-pagination.module';
import { TableStickyHeaderModule } from './table-sticky-header/table-sticky-header.module';
import { TableStickyFooterModule } from './table-sticky-footer/table-sticky-footer.module';
import { TableStickyColumnModule } from './table-sticky-column/table-sticky-column.module';
import { TableExpansionModule } from './table-expansion/table-expansion.module';
import { NgxBootstrapIconsModule, dash } from 'ngx-bootstrap-icons';
import { uswdsAdd } from '@gsa-sam/ngx-uswds-icons';
import { TableCustomFooterModule } from './table-custom-footer/table-custom-footer.module';
import { TableUserInteractionModule } from './table-user-interaction/table-user-interaction.module';
import { TableChangeDataModule } from './table-change-data/table-change-data.module';
import { TableHighlightRowModule } from './table-highlight-row/table-highlight-row.module';
import { TableRowClickedModule } from './table-row-clicked/table-row-clicked.module';
import { TableIntroductionModule } from './table-introduction/table-introduction.module';
import { TableCustomClassesModule } from './table-custom-classes/table-custom-classes.module';
import { TableHeaderColorModule } from './table-header-color/table-header-color.module';

export default {
  title: 'Components/Table',
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        CommonModule,
        RouterTestingModule,
        NgxBootstrapIconsModule.pick({ uswdsAdd, dash }),
        TableBasicModule,
        TableSortingModule,
        TablePaginationModule,
        TableStickyHeaderModule,
        TableStickyFooterModule,
        TableStickyColumnModule,
        TableExpansionModule,
        TableCustomFooterModule,
        TableUserInteractionModule,
        TableChangeDataModule,
        TableHighlightRowModule,
        TableRowClickedModule,
        TableIntroductionModule,
        TableCustomClassesModule,
        TableHeaderColorModule
      ],
    }),
    applicationConfig({
      providers: [provideAnimations()],
    }),
  ],
  argTypes: {},
} as Meta;

export const Basic: StoryObj = (args) => ({
  template: `<sds-table-basic></sds-table-basic>`,
  props: args,
});
Basic.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig('storybook/table/table-basic', 'TableBasicModule', 'sds-table-basic'),
  stackblitzLink: generateStackblitzLink('table', 'basic'),
};

export const Sorting: StoryObj = (args) => ({
  template: `<sds-table-sorting></sds-table-sorting>`,
  props: args,
});
Sorting.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig('storybook/table/table-sorting', 'TableSortingModule', 'sds-table-sorting'),
  stackblitzLink: generateStackblitzLink('table', 'sorting'),
};

export const Pagination: StoryObj = (args) => ({
  template: `<sds-table-pagination></sds-table-pagination>`,
  props: args,
});
Pagination.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig('storybook/table/table-pagination', 'TablePaginationModule', 'sds-table-pagination', [
    createCodePreviewTabData('storybook/table/table-pagination/data.ts', 'ts', false),
  ]),
  stackblitzLink: generateStackblitzLink('table', 'pagination'),
};

export const StickyHeader: StoryObj = (args) => ({
  template: `<sds-table-sticky-header></sds-table-sticky-header>`,
  props: args,
});
StickyHeader.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig('storybook/table/table-sticky-header', 'TableStickyHeaderModule', 'sds-table-sticky-header'),
  stackblitzLink: generateStackblitzLink('table', 'sticky-header'),
};

export const StickyFooter: StoryObj = (args) => ({
  template: `<sds-table-sticky-footer></sds-table-sticky-footer>`,
  props: args,
});
StickyFooter.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig('storybook/table/table-sticky-footer', 'TableStickyFooterModule', 'sds-table-sticky-footer'),
  stackblitzLink: generateStackblitzLink('table', 'sticky-footer'),
};

export const StickyColumn: StoryObj = (args) => ({
  template: `<sds-table-sticky-column></sds-table-sticky-column>`,
  props: args,
});
StickyColumn.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig('storybook/table/table-sticky-column', 'TableStickyColumnModule', 'sds-table-sticky-column'),
  stackblitzLink: generateStackblitzLink('table', 'sticky-column'),
};

export const Expansion: StoryObj = (args) => ({
  template: `<sds-table-expansion></sds-table-expansion>`,
  props: args,
});
Expansion.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig('storybook/table/table-expansion', 'TableExpansionModule', 'sds-table-expansion'),
  stackblitzLink: generateStackblitzLink('table', 'expansion'),
};

export const CustomFooter: StoryObj = (args) => ({
  template: `<sds-table-custom-footer></sds-table-custom-footer>`,
  props: args,
});
CustomFooter.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig('storybook/table/table-custom-footer', 'TableCustomFooterModule', 'sds-table-custom-footer'),
  stackblitzLink: generateStackblitzLink('table', 'custom-footer'),
};

export const UserInteraction: StoryObj = (args) => ({
  template: `<sds-table-user-interaction></sds-table-user-interaction>`,
  props: args,
});
UserInteraction.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/table/table-user-interaction',
    'TableUserInteractionModule',
    'sds-table-user-interaction'
  ),
  stackblitzLink: generateStackblitzLink('table', 'user-interaction'),
};

export const ChangeData: StoryObj = (args) => ({
  template: `<sds-table-change-data></sds-table-change-data>`,
  props: args,
});
ChangeData.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig('storybook/table/table-change-data', 'TableChangeDataModule', 'sds-table-change-data'),
  stackblitzLink: generateStackblitzLink('table', 'change-data'),
};

export const HighlightRow: StoryObj = (args) => ({
  template: `<sds-table-highlight-row></sds-table-highlight-row>`,
  props: args,
});
HighlightRow.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig('storybook/table/table-highlight-row', 'TableHighlightRowModule', 'sds-table-highlight-row'),
  stackblitzLink: generateStackblitzLink('table', 'highlight-row'),
};

export const RowClicked: StoryObj = (args) => ({
  template: `<sds-table-row-clicked></sds-table-row-clicked>`,
  props: args,
});
RowClicked.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig('storybook/table/table-row-clicked', 'TableRowClickedModule', 'sds-table-row-clicked'),
  stackblitzLink: generateStackblitzLink('table', 'row-clicked'),
};

export const CustomClasses: StoryObj = (args) => ({
  template: `<sds-table-custom-classes></sds-table-custom-classes>`,
  props: args,
});
CustomClasses.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/table/table-custom-classes',
    'TableCustomClassesModule',
    'sds-table-custom-classes'
  ),
  stackblitzLink: generateStackblitzLink('table', 'custom-classes'),
};

export const HeaderColor: StoryObj = (args) => ({
  template: `<sds-table-header-color></sds-table-header-color>`,
  props: args,
});
HeaderColor.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/table/table-header-color',
    'TableHeaderColorModule',
    'sds-table-header-color'
  ),
  stackblitzLink: generateStackblitzLink('table', 'header-color'),
};

export const Introduction: StoryObj = (args) => ({
  template: `<sds-table-introduction></sds-table-introduction>`,
  props: args,
});
Introduction.parameters = {
  controls: { disable: true },
  actions: { disable: true },
  sdsCodePreview: { disable: true },
};
