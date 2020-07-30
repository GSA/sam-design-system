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

import { ResultListBasic } from './demos/basic/result-list-basic.component';
import { ResultListBasicModule } from './demos/basic/result-list-basic.module';
import { ResultListComponent } from './demos/component/result-list-component.component';
import { ResultListComponentModule } from './demos/component/result-list-component.module';
import { ResultListCardComponentModule } from './demos/card/result-list-card-component.module';
import { ResultListCardComponent } from './demos/card/result-list-card-component.component';
import { ResultListTemplate } from './demos/template/result-list-template.component';
import { ResultListTemplateModule } from './demos/template/result-list-template.module';

declare var require: any;
const DEMOS = {
  basic: {
    title: 'Result List',
    type: ResultListBasic,
    code: require('!!raw-loader!./demos/basic/result-list-basic.component'),
    markup: require('!!raw-loader!./demos/basic/result-list-basic.component.html'),
    path: 'libs/documentation/src/lib/components/result-list/demos/basic'
  },
  template: {
    title: 'Result List with custom template',
    type: ResultListTemplate,
    code: require('!!raw-loader!./demos/template/result-list-template.component'),
    markup: require('!!raw-loader!./demos/template/result-list-template.component.html'),
    path: 'libs/documentation/src/lib/components/result-list/demos/template'
  },
  component: {
    title: 'Result List with Component',
    type: ResultListComponent,
    code: require('!!raw-loader!./demos/component/result-list-component.component'),
    markup: require('!!raw-loader!./demos/component/result-list-component.component.html'),
    path: 'libs/documentation/src/lib/components/result-list/demos/component'
  },
  card: {
    title: 'Result List with Card Component',
    type: ResultListCardComponent,
    code: require('!!raw-loader!./demos/card/result-list-card-component.component'),
    markup: require('!!raw-loader!./demos/card/result-list-card-component.component.html'),
    path: 'libs/documentation/src/lib/components/result-list/demos/card'
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
    ResultListBasicModule,
    ResultListTemplateModule,
    ResultListComponentModule,
    ResultListCardComponentModule
  ]
})
export class ResultListModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('result-list', DEMOS);
  }
}
