import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationExamplesPage } from '../../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../../shared/template-page/template.component';
import {
  DocumentationComponentsSharedModule,
  DocumentationDemoList,
} from './../../shared/index';
import { ComponentWrapperComponent } from './../../../shared/component-wrapper/component-wrapper.component';
import { ResultsModule } from './demos/results/results.module';
import { ResultsComponent } from './demos/results/results.component';

declare var require: any;
const DEMOS = {
  basic: {
    title: 'Workspace Tier 2 Item',
    type: ResultsComponent,
    code: require('!!raw-loader!./demos/results/results.component'),
    markup: require('!!raw-loader!./demos/results/results.component.html'),
    module: require('!!raw-loader!./demos/results/results.module'),
    path:
      'libs/documentation/src/lib/components/landing/link/demos/results/results',
  },
};

export const ROUTES = [
  { path: '', pathMatch: 'full', redirectTo: 'examples' },
  {
    path: '',
    component: ComponentWrapperComponent,
    data: {
      title: 'Workspace Tier 2 / Item',
      items: [
        {
          pkg: 'components',
          type: 'components',
          name: 'SdsLandingLinkComponent',
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
  imports: [CommonModule, DocumentationComponentsSharedModule, ResultsModule],
})
export class WorkspaceTier2ItemModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('workspace-tier-2-item', DEMOS);
  }
}
