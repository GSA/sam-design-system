import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapseBasic } from './demos/basic/collapse-basic.component';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import {
  DocumentationComponentsSharedModule,
  DocumentationDemoList,
} from '../shared/index';
import { ComponentWrapperComponent } from '../../shared/component-wrapper/component-wrapper.component';
import { CollapseBasicModule } from './demos/basic/collapse-basic.module';

declare var require: any;
const DEMOS = {
  basic: {
    title: 'Collapse',
    type: CollapseBasic,
    code: require('!!raw-loader!./demos/basic/collapse-basic.component'),
    module: require('!!raw-loader!./demos/basic/collapse-basic.module'),
    markup: require('!!raw-loader!./demos/basic/collapse-basic.component.html'),
    path: 'libs/documentation/src/lib/components/collapse/demos/basic',
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
          type: 'directives',
          name: 'CollapseDirective',
        },
      ],
    },
    children: [
      { path: 'examples', component: DocumentationExamplesPage },
      { path: 'api', component: DocumentationAPIPage },
      { path: 'source', component: DocumentationSourcePage },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    DocumentationComponentsSharedModule,
    CollapseBasicModule,
  ],
})
export class CollapseModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('collapse', DEMOS);
  }
}
