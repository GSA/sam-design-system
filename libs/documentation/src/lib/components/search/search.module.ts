import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import {
  DocumentationComponentsSharedModule,
  DocumentationDemoList
} from '../shared/index';
import { ComponentWrapperComponent } from '../../shared/component-wrapper/component-wrapper.component';
import { SearchBasicModule } from './demos/basic/search-basic.module';
import { SearchBasic } from './demos/basic/search-basic.component';

declare var require: any;
const DEMOS = {
  basic: {
    title: 'SAM Search',
    type: SearchBasic,
    code: require('!!raw-loader!./demos/basic/search-basic.component'),
    markup: require('!!raw-loader!./demos/basic/search-basic.component.html'),
    path: 'libs/documentation/src/lib/components/search/demos/basic'
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
          name: 'SdsSearchComponent'
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
    SearchBasicModule
  ]
})
export class SearchModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('search', DEMOS);
  }
}
