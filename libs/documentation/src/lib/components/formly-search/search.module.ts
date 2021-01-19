import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBasic } from './demos/basic/search-basic.component';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import { DocumentationComponentsSharedModule, DocumentationDemoList } from '../shared/index';
import { ComponentWrapperComponent } from '../../shared/component-wrapper/component-wrapper.component';
import { SearchBasicModule } from './demos/basic/search-basic.module';
import { SearchOptionalModule } from './demos/optional/search-optional.module';
import { SearchOptional } from './demos/optional/search-optional.component';
import { SearchHandleSubmitModule } from './demos/submit/search-handle-submit.module';
import { SearchHandleSubmit } from './demos/submit/search-handle-submit.component';

declare var require: any;
const DEMOS = {
  basic: {
    title: 'Basic Form Search',
    type: SearchBasic,
    code: require('!!raw-loader!./demos/basic/search-basic.component'),
    markup: require('!!raw-loader!./demos/basic/search-basic.component.html'),
    path: 'libs/documentation/src/lib/components/formly-search/demos/basic'
  },
  optional: {
    title: 'Optional Form Search',
    type: SearchOptional,
    code: require('!!raw-loader!./demos/optional/search-optional.component'),
    markup: require('!!raw-loader!./demos/optional/search-optional.component.html'),
    path: 'libs/documentation/src/lib/components/formly-search/demos/optional'
  },
  handleSubmit: {
    title: 'Handling Submit',
    type: SearchHandleSubmit,
    code: require('!!raw-loader!./demos/submit/search-handle-submit.component'),
    markup: require('!!raw-loader!./demos/submit/search-handle-submit.component.html'),
    path: 'libs/documentation/src/lib/components/formly-search/demos/submit'
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
          name: 'FormlyFieldSearchComponent',
          formType: 'search'
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
    SearchBasicModule,
    SearchOptionalModule,
    SearchHandleSubmitModule
  ]
})
export class FormlySearchModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('formly-search', DEMOS);
  }
}
