import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import { DocumentationComponentsSharedModule, DocumentationDemoList } from '../shared/index';
import { ComponentWrapperComponent } from '../../shared/component-wrapper/component-wrapper.component';
import { TreeTableBasicModule } from './demos/basic/tree-table-basic.module';
import { TreeTableBasicComponent } from './demos/basic/tree-table-basic.component';
import { TreeTableLinkToSbComponent } from './demos/tree-table-link-to-sb/tree-table-link-to-sb.component';
import { TreeTableLinkToSbModule } from './demos/tree-table-link-to-sb/tree-table-link-to-sb.module';
import { Routes } from '@angular/router';

declare var require: any;

const DEMOS = {
  linkToSb: {
    title: 'New Demos',
    type: TreeTableLinkToSbComponent,
    code: require('!!raw-loader!./demos/tree-table-link-to-sb/tree-table-link-to-sb.component'),
    module: require('!!raw-loader!./demos/tree-table-link-to-sb/tree-table-link-to-sb.module'),
    markup: require('!!raw-loader!./demos/tree-table-link-to-sb/tree-table-link-to-sb.component.html'),
    path: 'libs/documentation/src/lib/components/tree-table/demos/tree-table-link-to-sb',
  },
  basic: {
    title: 'Tree Table',
    type: TreeTableBasicComponent,
    code: require('!!raw-loader!./demos/basic/tree-table-basic.component'),
    module: require('!!raw-loader!./demos/basic/tree-table-basic.module'),
    markup: require('!!raw-loader!./demos/basic/tree-table-basic.component.html'),
    path: 'libs/documentation/src/lib/components/tree-table/demos/basic',
  },
};

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'examples' },
  {
    path: '',
    component: ComponentWrapperComponent,
    data: {
      items: [
        {
          pkg: 'components',
          type: 'components',
          name: 'SdsTreeTableComponent',
        },
      ],
    },
    children: [
      { path: 'examples', component: DocumentationExamplesPage },
      { path: 'api', component: DocumentationAPIPage },
      { path: 'source', component: DocumentationSourcePage },
      { path: 'template', component: DocumentationTemplatePage },
    ],
  },
];

@NgModule({
  imports: [CommonModule, DocumentationComponentsSharedModule, TreeTableBasicModule, TreeTableLinkToSbModule],
})
export class TreeTableModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('tree-table', DEMOS);
  }
}
