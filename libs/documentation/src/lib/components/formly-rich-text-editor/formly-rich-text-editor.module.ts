import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import { DocumentationComponentsSharedModule, DocumentationDemoList } from '../shared/index';
import { ComponentWrapperComponent } from '../../shared/component-wrapper/component-wrapper.component';
import { FormlyRichTextEditorComponent } from './formly-rich-text-editor.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';

declare var require: any;
const DEMOS = {
  basic: {
    title: 'Basic Form Rich Text Editor',
    type: FormlyRichTextEditorComponent,
    code: require('!!raw-loader!./formly-rich-text-editor.component'),
    markup: require('!!raw-loader!./formly-rich-text-editor.component.html'),
    path: 'libs/documentation/src/lib/components/formly-rich-text-editor'
  },
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
          name: 'FormlyRichTextEditorComponent',
          formType: 'rich-text-editor'
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
  declarations: [FormlyRichTextEditorComponent],
  imports: [
    CommonModule,
    DocumentationComponentsSharedModule,
    ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()
  ],
  exports: [FormlyRichTextEditorComponent]
})
export class FormlyRichTextEditorModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('formly-rich-text-editor', DEMOS);
  }
}
