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
import { BasicRichTextModule } from './demos/basic/basic-rich-text.module';
import { BasicRichTextComponent } from './demos/basic/basic-rich-text.component';


declare var require: any;
const DEMOS = {
  basic: {
    title: 'Rich Text',
    type: BasicRichTextComponent,
    code: require('!!raw-loader!./demos/basic/basic-rich-text.component'),
    module: require('!!raw-loader!./demos/basic/basic-rich-text.module'),
    markup: require('!!raw-loader!./demos/basic/basic-rich-text.component.html'),
    path: 'libs/documentation/src/lib/components/rich-text/demos/basic',
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
          name: 'SdsRichTextComponent',
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
    BasicRichTextModule
  ],
})
export class RichTextModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('rich-text', DEMOS);
  }
}
