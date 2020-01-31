import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputBasic } from './demos/basic/input-basic.component';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import { DocumentationComponentsSharedModule, DocumentationDemoList } from './../shared/index';
import { ComponentWrapperComponent } from './../../shared/component-wrapper/component-wrapper.component';
import { InputBasicModule } from './demos/basic/input-basic.module';

const DEMOS = {
  basic: {
    title: 'Input',
    type: InputBasic,
    code: require('!!raw-loader!./demos/basic/input-basic.component').default,
    markup: require('!!raw-loader!./demos/basic/input-basic.component.html').default
  }
};

export const ROUTES = [
  { path: '', pathMatch: 'full', redirectTo: 'examples' },
  {
    path: '',
    data: { package: 'formly', component: 'FormlyFieldInputComponent' },
    component: ComponentWrapperComponent,
    children: [
      { path: 'examples', component: DocumentationExamplesPage },
      { path: 'api', component: DocumentationAPIPage },
      { path: 'source', component: DocumentationSourcePage },
      { path: 'template', component: DocumentationTemplatePage },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    DocumentationComponentsSharedModule,
    InputBasicModule
  ]
})
export class InputModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('input', DEMOS);
  }
}
