import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import { DocumentationComponentsSharedModule, DocumentationDemoList } from '../shared/index';
import { ComponentWrapperComponent } from '../../shared/component-wrapper/component-wrapper.component';

import { DialogAlert } from './demos/alert/dialog-alert.component';
import { DialogAlertModule } from './demos/alert/dialog-alert.module';
import { DialogOverView } from './demos/overview/dialog-overview.component';
import { DialogOverViewModule } from './demos/overview/dialog-overview.module';
import { DialogNested } from './demos/nested/dialog-nested.component';
import { DialogNestedModule } from './demos/nested/dialog-nested.module';
import { DialogOfficial } from './demos/official/dialog-official.component';
import { DialogOfficialModule } from './demos/official/dialog-official.module';
import { Routes } from "@angular/router";

declare var require: any;
const DEMOS = {
  overview: {
    title: 'Overview Modal Dialog',
    type: DialogOverView,
    code: require('!!raw-loader!./demos/overview/dialog-overview.component'),
    module: require('!!raw-loader!./demos/overview/dialog-overview.module'),
    markup: require('!!raw-loader!./demos/overview/dialog-overview.component.html'),
    path: 'libs/documentation/src/lib/components/dialog/demos/overview',
  },
  alert: {
    title: 'Alert Modal Dialog',
    type: DialogAlert,
    code: require('!!raw-loader!./demos/alert/dialog-alert.component'),
    module: require('!!raw-loader!./demos/alert/dialog-alert.module'),
    markup: require('!!raw-loader!./demos/alert/dialog-alert.component.html'),
    path: 'libs/documentation/src/lib/components/dialog/demos/alert',
  },
  nested: {
    title: 'Nested Modal Dialog',
    type: DialogNested,
    code: require('!!raw-loader!./demos/nested/dialog-nested.component'),
    module: require('!!raw-loader!./demos/nested/dialog-nested.module'),
    markup: require('!!raw-loader!./demos/nested/dialog-nested.component.html'),
    path: 'libs/documentation/src/lib/components/dialog/demos/nested',
  },
  official: {
    title: 'Official Modal Dialog',
    type: DialogOfficial,
    code: require('!!raw-loader!./demos/official/dialog-official.component'),
    module: require('!!raw-loader!./demos/official/dialog-official.module'),
    markup: require('!!raw-loader!./demos/official/dialog-official.component.html'),
    path: 'libs/documentation/src/lib/components/dialog/demos/official',
  },
};

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'examples' },
  {
    path: '',
    component: ComponentWrapperComponent,
    data: {
      items: [
        {
          pkg: 'components',
          type: 'components',
          name: 'SdsDialogContainerComponent',
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
    DialogOverViewModule,
    DialogAlertModule,
    DialogNestedModule,
    DialogOfficialModule,
  ],
})
export class DialogModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('dialog', DEMOS);
  }
}
