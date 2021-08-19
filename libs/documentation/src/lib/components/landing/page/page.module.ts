import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationExamplesPage } from '../../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../../shared/template-page/template.component';
import {
  DocumentationComponentsSharedModule,
  DocumentationDemoList,
} from './../../shared/index';
import { ComponentWrapperComponent } from './../../../shared/component-wrapper/component-wrapper.component';
import { BasicPageModule } from './demos/basic/basic-page.module';
import { BasicPageComponent } from './demos/basic/basic-page.component';


declare var require: any;
const DEMOS = {
  basic: {
    title: 'Landing Page',
    type: BasicPageComponent,
    code: require('!!raw-loader!./demos/basic/basic-page.component'),
    markup: require('!!raw-loader!./demos/basic/basic-page.component.html'),
    module: require('!!raw-loader!./demos/basic/basic-page.module'),
    path: 'libs/documentation/src/lib/components/landing/page/demos/basic/page-link',
  },
};

export const ROUTES = [
  { path: '', pathMatch: 'full', redirectTo: 'examples' },
  {
    path: '',
    component: ComponentWrapperComponent,
    data: {
      title: 'Landing / Page',
      items: [
        {
          pkg: 'layouts',
          type: 'components',
          name: 'SdsLandingPageComponent',
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
    BasicPageModule
  ],
})
export class LandingPageModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('landing-page', DEMOS);
  }
}
