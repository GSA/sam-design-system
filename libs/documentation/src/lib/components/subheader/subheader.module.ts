import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubHeaderBasic } from './demos/basic/subheader-basic.component';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import {
  DocumentationComponentsSharedModule,
  DocumentationDemoList
} from './../shared/index';
import { ComponentWrapperComponent } from './../../shared/component-wrapper/component-wrapper.component';
import { SubHeaderBasicModule } from './demos/basic/subheader-basic.module';
import { TitleActions } from './demos/title-actions/title-actions.component';
import { TitleActionsModule } from './demos/title-actions/title-actions.module';
import { TitleButtonsActions } from './demos/title-buttons-actions/title-buttons-actions.component';
import { TitleButtonsActionsModule } from './demos/title-buttons-actions/title-buttons-actions.module';
import { TitleSearchActions } from './demos/title-search-actions/title-search-actions.component';
import { TitleSearchActionsModule } from './demos/title-search-actions/title-search-actions.module';
import { TitleSearchButtonGroupActions } from './demos/title-search-buttongroup-actions/title-search-buttongroup-actions.component';
import { TitleSearchButtonGroupActionsModule } from './demos/title-search-buttongroup-actions/title-search-buttongroup-actions.module';

declare var require: any;
const DEMOS = {
  // basic: {
  //   title: 'SAM Subheader',
  //   type: SubHeaderBasic,
  //   code: require('!!raw-loader!./demos/basic/subheader-basic.component'),
  //   markup: require('!!raw-loader!./demos/basic/subheader-basic.component.html'),
  //   path: 'libs/documentation/src/lib/components/subheader/demos/basic'
  // },
  titleActions: {
    title: 'Title Actions',
    type: TitleActions,
    code: require('!!raw-loader!./demos/title-actions/title-actions.component'),
    markup: require('!!raw-loader!./demos/title-actions/title-actions.component.html'),
    path: 'libs/documentation/src/lib/components/subheader/demos/title-actions'
  },
  titleButtonsActions: {
    title: 'Title Buttons Actions',
    type: TitleButtonsActions,
    code: require('!!raw-loader!./demos/title-buttons-actions/title-buttons-actions.component'),
    markup: require('!!raw-loader!./demos/title-buttons-actions/title-buttons-actions.component.html'),
    path: 'libs/documentation/src/lib/components/subheader/demos/title-buttons-actions'
  },
  titleSearchActions: {
    title: 'Title Search Actions',
    type: TitleSearchActions,
    code: require('!!raw-loader!./demos/title-search-actions/title-search-actions.component'),
    markup: require('!!raw-loader!./demos/title-search-actions/title-search-actions.component.html'),
    path: 'libs/documentation/src/lib/components/subheader/demos/title-search-actions'
  },
  titleSearchButtonGroupActions: {
    title: 'Title Search ButtonGroupActions',
    type: TitleSearchButtonGroupActions,
    code: require('!!raw-loader!./demos/title-search-buttongroup-actions/title-search-buttongroup-actions.component'),
    markup: require('!!raw-loader!./demos/title-search-buttongroup-actions/title-search-buttongroup-actions.component.html'),
    path: 'libs/documentation/src/lib/components/subheader/demos/title-search-buttongroup-actions'
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
    SubHeaderBasicModule,
    TitleActionsModule,
    TitleButtonsActionsModule,
    TitleSearchActionsModule,
    TitleSearchButtonGroupActionsModule
  ]
})
export class SubHeaderModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('subheader', DEMOS);
  }
}
