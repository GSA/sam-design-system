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
import { ExternalLinkBasicComponent } from './demos/basic/external-link-basic.component';
import { ExternalLinkBasicModule } from './demos/basic/external-link-basic.module';

export declare var require: any;

const DEMOS = {
  basic: {
    title: 'External Link',
    type: ExternalLinkBasicComponent,
    code: require('!!raw-loader!./demos/basic/external-link-basic.component'),
    module: require('!!raw-loader!./demos/basic/external-link-basic.module'),
    markup: require('!!raw-loader!./demos/basic/external-link-basic.component.html'),
    path: 'libs/documentation/src/lib/components/external-link/demos/basic',
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
          name: 'ExternalLinkDirective',
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
    ExternalLinkBasicModule,
  ],
})
export class ExternalLinkModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('external-link', DEMOS);
  }
}
