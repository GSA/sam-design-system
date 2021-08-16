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
import { BasicListModule } from './demos/basic/basic-list.module';
import { BasicListComponent } from './demos/basic/basic-list.component';
import { IconsListModule } from './demos/icons/icons-list.module';
import { IconsListComponent } from './demos/icons/icons-list.component';
import { LinksListModule } from './demos/links/links-list.module';
import { LinksListComponent } from './demos/links/links-list.component';

declare var require: any;
const DEMOS = {
  basic: {
    title: 'Landing List',
    type: BasicListComponent,
    code: require('!!raw-loader!./demos/basic/basic-list.component'),
    markup: require('!!raw-loader!./demos/basic/basic-list.component.html'),
    module: require('!!raw-loader!./demos/basic/basic-list.module'),
    path: 'libs/documentation/src/lib/components/landing/list/demos/basic/basic-list',
  },
  links: {
    title: 'Landing List with Links',
    type: LinksListComponent,
    code: require('!!raw-loader!./demos/links/links-list.component'),
    markup: require('!!raw-loader!./demos/links/links-list.component.html'),
    module: require('!!raw-loader!./demos/links/links-list.module'),
    path: 'libs/documentation/src/lib/components/landing/list/demos/links/links-list',
  },
  icons: {
    title: 'Landing List with Icons',
    type: IconsListComponent,
    code: require('!!raw-loader!./demos/icons/icons-list.component'),
    markup: require('!!raw-loader!./demos/icons/icons-list.component.html'),
    module: require('!!raw-loader!./demos/icons/icons-list.module'),
    path: 'libs/documentation/src/lib/components/landing/list/demos/icons/icons-list',
  },
};

export const ROUTES = [
  { path: '', pathMatch: 'full', redirectTo: 'examples' },
  {
    path: '',
    component: ComponentWrapperComponent,
    data: {
      title: 'Landing / List',
      items: [
        {
          pkg: 'layouts',
          type: 'components',
          name: 'SdsLandingListComponent',
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
    BasicListModule,
    IconsListModule,
    LinksListModule
  ],
})
export class LandingListModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('landing-list', DEMOS);
  }
}
