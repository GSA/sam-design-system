import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentWrapperComponent } from '../../shared/component-wrapper/component-wrapper.component';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import { DocumentationComponentsSharedModule, DocumentationDemoList } from '../shared';
import { TableBasicComponent } from './demos/basic/basic.component';
import { TableBasicModule } from './demos/basic/basic.module';
import { TableBorderlessComponent } from './demos/borderless/borderless.component';
import { TableBorderlessModule } from './demos/borderless/borderless.module';
import { TableSortComponent } from './demos/sort/sort.component';
import { TableSortModule } from './demos/sort/sort.module';
import { TableStickyComponent } from './demos/sticky/sticky.component';
import { TableStickyModule } from './demos/sticky/sticky.module';
import { TableFullComponent } from './demos/full/full.component';
import { TableFullModule } from './demos/full/full.module';
import { TablePaginationComponent } from './demos/pagination/pagination.component';
import { TablePaginationModule } from './demos/pagination/pagination.module';

export declare var require: any;

const DEMOS = {
  basic: {
    title: 'Basic', // Title
    type: TableBasicComponent, // Component
    code: require('!!raw-loader!./demos/basic/basic.component'), // Source Tab Content
    markup: require('!!raw-loader!./demos/basic/basic.component.html'), // Template Tab Content
    path: 'libs/documentation/src/lib/components/table/demos/basic' // Path to demo for the Github link
  },
  borderless: {
    title: 'Borderless', // Title
    type: TableBorderlessComponent, // Component
    code: require('!!raw-loader!./demos/borderless/borderless.component'), // Source Tab Content
    markup: require('!!raw-loader!./demos/borderless/borderless.component.html'), // Template Tab Content
    path: 'libs/documentation/src/lib/components/table/demos/borderless' // Path to demo for the Github link
  },
  sort: {
    title: 'Sorting', // Title
    type: TableSortComponent, // Component
    code: require('!!raw-loader!./demos/sort/sort.component'), // Source Tab Content
    markup: require('!!raw-loader!./demos/sort/sort.component.html'), // Template Tab Content
    path: 'libs/documentation/src/lib/components/table/demos/sort' // Path to demo for the Github link
  },
  pagination: {
    title: 'Pagination', // Title
    type: TablePaginationComponent, // Component
    code: require('!!raw-loader!./demos/pagination/pagination.component'), // Source Tab Content
    markup: require('!!raw-loader!./demos/pagination/pagination.component.html'), // Template Tab Content
    path: 'libs/documentation/src/lib/components/table/demos/pagination' // Path to demo for the Github link
  },
  sticky: {
    title: 'Sticky Header, Footer, or Columns', // Title
    type: TableStickyComponent, // Component
    code: require('!!raw-loader!./demos/sticky/sticky.component'), // Source Tab Content
    markup: require('!!raw-loader!./demos/sticky/sticky.component.html'), // Template Tab Content
    path: 'libs/documentation/src/lib/components/table/demos/sticky' // Path to demo for the Github link
  },
  full: {
    title: 'Kitchen Sink', // Title
    type: TableFullComponent, // Component
    code: require('!!raw-loader!./demos/full/full.component'), // Source Tab Content
    markup: require('!!raw-loader!./demos/full/full.component.html'), // Template Tab Content
    path: 'libs/documentation/src/lib/components/table/demos/full' // Path to demo for the Github link
  },
};

export const ROUTES = [
  { path: '', pathMatch: 'full', redirectTo: 'examples' },
  {
    path: '',
    component: ComponentWrapperComponent,
    data: {
      readme: {
      },
      items: [ // Defines what documentation to display on the API tab
        {
          pkg: 'material',
          type: 'components', // Within the compodocs, target the components section
          name: 'SdsTableComponent'
        }
      ]
    },
    children: [ // You can omit any tab sections by removing the child routes here
      { path: 'examples', component: DocumentationExamplesPage },
      { path: 'api', component: DocumentationAPIPage },
      { path: 'source', component: DocumentationSourcePage },
      { path: 'template', component: DocumentationTemplatePage }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DocumentationComponentsSharedModule,
    TableBasicModule,
    TableBorderlessModule,
    TableSortModule,
    TableStickyModule,
    TableFullModule,
    TablePaginationModule
  ]
})

export class TableModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('table', DEMOS); // Register the component with the demo list
  }
}
