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
import { BasicButtonGroupModule } from './demos/basic/basic-button-group.module';
import { BasicButtonGroupComponent } from './demos/basic/basic-button-group.component';


declare var require: any;
const DEMOS = {
  basic: {
    title: 'Landing Button Group',
    type: BasicButtonGroupComponent,
    code: require('!!raw-loader!./demos/basic/basic-button-group.component'),
    markup: require('!!raw-loader!./demos/basic/basic-button-group.component.html'),
    module: require('!!raw-loader!./demos/basic/basic-button-group.module'),
    path: 'libs/documentation/src/lib/components/landing/button-group/demos/basic/basic-button-group',
  },
};

export const ROUTES = [
  { path: '', pathMatch: 'full', redirectTo: 'examples' },
  {
    path: '',
    component: ComponentWrapperComponent,
    data: {
      title: 'Landing / Button Group',
      items: [
        {
          pkg: 'layouts',
          type: 'components',
          name: 'SdsLandingButtonGroupComponent',
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
    BasicButtonGroupModule
  ],
})
export class LandingButtonGroupModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('landing-button-group', DEMOS);
  }
}
