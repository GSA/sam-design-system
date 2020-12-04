import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { SdsSystemAlertModule } from '@gsa-sam/layouts';
import { ComponentWrapperComponent } from '../../shared/component-wrapper/component-wrapper.component';
import { DocumentationComponentsSharedModule, DocumentationDemoList } from '../shared';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import { SystemAlertsMultipleComponent } from './demos/system-alerts-multiple/system-alerts-multiple.component';
import { SystemAlertsSingleComponent } from './demos/system-alerts-single/system-alerts-single.component';

export declare var require: any;

const DEMOS = {
  singleAlert: {
    title: 'System Alert',
    type: SystemAlertsSingleComponent,
    code: require('!!raw-loader!./demos/system-alerts-single/system-alerts-single.component'),
    markup: require('!!raw-loader!./demos/system-alerts-single/system-alerts-single.component.html'),
    path: 'libs/documentation/src/lib/components/system-alerts/demos/system-alerts-single'
  },
  multipleAlerts: {
    title: 'System Alert - Multiple Alerts',
    type: SystemAlertsMultipleComponent,
    code: require('!!raw-loader!./demos/system-alerts-multiple/system-alerts-multiple.component'),
    markup: require('!!raw-loader!./demos/system-alerts-multiple/system-alerts-multiple.component.html'),
    path: 'libs/documentation/src/lib/components/system-alerts/demos/system-alerts-multiple'
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
          type: 'components',
          name: 'SdsSystemAlertComponent'
        }
      ],
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
    SdsSystemAlertModule,
    DocumentationComponentsSharedModule,
  ],
  declarations: [
    SystemAlertsSingleComponent,
    SystemAlertsMultipleComponent
  ],
  exports: [
    SystemAlertsSingleComponent,
    SystemAlertsMultipleComponent
  ],
  bootstrap: [
    SystemAlertsSingleComponent,
    SystemAlertsMultipleComponent,
  ]
})
export class SystemAlertsModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('system-alerts', DEMOS);
  }
}