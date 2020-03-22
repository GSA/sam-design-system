import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubHeaderBasic } from './demos/basic/subheader-basic.component';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import {
  DocumentationComponentsSharedModule,
  DocumentationDemoList
} from './../shared/index';
import { ComponentWrapperComponent } from './../../shared/component-wrapper/component-wrapper.component';
import { SubHeaderBasicModule } from './demos/basic/subheader-basic.module';

declare var require: any;
const DEMOS = {
  basic: {
    title: 'SAM Subheader',
    type: SubHeaderBasic,
    code: require('!!raw-loader!./demos/basic/subheader-basic.component'),
    markup: require('!!raw-loader!./demos/basic/subheader-basic.component.html'),
    path: 'libs/documentation/src/lib/components/subheader/demos/basic'
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
          pkg: 'layouts',
          component: 'SdsSubheaderComponent'
        }
      ]
    },
    children: [
      { path: 'examples', component: DocumentationExamplesPage },
      { path: 'source', component: DocumentationSourcePage },
      { path: 'template', component: DocumentationTemplatePage }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    DocumentationComponentsSharedModule,
    SubHeaderBasicModule
  ]
})
export class SubHeaderModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('subheader', DEMOS);
  }
}
