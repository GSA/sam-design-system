import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavigationBasic } from './demos/basic/sidenavigation-basic.component';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import {
  DocumentationComponentsSharedModule,
  DocumentationDemoList
} from '../shared/index';
import { ComponentWrapperComponent } from '../../shared/component-wrapper/component-wrapper.component';
import { SideNavigationBasicModule } from './demos/basic/sidenavigation-basic.module';

declare var require: any;
const DEMOS = {
  basic: {
    title: 'SAM Side Navigation',
    type: SideNavigationBasic,
    code: require('!!raw-loader!./demos/basic/sidenavigation-basic.component'),
    markup: require('!!raw-loader!./demos/basic/sidenavigation-basic.component.html'),
    path: 'libs/documentation/src/lib/components/sidenavigation/demos/basic'
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
          name: 'SdsSideNavigationComponent'
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
    SideNavigationBasicModule
  ]
})
export class SideNavigationModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('sidenavigation', DEMOS);
  }
}
