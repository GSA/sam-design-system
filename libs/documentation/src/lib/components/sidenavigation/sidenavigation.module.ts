import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import {
  DocumentationComponentsSharedModule,
  DocumentationDemoList,
} from '../shared/index';
import { ComponentWrapperComponent } from '../../shared/component-wrapper/component-wrapper.component';
import { LinksSideNavigationComponent } from './demos/links-side-navigation/links-side-navigation.component';
import { LinksSideNavigationModule } from './demos/links-side-navigation/links-side-navigation.module';
import { FilterSideNavigationComponent } from './demos/filter-side-navigation/filter-side-navigation.component';
import { FilterSideNavigationModule } from './demos/filter-side-navigation/filter-side-navigation.module';

declare var require: any;
const DEMOS = {
  links: {
    title: 'Links Navigation',
    type: LinksSideNavigationComponent,
    code: require('!!raw-loader!./demos/links-side-navigation/links-side-navigation.component'),
    module: require('!!raw-loader!./demos/links-side-navigation/links-side-navigation.module'),
    markup: require('!!raw-loader!./demos/links-side-navigation/links-side-navigation.component.html'),
    path:
      'libs/documentation/src/lib/components/sidenavigation/demos/links-side-navigation',
  },
  filter: {
    title: 'Filter Sidenav',
    type: FilterSideNavigationComponent,
    code: require('!!raw-loader!./demos/filter-side-navigation/filter-side-navigation.component'),
    module: require('!!raw-loader!./demos/filter-side-navigation/filter-side-navigation.module'),
    markup: require('!!raw-loader!./demos/filter-side-navigation/filter-side-navigation.component.html'),
    path:
      'libs/documentation/src/lib/components/sidenavigation/demos/filter-side-navigation',
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
          name: 'SdsSideNavigationComponent',
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
    LinksSideNavigationModule,
    FilterSideNavigationModule,
  ],
})
export class SideNavigationModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('sidenavigation', DEMOS);
  }
}
