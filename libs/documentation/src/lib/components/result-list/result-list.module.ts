import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultListBasic } from './demos/basic/result-list-basic.component';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import {
  DocumentationComponentsSharedModule,
  DocumentationDemoList
} from '../shared/index';
import { ComponentWrapperComponent } from '../../shared/component-wrapper/component-wrapper.component';
import { ResultListBasicModule } from './demos/basic/result-list-basic.module';

declare var require: any;
const DEMOS = {
  basic: {
    title: 'Result List',
    type: ResultListBasic,
    code: require('!!raw-loader!./demos/basic/result-list-basic.component'),
    markup: require('!!raw-loader!./demos/basic/result-list-basic.component.html'),
    path: 'libs/documentation/src/lib/components/result-list/demos/basic'
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
          name: 'SdsSearchResultListComponent'
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
    ResultListBasicModule
  ]
})
export class ResultListModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('result-list', DEMOS);
  }
}
