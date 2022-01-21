import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionsBasic } from './demos/basic/actions-basic.component';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import {
  DocumentationComponentsSharedModule,
  DocumentationDemoList,
} from '../shared/index';
import { ComponentWrapperComponent } from '../../shared/component-wrapper/component-wrapper.component';
import { ActionsBasicModule } from './demos/basic/actions-basic.module';

declare var require: any;
const DEMOS = {
  basic: {
    title: 'Actions Menu Dropdown',
    type: ActionsBasic,
    code: require('!!raw-loader!./demos/basic/actions-basic.component'),
    markup: require('!!raw-loader!./demos/basic/actions-basic.component.html'),
    module: require('!!raw-loader!./demos/basic/actions-basic.module'),
    path: 'libs/documentation/src/lib/components/actions/demos/basic',
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
          name: 'SdsActionsMenuComponent',
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
    ActionsBasicModule,
  ],
})
export class ActionsModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('actions', DEMOS);
  }
}
