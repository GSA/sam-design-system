import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelWrapperBasic } from './demos/basic/labelwrapper-basic.component';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import {
  DocumentationComponentsSharedModule,
  DocumentationDemoList
} from '../shared/index';
import { ComponentWrapperComponent } from '../../shared/component-wrapper/component-wrapper.component';
import { LabelWrapperBasicModule } from './demos/basic/labelwrapper-basic.module';

declare var require: any;
const DEMOS = {
  basic: {
    title: 'Label Wrapper',
    type: LabelWrapperBasic,
    code: require('!!raw-loader!./demos/basic/labelwrapper-basic.component'),
    markup: require('!!raw-loader!./demos/basic/labelwrapper-basic.component.html'),
    path: 'libs/documentation/src/lib/components/labelwrapper/demos/basic'
  }
};

export const ROUTES = [
  { path: '', pathMatch: 'full', redirectTo: 'examples' },
  {
    path: '',
    component: ComponentWrapperComponent,
    data: {
      title: "Label Wrapper",
      items: [
        {
          pkg: 'formly',
          type: 'components',
          name: 'FormlyLabelWrapperComponent',
          wrappers: ['label']
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
    LabelWrapperBasicModule
  ]
})
export class LabelWrapperModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('labelwrapper', DEMOS);
  }
}
