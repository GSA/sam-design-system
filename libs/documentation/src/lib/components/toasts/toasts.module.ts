import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationComponentsSharedModule, DocumentationDemoList } from '../shared/index';
import { ComponentWrapperComponent } from '../../shared/component-wrapper/component-wrapper.component';
import { ToastsBasicModule } from './demos/basic/toasts-basic.module';
import { ToastsBasic } from './demos/basic/toasts-basic.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import { ToastsLinkToSbComponent } from './demos/toasts-link-to-sb/toasts-link-to-sb.component';
import { ToastsLinkToSbModule } from './demos/toasts-link-to-sb/toasts-link-to-sb.module';
import { Routes } from '@angular/router';

declare var require: any;
const DEMOS = {
  linkToSb: {
    title: 'New Demos',
    type: ToastsLinkToSbComponent,
    code: require('!!raw-loader!./demos/toasts-link-to-sb/toasts-link-to-sb.component'),
    module: require('!!raw-loader!./demos/toasts-link-to-sb/toasts-link-to-sb.module'),
    markup: require('!!raw-loader!./demos/toasts-link-to-sb/toasts-link-to-sb.component.html'),
    path: 'libs/documentation/src/lib/components/toasts/demos/toasts-link-to-sb',
  },
  basic: {
    title: 'Toasts',
    type: ToastsBasic,
    code: require('!!raw-loader!./demos/basic/toasts-basic.component'),
    module: require('!!raw-loader!./demos/basic/toasts-basic.module'),
    markup: require('!!raw-loader!./demos/basic/toasts-basic.component.html'),
    path: 'libs/documentation/src/lib/components/toasts/demos/basic',
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
  imports: [CommonModule, DocumentationComponentsSharedModule, ToastsBasicModule, ToastsLinkToSbModule],
})
export class ToastsModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('toasts', DEMOS);
  }
}
