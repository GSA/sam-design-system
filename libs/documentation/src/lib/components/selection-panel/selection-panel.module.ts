import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentWrapperComponent } from '../../shared/component-wrapper/component-wrapper.component';
import {
  DocumentationComponentsSharedModule,
  DocumentationDemoList,
} from '../shared';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import { BasicSelectionPanelComponent } from './demos/basic/basic-selection-panel.component';
import { BasicSelectionPanelModule } from './demos/basic/basic-selection-panel.module';
import { DefaultSelectionPanelComponent } from './demos/default-selection/default-selection-panel.component';
import { DefaultSelectionPanelModule } from './demos/default-selection/default-selection-panel.module';

declare var require: any;
const DEMOS = {
  basic: {
    title: 'Basic Selection Panel',
    type: BasicSelectionPanelComponent,
    code: require('!!raw-loader!./demos/basic/basic-selection-panel.component'),
    module: require('!!raw-loader!./demos/basic/basic-selection-panel.module'),
    markup: require('!!raw-loader!./demos/basic/basic-selection-panel.component.html'),
    path: 'libs/documentation/src/lib/components/selection-panel/demos/basic',
  },
  defaultPanel: {
    title: 'Pre-select Panel Item',
    type: DefaultSelectionPanelComponent,
    code: require('!!raw-loader!./demos/default-selection/default-selection-panel.component'),
    module: require('!!raw-loader!./demos/default-selection/default-selection-panel.module'),
    markup: require('!!raw-loader!./demos/default-selection/default-selection-panel.component.html'),
    path: 'libs/documentation/src/lib/components/selection-panel/demos/default-selection',
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
          name: 'SdsSelectionPanelComponent',
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
    BasicSelectionPanelModule,
    DefaultSelectionPanelModule,
  ],
})
export class SelectionPanelModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('selection-panel', DEMOS);
  }
}
