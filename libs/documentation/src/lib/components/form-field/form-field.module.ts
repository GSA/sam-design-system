import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldBasic } from './demos/basic/form-field-basic.component';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import {
  DocumentationComponentsSharedModule,
  DocumentationDemoList
} from '../shared/index';
import { ComponentWrapperComponent } from '../../shared/component-wrapper/component-wrapper.component';
import { FormFieldBasicModule } from './demos/basic/form-field-basic.module';

const DEMOS = {
  formfield: {
    title: 'Basic Form Field',
    type: FormFieldBasic,
    code: require('!!raw-loader!./demos/basic/form-field-basic.component'),
    markup: require('!!raw-loader!./demos/basic/form-field-basic.component.html'),
    path: 'libs/documentation/src/lib/components/form-field/demos/basic'
  }
};

export const ROUTES = [
  { path: '', pathMatch: 'full', redirectTo: 'examples' },
  {
    path: '',
    component: ComponentWrapperComponent,
    data: {
      title: "Form Field",
      items: [
        {
          pkg: 'formly',
          wrappers: ['form-field'],
          component: 'FormlyWrapperFormFieldComponent'
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
    FormFieldBasicModule
  ]
})
export class FormFieldModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('form-field', DEMOS);
  }
}
