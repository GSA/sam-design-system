import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapseBasic } from './demos/basic/collapse-basic.component';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationComponentsSharedModule, DocumentationDemoList } from '../shared/index';
import { ComponentWrapperComponent } from '../../shared/component-wrapper/component-wrapper.component';
import { CollapseBasicModule } from './demos/basic/collapse-basic.module';
import { CollapseLinkToSbComponent } from './demos/collapse-link-to-sb/collapse-link-to-sb.component';
import { CollapseLinkToSbModule } from './demos/collapse-link-to-sb/collapse-link-to-sb.module';
import { Routes } from '@angular/router';

declare var require: any;
const DEMOS = {
  linkToSb: {
    title: 'New Demos',
    type: CollapseLinkToSbComponent,
    code: require('!!raw-loader!./demos/collapse-link-to-sb/collapse-link-to-sb.component'),
    module: require('!!raw-loader!./demos/collapse-link-to-sb/collapse-link-to-sb.module'),
    markup: require('!!raw-loader!./demos/collapse-link-to-sb/collapse-link-to-sb.component.html'),
    path: 'libs/documentation/src/lib/components/collapse/demos/collapse-link-to-sb',
  },
  basic: {
    title: 'Collapse',
    type: CollapseBasic,
    code: require('!!raw-loader!./demos/basic/collapse-basic.component'),
    module: require('!!raw-loader!./demos/basic/collapse-basic.module'),
    markup: require('!!raw-loader!./demos/basic/collapse-basic.component.html'),
    path: 'libs/documentation/src/lib/components/collapse/demos/basic',
  },
};

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'examples' },
  {
    path: '',
    component: ComponentWrapperComponent,
    data: {
      items: [
        {
          pkg: 'components',
          type: 'directives',
          name: 'CollapseDirective',
        },
      ],
    },
    children: [
      { path: 'examples', component: DocumentationExamplesPage },
      { path: 'api', component: DocumentationAPIPage },
      { path: 'source', component: DocumentationSourcePage },
    ],
  },
];

@NgModule({
  imports: [CommonModule, DocumentationComponentsSharedModule, CollapseBasicModule, CollapseLinkToSbModule],
})
export class CollapseModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('collapse', DEMOS);
  }
}
