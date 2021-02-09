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
import { FiltersOptional } from './demos/optional/filters-optional.component';
import { FiltersOptionalModule } from './demos/optional/filters-optional.module';
import { FiltersHideExpressionModule } from './demos/hideexpression/filters-hideexpression.module';
import { FiltersHideExpression } from './demos/hideexpression/filters-hideexpression.component';
import { FiltersShowInactiveFilterValues } from './demos/showInactiveFilterValues/filters-showInactiveFilterValues.component';
import { FiltersShowInactiveFilterValuesModule } from './demos/showInactiveFilterValues/filters-showInactiveFilterValues.module';
import { FiltersGroupPanel } from './demos/group-panel/filters-group-panel.component';
import { FiltersGroupPanelModule } from './demos/group-panel/filters-group-panel.module';

declare var require: any;
const DEMOS = {
  groupPanel: {
    title: 'Filters with Panel Group',
    type: FiltersGroupPanel,
    code: require('!!raw-loader!./demos/group-panel/filters-group-panel.component'),
    markup: require('!!raw-loader!./demos/group-panel/filters-group-panel.component.html'),
    module: require('!!raw-loader!./demos/group-panel/filters-group-panel.module'),
    path: 'libs/documentation/src/lib/components/filters/demos/group-panel',
  },
  optional: {
    title: 'Filters with Accordion Group',
    type: FiltersOptional,
    code: require('!!raw-loader!./demos/optional/filters-optional.component'),
    markup: require('!!raw-loader!./demos/optional/filters-optional.component.html'),
    module: require('!!raw-loader!./demos/optional/filters-optional.module'),
    path: 'libs/documentation/src/lib/components/filters/demos/optional',
  },
  hideexpression: {
    title: 'Filters Hide expression',
    type: FiltersHideExpression,
    code: require('!!raw-loader!./demos/hideexpression/filters-hideexpression.component'),
    markup: require('!!raw-loader!./demos/hideexpression/filters-hideexpression.component.html'),
    module: require('!!raw-loader!./demos/hideexpression/filters-hideexpression.module'),
    path: 'libs/documentation/src/lib/components/filters/demos/hideexpression',
  },
  showInactiveFilterValues: {
    title: 'Show Inactive Filter Value',
    type: FiltersShowInactiveFilterValues,
    code: require('!!raw-loader!./demos/showInactiveFilterValues/filters-showInactiveFilterValues.component'),
    markup: require('!!raw-loader!./demos/showInactiveFilterValues/filters-showInactiveFilterValues.component.html'),
    module: require('!!raw-loader!./demos/showInactiveFilterValues/filters-showInactiveFilterValues.module'),
    path:
      'libs/documentation/src/lib/components/filters/demos/showInactiveFilterValues',
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
          pkg: 'formly',
          type: 'components',
          name: 'SdsFiltersComponent',
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
    FiltersOptionalModule,
    FiltersHideExpressionModule,
    FiltersGroupPanelModule,
    FiltersShowInactiveFilterValuesModule,
  ],
})
export class FiltersModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('filters', DEMOS);
  }
}
