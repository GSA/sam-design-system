import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { SdsSystemAlertModule } from '@gsa-sam/layouts';
import { ComponentWrapperComponent } from '../../shared/component-wrapper/component-wrapper.component';
import { DocumentationComponentsSharedModule, DocumentationDemoList } from '../shared';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import { SystemAlertsMultipleComponent } from './demos/multiple/system-alerts-multiple.component';
import { SystemAlertsMultipleModule } from './demos/multiple/system-alerts-multiple.module';
import { SystemAlertsSingleComponent } from './demos/single/system-alerts-single.component';
import { SystemAlertsSingleModule } from './demos/single/system-alerts-single.module';

export declare var require: any;

const DEMOS = {
  single: {
    title: 'System Alert',
    type: SystemAlertsSingleComponent,
    code: require('!!raw-loader!./demos/single/system-alerts-single.component'),
    markup: require('!!raw-loader!./demos/single/system-alerts-single.component.html'),
    path: 'libs/documentation/src/lib/components/system-alerts/demos/single'
  },
  multiple: {
    title: 'System Alert - Multiple Alerts',
    type: SystemAlertsMultipleComponent,
    code: require('!!raw-loader!./demos/multiple/system-alerts-multiple.component'),
    markup: require('!!raw-loader!./demos/multiple/system-alerts-multiple.component.html'),
    path: 'libs/documentation/src/lib/components/system-alerts/demos/multiple'
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
    DocumentationComponentsSharedModule,
    SystemAlertsMultipleModule,
    SystemAlertsSingleModule,
  ]
})
export class SystemAlertsModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('system-alerts', DEMOS);
  }
}