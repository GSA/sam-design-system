import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBasic } from './demos/basic/header-basic.component';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import {
  DocumentationComponentsSharedModule,
  DocumentationDemoList
} from './../shared/index';
import { ComponentWrapperComponent } from './../../shared/component-wrapper/component-wrapper.component';
import { HeaderBasicModule } from './demos/basic/header-basic.module';
import { HeaderHiddenLogoComponent } from './demos/header-hidden-logo/header-hidden-logo.component';
import { SdsHeaderModule } from '@gsa-sam/layouts';

export declare var require: any;

const DEMOS = {
  basic: {
    title: 'SAM Header',
    type: HeaderBasic,
    code: require('!!raw-loader!./demos/basic/header-basic.component'),
    markup: require('!!raw-loader!./demos/basic/header-basic.component.html'),
    readme: require('!!raw-loader!./demos/basic/readme.md'),
    path: 'libs/documentation/src/lib/components/header/demos/basic'
  },
  hiddenLogo: {
    title: 'SAM Header - Blank SAM Logo',
    type: HeaderHiddenLogoComponent,
    code: require('!!raw-loader!./demos/header-hidden-logo/header-hidden-logo.component'),
    markup: require('!!raw-loader!./demos/header-hidden-logo/header-hidden-logo.component.html'),
    path: 'libs/documentation/src/lib/components/header/demos/header-hidden-logo'
  }
};

export const ROUTES = [
  { path: '', pathMatch: 'full', redirectTo: 'examples' },
  {
    path: '',
    component: ComponentWrapperComponent,
    data: {
      readme: {
      },
      items: [
        {
          pkg: 'layouts',
          type: 'components',
          name: 'SdsHeaderComponent'
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
    SdsHeaderModule,
    HeaderBasicModule
  ],
  declarations: [HeaderHiddenLogoComponent],
  entryComponents: [HeaderHiddenLogoComponent],
})
export class HeaderModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('header', DEMOS);
  }
}
