import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectBasic } from './demos/basic/select-basic.component';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import { DocumentationComponentsSharedModule, DocumentationDemoList } from '../shared/index';
import { ComponentWrapperComponent } from '../../shared/component-wrapper/component-wrapper.component';
import { SelectBasicModule } from './demos/basic/select-basic.module';

declare var require: any;
const DEMOS = {
  basic: {
    title: 'Basic Form Select',
    type: SelectBasic,
    code: require('!!raw-loader!./demos/basic/select-basic.component'),
    markup: require('!!raw-loader!./demos/basic/select-basic.component.html'),
    path: 'libs/documentation/src/lib/components/formly-select/demos/basic'
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
          name: 'FormlyFieldSelectComponent',
          formType: 'select'
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
    SelectBasicModule
  ]
})
export class SelectModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('formly-select', DEMOS);
  }
}
