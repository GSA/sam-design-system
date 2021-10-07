import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import {
  DocumentationComponentsSharedModule,
  DocumentationDemoList,
} from '../shared/index';
import { ComponentWrapperComponent } from '../../shared/component-wrapper/component-wrapper.component';
import { EditorBasicModule } from './demos/basic/formly-editor-basic.module';
import { EditorBasic } from './demos/basic/formly-editor-basic.component';

declare var require: any;
const DEMOS = {
  basic: {
    title: 'Editor',
    type: EditorBasic,
    code: require('!!raw-loader!./demos/basic/formly-editor-basic.component'),
    module: require('!!raw-loader!./demos/basic/formly-editor-basic.module'),
    markup: require('!!raw-loader!./demos/basic/formly-editor-basic.component.html'),
    path: 'libs/documentation/src/lib/components/formly-editor/demos/basic',
  },
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
          name: 'SdsEditorComponent',
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
  imports: [CommonModule, DocumentationComponentsSharedModule, EditorBasicModule],
})
export class EditorModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('editor', DEMOS);
  }
}
