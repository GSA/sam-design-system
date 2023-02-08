import { CommonModule } from '@angular/common';
import { PaginationComponent } from '@gsa-sam/components';
import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { generateConfig, generateStackblitzLink } from 'libs/documentation/src/sandbox/sandbox-utils';
import { PaginationConfigurableModule } from './pagination-configurable/pagination-configurable.module';
import { PaginationDisplayModeModule } from './pagination-display-mode/pagination-display-mode.module';
import { PaginationIntroductionModule } from './pagination-introduction/pagination-introduction.module';
import { PaginationPageModule } from './pagination-page/pagination-page.module';
import { PaginationTotalItemsModule } from './pagination-total-items/pagination-total-items.module';

const disable = {
  table: {
    disable: true,
  },
};

export default {
  title: 'Components/Pagination',
  component: PaginationComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        PaginationConfigurableModule,
        PaginationDisplayModeModule,
        PaginationTotalItemsModule,
        PaginationPageModule,
        PaginationIntroductionModule,
      ],
    }),
  ],
  argTypes: {
    debounceTime: disable,
    options: disable,
    previousNumber: disable,
    timeoutNumber: disable,
    currentPageFocusOut: disable,
    handleInputOutsideBounds: disable,
    maintainPreviousValue: disable,
    nextPage: disable,
    ngOnInit: disable,
    onSelectChange: disable,
    previousPage: disable,
    valuechange: disable,
    currentPageField: disable,
    paginationConfiguration: disable,
    page: disable,
    totalItems: {
      if: { arg: 'displayMode', eq: 'results' },
    },
    id: {
      table: {
        category: 'paginationConfiguration',
      },
      control: {
        type: 'text',
      },
    },
    pageNumber: {
      table: {
        category: 'page',
      },
      control: {
        type: 'number',
      },
    },
    pageSize: {
      table: {
        category: 'page',
      },
      options: [25, 50, 100],
      control: {
        type: 'select',
      },
    },
    totalPages: {
      table: {
        category: 'page',
      },
      control: {
        type: 'number',
      },
    },
    pageChange: {
      action: 'pageChange',
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const pageFunction = (pageNumber?: number, pageSize?: number, totalPages?: number) => {
  return {
    pageNumber: pageNumber ?? 0,
    pageSize: pageSize ?? 0,
    totalPages: totalPages ?? 0,
  };
};

const Template: Story = (args) => {
  const { totalItems, id, pageNumber, pageSize, totalPages, displayMode } = args;
  const configuration = { id };
  const pageObj = pageFunction(pageNumber, pageSize, totalPages);
  return {
    template: `
    <sds-pagination-configurable
      [paginationConfiguration]=configuration
      [page]=pageObj
      [totalItems]=totalItems
      [displayMode]=displayMode
      (pageChange)="pageChange($event)"
    ></sds-pagination-configurable>
    `,
    props: {
      configuration,
      pageObj,
      totalItems,
      displayMode,
      ...args,
    },
  };
};

export const Configurable = Template.bind({});
Configurable.args = {
  id: 'top',
  pageNumber: 1,
  pageSize: 25,
  totalPages: 10,
  totalItems: 1,
};
Configurable.parameters = {
  preview: { disabled: true },
};

export const DisplayMode: Story = (args) => ({
  template: '<sds-pagination-display-mode></sds-pagination-display-mode>',
  props: args,
});
DisplayMode.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/pagination/pagination-display-mode',
    'PaginationDisplayModeModule',
    'sds-pagination-display-mode'
  ),
  stackblitzLink: generateStackblitzLink('pagination', 'display-mode'),
};

export const TotalItems: Story = (args) => ({
  template: '<sds-pagination-total-items></sds-pagination-total-items>',
  props: args,
});
TotalItems.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/pagination/pagination-total-items',
    'PaginationTotalItemsModule',
    'sds-pagination-total-items'
  ),
  stackblitzLink: generateStackblitzLink('pagination', 'total-items'),
};

export const Page: Story = (args) => ({
  template: '<sds-pagination-page></sds-pagination-page>',
  props: args,
});
Page.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig('storybook/pagination/pagination-page', 'PaginationPageModule', 'sds-pagination-page'),
  stackblitzLink: generateStackblitzLink('pagination', 'page'),
};

export const Introduction: Story = (args) => ({
  template: '<sds-pagination-introduction></sds-pagination-introduction>',
  props: args,
});
Introduction.parameters = {
  options: { showPanel: false },
};

export const __namedExportsOrder = ['Introduction', 'Configurable', 'DisplayMode', 'Page', 'TotalItems'];
