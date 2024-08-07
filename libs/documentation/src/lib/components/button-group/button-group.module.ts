import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import { DocumentationComponentsSharedModule, DocumentationDemoList } from './../shared/index';
import { ComponentWrapperComponent } from './../../shared/component-wrapper/component-wrapper.component';
import { ButtonGroupBasic } from './demos/button-group-basic/button-group-basic.component';
import { ButtonGroupBasicModule } from './demos/button-group-basic/button-group-basic.module';
import { ButtonGroupDifferingLengths } from './demos/differinglengths/button-group-differing-lengths.component';
import { ButtonGroupDifferingLengthsModule } from './demos/differinglengths/button-group-differing-lengths.module';
import { ButtonGroupLinkToSbComponent } from './demos/button-group-link-to-sb/button-group-link-to-sb.component';
import { ButtonGroupLinkToSbModule } from './demos/button-group-link-to-sb/button-group-link-to-sb.module';
import { Routes } from '@angular/router';

declare var require: any;
const DEMOS = {
  linkToStackblitz: {
    title: 'New Demos',
    type: ButtonGroupLinkToSbComponent,
    code: require('!!raw-loader!./demos/button-group-link-to-sb/button-group-link-to-sb.component'),
    markup: require('!!raw-loader!./demos/button-group-link-to-sb/button-group-link-to-sb.component.html'),
    module: require('!!raw-loader!./demos/button-group-link-to-sb/button-group-link-to-sb.module'),
    path: 'libs/documentation/src/lib/components/button-group/demos/button-group-link-to-sb',
  },
  basic: {
    title: 'Button Groups',
    type: ButtonGroupBasic,
    code: require('!!raw-loader!./demos/button-group-basic/button-group-basic.component'),
    markup: require('!!raw-loader!./demos/button-group-basic/button-group-basic.component.html'),
    module: require('!!raw-loader!./demos/button-group-basic/button-group-basic.module'),
    path: 'libs/documentation/src/lib/components/button-group/demos/button-group-basic',
  },
  differinglengths: {
    title: 'Differing Lengths',
    type: ButtonGroupDifferingLengths,
    code: require('!!raw-loader!./demos/differinglengths/button-group-differing-lengths.component'),
    module: require('!!raw-loader!./demos/differinglengths/button-group-differing-lengths.module'),
    markup: require('!!raw-loader!./demos/differinglengths/button-group-differing-lengths.component.html'),
    path: 'libs/documentation/src/lib/components/button-group/demos/differinglengths',
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
          pkg: 'material',
          type: 'components',
          name: 'SdsButtonGroupComponent',
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
    ButtonGroupBasicModule,
    ButtonGroupDifferingLengthsModule,
    ButtonGroupLinkToSbModule,
  ],
})
export class ButtonGroupModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('button-group', DEMOS);
  }
}
