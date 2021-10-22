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
import { SdsSubheaderWrapperRequestComponent } from './demos/request/sds-subheader-wrapper-request.component';
import { SdsSubheaderRequestModule } from './demos/request/sds-subheader-wrapper-request.module';
import { SdsSubheaderWrapperSubmitComponent } from './demos/submit/sds-subheader-wrapper-submit.component';
import { SdsSubheaderSubmitModule } from './demos/submit/sds-subheader-wrapper-submit.module';
import { SdsSubheaderWrapperTabComponent } from './demos/tabs/sds-subheader-wrapper-tabs.component';
import { SdsSubheaderTabModule } from './demos/tabs/sds-subheader-wrapper-tabs.module';

import { SdsSubheaderWrapperSearchWrapperComponent } from './demos/search-wrapper/sds-subheader-wrapper-search-wrapper.component';
import { SdsSubheaderSearchWrapperModule } from './demos/search-wrapper/sds-subheader-wrapper-search-wrapper.module';


import { SdsSubheaderWrapperSearchWrapperDropdownComponent } from './demos/search-wrapper-dropdown/sds-subheader-wrapper-search-wrapper.component';
import { SdsSubheaderSearchWrapperDropdownModule } from './demos/search-wrapper-dropdown/sds-subheader-wrapper-search-wrapper.module';




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
  request: {
    title: 'Request',
    type: SdsSubheaderWrapperRequestComponent,
    code: require('!!raw-loader!./demos/request/sds-subheader-wrapper-request.component'),
    module: require('!!raw-loader!./demos/request/sds-subheader-wrapper-request.module'),
    markup: require('!!raw-loader!./demos/request/sds-subheader-wrapper-request.component.html'),
    path: 'libs/documentation/src/lib/components/subheader/demos/request',
  },

  submit: {
    title: 'Submit',
    type: SdsSubheaderWrapperSubmitComponent,
    code: require('!!raw-loader!./demos/submit/sds-subheader-wrapper-submit.component'),
    module: require('!!raw-loader!./demos/submit/sds-subheader-wrapper-submit.module'),
    markup: require('!!raw-loader!./demos/submit/sds-subheader-wrapper-submit.component.html'),
    path: 'libs/documentation/src/lib/components/subheader/demos/submit',
  },

  tab: {
    title: 'Tab',
    type: SdsSubheaderWrapperTabComponent,
    code: require('!!raw-loader!./demos/tabs/sds-subheader-wrapper-tabs.component'),
    module: require('!!raw-loader!./demos/tabs/sds-subheader-wrapper-tabs.module'),
    markup: require('!!raw-loader!./demos/tabs/sds-subheader-wrapper-tabs.component.html'),
    path: 'libs/documentation/src/lib/components/subheader/demos/tabs',
  },
  searchWrapper: {
    title: 'Search',
    type: SdsSubheaderWrapperSearchWrapperComponent,
    code: require('!!raw-loader!./demos/search-wrapper/sds-subheader-wrapper-search-wrapper.component'),
    module: require('!!raw-loader!./demos/search-wrapper/sds-subheader-wrapper-search-wrapper.module'),
    markup: require('!!raw-loader!./demos/search-wrapper/sds-subheader-wrapper-search-wrapper.component.html'),
    path: 'libs/documentation/src/lib/components/subheader/demos/search-wrapper',
  },
  searchWrapperDropdown: {
    title: 'Search Dropdown',
    type: SdsSubheaderWrapperSearchWrapperDropdownComponent,
    code: require('!!raw-loader!./demos/search-wrapper-dropdown/sds-subheader-wrapper-search-wrapper.component'),
    module: require('!!raw-loader!./demos/search-wrapper-dropdown/sds-subheader-wrapper-search-wrapper.module'),
    markup: require('!!raw-loader!./demos/search-wrapper-dropdown/sds-subheader-wrapper-search-wrapper.component.html'),
    path: 'libs/documentation/src/lib/components/subheader/demos/search-wrapper-dropdown',
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
          pkg: 'layouts',
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
    SdsSubheaderRequestModule,
    SdsSubheaderSubmitModule,
    SdsSubheaderTabModule,
    SdsSubheaderSearchWrapperModule,
    SdsSubheaderSearchWrapperDropdownModule
  ],
})
export class SubHeaderModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('subheader', DEMOS);
  }
}
