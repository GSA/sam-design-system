import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBasic } from './demos/basic/header-basic.component';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import {
  DocumentationComponentsSharedModule,
  DocumentationDemoList
} from './../shared/index';
import { ComponentWrapperComponent } from './../../shared/component-wrapper/component-wrapper.component';
import { HeaderBasicModule } from './demos/basic/header-basic.module';

export declare var require: any;

export const opening = require('!!raw-loader!./opening.md');
export const closing = require('!!raw-loader!./closing.md');

const DEMOS = {
  basic: {
    title: 'SAM Header',
    type: HeaderBasic,
    code: require('!!raw-loader!./demos/basic/header-basic.component'),
    markup: require('!!raw-loader!./demos/basic/header-basic.component.html'),
    readme: require('!!raw-loader!./demos/basic/readme.md'),
    path: 'libs/documentation/src/lib/components/header/demos/basic'
  }
};

export const ROUTES = [
  { path: '', pathMatch: 'full', redirectTo: 'examples' },
  {
    path: '',
    component: ComponentWrapperComponent,
    data: {
      readme: {
        opening,
        closing
      },
      items: [
        {
          pkg: 'layouts',
          type: 'components',
          name: 'SdsHeaderComponent'
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
    HeaderBasicModule
  ]
})
export class HeaderModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('header', DEMOS);
  }
}
