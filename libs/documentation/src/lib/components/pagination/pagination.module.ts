import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationBasic } from './demos/basic/pagination-basic.component';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import {
  DocumentationComponentsSharedModule,
  DocumentationDemoList
} from '../shared/index';
import { ComponentWrapperComponent } from '../../shared/component-wrapper/component-wrapper.component';
import { PaginationBasicModule } from './demos/basic/pagination-basic.module';

declare var require: any;
const DEMOS = {
  basic: {
    title: 'Pagination',
    type: PaginationBasic,
    code: require('!!raw-loader!./demos/basic/pagination-basic.component'),
    markup: require('!!raw-loader!./demos/basic/pagination-basic.component.html'),
    path: 'libs/documentation/src/lib/components/pagination/demos/basic'
  }
};

export const ROUTES = [
  { path: '', pathMatch: 'full', redirectTo: 'examples' },
  {
    path: '',
    component: ComponentWrapperComponent,
    data: {
      items: [
        {
          pkg: 'components',
          type: 'components',
          name: 'PaginationComponent'
        }
      ]
    },
    children: [
      { path: 'examples', component: DocumentationExamplesPage },
      { path: 'api', component: DocumentationAPIPage },
      { path: 'source', component: DocumentationSourcePage },
      { path: 'template', component: DocumentationTemplatePage }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    DocumentationComponentsSharedModule,
    PaginationBasicModule
  ]
})
export class PaginationModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('pagination', DEMOS);
  }
}
