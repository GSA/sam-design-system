import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersBasic } from './demos/basic/filters-basic.component';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import {
  DocumentationComponentsSharedModule,
  DocumentationDemoList
} from '../shared/index';
import { ComponentWrapperComponent } from '../../shared/component-wrapper/component-wrapper.component';
import { FiltersBasicModule } from './demos/basic/filters-basic.module';
import { FiltersOptional } from './demos/optional/filters-optional.component';
import { FiltersOptionalModule } from './demos/optional/filters-optional.module';
import { FiltersConfig } from './demos/config/filter-config.component';
import { FiltersConfigModule } from './demos/config/filter-config.module';
import { FiltersHideExpressionModule } from './demos/hideexpression/filters-hideexpression.module';
import { FiltersHideExpression } from './demos/hideexpression/filters-hideexpression.component';
import { FiltersShowInactiveFilterValues } from './demos/showInactiveFilterValues/filters-showInactiveFilterValues.component';
import { FiltersShowInactiveFilterValuesModule } from './demos/showInactiveFilterValues/filters-showInactiveFilterValues.module';

declare var require: any;
const DEMOS = {
  basic: {
    title: 'Basic Filters',
    type: FiltersBasic,
    code: require('!!raw-loader!./demos/basic/filters-basic.component'),
    markup: require('!!raw-loader!./demos/basic/filters-basic.component.html'),
    path: 'libs/documentation/src/lib/components/filters/demos/basic'
  },
  optional: {
    title: 'Optional Filters',
    type: FiltersOptional,
    code: require('!!raw-loader!./demos/optional/filters-optional.component'),
    markup: require('!!raw-loader!./demos/optional/filters-optional.component.html'),
    path: 'libs/documentation/src/lib/components/filters/demos/optional'
  },
  hideexpression: {
    title: 'Filters Hide expression',
    type: FiltersHideExpression,
    code: require('!!raw-loader!./demos/hideexpression/filters-hideexpression.component'),
    markup: require('!!raw-loader!./demos/hideexpression/filters-hideexpression.component.html'),
    path: 'libs/documentation/src/lib/components/filters/demos/hideexpression'
  },
  showInactiveFilterValues: {
    title: 'Show Inactive Filter Value',
    type: FiltersShowInactiveFilterValues,
    code: require('!!raw-loader!./demos/showInactiveFilterValues/filters-showInactiveFilterValues.component'),
    markup: require('!!raw-loader!./demos/showInactiveFilterValues/filters-showInactiveFilterValues.component.html'),
    path: 'libs/documentation/src/lib/components/filters/demos/showInactiveFilterValues'
  },
  config: {
    title: 'Filters with different field config',
    type: FiltersConfig,
    code: require('!!raw-loader!./demos/config/filter-config.component'),
    markup: require('!!raw-loader!./demos/config/filter-config.component.html'),
    path: 'libs/documentation/src/lib/components/filters/demos/config'
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
          pkg: 'formly',
          type: 'components',
          name: 'SdsFiltersComponent'
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
    FiltersBasicModule,
    FiltersOptionalModule,
    FiltersConfigModule,
    FiltersHideExpressionModule,
    FiltersShowInactiveFilterValuesModule
  ]
})
export class FiltersModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('filters', DEMOS);
  }
}
