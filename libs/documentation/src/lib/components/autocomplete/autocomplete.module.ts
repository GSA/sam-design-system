import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import { DocumentationComponentsSharedModule, DocumentationDemoList } from '../shared/index';
import { ComponentWrapperComponent } from '../../shared/component-wrapper/component-wrapper.component';
import { AutocompleteRedirectModule } from './demos/redirect/autocomplete-redirect.module';
import { AutocompleteRedirect } from './demos/redirect/autocomplete-redirect.component';

declare var require: any;
const DEMOS = {
  redirect: {
    title: 'New Documentation',
    type: AutocompleteRedirect,
    code: require('!!raw-loader!./demos/redirect/autocomplete-redirect.component'),
    markup: require('!!raw-loader!./demos/redirect/autocomplete-redirect.component.html'),
    module: require('!!raw-loader!./demos/redirect/autocomplete-redirect.module'),
    path: 'libs/documentation/src/lib/components/autocomplete/demos/redirect',
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
          name: 'SDSAutocompleteComponent',
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
    AutocompleteRedirectModule
  ],
})
export class AutocompleteModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('autocomplete', DEMOS);
  }
}
