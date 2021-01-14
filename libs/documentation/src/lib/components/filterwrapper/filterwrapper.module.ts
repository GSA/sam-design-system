import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterWrapperBasic } from './demos/basic/filterwrapper-basic.component';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import {
  DocumentationComponentsSharedModule,
  DocumentationDemoList
} from '../shared/index';
import { ComponentWrapperComponent } from '../../shared/component-wrapper/component-wrapper.component';
import { FilterWrapperBasicModule } from './demos/basic/filterwrapper-basic.module';

declare var require: any;
const DEMOS = {
  basic: {
    title: 'Filter Wrapper',
    type: FilterWrapperBasic,
    code: require('!!raw-loader!./demos/basic/filterwrapper-basic.component'),
    markup: require('!!raw-loader!./demos/basic/filterwrapper-basic.component.html'),
    path: 'libs/documentation/src/lib/components/filterwrapper/demos/basic'
  }
};

export const ROUTES = [
  { path: '', pathMatch: 'full', redirectTo: 'examples' },
  {
    path: '',
    component: ComponentWrapperComponent,
    data: {
      title: "Filter Wrapper",
      items: [
        {
          pkg: 'formly',
          type: 'components',
          name: 'FormlyFormFieldFilterWrapperComponent',
          wrappers: ['filterwrapper']
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
    FilterWrapperBasicModule
  ]
})
export class FilterWrapperModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('filterwrapper', DEMOS);
  }
}
