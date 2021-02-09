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
import { SideNavigationOptionalModule } from './demos/optional/sidenavigation-optional.module';
import { SideNavigationOptional } from './demos/optional/sidenavigation-optional.component';

declare var require: any;
const DEMOS = {
  optional: {
    title: 'Side Navigation',
    type: SideNavigationOptional,
    code: require('!!raw-loader!./demos/optional/sidenavigation-optional.component'),
    module: require('!!raw-loader!./demos/optional/sidenavigation-optional.module'),
    markup: require('!!raw-loader!./demos/optional/sidenavigation-optional.component.html'),
    path: 'libs/documentation/src/lib/components/sidenavigation/demos/optional',
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
    SideNavigationOptionalModule,
  ],
})
export class SideNavigationModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('sidenavigation', DEMOS);
  }
}
