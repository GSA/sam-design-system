import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import {
  DocumentationComponentsSharedModule,
  DocumentationDemoList,
} from './../shared/index';
import { ComponentWrapperComponent } from './../../shared/component-wrapper/component-wrapper.component';
import { SubheaderBasicDisplayModule } from './demos/basic/subheader-basic-display.module';
import { SubheaderDataEntryComponent } from './demos/dataentry/subheader-data-entry.component';
import { SubheaderDataEntryModule } from './demos/dataentry/subheader-data-entry.module';
import { SubheaderBasicDisplayComponent } from './demos/basic/subheader-basic-display.component';
import { SubheaderSearchComponent } from './demos/search/subheader-search.component';
import { SubheaderSearchModule } from './demos/search/subheader-search.module';
import { SubheaderSearchSubPagesModule } from './demos/subpages/subheader-search-sub-pages.module';
import { SubheaderTier2WorkspaceComponent } from './demos/workspace/subheader-tier-2-workspace.component';
import { SubheaderTier2WorkspaceModule } from './demos/workspace/subheader-tier-2-workspace.module';
import { SubheaderSearchSubPagesComponent } from './demos/subpages/subheader-search-sub-pages.component';
import { SubheaderSearchAutocompleteComponent } from './demos/search-autocomplete/subheader-search-autocomplete.component';
import { SubheaderSearchAutocompleteModule } from './demos/search-autocomplete/subheader-search-autocomplete.module';

declare var require: any;
const DEMOS = {
  basic: {
    title: 'Basic Display',
    type: SubheaderBasicDisplayComponent,
    code: require('!!raw-loader!./demos/basic/subheader-basic-display.component'),
    module: require('!!raw-loader!./demos/basic/subheader-basic-display.module'),
    markup: require('!!raw-loader!./demos/basic/subheader-basic-display.component.html'),
    path: 'libs/documentation/src/lib/components/subheader/demos/basic',
  },
  dataentry: {
    title: 'Data Entry',
    type: SubheaderDataEntryComponent,
    code: require('!!raw-loader!./demos/dataentry/subheader-data-entry.component'),
    module: require('!!raw-loader!./demos/dataentry/subheader-data-entry.module'),
    markup: require('!!raw-loader!./demos/dataentry/subheader-data-entry.component.html'),
    path: 'libs/documentation/src/lib/components/subheader/demos/dataentry',
  },
  search: {
    title: 'Search',
    type: SubheaderSearchComponent,
    code: require('!!raw-loader!./demos/search/subheader-search.component'),
    module: require('!!raw-loader!./demos/search/subheader-search.module'),
    markup: require('!!raw-loader!./demos/search/subheader-search.component.html'),
    path:
      'libs/documentation/src/lib/components/subheader/demos/subheader-search',
  },
  searchautocomplete: {
    title: 'Search with Autocomplete',
    type: SubheaderSearchAutocompleteComponent,
    code: require('!!raw-loader!./demos/search-autocomplete/subheader-search-autocomplete.component'),
    module: require('!!raw-loader!./demos/search-autocomplete/subheader-search-autocomplete.module'),
    markup: require('!!raw-loader!./demos/search-autocomplete/subheader-search-autocomplete.component.html'),
    path:
      'libs/documentation/src/lib/components/subheader/demos/subheader-search',
  },
  subpages: {
    title: 'Search with Sub-Pages',
    type: SubheaderSearchSubPagesComponent,
    code: require('!!raw-loader!./demos/subpages/subheader-search-sub-pages.component'),
    module: require('!!raw-loader!./demos/subpages/subheader-search-sub-pages.module'),
    markup: require('!!raw-loader!./demos/subpages/subheader-search-sub-pages.component.html'),
    path: 'libs/documentation/src/lib/components/subheader/demos/subpages',
  },
  workspace: {
    title: 'Tier 2 Workspace',
    type: SubheaderTier2WorkspaceComponent,
    code: require('!!raw-loader!./demos/workspace/subheader-tier-2-workspace.component'),
    module: require('!!raw-loader!./demos/workspace/subheader-tier-2-workspace.module'),
    markup: require('!!raw-loader!./demos/workspace/subheader-tier-2-workspace.component.html'),
    path: 'libs/documentation/src/lib/components/subheader/demos/workspace',
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
          name: 'SdsSubheaderComponent',
        },
      ],
    },
    children: [
      { path: 'examples', component: DocumentationExamplesPage },
      { path: 'source', component: DocumentationSourcePage },
      { path: 'template', component: DocumentationTemplatePage },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    DocumentationComponentsSharedModule,
    SubheaderBasicDisplayModule,
    SubheaderDataEntryModule,
    SubheaderSearchModule,
    SubheaderSearchSubPagesModule,
    SubheaderTier2WorkspaceModule,
    SubheaderSearchAutocompleteModule,
  ],
})
export class SubHeaderModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('subheader', DEMOS);
  }
}
