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
import { BasicLinkModule } from './demos/basic/basic-link.module';
import { BasicLinkComponent } from './demos/basic/basic-link.component';


declare var require: any;
const DEMOS = {
  basic: {
    title: 'Landing Link',
    type: BasicLinkComponent,
    code: require('!!raw-loader!./demos/basic/basic-link.component'),
    markup: require('!!raw-loader!./demos/basic/basic-link.component.html'),
    module: require('!!raw-loader!./demos/basic/basic-link.module'),
    path: 'libs/documentation/src/lib/components/landing/link/demos/basic/basic-link',
  },
};

export const ROUTES = [
  { path: '', pathMatch: 'full', redirectTo: 'examples' },
  {
    path: '',
    component: ComponentWrapperComponent,
    data: {
      title: 'Landing / Link',
      items: [
        {
          pkg: 'layouts',
          type: 'components',
          name: 'SdsLandingLinkComponent',
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
    BasicLinkModule
  ],
})
export class LandingLinkModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('landing-link', DEMOS);
  }
}
