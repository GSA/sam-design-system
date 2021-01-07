import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import {
  DocumentationComponentsSharedModule,
  DocumentationDemoList,
} from '../shared/index';
import { ComponentWrapperComponent } from '../../shared/component-wrapper/component-wrapper.component';
import { ToastsBasicModule } from './demos/basic/toasts-basic.module';
import { ToastsBasic } from './demos/basic/toasts-basic.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';

declare var require: any;
const DEMOS = {
  basic: {
    title: 'Toasts',
    type: ToastsBasic,
    code: require('!!raw-loader!./demos/basic/toasts-basic.component'),
    markup: require('!!raw-loader!./demos/basic/toasts-basic.component.html'),
    path: 'libs/documentation/src/lib/components/toasts/demos/basic',
  },
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
          name: 'SdsToastComponent',
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
  imports: [
    CommonModule,
    DocumentationComponentsSharedModule,
    ToastsBasicModule,
  ],
})
export class ToastsModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('toasts', DEMOS);
  }
}
