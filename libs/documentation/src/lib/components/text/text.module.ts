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
import { TextBasicModule } from './demos/basic/text-basic.module';
import { TextBasic } from './demos/basic/text-basic.component';

declare var require: any;
const DEMOS = {
  basic: {
    title: 'SAM Text',
    type: TextBasic,
    code: require('!!raw-loader!./demos/basic/text-basic.component'),
    markup: require('!!raw-loader!./demos/basic/text-basic.component.html'),
    path: 'libs/documentation/src/lib/components/text/demos/basic'
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
          name: 'SdsTextComponent'
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
    TextBasicModule
  ]
})
export class TextModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('text', DEMOS);
  }
}
