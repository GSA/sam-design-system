import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import { DocumentationComponentsSharedModule, DocumentationDemoList } from '../shared/index';
import { ComponentWrapperComponent } from '../../shared/component-wrapper/component-wrapper.component';
import { SearchBasicModule } from './demos/basic/search-basic.module';
import { SearchBasic } from './demos/basic/search-basic.component';
import { SearchOptional } from './demos/optional/search-optional.component';
import { SearchOptionalModule } from './demos/optional/search-optional.module';
import { SearchLinkToSbComponent } from './demos/search-link-to-sb/search-link-to-sb.component';
import { SearchLinkToSbModule } from './demos/search-link-to-sb/search-link-to-sb.module';
import { Routes } from '@angular/router';

declare var require: any;
const DEMOS = {
  linkToSb: {
    title: 'New Demos',
    type: SearchLinkToSbComponent,
    code: require('!!raw-loader!./demos/search-link-to-sb/search-link-to-sb.component'),
    module: require('!!raw-loader!./demos/search-link-to-sb/search-link-to-sb.module'),
    markup: require('!!raw-loader!./demos/search-link-to-sb/search-link-to-sb.component.html'),
    path: 'libs/documentation/src/lib/components/search/demo/ssearch-link-to-sb',
  },
  basic: {
    title: 'Basic Search ',
    type: SearchBasic,
    code: require('!!raw-loader!./demos/basic/search-basic.component'),
    module: require('!!raw-loader!./demos/basic/search-basic.module'),
    markup: require('!!raw-loader!./demos/basic/search-basic.component.html'),
    path: 'libs/documentation/src/lib/components/search/demos/basic',
  },
  optional: {
    title: 'Search with Select Dropdown',
    type: SearchOptional,
    code: require('!!raw-loader!./demos/optional/search-optional.component'),
    module: require('!!raw-loader!./demos/optional/search-optional.module'),
    markup: require('!!raw-loader!./demos/optional/search-optional.component.html'),
    path: 'libs/documentation/src/lib/components/search/demos/optional',
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
          name: 'SdsSearchComponent',
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
    SearchBasicModule,
    SearchOptionalModule,
    SearchLinkToSbModule,
  ],
})
export class SearchModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('search', DEMOS);
  }
}
