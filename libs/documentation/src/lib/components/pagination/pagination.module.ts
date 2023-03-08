import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationBasic } from './demos/basic/pagination-basic.component';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import { DocumentationComponentsSharedModule, DocumentationDemoList } from '../shared/index';
import { ComponentWrapperComponent } from '../../shared/component-wrapper/component-wrapper.component';
import { PaginationBasicModule } from './demos/basic/pagination-basic.module';
import { PaginationLinkToSbComponent } from './demos/pagination-link-to-sb/pagination-link-to-sb.component';
import { Routes } from '@angular/router';

declare var require: any;
const DEMOS = {
  linkToSb: {
    title: 'New Demos',
    type: PaginationLinkToSbComponent,
    code: require('!!raw-loader!./demos/pagination-link-to-sb/pagination-link-to-sb.component'),
    module: require('!!raw-loader!./demos/pagination-link-to-sb/pagination-link-to-sb.module'),
    markup: require('!!raw-loader!./demos/pagination-link-to-sb/pagination-link-to-sb.component.html'),
    path: 'libs/documentation/src/lib/components/pagination/demos/pagination-link-to-sb',
  },
  basic: {
    title: 'Pagination',
    type: PaginationBasic,
    code: require('!!raw-loader!./demos/basic/pagination-basic.component'),
    module: require('!!raw-loader!./demos/basic/pagination-basic.module'),
    markup: require('!!raw-loader!./demos/basic/pagination-basic.component.html'),
    path: 'libs/documentation/src/lib/components/pagination/demos/basic',
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
          name: 'PaginationComponent',
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
  imports: [CommonModule, DocumentationComponentsSharedModule, PaginationBasicModule],
})
export class PaginationModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('pagination', DEMOS);
  }
}
