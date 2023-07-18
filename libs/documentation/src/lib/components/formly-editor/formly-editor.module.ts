import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import { DocumentationComponentsSharedModule, DocumentationDemoList } from '../shared/index';
import { ComponentWrapperComponent } from '../../shared/component-wrapper/component-wrapper.component';
import { EditorBasicModule } from './demos/basic/formly-editor-basic.module';
import { EditorBasic } from './demos/basic/formly-editor-basic.component';
import { EditorOptional } from './demos/optional/formly-editor-optional.component';
import { EditorOptionalModule } from './demos/optional/formly-editor-optional.module';
import { Routes } from '@angular/router';

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
  optional: {
    title: 'Editor-Update on blur',
    type: EditorOptional,
    code: require('!!raw-loader!./demos/optional/formly-editor-optional.component'),
    module: require('!!raw-loader!./demos/optional/formly-editor-optional.module'),
    markup: require('!!raw-loader!./demos/optional/formly-editor-optional.component.html'),
    path: 'libs/documentation/src/lib/components/formly-editor/demos/optional',
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
  imports: [CommonModule, DocumentationComponentsSharedModule, EditorBasicModule, EditorOptionalModule],
})
export class EditorModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('editor', DEMOS);
  }
}
