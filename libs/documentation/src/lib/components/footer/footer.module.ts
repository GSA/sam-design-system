import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterBasic } from './demos/basic/footer-basic.component';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import {
  DocumentationComponentsSharedModule,
  DocumentationDemoList
} from './../shared/index';
import { ComponentWrapperComponent } from './../../shared/component-wrapper/component-wrapper.component';
import { FooterBasicModule } from './demos/basic/footer-basic.module';

declare var require: any;

export const opening = require('!!raw-loader!./opening.md');
export const closing = require('!!raw-loader!./closing.md');

const DEMOS = {
  basic: {
    title: 'SAM Footer',
    type: FooterBasic,
    code: require('!!raw-loader!./demos/basic/footer-basic.component'),
    markup: require('!!raw-loader!./demos/basic/footer-basic.component.html'),
    path: 'libs/documentation/src/lib/components/footer/demos/basic'
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
          name: 'SdsFooterComponent'
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
    FooterBasicModule
  ]
})
export class FooterModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('footer', DEMOS);
  }
}
