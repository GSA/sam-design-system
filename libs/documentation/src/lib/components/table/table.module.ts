import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentWrapperComponent } from '../../shared/component-wrapper/component-wrapper.component';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import { DocumentationComponentsSharedModule, DocumentationDemoList } from '../shared';
import { TableBasicComponent } from './demos/table-basic/table-basic.component';
import { TableBasicModule } from './demos/table-basic/table-basic.module';
import { TableBorderlessComponent } from './demos/table-borderless/table-borderless.component';
import { TableBorderlessModule } from './demos/table-borderless/table-borderless.module';

export declare var require: any;

const DEMOS = {
  basic: {
    title: 'SAM Table', // Provide a title for this demo
    type: TableBasicComponent, // Component to use for this demo
    code: require('!!raw-loader!./demos/table-basic/table-basic.component'), // Source Tab Content
    markup: require('!!raw-loader!./demos/table-basic/table-basic.component.html'), // Template Tab Content
    path: 'libs/documentation/src/lib/components/table/demos/table-basic' // Path to demo for the Github link
  },
  borderless: {
    title: 'SAM Table Borderless', // Provide a title for this demo
    type: TableBorderlessComponent, // Component to use for this demo
    code: require('!!raw-loader!./demos/table-borderless/table-borderless.component'), // Source Tab Content
    markup: require('!!raw-loader!./demos/table-borderless/table-borderless.component.html'), // Template Tab Content
    path: 'libs/documentation/src/lib/components/table/demos/table-borderless' // Path to demo for the Github link
  }
 };

 export const ROUTES = [
  { path: '', pathMatch: 'full', redirectTo: 'examples' },
  {
    path: '',
    component: ComponentWrapperComponent,
    data: {
      items: [ // Defines what documentation to display on the API tab
        {
          pkg: 'material',
          type: 'components', // Within the compodocs, target the components section
          name: 'TableComponent'
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
    TableBorderlessModule
  ]
})
export class TableModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('table', DEMOS); // Register the component with the demo list (name must match the route name)
  }
}
