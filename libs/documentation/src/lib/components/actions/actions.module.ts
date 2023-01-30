import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionsBasic } from './demos/basic/actions-basic.component';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import { DocumentationComponentsSharedModule, DocumentationDemoList } from '../shared/index';
import { ComponentWrapperComponent } from '../../shared/component-wrapper/component-wrapper.component';
import { ActionsBasicModule } from './demos/basic/actions-basic.module';
import { ActionsMenuActionMode } from './demos/action-mode/actions-action-mode.component';
import { ActionsMenuActionModeModule } from './demos/action-mode/actions-action-mode.module';
import { ActionsLinkToSbComponent } from './demos/actions-link-to-sb/actions-link-to-sb.component';
import { ActionsLinkToSbModule } from './demos/actions-link-to-sb/actions-link-to-sb.module';

declare var require: any;
const DEMOS = {
  linkToSb: {
    title: 'New Demos',
    type: ActionsLinkToSbComponent,
    code: require('!!raw-loader!./demos/actions-link-to-sb/actions-link-to-sb.component'),
    markup: require('!!raw-loader!./demos/actions-link-to-sb/actions-link-to-sb.component.html'),
    module: require('!!raw-loader!./demos/actions-link-to-sb/actions-link-to-sb.module'),
    path: 'libs/documentation/src/lib/components/actions/demos/actions-link-to-sb',
  },
  basic: {
    title: 'Actions Menu Dropdown',
    type: ActionsBasic,
    code: require('!!raw-loader!./demos/basic/actions-basic.component'),
    markup: require('!!raw-loader!./demos/basic/actions-basic.component.html'),
    module: require('!!raw-loader!./demos/basic/actions-basic.module'),
    path: 'libs/documentation/src/lib/components/actions/demos/basic',
  },
  mode: {
    title: 'Actions Menu Dropdown with mode',
    type: ActionsMenuActionMode,
    code: require('!!raw-loader!./demos/action-mode/actions-action-mode.component'),
    markup: require('!!raw-loader!./demos/action-mode/actions-action-mode.component.html'),
    module: require('!!raw-loader!./demos/action-mode/actions-action-mode.module'),
    path: 'libs/documentation/src/lib/components/actions/demos/action-mode',
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
    ActionsMenuActionModeModule,
    ActionsLinkToSbModule,
  ],
})
export class ActionsModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('actions', DEMOS);
  }
}
