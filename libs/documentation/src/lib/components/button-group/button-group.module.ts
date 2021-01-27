import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import {
  DocumentationComponentsSharedModule,
  DocumentationDemoList
} from './../shared/index';
import { ComponentWrapperComponent } from './../../shared/component-wrapper/component-wrapper.component';
import { ButtonGroupBasic } from './demos/basic/button-group-basic.component';
import { ButtonGroupBasicModule } from './demos/basic/button-group-basic.module';
import { ButtonGroupDifferingLengths } from './demos/differinglengths/button-group-differing-lengths.component';
import { ButtonGroupDifferingLengthsModule } from './demos/differinglengths/button-group-differing-lengths.module';

declare var require: any;
const DEMOS = {
  basic: {
    title: 'Button Groups',
    type: ButtonGroupBasic,
    code: require('!!raw-loader!./demos/basic/button-group-basic.component'),
    markup: require('!!raw-loader!./demos/basic/button-group-basic.component.html'),
    path: 'libs/documentation/src/lib/components/button-group/demos/basic'
  },
  differinglengths: {
    title: 'Differing Lengths',
    type: ButtonGroupDifferingLengths,
    code: require('!!raw-loader!./demos/differinglengths/button-group-differing-lengths.component'),
    markup: require('!!raw-loader!./demos/differinglengths/button-group-differing-lengths.component.html'),
    path: 'libs/documentation/src/lib/components/button-group/demos/differinglengths'
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
          pkg: 'material',
          type: 'components',
          name: 'SdsButtonGroupComponent'
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
    ButtonGroupBasicModule,
    ButtonGroupDifferingLengthsModule
  ]
})
export class ButtonGroupModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('button-group', DEMOS);
  }
}
