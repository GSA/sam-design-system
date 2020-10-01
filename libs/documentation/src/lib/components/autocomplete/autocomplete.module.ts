import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import {
  DocumentationComponentsSharedModule,
  DocumentationDemoList
} from '../shared/index';
import { ComponentWrapperComponent } from '../../shared/component-wrapper/component-wrapper.component';
import { AutocompleteBasicModule } from './demos/basic/autocomplete-basic.module';
import { AutocompleteBasic } from './demos/basic/autocomplete-basic.component';
import { AutocompleteOptional } from './demos/optional/autocomplete-optional.component';
import { AutocompleteOptionalModule } from './demos/optional/autocomplete-optional.module';

declare var require: any;
const DEMOS = {
  basic: {
    title: 'Basic Autocomplete',
    type: AutocompleteBasic,
    code: require('!!raw-loader!./demos/basic/autocomplete-basic.component'),
    markup: require('!!raw-loader!./demos/basic/autocomplete-basic.component.html'),
    path: 'libs/documentation/src/lib/components/autocomplete/demos/basic'
  },
  optional: {
    title: 'Optional Autocomplete',
    type: AutocompleteOptional,
    code: require('!!raw-loader!./demos/optional/autocomplete-optional.component'),
    markup: require('!!raw-loader!./demos/optional/autocomplete-optional.component.html'),
    path: 'libs/documentation/src/lib/components/autocomplete/demos/optional'
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
          pkg: 'components',
          type: 'components',
          name: 'SDSAutocompleteComponent'
        }
      ]
    },
    children: [
      { path: 'examples', component: DocumentationExamplesPage },
      { path: 'api', component: DocumentationAPIPage },
      { path: 'source', component: DocumentationSourcePage },
      { path: 'template', component: DocumentationTemplatePage }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    DocumentationComponentsSharedModule,
    AutocompleteBasicModule,
    AutocompleteOptionalModule
  ]
})
export class AutocompleteModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('autocomplete', DEMOS);
  }
}
