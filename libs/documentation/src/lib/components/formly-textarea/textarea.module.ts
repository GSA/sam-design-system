import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextAreaBasic } from './demos/basic/textarea-basic.component';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import { DocumentationComponentsSharedModule, DocumentationDemoList } from '../shared/index';
import { ComponentWrapperComponent } from '../../shared/component-wrapper/component-wrapper.component';
import { TextAreaBasicModule } from './demos/basic/textarea-basic.module';

declare var require: any;
const DEMOS = {
  basic: {
    title: 'Basic Form Text Area',
    type: TextAreaBasic,
    code: require('!!raw-loader!./demos/basic/textarea-basic.component'),
    markup: require('!!raw-loader!./demos/basic/textarea-basic.component.html'),
    path: 'libs/documentation/src/lib/components/formly-textarea/demos/basic'
  }
};

export const ROUTES = [
  { path: '', pathMatch: 'full', redirectTo: 'examples' },
  {
    path: '',
    data: {
      items: [
        {
          pkg: 'formly',
          type: 'components',
          name: 'FormlyFieldTextAreaComponent',
          formType: 'textarea'
        }
      ]
    },
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
    TextAreaBasicModule
  ]
})
export class TextAreaModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('formly-textarea', DEMOS);
  }
}
