import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationWrapperBasic } from './demos/basic/validationwrapper-basic.component';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import {
  DocumentationComponentsSharedModule,
  DocumentationDemoList
} from '../shared/index';
import { ComponentWrapperComponent } from '../../shared/component-wrapper/component-wrapper.component';
import { ValidationWrapperBasicModule } from './demos/basic/validationwrapper-basic.module';

declare var require: any;
const DEMOS = {
  basic: {
    title: 'Validation Wrapper',
    type: ValidationWrapperBasic,
    code: require('!!raw-loader!./demos/basic/validationwrapper-basic.component'),
    markup: require('!!raw-loader!./demos/basic/validationwrapper-basic.component.html'),
    path: 'libs/documentation/src/lib/components/validationwrapper/demos/basic'
  }
};

export const ROUTES = [
  { path: '', pathMatch: 'full', redirectTo: 'examples' },
  {
    path: '',
    component: ComponentWrapperComponent,
    data: {
      title: "Validation Wrapper",
      items: [
        {
          pkg: 'formly',
          type: 'components',
          name: 'FormlyValidationWrapperComponent',
          wrappers: ['validation']
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
    ValidationWrapperBasicModule
  ]
})
export class ValidationWrapperModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('validationwrapper', DEMOS);
  }
}
