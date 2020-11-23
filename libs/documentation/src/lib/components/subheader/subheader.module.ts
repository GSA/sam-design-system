import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import {
  DocumentationComponentsSharedModule,
  DocumentationDemoList
} from './../shared/index';
import { ComponentWrapperComponent } from './../../shared/component-wrapper/component-wrapper.component';
import { SubheaderBasicDisplayModule } from './demos/basic-display/subheader-basic-display.module';
import { SubheaderDataEntryComponent } from './demos/data-entry/subheader-data-entry.component';
import { SubheaderDataEntryModule } from './demos/data-entry/subheader-data-entry.module';
import { SubheaderBasicDisplayComponent } from './demos/basic-display/subheader-basic-display.component';
import { SubheaderSearchComponent } from './demos/search/subheader-search.component';
import { SubheaderSearchModule } from './demos/search/subheader-search.module';
import { SubheaderSearchSubPagesModule } from './demos/search-sub-pages/subheader-search-sub-pages.module';
import { SubheaderTier2WorkspaceComponent } from './demos/tier-2-workspace/subheader-tier-2-workspace.component';
import { SubheaderTier2WorkspaceModule } from './demos/tier-2-workspace/subheader-tier-2-workspace.module';
import { SubheaderSearchSubPagesComponent } from './demos/search-sub-pages/subheader-search-sub-pages.component';

declare var require: any;
const DEMOS = {
  subheaderBasicDisplay: {
    title: 'Basic Display',
    type: SubheaderBasicDisplayComponent,
    code: require('!!raw-loader!./demos/basic-display/subheader-basic-display.component'),
    markup: require('!!raw-loader!./demos/basic-display/subheader-basic-display.component.html'),
    path: 'libs/documentation/src/lib/components/subheader/demos/subheader-basic-display'
  },
  subheaderDataEntry: {
    title: 'Data Entry',
    type: SubheaderDataEntryComponent,
    code: require('!!raw-loader!./demos/data-entry/subheader-data-entry.component'),
    markup: require('!!raw-loader!./demos/data-entry/subheader-data-entry.component.html'),
    path: 'libs/documentation/src/lib/components/subheader/demos/subheader-data-entry'
  },
  subheaderSearch: {
    title: 'Search',
    type: SubheaderSearchComponent,
    code: require('!!raw-loader!./demos/search/subheader-search.component'),
    markup: require('!!raw-loader!./demos/search/subheader-search.component.html'),
    path: 'libs/documentation/src/lib/components/subheader/demos/subheader-search'
  },
  subheaderWiethSubPages: {
    title: 'Search with Sub-Pages',
    type: SubheaderSearchSubPagesComponent,
    code: require('!!raw-loader!./demos/search-sub-pages/subheader-search-sub-pages.component'),
    markup: require('!!raw-loader!./demos/search-sub-pages/subheader-search-sub-pages.component.html'),
    path: 'libs/documentation/src/lib/components/subheader/demos/search-sub-pages'
  },
  subheaderTier2Workspace: {
    title: 'Tier 2 Workspace',
    type: SubheaderTier2WorkspaceComponent,
    code: require('!!raw-loader!./demos/tier-2-workspace/subheader-tier-2-workspace.component'),
    markup: require('!!raw-loader!./demos/tier-2-workspace/subheader-tier-2-workspace.component.html'),
    path: 'libs/documentation/src/lib/components/subheader/demos/tier-2-workspace'
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
          name: 'SdsSubheaderComponent'
        }
      ]
    },
    children: [
      { path: 'examples', component: DocumentationExamplesPage },
      { path: 'source', component: DocumentationSourcePage },
      { path: 'template', component: DocumentationTemplatePage }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    DocumentationComponentsSharedModule,
    SubheaderBasicDisplayModule,
    SubheaderDataEntryModule,
    SubheaderSearchModule,
    SubheaderSearchSubPagesModule,
    SubheaderTier2WorkspaceModule
  ]
})
export class SubHeaderModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('subheader', DEMOS);
  }
}
