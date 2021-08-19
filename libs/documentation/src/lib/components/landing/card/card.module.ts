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
import { BasicCardModule } from './demos/basic/basic-card.module';
import { BasicCardComponent } from './demos/basic/basic-card.component';


declare var require: any;
const DEMOS = {
  basic: {
    title: 'Landing Card',
    type: BasicCardComponent,
    code: require('!!raw-loader!./demos/basic/basic-card.component'),
    markup: require('!!raw-loader!./demos/basic/basic-card.component.html'),
    module: require('!!raw-loader!./demos/basic/basic-card.module'),
    path: 'libs/documentation/src/lib/components/landing/button-group/demos/basic/basic-card',
  },
};

export const ROUTES = [
  { path: '', pathMatch: 'full', redirectTo: 'examples' },
  {
    path: '',
    component: ComponentWrapperComponent,
    data: {
      title: 'Landing / Card',
      items: [
        {
          pkg: 'layouts',
          type: 'components',
          name: 'SdsLandingCardComponent',
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
    BasicCardModule
  ],
})
export class LandingCardModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('landing-card', DEMOS);
  }
}
