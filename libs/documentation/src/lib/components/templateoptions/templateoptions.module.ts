import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateOptionsBasic } from './demos/basic/templateoptions-basic.component';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import {
  DocumentationComponentsSharedModule,
  DocumentationDemoList
} from '../shared/index';
import { ComponentWrapperComponent } from '../../shared/component-wrapper/component-wrapper.component';
import { TemplateOptionsBasicModule } from './demos/basic/templateoptions-basic.module';

declare var require: any;
const DEMOS = {
  templateOption: {
    title: 'Template Options',
    type: TemplateOptionsBasic,
    code: require('!!raw-loader!./demos/basic/templateoptions-basic.component'),
    markup: require('!!raw-loader!./demos/basic/templateoptions-basic.component.html'),
    path: 'libs/documentation/src/lib/components/templateoptions/demos/basic'
  }
};

export const ROUTES = [
  { path: '', pathMatch: 'full', redirectTo: 'examples' },
  {
    path: '',
    component: ComponentWrapperComponent,
    data: {
      title: 'Template Options',
      items: [
        {
          pkg: 'formly',
          type: 'components',
          name: 'FormlyLabelWrapperComponent',
          wrappers: ['templateoptions']
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
    TemplateOptionsBasicModule
  ]
})
export class TemplateOptionsModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('templateoptions', DEMOS);
  }
}
