import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBasic } from './demos/basic/header-basic.component';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import {
  DocumentationComponentsSharedModule,
  DocumentationDemoList,
} from './../shared/index';
import { ComponentWrapperComponent } from './../../shared/component-wrapper/component-wrapper.component';
import { HeaderBasicModule } from './demos/basic/header-basic.module';
import { HeaderHiddenLogoComponent } from './demos/hiddenlogo/header-hidden-logo.component';
import { SdsHeaderModule } from '@gsa-sam/layouts';
import { HeaderAlertsComponent } from './demos/alerts/header-alerts.component';
import { HeaderHiddenLogoModule } from './demos/hiddenlogo/header-hidden-logo.module';
import { HeaderAlertsModule } from './demos/alerts/header-alerts.module';

export declare var require: any;

const DEMOS = {
  basic: {
    title: 'SAM Header',
    type: HeaderBasic,
    code: require('!!raw-loader!./demos/basic/header-basic.component'),
    module: require('!!raw-loader!./demos/basic/header-basic.module'),
    markup: require('!!raw-loader!./demos/basic/header-basic.component.html'),
    readme: require('!!raw-loader!./demos/basic/readme.md'),
    path: 'libs/documentation/src/lib/components/header/demos/basic',
  },
  hiddenlogo: {
    title: 'SAM Header - Blank SAM Logo',
    type: HeaderHiddenLogoComponent,
    code: require('!!raw-loader!./demos/hiddenlogo/header-hidden-logo.component'),
    module: require('!!raw-loader!./demos/hiddenlogo/header-hidden-logo.module'),
    markup: require('!!raw-loader!./demos/hiddenlogo/header-hidden-logo.component.html'),
    path: 'libs/documentation/src/lib/components/header/demos/hiddenlogo',
  },
  alerts: {
    title: 'SAM Header - System Alerts',
    type: HeaderAlertsComponent,
    code: require('!!raw-loader!./demos/alerts/header-alerts.component'),
    module: require('!!raw-loader!./demos/alerts/header-alerts.module'),
    markup: require('!!raw-loader!./demos/alerts/header-alerts.component.html'),
    path: 'libs/documentation/src/lib/components/header/demos/alerts',
  },
};

export const ROUTES = [
  { path: '', pathMatch: 'full', redirectTo: 'examples' },
  {
    path: '',
    component: ComponentWrapperComponent,
    data: {
      readme: {},
      items: [
        {
          pkg: 'layouts',
          type: 'components',
          name: 'SdsHeaderComponent',
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
    SdsHeaderModule,
    HeaderBasicModule,
    HeaderHiddenLogoModule,
    HeaderAlertsModule,
  ],
})
export class HeaderModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('header', DEMOS);
  }
}
