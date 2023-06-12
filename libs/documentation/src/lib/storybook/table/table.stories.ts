import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SdsSearchComponent, SdsSearchModule, SearchSettings } from '@gsa-sam/components';
import { SdsTableModule } from '@gsa-sam/sam-material-extensions';
import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { generateConfig, generateStackblitzLink } from 'libs/documentation/src/sandbox/sandbox-utils';
import { TableBasicModule } from './table-basic/table-basic.module';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
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

export default {
  title: 'Components/Table',
  component: SdsSearchComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        CommonModule,
        RouterTestingModule,
        NoopAnimationsModule,
        NgxBootstrapIconsModule.pick({uswdsAdd, dash}),
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
      ],
    }),
  ],
  argTypes: {},
} as Meta;

export const Basic: Story = (args) => ({
  template: `<sds-table-basic></sds-table-basic>`,
  props: args,
});
Basic.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig('storybook/table/table-basic', 'TableBasicModule', 'sds-table-basic'),
  stackblitzLink: generateStackblitzLink('table', 'basic'),
};

export const Sorting: Story = (args) => ({
  template: `<sds-table-sorting></sds-table-sorting>`,
  props: args,
});
Sorting.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig('storybook/table/table-sorting', 'TableSortingModule', 'sds-table-sorting'),
  stackblitzLink: generateStackblitzLink('table', 'sorting'),
};

export const Pagination: Story = (args) => ({
  template: `<sds-table-pagination></sds-table-pagination>`,
  props: args,
});
Pagination.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig('storybook/table/table-pagination', 'TablePaginationModule', 'sds-table-pagination'),
  stackblitzLink: generateStackblitzLink('table', 'pagination'),
};

export const StickyHeader: Story = (args) => ({
  template: `<sds-table-sticky-header></sds-table-sticky-header>`,
  props: args,
});
StickyHeader.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig('storybook/table/table-sticky-header', 'TableStickyHeaderModule', 'sds-table-sticky-header'),
  stackblitzLink: generateStackblitzLink('table', 'sticky-header'),
};

export const StickyFooter: Story = (args) => ({
  template: `<sds-table-sticky-footer></sds-table-sticky-footer>`,
  props: args,
});
StickyFooter.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig('storybook/table/table-sticky-footer', 'TableStickyFooterModule', 'sds-table-sticky-footer'),
  stackblitzLink: generateStackblitzLink('table', 'sticky-footer'),
};

export const StickyColumn: Story = (args) => ({
  template: `<sds-table-sticky-column></sds-table-sticky-column>`,
  props: args,
});
StickyColumn.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig('storybook/table/table-sticky-column', 'TableStickyColumnModule', 'sds-table-sticky-column'),
  stackblitzLink: generateStackblitzLink('table', 'sticky-column'),
};

export const Expansion: Story = (args) => ({
  template: `<sds-table-expansion></sds-table-expansion>`,
  props: args,
});
Expansion.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig('storybook/table/table-expansion', 'TableExpansionModule', 'sds-table-expansion'),
  stackblitzLink: generateStackblitzLink('table', 'expansion'),
};

export const CustomFooter: Story = (args) => ({
  template: `<sds-table-custom-footer></sds-table-custom-footer>`,
  props: args,
});
CustomFooter.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig('storybook/table/table-custom-footer', 'TableCustomFooterModule', 'sds-table-custom-footer'),
  stackblitzLink: generateStackblitzLink('table', 'custom-footer'),
};

export const UserInteraction: Story = (args) => ({
  template: `<sds-table-user-interaction></sds-table-user-interaction>`,
  props: args,
});
UserInteraction.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig('storybook/table/table-user-interaction', 'TableUserInteractionModule', 'sds-table-user-interaction'),
  stackblitzLink: generateStackblitzLink('table', 'user-interaction'),
};

export const ChangeData: Story = (args) => ({
  template: `<sds-table-change-data></sds-table-change-data>`,
  props: args,
});
ChangeData.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig('storybook/table/table-change-data', 'TableChangeDataModule', 'sds-table-change-data'),
  stackblitzLink: generateStackblitzLink('table', 'change-data'),
};

export const HighlightRow: Story = (args) => ({
  template: `<sds-table-highlight-row></sds-table-highlight-row>`,
  props: args,
});
HighlightRow.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig('storybook/table/table-highlight-row', 'TableHighlightRowModule', 'sds-table-highlight-row'),
  stackblitzLink: generateStackblitzLink('table', 'highlight-row'),
};

export const RowClicked: Story = (args) => ({
  template: `<sds-table-row-clicked></sds-table-row-clicked>`,
  props: args,
});
RowClicked.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig('storybook/table/table-row-clicked', 'TableRowClickedModule', 'sds-table-row-clicked'),
  stackblitzLink: generateStackblitzLink('table', 'row-clicked'),
};
