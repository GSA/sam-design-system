import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentWrapperComponent } from '../../shared/component-wrapper/component-wrapper.component';
import { DocumentationComponentsSharedModule, DocumentationDemoList } from '../shared';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { ExpiresBasicComponent } from './demos/basic/expires-basic.component';
import { ExpiresBasicModule } from './demos/basic/expires-basic.module';
import { ExpiresLinkToSbComponent } from './demos/expires-link-to-sb/expires-link-to-sb.component';
import { ExpiresLinkToSbModule } from './demos/expires-link-to-sb/expires-link-to-sb.module';
import { Routes } from '@angular/router';

export declare var require: any;

const DEMOS = {
  linkToSb: {
    title: 'New Demos',
    type: ExpiresLinkToSbComponent,
    code: require('!!raw-loader!./demos/expires-link-to-sb/expires-link-to-sb.component'),
    module: require('!!raw-loader!./demos/expires-link-to-sb/expires-link-to-sb.module'),
    markup: require('!!raw-loader!./demos/expires-link-to-sb/expires-link-to-sb.component.html'),
    path: 'libs/documentation/src/lib/components/expires/demos/expires-link-to-sb',
  },
  basic: {
    title: 'Expires Directive',
    type: ExpiresBasicComponent,
    code: require('!!raw-loader!./demos/basic/expires-basic.component'),
    module: require('!!raw-loader!./demos/basic/expires-basic.module'),
    markup: require('!!raw-loader!./demos/basic/expires-basic.component.html'),
    path: 'libs/documentation/src/lib/components/expires/demos/basic',
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
          type: 'directives',
          name: 'SdsExpiresDirective',
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
  imports: [CommonModule, DocumentationComponentsSharedModule, ExpiresBasicModule, ExpiresLinkToSbModule],
})
export class ExpiresModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('expires', DEMOS);
  }
}
