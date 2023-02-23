import { CommonModule } from "@angular/common";
import { SdsTreeTableComponent } from "@gsa-sam/components";
import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { createCodePreviewTabData, generateConfig, generateStackblitzLink } from "libs/documentation/src/sandbox/sandbox-utils";
import { TreeTableBasicModule } from "./tree-table-basic/tree-table-basic.module";
import { TreeTableConfigurableModule } from "./tree-table-configurable/tree-table-configurable.module";
import { TreeTableIntroductionModule } from "./tree-table-introduction/tree-table-introduction.module";
import { TreeTableProgrammaticControlModule } from "./tree-table-programmatic-control/tree-table-programmatic-control.module";

const disable = {
  table: {
    disable: true,
  },
};

export default {
  title: 'Components/Tree Table',
  component: SdsTreeTableComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        TreeTableProgrammaticControlModule,
        TreeTableIntroductionModule,
        TreeTableConfigurableModule,
        TreeTableBasicModule
      ],
    }),
  ],
  argTypes: {
    _selectedRow: disable,
    _selectedRowParent: disable,
    cdr: disable,
    rowExpanded: {
      action: 'rowToggled',
      table: {
        disable: true,
      },
    },
    viewAll: {
      action: 'viewAll',
      table: {
        disable: true,
      },
    },
    collapseAll: disable,
    collapseRow: disable,
    collapseRowHelper: disable,
    displayVerticalBorder: disable,
    expandAll: disable,
    expandRow: disable,
    expandRowHelper: disable,
    findRow: disable,
    getParentOfRow: disable,
    getTemplateContext: disable,
    onKeyDown: disable,
    onRowClicked: disable,
    setHeight: disable,
    toggleAllHelper: disable,
    viewAllClicked: disable,
    treetableRow: disable,
    dataSource: disable,
  },
} as Meta;

export const Introduction: Story = (args) => ({
  template: '<sds-tree-table-introduction></sds-tree-table-introduction>',
  props: args,
});
Introduction.parameters = {
  options: { showPanel: false },
};

export const Configurable: Story = (args) => ({
  template: `<sds-tree-table-configurable
    [childrenLimit]=childrenLimit
    [numChildrenToDisplay]=numChildrenToDisplay
    [displayColumns]=displayColumns
    (viewAll)="viewAll($event)"
    (rowExpanded)="rowExpanded($event)"
  ></sds-tree-table-configurable>`,
  props: args,
});
Configurable.parameters = {
  preview: { disabled: true },
};
Configurable.args = {
  childrenLimit: 10,
  numChildrenToDisplay: 5,
  displayColumns: ['Title', 'Description', 'Year']
}

export const Basic: Story = (args) => ({
  template: `<sds-tree-table-basic
    (viewAll)="viewAll($event)"
    (rowExpanded)="rowExpanded($event)"
  ></sds-tree-table-basic>`,
  props: args,
});
Basic.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  preview: generateConfig(
    'storybook/tree-table/tree-table-basic',
    'TreeTableBasicModule',
    'sds-tree-table-modes',
    [createCodePreviewTabData('storybook/tree-table/services/TreeTableData.ts', 'ts', false)]
  ),
  stackblitzLink: generateStackblitzLink('tree-table', 'basic'),
};

export const ProgrammaticControl: Story = (args) => ({
  template: '<sds-tree-table-programmatic-control></sds-tree-table-programmatic-control>',
  props: args,
});
ProgrammaticControl.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/tree-table/tree-table-programmatic-control',
    'TreeTableProgrammaticControlModule',
    'sds-tree-table-modes',
    [createCodePreviewTabData('storybook/tree-table/services/TreeTableData.ts', 'ts', false)]
  ),
  stackblitzLink: generateStackblitzLink('tree-table', 'programmatic-control'),
};

export const __namedExportsOrder = ['Introduction', 'Configurable', 'Basic', 'ProgrammaticControl'];
